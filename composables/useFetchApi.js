export default (url, options = {}) => {
  const runtimeConfig = useRuntimeConfig();
  const { useAccessToken } = useAuth();

  return $fetch(runtimeConfig.public.API_URL + url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useAccessToken().value}`,
    },
  });
};
