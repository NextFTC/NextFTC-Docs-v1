import type {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";
import {enhanceAppWithTabs} from "vitepress-plugin-tabs/client";
import "./custom.css";

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        enhanceAppWithTabs(app);
    }
} satisfies Theme;
