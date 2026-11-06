import localFont from "next/font/local";

export const marcellusSC = localFont({
  src: "../../public/fonts/marcellus-sc-regular.woff2",
  variable: "--font-marcellus",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

