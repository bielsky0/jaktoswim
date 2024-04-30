import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Najlepsza Szkółka Pływacka w Szczecinie | JakToSwim",
    short_name: "Najlepsza Szkółka Pływacka w Szczecinie | JakToSwim",
    description:
      "Nasza szkółka to miejsce, gdzie woda łączy się z niezapomnianymi emocjami i rozwojem. Instruktor pływania dla dzieci i dorosłych w Szczecienie.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
