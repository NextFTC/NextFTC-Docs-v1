import {DefaultTheme} from "vitepress";

type SidebarItem = DefaultTheme.SidebarItem;

export default [
    {
        text: "Overview",
        link: "/bindings/",
    },
    {
        text: "Getting Started",
        link: "/bindings/getting-started",
    },
    {
        text: "Buttons, Layers, and Callbacks",
        link: "/bindings/buttons",
    },
    {
        text: "Variables and Ranges",
        link: "/bindings/variables",
    }
] satisfies SidebarItem[]