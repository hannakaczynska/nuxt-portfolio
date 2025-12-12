export const usePageTransition = () => {
  return useState("page-transition-enabled", () => true);
};
