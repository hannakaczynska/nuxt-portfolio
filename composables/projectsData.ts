import { useLanguage } from "~/composables/useLanguage";
import { ref } from "vue";

export const createCards = () => {
  const { lang } = useLanguage();

  const soloCards = ref([
    {
      title: "DestillApp (Full Stack Web App)",
      description:
        lang.value === "en"
          ? "Web app for managing and documenting craft-scale essential oil distillation. Built with full-stack Vue & Node.js architecture."
          : "Aplikacja webowa do zarządzania i dokumentowania destylacji olejków eterycznych w małej skali, zbudowana w pełnym stacku Vue i Node.js.",
      stack: [
        { name: "TypeScript", icon: "simple-icons:typescript" },
        { name: "Vue.js", icon: "simple-icons:vuedotjs" },
        { name: "GraphQL", icon: "simple-icons:graphql" },
        { name: "Node.js", icon: "simple-icons:nodedotjs" },
        { name: "MongoDB", icon: "simple-icons:mongodb" },
      ],
      to: "/projects/destillapp",
    },
    {
      title: "Wallet App (Full Stack Web App)",
      description: lang.value === "en" ?
        "Personal finance manager with transaction tracking, interactive charts, and secure authentication. Built with React.js and Node.js."
        : "Menedżer finansów osobistych z śledzeniem transakcji, interaktywnymi wykresami i bezpiecznym logowaniem, zbudowany w React.js i Node.js.",
      stack: [
        { name: "React.js", icon: "simple-icons:react" },
        { name: "Node.js", icon: "simple-icons:nodedotjs" },
        { name: "MongoDB", icon: "simple-icons:mongodb" },
        { name: "JWT", icon: "simple-icons:jsonwebtokens" },
        { name: "Axios", icon: "simple-icons:axios" },
      ],
      to: "/projects/wallet-app",
    },
    {
      title: "Developer Portfolio (Nuxt 3, SSR)",
      description:
        lang.value === "en"
          ? "Responsive portfolio built with Nuxt.js and server-side rendering. Includes bilingual (PL/EN) support and a contact form powered by EmailJS."
          : "Responsywne portfolio zbudowane w Nuxt.js z renderowaniem po stronie serwera. Obsługuje dwa języki (PL/EN) oraz formularz kontaktowy z EmailJS.",
      stack: [
        { name: "Nuxt 3", icon: "simple-icons:nuxt" },
        { name: "Nuxt UI", icon: "simple-icons:nuxt" },
        { name: "SCSS", icon: "simple-icons:sass" },
        { name: "i18n", icon: "simple-icons:i18next" },
        { name: "EmailJS", icon: "i-lucide-send" },
      ],
      to: "/projects/portfolio",
    },
  ]);

  const teamCards = ref([
    {
      title: "Filmoteka",
      description:
        lang.value === "en"
          ? "Movie search app with trailers, detailed info and a personalized watchlist. Built with JavaScript and REST API."
          : "Aplikacja do wyszukiwania filmów z trailerami, szczegółowymi informacjami i spersonalizowaną listą do obejrzenia. Zbudowana w JavaScript i REST API.",
      stack: [
        { name: "HTML", icon: "simple-icons:html5" },
        { name: "CSS", icon: "simple-icons:css3" },
        { name: "JavaScript", icon: "simple-icons:javascript" },
        { name: "Axios", icon: "simple-icons:axios" },
      ],
      to: "/projects/filmoteka",
    },
    {
      title: "IceCream Shop",
      description: lang.value === "en" ?
        "Responsive landing page for a fictional ice-cream brand, built from Figma designs."
        : "Responsywny landing page dla fikcyjnej marki lodowej, wykonany na podstawie projektu w Figma.",
      stack: [
        { name: "HTML", icon: "simple-icons:html5" },
        { name: "CSS", icon: "simple-icons:css3" },
      ],
      to: "/projects/icecream-shop",
    },
  ]);

  return {soloCards, teamCards};
};
