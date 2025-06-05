import {DefaultTheme} from "vitepress";

type SidebarItem = DefaultTheme.SidebarItem;

export default [
    {text: "Overview", link: "/nextftc/"},
    {
        text: "Core Concepts",
        collapsed: false,
        items: [
            {
                text: "Commands",
                link: "/nextftc/concepts/commands"
            },
            {
                text: "Subsystems",
                link: "/nextftc/concepts/subsystems"
            },
            {
                text: "Components",
                link: "/nextftc/concepts/components"
            },
            {
                text: "OpModes",
                link: "/nextftc/concepts/opmodes"
            },
            {
                text: "Units",
                link: "/nextftc/concepts/units"
            }
        ]
    },
    {
        text: "Helpful Commands",
        collapsed: false,
        items: [
            {
                text: "Command Groups",
                link: "/nextftc/helpful-commands/groups"
            },
            {
                text: "Utilities",
                link: "/nextftc/helpful-commands/utilities"
            },
            {
                text: "Conditionals",
                link: "/nextftc/helpful-commands/conditionals"
            },
            {
                text: "Delays",
                link: "/nextftc/helpful-commands/delays"
            },
            {
                text: "Miscellaneous",
                link: "/nextftc/helpful-commands/misc"
            }
        ]
    },
    {
        text: "Hardware",
        collapsed: false,
        items: [
            {
                text: "Drivetrain Commands",
                link: "/nextftc/hardware/drivetrain-commands",
                items: [
                    {
                        text: "Holonomic",
                        link: "/nextftc/hardware/drivetrain-commands/holonomic"
                    },
                    {
                        text: "Differential",
                        link: "/nextftc/hardware/drivetrain-commands/differential"
                    }
                ]
            },
            {
                text: "Motors and Servos",
                items: [
                    {
                        text: "Introduction",
                        link: "/nextftc/hardware/motors-and-servos"
                    },
                    {
                        text: "Motors",
                        link: "/nextftc/hardware/motors-and-servos/motors"
                    },
                    {
                        text: "Servos",
                        link: "/nextftc/hardware/motors-and-servos/servos"
                    },
                    {
                        text: "Continuous-Rotation Servos",
                        link: "/nextftc/hardware/motors-and-servos/cr-servos"
                    },
                    {
                        text: "Servos with Feedback",
                        link: "/nextftc/hardware/motors-and-servos/feedback-servos"
                    }
                ]
            },
            {
                text: "Motor and Servo Commands",
                items: [
                    {
                        text: "SetPower",
                        link: "/nextftc/hardware/motor-and-servo-commands/setpower"
                    },
                    {
                        text: "SetPositions",
                        link: "/nextftc/hardware/motor-and-servo-commands/setpositions"
                    },
                    {
                        text: "RunToState",
                        link: "/nextftc/hardware/motor-and-servo-commands/runtostate"
                    }
                ]
            }
        ]
    }] satisfies SidebarItem[]