export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const lang = useCookie("lang");
  if (process.server) return;
  const { setAuthExist, checkJWT } = useAuth();
  if (await checkJWT()) {
    setAuthExist(true);
  } else {
    setAuthExist(false);
    if (to.path.includes("account")) {
      // return navigateTo("/", { redirectCode: 301 });
      router.push("/");
    }
  }

  if (lang.value === "kz" && !to.path.includes("/kz")) {
    router.push("/kz" + to.path);
  }
});
