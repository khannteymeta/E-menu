import type { ModuleOptions } from "@nuxtjs/tailwindcss";

export default <ModuleOptions["config"]>{
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
    },
  },
  plugins: [],
};
