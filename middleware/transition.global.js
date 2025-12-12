export default defineNuxtRouteMiddleware((to, from) => {
  const transitionEnabled = usePageTransition();

  const stripLocale = (path) => path.replace(/^\/(pl|en)(\/|$)/, "/");

  const baseTo = stripLocale(to.fullPath);
  const baseFrom = stripLocale(from.fullPath);

  if (baseTo === baseFrom) {
    console.log("YES");
    transitionEnabled.value = false;

    setTimeout(() => {
      transitionEnabled.value = true;
    }, 50);
  }
});
