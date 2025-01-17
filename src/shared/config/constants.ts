import classNames from "classnames";
import { navDataTypes, singleMenuTypes } from "./types";


export const cx = classNames;

// brand image
export const logo = "/Main Logo.png";

// menu items
export const menuData: Array<navDataTypes> = [
  {
    to: "/",
    label: "Home",
    subItems: [],
  },
  {
    to: "/repair-services",
    label: "OverOns",
    subItems: [],
  },
  {
    to: "/about",
    label: "Agroforestry ",
    subItems: [],
  },
  {
    to: "/blog",
    label: "De Kwekerij ",
    subItems: [],
  },
  {
    to: "/blog",
    label: "Projecten Fotso's ",
    subItems: [],
  },
  {
    to: "/contact",
    label: "Contact",
    subItems: [],
  },
];
export const helpData: Array<singleMenuTypes> = [
  {
    to: "/",
    label: "Customer Support ",
  },
  {
    to: "/",
    label: "Terms & Conditions",
  },
  {
    to: "/ ",
    label: "Privacy Policy ",
  },
];

export const layout_data = {
  navbar: {
    button: {
      text: "create a Repair",
      link: "/repair-services",
    },
  },
  footer: {
    subtitle:
      "Clarity gives you the blocks and components you need to create a truly professional",
    copywrite: "Newtech Technology",
    social_links: {
      facebook: "/",
      Instagram: "/",
      LinkedinIn: "/",
      Twitter: "/",
    },
  },
};
