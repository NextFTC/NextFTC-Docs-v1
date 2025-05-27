import {defineConfig} from "vitepress";
import {tabsMarkdownPlugin} from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",
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
    base: "/NextFTC-Docs-v1/",
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
            {text: "Guide", link: "/guide/about", activeMatch: "^/guide/"},
            {
                text: "Libraries",
                items: [
                    {text: "NextFTC", link: "/nextftc/", activeMatch: "^/nextftc/"},
                    {text: "NextControl", link: "/control/", activeMatch: "^/control/"},
                    {text: "NextBindings", link: "/bindings/", activeMatch: "^/bindings/"},
                    {text: "NextPedro", link: "/pedro/", activeMatch: "^/pedro/"}
                ],
                activeMatch: "^/(nextftc|control|bindings|pedro)/"

            },
            {
                text: "v1.0.0",
                items: [
                    {text: "v0.6.1", link: "https://v0.nextftc.dev"}
                ]
            },
            {
                text: "Dokka Reference", items: [
                    {text: "NextFTC", link: "https://nextftc.dev/reference/nextftc"},
                    {text: "NextControl", link: "https://nextftc.dev/reference/control"},
                    {text: "NextBindings", link: "https://nextftc.dev/reference/bindings"},
                    {text: "NextPedro", link: "https://nextftc.dev/reference/pedro"},
                ]
            }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: "Introduction", items: [
                        {text: "What is NextFTC?", link: "/guide/about"},
                        {text: "Installation", link: "/guide/installation"},
                    ]
                },
                {
                    text: "Subsystems",
                    items: [
                        {text: "Overview", link: "/guide/subsystems/overview"},
                        {text: "Lift", link: "/guide/subsystems/lift"},
                        {text: "Claw", link: "/guide/subsystems/claw"}
                    ]
                },
                {
                    text: "OpModes",
                    items: [
                        {text: "Autonomous", link: "/guide/opmodes/autonomous"},
                        {text: "TeleOp", link: "/guide/opmodes/teleop"},
                        {text: "PedroPathing", link: "/guide/opmodes/pedropathing"}
                    ]
                },
                {
                    text: "Further Reading",
                    link: "/guide/further-reading"
                }
            ],
            '/nextftc/': [
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
                }
            ]
        },

        socialLinks:
            [
                {icon: "github", link: "https://github.com/rowan-mcalpin/nextftc"},
                {icon: "discord", link: "https://discord.gg/PjP9Ze6fkX"}
            ],
        editLink:
            {
                pattern: "https://github.com/rowan-mcalpin/nextftc-docs/edit/main/:path"
            }
        ,
        search: {
            provider: "local"
        }
    }
})
;
