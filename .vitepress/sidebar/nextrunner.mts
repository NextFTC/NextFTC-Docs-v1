import {DefaultTheme} from "vitepress";

type SidebarItem = DefaultTheme.SidebarItem;

export default [
    {
        text: "Overview",
        link: "/nextrunner/"
    },
    {
        text: "Changes From RoadRunner",
        link: "/nextrunner/changes-from-rr"
    },
    {
        text: "Examples",
        items: [
            {
                text: "TrajectoryActionBuilder",
                link: "/nextrunner/examples/action-builder"
            },
            {
                text: "TrajectoryCommandBuilder",
                link: "/nextrunner/examples/command-builder"
            },
            {
                text: "Followers",
                link: "/nextrunner/examples/follower"
            }
        ]
    }
] satisfies SidebarItem[]