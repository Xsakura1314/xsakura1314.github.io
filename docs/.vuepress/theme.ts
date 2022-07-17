import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "夜尽知天明",
    // url: "https://mrhope.site",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "看看远处的风景吧~",

  displayFooter: true,

  contributors: false,

  // 添加主题颜色
  // 默认有一个绿色主题
  themeColor: {
    blue: "#2196f3",
    orange: "#fb9b5f",
  },

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个无聊的人👻",
    roundAvatar: true,
    // intro: "/intro.html",
  },

  plugins: {
    blog: {
      autoExcerpt: false,
    },


    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
