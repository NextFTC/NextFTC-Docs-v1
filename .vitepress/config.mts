import {defineConfig} from "vitepress";
import {tabsMarkdownPlugin} from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ["link", {rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico"}],
        ["link", {rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96"}],
        ["link", {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}],
        [
            "link",
            {
                rel: "apple-touch-icon",
                href: "/apple-touch-icon.png",
                sizes: "180x180"
            }
        ],
        ["link", {rel: "manifest", href: "/site.webmanifest"}]
    ],
    cleanUrls: true,
    ignoreDeadLinks: true,
    base: "/",
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin);
        }
    },
    title: "NextFTC Documentation",
    description: "Simple but powerful library for FTC",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "Home", link: "/"},
            {text: "Documentation", link: "/installation"},
            {text: "Reference", link: "https://nextftc.dev/reference/"}
        ],

        sidebar: [
            {text: "Installation", link: "/installation"},
            {
                text: "User Guide",
                items: [
                    {
                        text: "Subsystems",
                        link: "/user-guide/subsystems",
                        items: [
                            {text: "Lift", link: "/user-guide/subsystems/lift"},
                            {text: "Claw", link: "/user-guide/subsystems/claw"}
                        ]
                    },
                    {
                        text: "OpModes",
                        items: [
                            {text: "Autonomous", link: "/user-guide/opmodes/autonomous"},
                            {text: "TeleOp", link: "/user-guide/opmodes/teleop"},
                            {text: "PedroPathing", link: "/user-guide/opmodes/pedropathing"}
                        ]
                    }
                ]
            },
            {
                text: "Core concepts",
                items: [
                    {
                        text: "Commands",
                        link: "/concepts/commands"
                    },
                    {
                        text: "Hardware",
                        items: [
                            {
                                text: "Motors",
                                link: "/concepts/hardware/motors"
                            }
                        ]
                    },
                    {
                        text: "Units",
                        link: "/concepts/units"
                    }
                ]
            },
            {
                text: "Built-In Commands",
                items: [
                    {
                        text: "Command Groups",
                        link: "/builtin-commands/commandgroups"
                    },
                    {
                        text: "Utilities",
                        link: "/builtin-commands/utilities"
                    },
                    {
                        text: "Conditionals",
                        link: "/builtin-commands/conditionals"
                    },
                    {
                        text: "Delays",
                        link: "/builtin-commands/delays"
                    },
                    {
                        text: "Drivetrain Commands",
                        link: "/builtin-commands/drivetrain-commands",
                        items: [
                            {
                                text: "PedroPathing",
                                link: "/builtin-commands/drivetrain-commands/pedropathing"
                            },
                            {
                                text: "Holonomic",
                                link: "/builtin-commands/drivetrain-commands/holonomic"
                            },
                            {
                                text: "Differential",
                                link: "/builtin-commands/drivetrain-commands/differential"
                            }
                        ]
                    },
                    {
                        text: "Hardware Commands",
                        items: [
                            {
                                text: "Motor Commands",
                                link: "/builtin-commands/hardware/motors"
                            },
                            {
                                text: "Servo Commands",
                                link: "/builtin-commands/hardware/servos"
                            }
                        ]
                    },
                    {
                        text: "PedroPathing",
                        items: [
                           {
                               text: "Movement",
                               link: "/builtin-commands/pedro/movement"
                           },
                           {
                               text: "Delays",
                               link: "/builtin-commands/pedro/delays"
                           }
                        ]
                    },
                    {
                        text: "Miscellanous",
                        link: "/builtin-commands/misc"
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/rowan-mcalpin/nextftc"},
            {icon: "discord", link: "https://discord.gg/PjP9Ze6fkX"}
        ],
        editLink: {
            pattern: "https://github.com/rowan-mcalpin/nextftc-docs/edit/main/:path"
        },
        search: {
            provider: "local"
        }
    }
});
