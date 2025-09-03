import {DefaultTheme} from "vitepress";

type SidebarItem = DefaultTheme.SidebarItem;

export default [
    {
        text: "Overview", link: '/extensions/'
    },
    {
        text: "PedroPathing", items: [
            {text: "PedroPathing Extension", link: "/extensions/pedro/"},
        ]
    },
    {
        text: "RoadRunner", items: [
            {text: "Installation", link: "/extensions/roadrunner/"},
            {text: "Trajectory Command Builder", link: "/extensions/roadrunner/command-builder"},
            {text: "Using With Other Commands", link: "/extensions/roadrunner/other-commands"}
        ]
    }
] satisfies SidebarItem[]