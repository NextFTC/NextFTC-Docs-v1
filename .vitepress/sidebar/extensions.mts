import {DefaultTheme} from "vitepress";

type SidebarItem = DefaultTheme.SidebarItem;

export default [
    {
        text: "Overview", link: '/extensions/'
    },
    {
        text: "PedroPathing", items: [
            {text: "PedroPathing Extension", link: "/extensions/pedro/pedro"},
        ]
    }
] satisfies SidebarItem[]