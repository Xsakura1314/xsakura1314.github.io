import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "夜尽知天明",
  description: "一个无聊的人的博客👻",

  base: "/",

  theme,
});
