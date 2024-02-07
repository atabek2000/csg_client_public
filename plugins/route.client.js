export default defineNuxtPlugin((NuxtApp) => {
  const loader = useLoader();
  // NuxtApp.hooks.beforeEach(() => {
  //   loader.startLoading();
  //   console.log("some hook");
  // });
  // NuxtApp.hooks.afterEach(() => {
  //   loader.stopLoading();
  // });

  NuxtApp.hook("page:start", () => {
    document.body.style.overflowY = "hidden";
    loader.startLoading();
  });

  NuxtApp.hook("page:finish", () => {
    document.body.style.overflowY = "scroll";
    loader.stopLoading();
  });

  // const router = useRouter();
  // router.beforeEach(() => {
  // });
  // router.afterEach(() => {
  //   loader.stopLoading();
  // });
});
