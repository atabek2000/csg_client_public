// import jwt_decode from "jwt-decode";

import { message } from "ant-design-vue";

export default () => {
  const runtimeConfig = useRuntimeConfig();
  const router = useRouter();

  const { stopLoading } = useLoader();

  const useAccessToken = () =>
    useState("access_token", () => localStorage.getItem("access_token"));
  const useRefreshToken = () =>
    useState("refresh_token", () => localStorage.getItem("refresh_token"));
  const useAuthUser = () =>
    useState("auth_user", () => localStorage.getItem("auth_user"));
  const useAuthLoading = () => useState("auth_loading", () => false);
  const useAuthExist = () => useState("auth_exist", () => false);

  const setAccessToken = (newAccess) => {
    const authToken = useAccessToken();
    authToken.value = newAccess;
    localStorage.setItem("access_token", newAccess);
  };

  const setRefreshToken = (newRefresh) => {
    const authToken = useRefreshToken();
    authToken.value = newRefresh;
    localStorage.setItem("refresh_token", newRefresh);
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
    localStorage.setItem("auth_user", JSON.stringify(newUser));
  };

  const setIsAuthLoading = (value) => {
    const authLoading = useAuthLoading();
    authLoading.value = value;
  };

  const setAuthExist = (value) => {
    const authExist = useAuthExist();
    authExist.value = value;
  };

  const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { update: sessionUpdate } = await useSession();

        const user = await useFetchApi("users/me/");
        setUser(user);
        await sessionUpdate({ userId: user.id });
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  };

  // обновить токен
  const refreshJWT = () => {
    return new Promise(async (resolve, reject) => {
      try {
        if (localStorage.refresh_token) {
          const tokens = await $fetch(
            runtimeConfig.public.API_URL + "auth/jwt/refresh/",
            {
              method: "POST",
              body: {
                refresh: localStorage.refresh_token,
              },
            }
          ).catch(() => {
            resolve(false);
          });

          setAccessToken(tokens.access);
          setRefreshToken(tokens.refresh);
          await fetchUser();
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (e) {
        reject(e);
      }
    });
  };

  // проверка токена
  const checkJWT = async () => {
    if (localStorage.access_token) {
      let verified = true;
      await $fetch(runtimeConfig.public.API_URL + "auth/jwt/verify/", {
        method: "POST",
        body: {
          token: localStorage.access_token,
        },
      }).catch(() => {
        verified = false;
      });
      return verified;
    } else {
      return false;
    }
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true);
      try {
        const token_valid = await checkJWT();
        if (!token_valid) {
          const refreshed = await refreshJWT();
          if (!refreshed) {
            setAccessToken("");
            setRefreshToken("");
            setUser("");
          }
        } else {
          const authUser = useAuthUser();
          authUser.value = JSON.parse(localStorage.getItem("auth_user"));
        }

        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  };

  const login = ({ username, password, redirectTo }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch(
          runtimeConfig.public.API_URL + "auth/jwt/create/",
          {
            method: "POST",
            body: {
              username,
              password,
            },
            async onResponseError({ request, response, options }) {
              if (response.status === 401) {
                message.error("Пользователь с такими данными не найдено!");
                stopLoading();
              }
            },
          }
        );

        setAccessToken(data.access);
        setRefreshToken(data.refresh);
        await fetchUser();

        resolve(true);
        router.push(redirectTo);
      } catch (error) {
        reject(error);
      }
    });
  };

  const logout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { reset } = await useSession();
        await reset();
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  };

  const auth = async (user) => {
    const data = await $fetch(runtimeConfig.public.API_URL + "users/reg/", {
      method: "POST",
      body: user,
      async onResponseError({ request, response, options }) {
        showFetchError(response);
      },
      async onResponse({ request, response, options }) {
        if (response.ok) {
          await login({ username: user.phone_number, password: user.password });
        } else {
          message.error("Ошибка!");
          stopLoading();
        }
      },
    });
  };

  return {
    useAccessToken,
    useAuthLoading,
    useRefreshToken,
    useAuthUser,
    login,
    fetchUser,
    setIsAuthLoading,
    initAuth,
    checkJWT,
    logout,
    setAuthExist,
    useAuthExist,
    auth,
  };
};
