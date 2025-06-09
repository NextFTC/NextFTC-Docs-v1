import {DefaultTheme} from "vitepress";

type SidebarItem = DefaultTheme.SidebarItem;

export default [
    {
        text: "Overview",
        link: "/control/",
    },
    {
        text: "Kinetic States",
        link: "/control/kineticstates",
    },
    {
        text: "Control Systems",
        link: "/control/controlsystem",
    },
    {
        text: "Examples",
        items: [
            {
                text: "Index",
                link: "/control/examples/",
            },
            {
                text: "Linear Slides",
                link: "/control/examples/slides",
            }
        ]
    }
] satisfies SidebarItem[]