
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("D:\\github\\personal\\tailaowai\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\github\\personal\\tailaowai\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("D:\\github\\personal\\tailaowai\\src\\pages\\page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("D:\\github\\personal\\tailaowai\\src\\pages\\using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("D:\\github\\personal\\tailaowai\\src\\pages\\using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("D:\\github\\personal\\tailaowai\\src\\templates\\using-dsg.js"))
}

