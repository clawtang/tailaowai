
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode5 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode6 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode7 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode8 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode9 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode10 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode11 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode12 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode13 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode14 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode15 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode16 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = [
{ name: "gatsby-plugin-image", module: pluginGatsbyNode0, importKey: 1 },
{ name: "gatsby-source-filesystem", module: pluginGatsbyNode1, importKey: 2 },
{ name: "gatsby-transformer-sharp", module: pluginGatsbyNode2, importKey: 3 },
{ name: "gatsby-plugin-sharp", module: pluginGatsbyNode3, importKey: 4 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode4, importKey: 5 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode5, importKey: 6 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode6, importKey: 7 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode7, importKey: 8 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode8, importKey: 9 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode9, importKey: 10 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode10, importKey: 11 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode11, importKey: 12 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode12, importKey: 13 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode13, importKey: 14 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode14, importKey: 15 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode15, importKey: 16 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode16, importKey: 17 },
]

export const gatsbyWorkers = [
{ name: "gatsby-plugin-sharp", module: pluginGatsbyWorker0, importKey: 1 },
]

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.14.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": "",
    "importKey": 1
  },
  {
    "resolve": "",
    "id": "2c7da8ae-a56f-544c-8800-33bf10ee31b5",
    "name": "gatsby-source-filesystem",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "D:\\github\\personal\\tailaowai/src/images",
      "fastHash": false
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 2
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 3
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 4
  },
  {
    "resolve": "",
    "id": "5a6ad0b4-245d-50f9-95b1-ec668d6f8f5e",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 5
  },
  {
    "resolve": "",
    "id": "2eaf9730-3749-59cf-940e-711aa15b2bab",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 6
  },
  {
    "resolve": "",
    "id": "3971e780-3fbb-5921-be70-5edbbabb96bd",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 7
  },
  {
    "resolve": "",
    "id": "31e0f7c1-b3c8-5379-bacd-9457ddafe3a3",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 8
  },
  {
    "resolve": "",
    "id": "ca54f06b-19b4-5289-ba41-689f7917263c",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 9
  },
  {
    "resolve": "",
    "id": "48837937-9ea8-5ec0-917a-487097aca065",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 10
  },
  {
    "resolve": "",
    "id": "8d909d06-6751-5b76-808d-ca06b9a1f7d9",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 11
  },
  {
    "resolve": "",
    "id": "36830ab5-129e-5e5d-874e-6c5fbe22213a",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 12
  },
  {
    "resolve": "",
    "id": "cac7f770-95d6-5ae8-9b4c-39eb41413610",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 13
  },
  {
    "resolve": "",
    "id": "2198adc7-4cf8-5939-adba-beb7da1f0908",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 14
  },
  {
    "resolve": "",
    "id": "5e6d85a8-313e-5da3-b6c6-ca88c851bb38",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 15
  },
  {
    "resolve": "",
    "id": "6a7444b7-9ff6-5cd5-ac68-c2c787850d21",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 16
  },
  {
    "resolve": "",
    "id": "8d674bcb-7485-5f56-96c4-a08dbf00f6f9",
    "name": "gatsby-plugin-page-creator",
    "version": "5.14.0",
    "pluginOptions": {
      "plugins": [],
      "path": "D:/github/personal/tailaowai/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 17
  }
]
