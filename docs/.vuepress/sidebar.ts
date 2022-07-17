import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  // "/",
  {
    text: "计算机技术",
    prefix: "/posts/code/",
    collapsable: true,
    children: [
      {
        text: "数据库",
        prefix: "database/",
        children: "structure"
      }
    ]
  }
]);
