import {defineConfig} from "vitepress";
import {tabsMarkdownPlugin} from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
            {text: "Installation", link: "/installation"},
            {text: "Reference", link: "https://docs.rowanmcalpin.com/reference/"}
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
                        items: [{text: "Autonomous", link: "/user-guide/opmodes/autonomous"}]
                    },
                    {
                        text: "PedroPathing",
                        link: "/user-guide/pedropathing"
                    }
                ]
            },
            {
                text: "Core Components",
                items: [
                    {
                        text: "Commands",
                        link: "/components/commands"
                    },
                    {
                        text: "MotorEx",
                        link: "/components/motorex"
                    },
                    {
                        text: "Controllers",
                        link: "/components/controllers"
                    }
                ]
            }
        ],

        socialLinks: [{icon: "github", link: "https://github.com/rowan-mcalpin/nextftc"}],
        editLink: {
            pattern: "https://github.com/rowan-mcalpin/nextftc-docs/edit/main/:path"
        },
        search: {
            provider: "local"
        }
    }
});
