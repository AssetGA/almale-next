/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/lib/api/order/route";
exports.ids = ["app/lib/api/order/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flib%2Fapi%2Forder%2Froute&page=%2Flib%2Fapi%2Forder%2Froute&appPaths=&pagePath=private-next-app-dir%2Flib%2Fapi%2Forder%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flib%2Fapi%2Forder%2Froute&page=%2Flib%2Fapi%2Forder%2Froute&appPaths=&pagePath=private-next-app-dir%2Flib%2Fapi%2Forder%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_asset_projects_almale_almale_next_src_app_lib_api_order_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/lib/api/order/route.js */ \"(rsc)/./src/app/lib/api/order/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/lib/api/order/route\",\n        pathname: \"/lib/api/order\",\n        filename: \"route\",\n        bundlePath: \"app/lib/api/order/route\"\n    },\n    resolvedPagePath: \"/home/asset/projects/almale/almale-next/src/app/lib/api/order/route.js\",\n    nextConfigOutput,\n    userland: _home_asset_projects_almale_almale_next_src_app_lib_api_order_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZsaWIlMkZhcGklMkZvcmRlciUyRnJvdXRlJnBhZ2U9JTJGbGliJTJGYXBpJTJGb3JkZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZsaWIlMkZhcGklMkZvcmRlciUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYXNzZXQlMkZwcm9qZWN0cyUyRmFsbWFsZSUyRmFsbWFsZS1uZXh0JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGYXNzZXQlMkZwcm9qZWN0cyUyRmFsbWFsZSUyRmFsbWFsZS1uZXh0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PXN0YW5kYWxvbmUmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDc0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvYXBwL2xpYi9hcGkvb3JkZXIvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwic3RhbmRhbG9uZVwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2xpYi9hcGkvb3JkZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2xpYi9hcGkvb3JkZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvbGliL2FwaS9vcmRlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvYXBwL2xpYi9hcGkvb3JkZXIvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flib%2Fapi%2Forder%2Froute&page=%2Flib%2Fapi%2Forder%2Froute&appPaths=&pagePath=private-next-app-dir%2Flib%2Fapi%2Forder%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp%2Flib%2Fmongodb.js%22%2C%5B%5B%227ff7ac485ca25562c3848de5d6d696452198d1c729%22%2C%22connectToDatabase%22%5D%5D%5D%5D&__client_imported__=!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp%2Flib%2Fmongodb.js%22%2C%5B%5B%227ff7ac485ca25562c3848de5d6d696452198d1c729%22%2C%22connectToDatabase%22%5D%5D%5D%5D&__client_imported__=! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"7ff7ac485ca25562c3848de5d6d696452198d1c729\": () => (/* reexport safe */ _home_asset_projects_almale_almale_next_src_app_lib_mongodb_js__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var _home_asset_projects_almale_almale_next_src_app_lib_mongodb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/lib/mongodb.js */ \"(rsc)/./src/app/lib/mongodb.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1hY3Rpb24tZW50cnktbG9hZGVyLmpzP2FjdGlvbnM9JTVCJTVCJTIyJTJGaG9tZSUyRmFzc2V0JTJGcHJvamVjdHMlMkZhbG1hbGUlMkZhbG1hbGUtbmV4dCUyRnNyYyUyRmFwcCUyRmxpYiUyRm1vbmdvZGIuanMlMjIlMkMlNUIlNUIlMjI3ZmY3YWM0ODVjYTI1NTYyYzM4NDhkZTVkNmQ2OTY0NTIxOThkMWM3MjklMjIlMkMlMjJjb25uZWN0VG9EYXRhYmFzZSUyMiU1RCU1RCU1RCU1RCZfX2NsaWVudF9pbXBvcnRlZF9fPSEiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2tKIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSBhcyBcIjdmZjdhYzQ4NWNhMjU1NjJjMzg0OGRlNWQ2ZDY5NjQ1MjE5OGQxYzcyOVwiIH0gZnJvbSBcIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvYXBwL2xpYi9tb25nb2RiLmpzXCJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp%2Flib%2Fmongodb.js%22%2C%5B%5B%227ff7ac485ca25562c3848de5d6d696452198d1c729%22%2C%22connectToDatabase%22%5D%5D%5D%5D&__client_imported__=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/lib/api/order/route.js":
/*!****************************************!*\
  !*** ./src/app/lib/api/order/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/Order */ \"(rsc)/./src/models/Order.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Order__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dai */ \"(rsc)/./src/app/lib/dai.js\");\n/* harmony import */ var _utils_randomNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/randomNumber */ \"(rsc)/./src/app/utils/randomNumber.js\");\n/* harmony import */ var _utils_randomNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_randomNumber__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_sendVerificationMail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/sendVerificationMail */ \"(rsc)/./src/app/utils/sendVerificationMail.js\");\n/* harmony import */ var _utils_sendVerificationMail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_sendVerificationMail__WEBPACK_IMPORTED_MODULE_5__);\n// app/api/product/route.js\n\n\n\n\n\n\nconst { ObjectId } = __webpack_require__(/*! mongodb */ \"mongodb\");\nasync function POST(request) {\n    const user = await (0,_dai__WEBPACK_IMPORTED_MODULE_3__.getUser)();\n    try {\n        const { name, email, mobile, street, city, userId, productId, deliveryPrice, quantity, total, postalCode } = await request.json();\n        const findUser = await _models_User__WEBPACK_IMPORTED_MODULE_2___default().findById(userId);\n        if (findUser !== null && user._id.equals(new ObjectId(userId))) {\n            try {\n                await _utils_randomNumber__WEBPACK_IMPORTED_MODULE_4___default().start();\n                const number = _utils_randomNumber__WEBPACK_IMPORTED_MODULE_4___default().getNumber();\n                const newOrder = await _models_Order__WEBPACK_IMPORTED_MODULE_1___default().create({\n                    name: name,\n                    email: email,\n                    mobile: mobile,\n                    street: street,\n                    city: city,\n                    productId: productId,\n                    deliveryPrice: deliveryPrice,\n                    postalCode: postalCode,\n                    quantity: quantity,\n                    total: total,\n                    userId: userId,\n                    numberCheck: number\n                });\n                (0,_utils_sendVerificationMail__WEBPACK_IMPORTED_MODULE_5__.sendVerificationMail)(findUser, number).catch(console.error);\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    orderId: newOrder._id\n                }, {\n                    status: 200\n                });\n            } catch (error) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: \"falseUser\"\n                }, {\n                    status: 400\n                });\n            }\n        }\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"На сервере произошла ошибка попробуйте позже\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9hcGkvb3JkZXIvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkI7QUFDZ0I7QUFDRTtBQUNEO0FBQ1I7QUFDbUI7QUFDb0I7QUFDM0UsTUFBTSxFQUFFTSxRQUFRLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsd0JBQVM7QUFFL0IsZUFBZUMsS0FBS0MsT0FBTztJQUNoQyxNQUFNQyxPQUFPLE1BQU1QLDZDQUFPQTtJQUMxQixJQUFJO1FBQ0YsTUFBTSxFQUNKUSxJQUFJLEVBQ0pDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLElBQUksRUFDSkMsTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLGFBQWEsRUFDYkMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLFVBQVUsRUFDWCxHQUFHLE1BQU1aLFFBQVFhLElBQUk7UUFFdEIsTUFBTUMsV0FBVyxNQUFNckIsNERBQWMsQ0FBQ2M7UUFDdEMsSUFBSU8sYUFBYSxRQUFRYixLQUFLZSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxJQUFJcEIsU0FBU1UsVUFBVTtZQUM5RCxJQUFJO2dCQUNGLE1BQU1aLGdFQUFrQjtnQkFDeEIsTUFBTXdCLFNBQVN4QixvRUFBc0I7Z0JBRXJDLE1BQU0wQixXQUFXLE1BQU03QiwyREFBWSxDQUFDO29CQUNsQ1UsTUFBTUE7b0JBQ05DLE9BQU9BO29CQUNQQyxRQUFRQTtvQkFDUkMsUUFBUUE7b0JBQ1JDLE1BQU1BO29CQUNORSxXQUFXQTtvQkFDWEMsZUFBZUE7b0JBQ2ZHLFlBQVlBO29CQUNaRixVQUFVQTtvQkFDVkMsT0FBT0E7b0JBQ1BKLFFBQVFBO29CQUNSZ0IsYUFBYUo7Z0JBQ2Y7Z0JBRUF2QixpRkFBb0JBLENBQUNrQixVQUFVSyxRQUFRSyxLQUFLLENBQUNDLFFBQVFDLEtBQUs7Z0JBQzFELE9BQU9uQyxxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztvQkFBRWMsU0FBU04sU0FBU0wsR0FBRztnQkFBQyxHQUFHO29CQUFFWSxRQUFRO2dCQUFJO1lBQ3BFLEVBQUUsT0FBT0YsT0FBTztnQkFDZCxPQUFPbkMscURBQVlBLENBQUNzQixJQUFJLENBQUM7b0JBQUVnQixTQUFTO2dCQUFZLEdBQUc7b0JBQUVELFFBQVE7Z0JBQUk7WUFDbkU7UUFDRjtJQUNGLEVBQUUsT0FBT0YsT0FBTztRQUNkLE9BQU9uQyxxREFBWUEsQ0FBQ3NCLElBQUksQ0FDdEI7WUFDRWdCLFNBQVM7UUFDWCxHQUNBO1lBQUVELFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9hc3NldC9wcm9qZWN0cy9hbG1hbGUvYWxtYWxlLW5leHQvc3JjL2FwcC9saWIvYXBpL29yZGVyL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvcHJvZHVjdC9yb3V0ZS5qc1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9PcmRlclwiO1xuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuLi8uLi9kYWlcIjtcbmltcG9ydCByYW5kb21OdW1iZXIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3JhbmRvbU51bWJlclwiO1xuaW1wb3J0IHsgc2VuZFZlcmlmaWNhdGlvbk1haWwgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc2VuZFZlcmlmaWNhdGlvbk1haWxcIjtcbmNvbnN0IHsgT2JqZWN0SWQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKCk7XG4gIHRyeSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgbW9iaWxlLFxuICAgICAgc3RyZWV0LFxuICAgICAgY2l0eSxcbiAgICAgIHVzZXJJZCxcbiAgICAgIHByb2R1Y3RJZCxcbiAgICAgIGRlbGl2ZXJ5UHJpY2UsXG4gICAgICBxdWFudGl0eSxcbiAgICAgIHRvdGFsLFxuICAgICAgcG9zdGFsQ29kZSxcbiAgICB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICBjb25zdCBmaW5kVXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHVzZXJJZCk7XG4gICAgaWYgKGZpbmRVc2VyICE9PSBudWxsICYmIHVzZXIuX2lkLmVxdWFscyhuZXcgT2JqZWN0SWQodXNlcklkKSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHJhbmRvbU51bWJlci5zdGFydCgpO1xuICAgICAgICBjb25zdCBudW1iZXIgPSByYW5kb21OdW1iZXIuZ2V0TnVtYmVyKCk7XG5cbiAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBPcmRlci5jcmVhdGUoe1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIG1vYmlsZTogbW9iaWxlLFxuICAgICAgICAgIHN0cmVldDogc3RyZWV0LFxuICAgICAgICAgIGNpdHk6IGNpdHksXG4gICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0SWQsXG4gICAgICAgICAgZGVsaXZlcnlQcmljZTogZGVsaXZlcnlQcmljZSxcbiAgICAgICAgICBwb3N0YWxDb2RlOiBwb3N0YWxDb2RlLFxuICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICB0b3RhbDogdG90YWwsXG4gICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgbnVtYmVyQ2hlY2s6IG51bWJlcixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VuZFZlcmlmaWNhdGlvbk1haWwoZmluZFVzZXIsIG51bWJlcikuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG9yZGVySWQ6IG5ld09yZGVyLl9pZCB9LCB7IHN0YXR1czogMjAwIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJmYWxzZVVzZXJcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IFwi0J3QsCDRgdC10YDQstC10YDQtSDQv9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9C20LVcIixcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiT3JkZXIiLCJVc2VycyIsImdldFVzZXIiLCJyYW5kb21OdW1iZXIiLCJzZW5kVmVyaWZpY2F0aW9uTWFpbCIsIk9iamVjdElkIiwicmVxdWlyZSIsIlBPU1QiLCJyZXF1ZXN0IiwidXNlciIsIm5hbWUiLCJlbWFpbCIsIm1vYmlsZSIsInN0cmVldCIsImNpdHkiLCJ1c2VySWQiLCJwcm9kdWN0SWQiLCJkZWxpdmVyeVByaWNlIiwicXVhbnRpdHkiLCJ0b3RhbCIsInBvc3RhbENvZGUiLCJqc29uIiwiZmluZFVzZXIiLCJmaW5kQnlJZCIsIl9pZCIsImVxdWFscyIsInN0YXJ0IiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwibmV3T3JkZXIiLCJjcmVhdGUiLCJudW1iZXJDaGVjayIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwib3JkZXJJZCIsInN0YXR1cyIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/api/order/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/dai.js":
/*!****************************!*\
  !*** ./src/app/lib/dai.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   verifySession: () => (/* binding */ verifySession)\n/* harmony export */ });\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server-only */ \"(rsc)/./node_modules/next/dist/compiled/server-only/empty.js\");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session */ \"(rsc)/./src/app/lib/session.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(rsc)/./node_modules/next/dist/api/navigation.react-server.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mongodb */ \"(rsc)/./src/app/lib/mongodb.js\");\n\n\n\n\n\n\n\nconst verifySession = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async ()=>{\n    const cookie = (await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)()).get(\"session\")?.value;\n    const session = await (0,_session__WEBPACK_IMPORTED_MODULE_2__.decrypt)(cookie);\n    // if (!session?.userId) {\n    //   redirect(`/login`);\n    // }\n    return {\n        isAuth: true,\n        userId: session?.userId,\n        role: session?.role\n    };\n});\nconst getUser = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async ()=>{\n    const session = await verifySession();\n    if (!session) return null;\n    await (0,_mongodb__WEBPACK_IMPORTED_MODULE_6__.connectToDatabase)();\n    try {\n        // Получение пользователя по userId из сессии\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_4___default().findById(session.userId); // lean() для повышения производительности, если вы просто читаете данные\n        return user || null; // Вернуть `null`, если пользователь не найден\n    } catch (error) {\n        console.error(\"Failed to fetch user:\", error);\n        return null;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCO0FBRWtCO0FBQ0g7QUFDTjtBQUNRO0FBQ0s7QUFDRztBQUV2QyxNQUFNTSxnQkFBZ0JKLDRDQUFLQSxDQUFDO0lBQ2pDLE1BQU1LLFNBQVMsQ0FBQyxNQUFNUCxxREFBT0EsRUFBQyxFQUFHUSxHQUFHLENBQUMsWUFBWUM7SUFDakQsTUFBTUMsVUFBVSxNQUFNVCxpREFBT0EsQ0FBQ007SUFDOUIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixJQUFJO0lBRUosT0FBTztRQUFFSSxRQUFRO1FBQU1DLFFBQVFGLFNBQVNFO1FBQVFDLE1BQU1ILFNBQVNHO0lBQUs7QUFDdEUsR0FBRztBQUVJLE1BQU1DLFVBQVVaLDRDQUFLQSxDQUFDO0lBQzNCLE1BQU1RLFVBQVUsTUFBTUo7SUFDdEIsSUFBSSxDQUFDSSxTQUFTLE9BQU87SUFFckIsTUFBTUwsMkRBQWlCQTtJQUN2QixJQUFJO1FBQ0YsNkNBQTZDO1FBQzdDLE1BQU1VLE9BQU8sTUFBTVosNERBQWMsQ0FBQ08sUUFBUUUsTUFBTSxHQUFHLHlFQUF5RTtRQUU1SCxPQUFPRyxRQUFRLE1BQU0sOENBQThDO0lBQ3JFLEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxPQUFPO0lBQ1Q7QUFDRixHQUFHIiwic291cmNlcyI6WyIvaG9tZS9hc3NldC9wcm9qZWN0cy9hbG1hbGUvYWxtYWxlLW5leHQvc3JjL2FwcC9saWIvZGFpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInNlcnZlci1vbmx5XCI7XG5cbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgeyBkZWNyeXB0IH0gZnJvbSBcIi4vc2Vzc2lvblwiO1xuaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVc2VycyBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi9tb25nb2RiXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnlTZXNzaW9uID0gY2FjaGUoYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb29raWUgPSAoYXdhaXQgY29va2llcygpKS5nZXQoXCJzZXNzaW9uXCIpPy52YWx1ZTtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGRlY3J5cHQoY29va2llKTtcbiAgLy8gaWYgKCFzZXNzaW9uPy51c2VySWQpIHtcbiAgLy8gICByZWRpcmVjdChgL2xvZ2luYCk7XG4gIC8vIH1cblxuICByZXR1cm4geyBpc0F1dGg6IHRydWUsIHVzZXJJZDogc2Vzc2lvbj8udXNlcklkLCByb2xlOiBzZXNzaW9uPy5yb2xlIH07XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSBjYWNoZShhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB2ZXJpZnlTZXNzaW9uKCk7XG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIG51bGw7XG5cbiAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgdHJ5IHtcbiAgICAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINC/0L4gdXNlcklkINC40Lcg0YHQtdGB0YHQuNC4XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHNlc3Npb24udXNlcklkKTsgLy8gbGVhbigpINC00LvRjyDQv9C+0LLRi9GI0LXQvdC40Y8g0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdC+0YHRgtC4LCDQtdGB0LvQuCDQstGLINC/0YDQvtGB0YLQviDRh9C40YLQsNC10YLQtSDQtNCw0L3QvdGL0LVcblxuICAgIHJldHVybiB1c2VyIHx8IG51bGw7IC8vINCS0LXRgNC90YPRgtGMIGBudWxsYCwg0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0L3QsNC50LTQtdC9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJkZWNyeXB0IiwiY2FjaGUiLCJVc2VycyIsInJlZGlyZWN0IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJ2ZXJpZnlTZXNzaW9uIiwiY29va2llIiwiZ2V0IiwidmFsdWUiLCJzZXNzaW9uIiwiaXNBdXRoIiwidXNlcklkIiwicm9sZSIsImdldFVzZXIiLCJ1c2VyIiwiZmluZEJ5SWQiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/dai.js\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/mongodb.js":
/*!********************************!*\
  !*** ./src/app/lib/mongodb.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_InitDatabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/InitDatabase */ \"(rsc)/./src/app/utils/InitDatabase.js\");\n/* harmony import */ var _utils_InitDatabase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_InitDatabase__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"7ff7ac485ca25562c3848de5d6d696452198d1c729\":\"connectToDatabase\"} */ \n\n\n\nlet isConnected = false; // Track the connection state\nconst /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ connectToDatabase = async ()=>{\n    if (isConnected) {\n        console.log(\"Database is already connected\");\n        return;\n    }\n    try {\n        // Connect to MongoDB\n        await mongoose__WEBPACK_IMPORTED_MODULE_2___default().set(\"strictQuery\", true); // Optional, depending on your Mongoose version\n        await mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGODB_URI, {\n            dbName: \"test\"\n        }, 60000);\n        isConnected = true; // Set the connection flag\n        console.log(\"Database connection established\");\n        // Initialize the database (e.g., create indexes)\n        _utils_InitDatabase__WEBPACK_IMPORTED_MODULE_3___default()();\n    } catch (error) {\n        console.error(\"Database connection error:\", error);\n        throw new Error(\"Failed to connect to the database\");\n    }\n};\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__.ensureServerEntryExports)([\n    connectToDatabase\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(connectToDatabase, \"7ff7ac485ca25562c3848de5d6d696452198d1c729\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9tb25nb2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ2lCO0FBRWpELElBQUlFLGNBQWMsT0FBTyw2QkFBNkI7QUFFL0MsTUFBTUMsdUNBQWUsR0FBZkEsb0JBQW9CO0lBQy9CLElBQUlELGFBQWE7UUFDZkUsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixxQkFBcUI7UUFDckIsTUFBTUwsbURBQVksQ0FBQyxlQUFlLE9BQU8sK0NBQStDO1FBQ3hGLE1BQU1BLHVEQUFnQixDQUNwQlEsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQ3ZCO1lBQ0VDLFFBQVE7UUFDVixHQUNBO1FBR0ZULGNBQWMsTUFBTSwwQkFBMEI7UUFDOUNFLFFBQVFDLEdBQUcsQ0FBQztRQUVaLGlEQUFpRDtRQUNqREosMERBQVlBO0lBQ2QsRUFBRSxPQUFPVyxPQUFPO1FBQ2RSLFFBQVFRLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGLEVBQUU7OztJQTFCV1Y7O0FBQUFBLDBGQUFBQSxDQUFBQSIsInNvdXJjZXMiOlsiL2hvbWUvYXNzZXQvcHJvamVjdHMvYWxtYWxlL2FsbWFsZS1uZXh0L3NyYy9hcHAvbGliL21vbmdvZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBpbml0RGF0YWJhc2UgZnJvbSBcIi4uL3V0aWxzL0luaXREYXRhYmFzZVwiO1xuXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTsgLy8gVHJhY2sgdGhlIGNvbm5lY3Rpb24gc3RhdGVcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGlzIGFscmVhZHkgY29ubmVjdGVkXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gQ29ubmVjdCB0byBNb25nb0RCXG4gICAgYXdhaXQgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgdHJ1ZSk7IC8vIE9wdGlvbmFsLCBkZXBlbmRpbmcgb24geW91ciBNb25nb29zZSB2ZXJzaW9uXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcbiAgICAgIHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLFxuICAgICAge1xuICAgICAgICBkYk5hbWU6IFwidGVzdFwiLCAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgZGF0YWJhc2UgbmFtZVxuICAgICAgfSxcbiAgICAgIDYwMDAwXG4gICAgKTtcblxuICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTsgLy8gU2V0IHRoZSBjb25uZWN0aW9uIGZsYWdcbiAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBkYXRhYmFzZSAoZS5nLiwgY3JlYXRlIGluZGV4ZXMpXG4gICAgaW5pdERhdGFiYXNlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2VcIik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpbml0RGF0YWJhc2UiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY29uc29sZSIsImxvZyIsInNldCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYk5hbWUiLCJlcnJvciIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/session.js":
/*!********************************!*\
  !*** ./src/app/lib/session.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSession: () => (/* binding */ createSession),\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   deleteSession: () => (/* binding */ deleteSession),\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   getSessionCookie: () => (/* binding */ getSessionCookie),\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server-only */ \"(rsc)/./node_modules/next/dist/compiled/server-only/empty.js\");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n\n\n\nconst secretKey = process.env.SESSION_SECRET;\nconst encodedKey = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return new jose__WEBPACK_IMPORTED_MODULE_2__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"1d\").sign(encodedKey);\n}\nasync function decrypt(session) {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_3__.jwtVerify)(session, encodedKey, {\n            algorithms: [\n                \"HS256\"\n            ]\n        });\n        return payload;\n    } catch (error) {\n        console.log(\"Failed to verify session\");\n    }\n}\n// export async function fetchCreateSession(id) {\n//   try {\n//     const url = new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/lib/api/session`);\n//     url.searchParams.append(\"id\", id); // Добавляем параметр lang\n//     const res = await fetch(url.toString(), {\n//       method: \"POST\", // Указываем метод POST\n//       headers: {\n//         \"Content-Type\": \"application/json\", // Устанавливаем заголовок\n//       },\n//       body: JSON.stringify({ id }), // Передаём данные в теле запроса\n//     });\n//     if (!res.ok) throw new Error(\"Ошибка при загрузке товаров\");\n//     const session = await res.json();\n//     return session;\n//   } catch (error) {\n//     console.error(\"Error fetching products:\", error);\n//     return []; // Возвращаем пустой массив, если произошла ошибка\n//   }\n// }\nasync function createSession(id) {\n    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\n    // 2. Encrypt the session ID\n    const session = await encrypt({\n        userId: id,\n        expiresAt: expiresAt,\n        role: \"user\"\n    });\n    // 3. Store the session in cookies for optimistic auth checks\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    cookieStore.set(\"session\", session, {\n        httpOnly: true,\n        secure: true,\n        expires: expiresAt,\n        sameSite: \"lax\",\n        path: \"/\"\n    });\n}\nasync function updateSession() {\n    const session = (await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)()).get(\"session\")?.value;\n    const payload = await decrypt(session);\n    if (!session || !payload) {\n        return null;\n    }\n    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)(await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)()).set(\"session\", session, {\n        httpOnly: true,\n        secure: true,\n        expires: expires,\n        sameSite: \"lax\",\n        path: \"/\"\n    });\n}\nfunction getSessionCookie() {\n    return (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"session\");\n}\nasync function deleteSession() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    cookieStore.delete(\"session\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9zZXNzaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFCO0FBQ2tCO0FBQ0c7QUFFMUMsTUFBTUcsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQzVDLE1BQU1DLGFBQWEsSUFBSUMsY0FBY0MsTUFBTSxDQUFDTjtBQUVyQyxlQUFlTyxRQUFRQyxPQUFPO0lBQ25DLE9BQU8sSUFBSVYseUNBQU9BLENBQUNVLFNBQ2hCQyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO0lBQVEsR0FDbENDLFdBQVcsR0FDWEMsaUJBQWlCLENBQUMsTUFDbEJDLElBQUksQ0FBQ1Q7QUFDVjtBQUVPLGVBQWVVLFFBQVFDLE9BQU87SUFDbkMsSUFBSTtRQUNGLE1BQU0sRUFBRVAsT0FBTyxFQUFFLEdBQUcsTUFBTVQsK0NBQVNBLENBQUNnQixTQUFTWCxZQUFZO1lBQ3ZEWSxZQUFZO2dCQUFDO2FBQVE7UUFDdkI7UUFDQSxPQUFPUjtJQUNULEVBQUUsT0FBT1MsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUM7SUFDZDtBQUNGO0FBRUEsaURBQWlEO0FBQ2pELFVBQVU7QUFDVixrRkFBa0Y7QUFDbEYsb0VBQW9FO0FBQ3BFLGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsbUJBQW1CO0FBQ25CLHlFQUF5RTtBQUN6RSxXQUFXO0FBQ1gsd0VBQXdFO0FBQ3hFLFVBQVU7QUFFVixtRUFBbUU7QUFDbkUsd0NBQXdDO0FBQ3hDLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsd0RBQXdEO0FBQ3hELG9FQUFvRTtBQUNwRSxNQUFNO0FBQ04sSUFBSTtBQUVHLGVBQWVDLGNBQWNDLEVBQUU7SUFDcEMsTUFBTUMsWUFBWSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSztJQUUzRCw0QkFBNEI7SUFFNUIsTUFBTVQsVUFBVSxNQUFNUixRQUFRO1FBQzVCa0IsUUFBUUo7UUFDUkMsV0FBV0E7UUFDWEksTUFBTTtJQUNSO0lBRUEsNkRBQTZEO0lBQzdELE1BQU1DLGNBQWMsTUFBTTlCLHFEQUFPQTtJQUNqQzhCLFlBQVlDLEdBQUcsQ0FBQyxXQUFXYixTQUFTO1FBQ2xDYyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBU1Q7UUFDVFUsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7QUFDRjtBQUVPLGVBQWVDO0lBQ3BCLE1BQU1uQixVQUFVLENBQUMsTUFBTWxCLHFEQUFPQSxFQUFDLEVBQUdzQyxHQUFHLENBQUMsWUFBWUM7SUFDbEQsTUFBTTVCLFVBQVUsTUFBTU0sUUFBUUM7SUFFOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNQLFNBQVM7UUFDeEIsT0FBTztJQUNUO0lBRUEsTUFBTXVCLFVBQVUsSUFBSVIsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssTUFDdkQsTUFBTTNCLHFEQUFPQSxJQUNiK0IsR0FBRyxDQUFDLFdBQVdiLFNBQVM7UUFDeEJjLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxTQUFTQTtRQUNUQyxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtBQUNGO0FBRU8sU0FBU0k7SUFDZCxPQUFPeEMscURBQU9BLEdBQUdzQyxHQUFHLENBQUM7QUFDdkI7QUFFTyxlQUFlRztJQUNwQixNQUFNWCxjQUFjLE1BQU05QixxREFBT0E7SUFFakM4QixZQUFZWSxNQUFNLENBQUM7QUFDckIiLCJzb3VyY2VzIjpbIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvYXBwL2xpYi9zZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInNlcnZlci1vbmx5XCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcblxuY29uc3Qgc2VjcmV0S2V5ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5jb25zdCBlbmNvZGVkS2V5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHNlY3JldEtleSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbmNyeXB0KHBheWxvYWQpIHtcbiAgcmV0dXJuIG5ldyBTaWduSldUKHBheWxvYWQpXG4gICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogXCJIUzI1NlwiIH0pXG4gICAgLnNldElzc3VlZEF0KClcbiAgICAuc2V0RXhwaXJhdGlvblRpbWUoXCIxZFwiKVxuICAgIC5zaWduKGVuY29kZWRLZXkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdChzZXNzaW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkoc2Vzc2lvbiwgZW5jb2RlZEtleSwge1xuICAgICAgYWxnb3JpdGhtczogW1wiSFMyNTZcIl0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gdmVyaWZ5IHNlc3Npb25cIik7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ3JlYXRlU2Vzc2lvbihpZCkge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkx9L2xpYi9hcGkvc2Vzc2lvbmApO1xuLy8gICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiaWRcIiwgaWQpOyAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0L/QsNGA0LDQvNC10YLRgCBsYW5nXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLnRvU3RyaW5nKCksIHtcbi8vICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vINCj0LrQsNC30YvQstCw0LXQvCDQvNC10YLQvtC0IFBPU1Rcbi8vICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC30LDQs9C+0LvQvtCy0L7QulxuLy8gICAgICAgfSxcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksIC8vINCf0LXRgNC10LTQsNGR0Lwg0LTQsNC90L3Ri9C1INCyINGC0LXQu9C1INC30LDQv9GA0L7RgdCwXG4vLyAgICAgfSk7XG5cbi8vICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwi0J7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGC0L7QstCw0YDQvtCyXCIpO1xuLy8gICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAgIHJldHVybiBzZXNzaW9uO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9kdWN0czpcIiwgZXJyb3IpO1xuLy8gICAgIHJldHVybiBbXTsgLy8g0JLQvtC30LLRgNCw0YnQsNC10Lwg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQsiwg0LXRgdC70Lgg0L/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsFxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGlkKSB7XG4gIGNvbnN0IGV4cGlyZXNBdCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgLy8gMi4gRW5jcnlwdCB0aGUgc2Vzc2lvbiBJRFxuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBlbmNyeXB0KHtcbiAgICB1c2VySWQ6IGlkLFxuICAgIGV4cGlyZXNBdDogZXhwaXJlc0F0LFxuICAgIHJvbGU6IFwidXNlclwiLFxuICB9KTtcblxuICAvLyAzLiBTdG9yZSB0aGUgc2Vzc2lvbiBpbiBjb29raWVzIGZvciBvcHRpbWlzdGljIGF1dGggY2hlY2tzXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICBjb29raWVTdG9yZS5zZXQoXCJzZXNzaW9uXCIsIHNlc3Npb24sIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgZXhwaXJlczogZXhwaXJlc0F0LFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oKSB7XG4gIGNvbnN0IHNlc3Npb24gPSAoYXdhaXQgY29va2llcygpKS5nZXQoXCJzZXNzaW9uXCIpPy52YWx1ZTtcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGRlY3J5cHQoc2Vzc2lvbik7XG5cbiAgaWYgKCFzZXNzaW9uIHx8ICFwYXlsb2FkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKShcbiAgICBhd2FpdCBjb29raWVzKClcbiAgKS5zZXQoXCJzZXNzaW9uXCIsIHNlc3Npb24sIHtcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgZXhwaXJlczogZXhwaXJlcyxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uQ29va2llKCkge1xuICByZXR1cm4gY29va2llcygpLmdldChcInNlc3Npb25cIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKCkge1xuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcblxuICBjb29raWVTdG9yZS5kZWxldGUoXCJzZXNzaW9uXCIpO1xufVxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJTaWduSldUIiwiand0VmVyaWZ5Iiwic2VjcmV0S2V5IiwicHJvY2VzcyIsImVudiIsIlNFU1NJT05fU0VDUkVUIiwiZW5jb2RlZEtleSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiZW5jcnlwdCIsInBheWxvYWQiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldEV4cGlyYXRpb25UaW1lIiwic2lnbiIsImRlY3J5cHQiLCJzZXNzaW9uIiwiYWxnb3JpdGhtcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVNlc3Npb24iLCJpZCIsImV4cGlyZXNBdCIsIkRhdGUiLCJub3ciLCJ1c2VySWQiLCJyb2xlIiwiY29va2llU3RvcmUiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsImV4cGlyZXMiLCJzYW1lU2l0ZSIsInBhdGgiLCJ1cGRhdGVTZXNzaW9uIiwiZ2V0IiwidmFsdWUiLCJnZXRTZXNzaW9uQ29va2llIiwiZGVsZXRlU2Vzc2lvbiIsImRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/session.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/InitDatabase.js":
/*!***************************************!*\
  !*** ./src/app/utils/InitDatabase.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("// 1. У любого пользователя будет как минимум в БД  qualities и professions\n// 2. Они равны mock данным\n\nconst ProductTranslation = __webpack_require__(/*! ../../models/ProductTranslate.js */ \"(rsc)/./src/models/ProductTranslate.js\");\nconst Product = __webpack_require__(/*! ../../models/Product.js */ \"(rsc)/./src/models/Product.js\");\nconst ProductInfo = __webpack_require__(/*! ../../models/ProductInfo.js */ \"(rsc)/./src/models/ProductInfo.js\");\nconst ProductInfoTranslation = __webpack_require__(/*! ../../models/ProductInfoTranslation.js */ \"(rsc)/./src/models/ProductInfoTranslation.js\");\nconst productTranslateMock = __webpack_require__(/*! ../mock/producttranslations.json */ \"(rsc)/./src/app/mock/producttranslations.json\");\nconst productMock = __webpack_require__(/*! ../mock/product.json */ \"(rsc)/./src/app/mock/product.json\");\nconst productInfoMock = __webpack_require__(/*! ../mock/productinfo.json */ \"(rsc)/./src/app/mock/productinfo.json\");\nconst productInfoTranslationMock = __webpack_require__(/*! ../mock/productinfotranslation.json */ \"(rsc)/./src/app/mock/productinfotranslation.json\");\nmodule.exports = async ()=>{\n    const productTranslate = await ProductTranslation.find();\n    if (productTranslate.length !== productTranslateMock.length) {\n        await createInitialEntity(ProductTranslation, productTranslateMock);\n    }\n    const products = await Product.find();\n    if (products.length !== productMock.length) {\n        await createInitialEntity(Product, productMock);\n    }\n    const productInfo = await ProductInfo.find();\n    console.log(\"1111\", productInfo.length, productInfoMock.length);\n    if (productInfo.length !== productInfoMock.length) {\n        const list = products.map((elem)=>{\n            return elem._id;\n        });\n        console.log(\"list\", list, list.length);\n        await createInitialEntityNew(ProductInfo, productInfoMock, \"productId\", list);\n    }\n    const productInfoTranslation = await ProductInfoTranslation.find();\n    if (productInfoTranslation.length !== productInfoTranslationMock.length) {\n        let newList = [];\n        const list = await ProductInfo.find();\n        list.map((elem)=>{\n            newList.push(elem._id);\n            newList.push(elem._id);\n            newList.push(elem._id);\n        });\n        console.log(\"newList\", newList);\n        await createInitialEntityNew(ProductInfoTranslation, productInfoTranslationMock, \"productInfoId\", newList);\n    }\n};\nasync function createInitialEntity(Model, data) {\n    await Model.collection.drop();\n    return Promise.all(data.map(async (item)=>{\n        try {\n            delete item._id;\n            const newItem = new Model(item);\n            await newItem.save();\n            return newItem;\n        } catch (e) {\n            return e;\n        }\n    }));\n}\nasync function createInitialEntityNew(Model, data, str, list) {\n    await Model.collection.drop();\n    return Promise.all(data.map(async (item, index)=>{\n        try {\n            delete item._id;\n            const newItem = new Model({\n                ...item,\n                [str]: list[index]\n            });\n            if (item?.[str] !== list[index]) {\n                await newItem.save();\n                return newItem;\n            }\n        } catch (e) {\n            return e;\n        }\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL0luaXREYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7QUFDM0UsMkJBQTJCOztBQUMzQixNQUFNQSxxQkFBcUJDLG1CQUFPQSxDQUFDLGdGQUFrQztBQUNyRSxNQUFNQyxVQUFVRCxtQkFBT0EsQ0FBQyw4REFBeUI7QUFDakQsTUFBTUUsY0FBY0YsbUJBQU9BLENBQUMsc0VBQTZCO0FBQ3pELE1BQU1HLHlCQUF5QkgsbUJBQU9BLENBQUMsNEZBQXdDO0FBQy9FLE1BQU1JLHVCQUF1QkosbUJBQU9BLENBQUMsdUZBQWtDO0FBQ3ZFLE1BQU1LLGNBQWNMLG1CQUFPQSxDQUFDLCtEQUFzQjtBQUNsRCxNQUFNTSxrQkFBa0JOLG1CQUFPQSxDQUFDLHVFQUEwQjtBQUMxRCxNQUFNTyw2QkFBNkJQLG1CQUFPQSxDQUFDLDZGQUFxQztBQUVoRlEsT0FBT0MsT0FBTyxHQUFHO0lBQ2YsTUFBTUMsbUJBQW1CLE1BQU1YLG1CQUFtQlksSUFBSTtJQUN0RCxJQUFJRCxpQkFBaUJFLE1BQU0sS0FBS1IscUJBQXFCUSxNQUFNLEVBQUU7UUFDM0QsTUFBTUMsb0JBQW9CZCxvQkFBb0JLO0lBQ2hEO0lBQ0EsTUFBTVUsV0FBVyxNQUFNYixRQUFRVSxJQUFJO0lBQ25DLElBQUlHLFNBQVNGLE1BQU0sS0FBS1AsWUFBWU8sTUFBTSxFQUFFO1FBQzFDLE1BQU1DLG9CQUFvQlosU0FBU0k7SUFDckM7SUFDQSxNQUFNVSxjQUFjLE1BQU1iLFlBQVlTLElBQUk7SUFDMUNLLFFBQVFDLEdBQUcsQ0FBQyxRQUFRRixZQUFZSCxNQUFNLEVBQUVOLGdCQUFnQk0sTUFBTTtJQUM5RCxJQUFJRyxZQUFZSCxNQUFNLEtBQUtOLGdCQUFnQk0sTUFBTSxFQUFFO1FBQ2pELE1BQU1NLE9BQU9KLFNBQVNLLEdBQUcsQ0FBQyxDQUFDQztZQUN6QixPQUFPQSxLQUFLQyxHQUFHO1FBQ2pCO1FBQ0FMLFFBQVFDLEdBQUcsQ0FBQyxRQUFRQyxNQUFNQSxLQUFLTixNQUFNO1FBQ3JDLE1BQU1VLHVCQUNKcEIsYUFDQUksaUJBQ0EsYUFDQVk7SUFFSjtJQUNBLE1BQU1LLHlCQUF5QixNQUFNcEIsdUJBQXVCUSxJQUFJO0lBQ2hFLElBQUlZLHVCQUF1QlgsTUFBTSxLQUFLTCwyQkFBMkJLLE1BQU0sRUFBRTtRQUN2RSxJQUFJWSxVQUFVLEVBQUU7UUFDaEIsTUFBTU4sT0FBTyxNQUFNaEIsWUFBWVMsSUFBSTtRQUNuQ08sS0FBS0MsR0FBRyxDQUFDLENBQUNDO1lBQ1JJLFFBQVFDLElBQUksQ0FBQ0wsS0FBS0MsR0FBRztZQUNyQkcsUUFBUUMsSUFBSSxDQUFDTCxLQUFLQyxHQUFHO1lBQ3JCRyxRQUFRQyxJQUFJLENBQUNMLEtBQUtDLEdBQUc7UUFDdkI7UUFDQUwsUUFBUUMsR0FBRyxDQUFDLFdBQVdPO1FBQ3ZCLE1BQU1GLHVCQUNKbkIsd0JBQ0FJLDRCQUNBLGlCQUNBaUI7SUFFSjtBQUNGO0FBRUEsZUFBZVgsb0JBQW9CYSxLQUFLLEVBQUVDLElBQUk7SUFDNUMsTUFBTUQsTUFBTUUsVUFBVSxDQUFDQyxJQUFJO0lBQzNCLE9BQU9DLFFBQVFDLEdBQUcsQ0FDaEJKLEtBQUtSLEdBQUcsQ0FBQyxPQUFPYTtRQUNkLElBQUk7WUFDRixPQUFPQSxLQUFLWCxHQUFHO1lBQ2YsTUFBTVksVUFBVSxJQUFJUCxNQUFNTTtZQUMxQixNQUFNQyxRQUFRQyxJQUFJO1lBQ2xCLE9BQU9EO1FBQ1QsRUFBRSxPQUFPRSxHQUFHO1lBQ1YsT0FBT0E7UUFDVDtJQUNGO0FBRUo7QUFFQSxlQUFlYix1QkFBdUJJLEtBQUssRUFBRUMsSUFBSSxFQUFFUyxHQUFHLEVBQUVsQixJQUFJO0lBQzFELE1BQU1RLE1BQU1FLFVBQVUsQ0FBQ0MsSUFBSTtJQUMzQixPQUFPQyxRQUFRQyxHQUFHLENBQ2hCSixLQUFLUixHQUFHLENBQUMsT0FBT2EsTUFBTUs7UUFDcEIsSUFBSTtZQUNGLE9BQU9MLEtBQUtYLEdBQUc7WUFDZixNQUFNWSxVQUFVLElBQUlQLE1BQU07Z0JBQUUsR0FBR00sSUFBSTtnQkFBRSxDQUFDSSxJQUFJLEVBQUVsQixJQUFJLENBQUNtQixNQUFNO1lBQUM7WUFDeEQsSUFBSUwsTUFBTSxDQUFDSSxJQUFJLEtBQUtsQixJQUFJLENBQUNtQixNQUFNLEVBQUU7Z0JBQy9CLE1BQU1KLFFBQVFDLElBQUk7Z0JBQ2xCLE9BQU9EO1lBQ1Q7UUFDRixFQUFFLE9BQU9FLEdBQUc7WUFDVixPQUFPQTtRQUNUO0lBQ0Y7QUFFSiIsInNvdXJjZXMiOlsiL2hvbWUvYXNzZXQvcHJvamVjdHMvYWxtYWxlL2FsbWFsZS1uZXh0L3NyYy9hcHAvdXRpbHMvSW5pdERhdGFiYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIDEuINCjINC70Y7QsdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LHRg9C00LXRgiDQutCw0Log0LzQuNC90LjQvNGD0Lwg0LIg0JHQlCAgcXVhbGl0aWVzINC4IHByb2Zlc3Npb25zXG4vLyAyLiDQntC90Lgg0YDQsNCy0L3RiyBtb2NrINC00LDQvdC90YvQvFxuY29uc3QgUHJvZHVjdFRyYW5zbGF0aW9uID0gcmVxdWlyZShcIi4uLy4uL21vZGVscy9Qcm9kdWN0VHJhbnNsYXRlLmpzXCIpO1xuY29uc3QgUHJvZHVjdCA9IHJlcXVpcmUoXCIuLi8uLi9tb2RlbHMvUHJvZHVjdC5qc1wiKTtcbmNvbnN0IFByb2R1Y3RJbmZvID0gcmVxdWlyZShcIi4uLy4uL21vZGVscy9Qcm9kdWN0SW5mby5qc1wiKTtcbmNvbnN0IFByb2R1Y3RJbmZvVHJhbnNsYXRpb24gPSByZXF1aXJlKFwiLi4vLi4vbW9kZWxzL1Byb2R1Y3RJbmZvVHJhbnNsYXRpb24uanNcIik7XG5jb25zdCBwcm9kdWN0VHJhbnNsYXRlTW9jayA9IHJlcXVpcmUoXCIuLi9tb2NrL3Byb2R1Y3R0cmFuc2xhdGlvbnMuanNvblwiKTtcbmNvbnN0IHByb2R1Y3RNb2NrID0gcmVxdWlyZShcIi4uL21vY2svcHJvZHVjdC5qc29uXCIpO1xuY29uc3QgcHJvZHVjdEluZm9Nb2NrID0gcmVxdWlyZShcIi4uL21vY2svcHJvZHVjdGluZm8uanNvblwiKTtcbmNvbnN0IHByb2R1Y3RJbmZvVHJhbnNsYXRpb25Nb2NrID0gcmVxdWlyZShcIi4uL21vY2svcHJvZHVjdGluZm90cmFuc2xhdGlvbi5qc29uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJvZHVjdFRyYW5zbGF0ZSA9IGF3YWl0IFByb2R1Y3RUcmFuc2xhdGlvbi5maW5kKCk7XG4gIGlmIChwcm9kdWN0VHJhbnNsYXRlLmxlbmd0aCAhPT0gcHJvZHVjdFRyYW5zbGF0ZU1vY2subGVuZ3RoKSB7XG4gICAgYXdhaXQgY3JlYXRlSW5pdGlhbEVudGl0eShQcm9kdWN0VHJhbnNsYXRpb24sIHByb2R1Y3RUcmFuc2xhdGVNb2NrKTtcbiAgfVxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpO1xuICBpZiAocHJvZHVjdHMubGVuZ3RoICE9PSBwcm9kdWN0TW9jay5sZW5ndGgpIHtcbiAgICBhd2FpdCBjcmVhdGVJbml0aWFsRW50aXR5KFByb2R1Y3QsIHByb2R1Y3RNb2NrKTtcbiAgfVxuICBjb25zdCBwcm9kdWN0SW5mbyA9IGF3YWl0IFByb2R1Y3RJbmZvLmZpbmQoKTtcbiAgY29uc29sZS5sb2coXCIxMTExXCIsIHByb2R1Y3RJbmZvLmxlbmd0aCwgcHJvZHVjdEluZm9Nb2NrLmxlbmd0aCk7XG4gIGlmIChwcm9kdWN0SW5mby5sZW5ndGggIT09IHByb2R1Y3RJbmZvTW9jay5sZW5ndGgpIHtcbiAgICBjb25zdCBsaXN0ID0gcHJvZHVjdHMubWFwKChlbGVtKSA9PiB7XG4gICAgICByZXR1cm4gZWxlbS5faWQ7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJsaXN0XCIsIGxpc3QsIGxpc3QubGVuZ3RoKTtcbiAgICBhd2FpdCBjcmVhdGVJbml0aWFsRW50aXR5TmV3KFxuICAgICAgUHJvZHVjdEluZm8sXG4gICAgICBwcm9kdWN0SW5mb01vY2ssXG4gICAgICBcInByb2R1Y3RJZFwiLFxuICAgICAgbGlzdFxuICAgICk7XG4gIH1cbiAgY29uc3QgcHJvZHVjdEluZm9UcmFuc2xhdGlvbiA9IGF3YWl0IFByb2R1Y3RJbmZvVHJhbnNsYXRpb24uZmluZCgpO1xuICBpZiAocHJvZHVjdEluZm9UcmFuc2xhdGlvbi5sZW5ndGggIT09IHByb2R1Y3RJbmZvVHJhbnNsYXRpb25Nb2NrLmxlbmd0aCkge1xuICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IFByb2R1Y3RJbmZvLmZpbmQoKTtcbiAgICBsaXN0Lm1hcCgoZWxlbSkgPT4ge1xuICAgICAgbmV3TGlzdC5wdXNoKGVsZW0uX2lkKTtcbiAgICAgIG5ld0xpc3QucHVzaChlbGVtLl9pZCk7XG4gICAgICBuZXdMaXN0LnB1c2goZWxlbS5faWQpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwibmV3TGlzdFwiLCBuZXdMaXN0KTtcbiAgICBhd2FpdCBjcmVhdGVJbml0aWFsRW50aXR5TmV3KFxuICAgICAgUHJvZHVjdEluZm9UcmFuc2xhdGlvbixcbiAgICAgIHByb2R1Y3RJbmZvVHJhbnNsYXRpb25Nb2NrLFxuICAgICAgXCJwcm9kdWN0SW5mb0lkXCIsXG4gICAgICBuZXdMaXN0XG4gICAgKTtcbiAgfVxufTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5pdGlhbEVudGl0eShNb2RlbCwgZGF0YSkge1xuICBhd2FpdCBNb2RlbC5jb2xsZWN0aW9uLmRyb3AoKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgIGRhdGEubWFwKGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkZWxldGUgaXRlbS5faWQ7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgTW9kZWwoaXRlbSk7XG4gICAgICAgIGF3YWl0IG5ld0l0ZW0uc2F2ZSgpO1xuICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5pdGlhbEVudGl0eU5ldyhNb2RlbCwgZGF0YSwgc3RyLCBsaXN0KSB7XG4gIGF3YWl0IE1vZGVsLmNvbGxlY3Rpb24uZHJvcCgpO1xuICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgZGF0YS5tYXAoYXN5bmMgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkZWxldGUgaXRlbS5faWQ7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgTW9kZWwoeyAuLi5pdGVtLCBbc3RyXTogbGlzdFtpbmRleF0gfSk7XG4gICAgICAgIGlmIChpdGVtPy5bc3RyXSAhPT0gbGlzdFtpbmRleF0pIHtcbiAgICAgICAgICBhd2FpdCBuZXdJdGVtLnNhdmUoKTtcbiAgICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xufVxuIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2xhdGlvbiIsInJlcXVpcmUiLCJQcm9kdWN0IiwiUHJvZHVjdEluZm8iLCJQcm9kdWN0SW5mb1RyYW5zbGF0aW9uIiwicHJvZHVjdFRyYW5zbGF0ZU1vY2siLCJwcm9kdWN0TW9jayIsInByb2R1Y3RJbmZvTW9jayIsInByb2R1Y3RJbmZvVHJhbnNsYXRpb25Nb2NrIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2R1Y3RUcmFuc2xhdGUiLCJmaW5kIiwibGVuZ3RoIiwiY3JlYXRlSW5pdGlhbEVudGl0eSIsInByb2R1Y3RzIiwicHJvZHVjdEluZm8iLCJjb25zb2xlIiwibG9nIiwibGlzdCIsIm1hcCIsImVsZW0iLCJfaWQiLCJjcmVhdGVJbml0aWFsRW50aXR5TmV3IiwicHJvZHVjdEluZm9UcmFuc2xhdGlvbiIsIm5ld0xpc3QiLCJwdXNoIiwiTW9kZWwiLCJkYXRhIiwiY29sbGVjdGlvbiIsImRyb3AiLCJQcm9taXNlIiwiYWxsIiwiaXRlbSIsIm5ld0l0ZW0iLCJzYXZlIiwiZSIsInN0ciIsImluZGV4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/InitDatabase.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/randomNumber.js":
/*!***************************************!*\
  !*** ./src/app/utils/randomNumber.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("\nclass RandomNumberGenerator {\n    constructor(){\n        this.interval = 180000;\n        this.number = \"\";\n        this.start();\n    }\n    generateRandomNumber() {\n        let randomNumber = \"\";\n        for(let i = 0; i < 6; i++){\n            randomNumber += Math.floor(Math.random() * 10);\n        }\n        this.number = randomNumber;\n    }\n    getNumber() {\n        return this.number;\n    }\n    start() {\n        this.generateRandomNumber(); // Generate the first random number immediately\n        this.intervalId = setInterval(()=>this.generateRandomNumber(), this.interval);\n    }\n}\nmodule.exports = new RandomNumberGenerator();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL3JhbmRvbU51bWJlci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUE7SUFDSkMsYUFBYztRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHO1FBQ2QsSUFBSSxDQUFDQyxLQUFLO0lBQ1o7SUFFQUMsdUJBQXVCO1FBQ3JCLElBQUlDLGVBQWU7UUFDbkIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSztZQUMxQkQsZ0JBQWdCRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztRQUM3QztRQUNBLElBQUksQ0FBQ1AsTUFBTSxHQUFHRztJQUNoQjtJQUVBSyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNSLE1BQU07SUFDcEI7SUFFQUMsUUFBUTtRQUNOLElBQUksQ0FBQ0Msb0JBQW9CLElBQUksK0NBQStDO1FBQzVFLElBQUksQ0FBQ08sVUFBVSxHQUFHQyxZQUNoQixJQUFNLElBQUksQ0FBQ1Isb0JBQW9CLElBQy9CLElBQUksQ0FBQ0gsUUFBUTtJQUVqQjtBQUNGO0FBRUFZLE9BQU9DLE9BQU8sR0FBRyxJQUFJZiIsInNvdXJjZXMiOlsiL2hvbWUvYXNzZXQvcHJvamVjdHMvYWxtYWxlL2FsbWFsZS1uZXh0L3NyYy9hcHAvdXRpbHMvcmFuZG9tTnVtYmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJhbmRvbU51bWJlckdlbmVyYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSAxODAwMDA7XG4gICAgdGhpcy5udW1iZXIgPSBcIlwiO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xuICAgIGxldCByYW5kb21OdW1iZXIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICByYW5kb21OdW1iZXIgKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICB0aGlzLm51bWJlciA9IHJhbmRvbU51bWJlcjtcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7IC8vIEdlbmVyYXRlIHRoZSBmaXJzdCByYW5kb20gbnVtYmVyIGltbWVkaWF0ZWx5XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoXG4gICAgICAoKSA9PiB0aGlzLmdlbmVyYXRlUmFuZG9tTnVtYmVyKCksXG4gICAgICB0aGlzLmludGVydmFsXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBSYW5kb21OdW1iZXJHZW5lcmF0b3IoKTtcbiJdLCJuYW1lcyI6WyJSYW5kb21OdW1iZXJHZW5lcmF0b3IiLCJjb25zdHJ1Y3RvciIsImludGVydmFsIiwibnVtYmVyIiwic3RhcnQiLCJnZW5lcmF0ZVJhbmRvbU51bWJlciIsInJhbmRvbU51bWJlciIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXROdW1iZXIiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/randomNumber.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/sendVerificationMail.js":
/*!***********************************************!*\
  !*** ./src/app/utils/sendVerificationMail.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\n// отправка верификации\nconst sendVerificationMail = async (user, number)=>{\n    let transporter = nodemailer.createTransport({\n        host: \"smtp.mail.ru\",\n        port: 465,\n        secure: true,\n        auth: {\n            user: process.env.USERNAME_NODEMAILER,\n            pass: process.env.PASSWORD_NODEMAILER\n        }\n    }, {\n        // default message fields\n        // sender info\n        from: `Alma Le <${process.env.USERNAME_NODEMAILER}>`,\n        headers: {\n            \"X-Laziness-level\": 1000\n        }\n    });\n    let mailOptions = {\n        to: user.email,\n        subject: \"Sending Email using Node.js\",\n        text: `${user.name}, Вас Приветствует компания Alma Le`,\n        html: `<h1>Вас приветствует Alma Le</h1>\n    <p >Введите код верификации ${number}</p>`\n    };\n    transporter.sendMail(mailOptions, (error, info)=>{\n        if (error) {\n            console.log(\"Error occurred\");\n            console.log(error.message);\n            return process.exit(1);\n        }\n        console.log(\"Message code sent successfully!\");\n    });\n};\nmodule.exports = {\n    sendVerificationMail\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL3NlbmRWZXJpZmljYXRpb25NYWlsLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBRWIsTUFBTUEsYUFBYUMsbUJBQU9BLENBQUMscUVBQVk7QUFDdkNBLHFGQUF3QjtBQUV4Qix1QkFBdUI7QUFDdkIsTUFBTUUsdUJBQXVCLE9BQU9DLE1BQU1DO0lBQ3hDLElBQUlDLGNBQWNOLFdBQVdPLGVBQWUsQ0FDMUM7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsTUFBTTtZQUNKUCxNQUFNUSxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtZQUNyQ0MsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxtQkFBbUI7UUFDdkM7SUFDRixHQUNBO1FBQ0UseUJBQXlCO1FBRXpCLGNBQWM7UUFDZEMsTUFBTSxDQUFDLFNBQVMsRUFBRUwsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDcERJLFNBQVM7WUFDUCxvQkFBb0I7UUFDdEI7SUFDRjtJQUdGLElBQUlDLGNBQWM7UUFDaEJDLElBQUloQixLQUFLaUIsS0FBSztRQUNkQyxTQUFTO1FBQ1RDLE1BQU0sR0FBR25CLEtBQUtvQixJQUFJLENBQUMsbUNBQW1DLENBQUM7UUFDdkRDLE1BQU0sQ0FBQztnQ0FDcUIsRUFBRXBCLE9BQU8sSUFBSSxDQUFDO0lBQzVDO0lBRUFDLFlBQVlvQixRQUFRLENBQUNQLGFBQWEsQ0FBQ1EsT0FBT0M7UUFDeEMsSUFBSUQsT0FBTztZQUNURSxRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDSCxNQUFNSSxPQUFPO1lBQ3pCLE9BQU9uQixRQUFRb0IsSUFBSSxDQUFDO1FBQ3RCO1FBRUFILFFBQVFDLEdBQUcsQ0FBQztJQUNkO0FBQ0Y7QUFFQUcsT0FBT0MsT0FBTyxHQUFHO0lBQUUvQjtBQUFxQiIsInNvdXJjZXMiOlsiL2hvbWUvYXNzZXQvcHJvamVjdHMvYWxtYWxlL2FsbWFsZS1uZXh0L3NyYy9hcHAvdXRpbHMvc2VuZFZlcmlmaWNhdGlvbk1haWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5cbi8vINC+0YLQv9GA0LDQstC60LAg0LLQtdGA0LjRhNC40LrQsNGG0LjQuFxuY29uc3Qgc2VuZFZlcmlmaWNhdGlvbk1haWwgPSBhc3luYyAodXNlciwgbnVtYmVyKSA9PiB7XG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KFxuICAgIHtcbiAgICAgIGhvc3Q6IFwic210cC5tYWlsLnJ1XCIsXG4gICAgICBwb3J0OiA0NjUsXG4gICAgICBzZWN1cmU6IHRydWUsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVJOQU1FX05PREVNQUlMRVIsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlBBU1NXT1JEX05PREVNQUlMRVIsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgLy8gZGVmYXVsdCBtZXNzYWdlIGZpZWxkc1xuXG4gICAgICAvLyBzZW5kZXIgaW5mb1xuICAgICAgZnJvbTogYEFsbWEgTGUgPCR7cHJvY2Vzcy5lbnYuVVNFUk5BTUVfTk9ERU1BSUxFUn0+YCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLUxhemluZXNzLWxldmVsXCI6IDEwMDAsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBsZXQgbWFpbE9wdGlvbnMgPSB7XG4gICAgdG86IHVzZXIuZW1haWwsXG4gICAgc3ViamVjdDogXCJTZW5kaW5nIEVtYWlsIHVzaW5nIE5vZGUuanNcIixcbiAgICB0ZXh0OiBgJHt1c2VyLm5hbWV9LCDQktCw0YEg0J/RgNC40LLQtdGC0YHRgtCy0YPQtdGCINC60L7QvNC/0LDQvdC40Y8gQWxtYSBMZWAsXG4gICAgaHRtbDogYDxoMT7QktCw0YEg0L/RgNC40LLQtdGC0YHRgtCy0YPQtdGCIEFsbWEgTGU8L2gxPlxuICAgIDxwID7QktCy0LXQtNC40YLQtSDQutC+0LQg0LLQtdGA0LjRhNC40LrQsNGG0LjQuCAke251bWJlcn08L3A+YCxcbiAgfTtcblxuICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBjb2RlIHNlbnQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgc2VuZFZlcmlmaWNhdGlvbk1haWwgfTtcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwicmVxdWlyZSIsImNvbmZpZyIsInNlbmRWZXJpZmljYXRpb25NYWlsIiwidXNlciIsIm51bWJlciIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIlVTRVJOQU1FX05PREVNQUlMRVIiLCJwYXNzIiwiUEFTU1dPUkRfTk9ERU1BSUxFUiIsImZyb20iLCJoZWFkZXJzIiwibWFpbE9wdGlvbnMiLCJ0byIsImVtYWlsIiwic3ViamVjdCIsInRleHQiLCJuYW1lIiwiaHRtbCIsInNlbmRNYWlsIiwiZXJyb3IiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJleGl0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/sendVerificationMail.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Order.js":
/*!*****************************!*\
  !*** ./src/models/Order.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst { Schema, model, models } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = new Schema({\n    name: {\n        type: String,\n        required: true,\n        minLength: 3,\n        maxLength: 100\n    },\n    email: {\n        type: String,\n        maxLength: 200,\n        required: true\n    },\n    mobile: {\n        type: String,\n        required: true,\n        maxLength: 30\n    },\n    street: {\n        type: String,\n        maxLength: 100\n    },\n    city: {\n        type: String,\n        maxLength: 200\n    },\n    productId: {\n        type: String,\n        maxLength: 50\n    },\n    deliveryPrice: {\n        type: Number,\n        maxLength: 20\n    },\n    postalCode: {\n        type: String,\n        maxLength: 20\n    },\n    quantity: {\n        type: Number,\n        maxLength: 5\n    },\n    total: {\n        type: Number,\n        maxLength: 20\n    },\n    userId: {\n        type: String,\n        maxLength: 40\n    },\n    numberCheck: {\n        type: String,\n        maxLength: 6\n    }\n}, {\n    timestamps: true\n});\nconst Order = models.Order || model(\"Order\", schema);\nmodule.exports = Order;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL09yZGVyLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUVBLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMEJBQVU7QUFFcEQsTUFBTUMsU0FBUyxJQUFJSixPQUNqQjtJQUNFSyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkMsV0FBVztRQUNYQyxXQUFXO0lBQ2I7SUFDQUMsT0FBTztRQUFFTCxNQUFNQztRQUFRRyxXQUFXO1FBQUtGLFVBQVU7SUFBSztJQUN0REksUUFBUTtRQUFFTixNQUFNQztRQUFRQyxVQUFVO1FBQU1FLFdBQVc7SUFBRztJQUN0REcsUUFBUTtRQUFFUCxNQUFNQztRQUFRRyxXQUFXO0lBQUk7SUFDdkNJLE1BQU07UUFBRVIsTUFBTUM7UUFBUUcsV0FBVztJQUFJO0lBQ3JDSyxXQUFXO1FBQUVULE1BQU1DO1FBQVFHLFdBQVc7SUFBRztJQUN6Q00sZUFBZTtRQUFFVixNQUFNVztRQUFRUCxXQUFXO0lBQUc7SUFDN0NRLFlBQVk7UUFBRVosTUFBTUM7UUFBUUcsV0FBVztJQUFHO0lBQzFDUyxVQUFVO1FBQUViLE1BQU1XO1FBQVFQLFdBQVc7SUFBRTtJQUN2Q1UsT0FBTztRQUFFZCxNQUFNVztRQUFRUCxXQUFXO0lBQUc7SUFDckNXLFFBQVE7UUFBRWYsTUFBTUM7UUFBUUcsV0FBVztJQUFHO0lBQ3RDWSxhQUFhO1FBQUVoQixNQUFNQztRQUFRRyxXQUFXO0lBQUU7QUFDNUMsR0FDQTtJQUNFYSxZQUFZO0FBQ2Q7QUFHRixNQUFNQyxRQUFRdEIsT0FBT3NCLEtBQUssSUFBSXZCLE1BQU0sU0FBU0c7QUFFN0NxQixPQUFPQyxPQUFPLEdBQUdGIiwic291cmNlcyI6WyIvaG9tZS9hc3NldC9wcm9qZWN0cy9hbG1hbGUvYWxtYWxlLW5leHQvc3JjL21vZGVscy9PcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9ID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICBtYXhMZW5ndGg6IDEwMCxcbiAgICB9LFxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgbWF4TGVuZ3RoOiAyMDAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbW9iaWxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMzAgfSxcbiAgICBzdHJlZXQ6IHsgdHlwZTogU3RyaW5nLCBtYXhMZW5ndGg6IDEwMCB9LFxuICAgIGNpdHk6IHsgdHlwZTogU3RyaW5nLCBtYXhMZW5ndGg6IDIwMCB9LFxuICAgIHByb2R1Y3RJZDogeyB0eXBlOiBTdHJpbmcsIG1heExlbmd0aDogNTAgfSxcbiAgICBkZWxpdmVyeVByaWNlOiB7IHR5cGU6IE51bWJlciwgbWF4TGVuZ3RoOiAyMCB9LFxuICAgIHBvc3RhbENvZGU6IHsgdHlwZTogU3RyaW5nLCBtYXhMZW5ndGg6IDIwIH0sXG4gICAgcXVhbnRpdHk6IHsgdHlwZTogTnVtYmVyLCBtYXhMZW5ndGg6IDUgfSxcbiAgICB0b3RhbDogeyB0eXBlOiBOdW1iZXIsIG1heExlbmd0aDogMjAgfSxcbiAgICB1c2VySWQ6IHsgdHlwZTogU3RyaW5nLCBtYXhMZW5ndGg6IDQwIH0sXG4gICAgbnVtYmVyQ2hlY2s6IHsgdHlwZTogU3RyaW5nLCBtYXhMZW5ndGg6IDYgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IE9yZGVyID0gbW9kZWxzLk9yZGVyIHx8IG1vZGVsKFwiT3JkZXJcIiwgc2NoZW1hKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcmRlcjtcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInJlcXVpcmUiLCJzY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiZW1haWwiLCJtb2JpbGUiLCJzdHJlZXQiLCJjaXR5IiwicHJvZHVjdElkIiwiZGVsaXZlcnlQcmljZSIsIk51bWJlciIsInBvc3RhbENvZGUiLCJxdWFudGl0eSIsInRvdGFsIiwidXNlcklkIiwibnVtYmVyQ2hlY2siLCJ0aW1lc3RhbXBzIiwiT3JkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Order.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Product.js":
/*!*******************************!*\
  !*** ./src/models/Product.js ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = new _mongoose.Schema({\n    imageUrl: {\n        type: String,\n        required: true,\n        maxLength: 200\n    },\n    quantity: {\n        type: Number\n    },\n    price: {\n        type: Number\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = _mongoose.models?.Product ? _mongoose.models.Product : (0, _mongoose.model)(\"Product\", schema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Byb2R1Y3QuanMiLCJtYXBwaW5ncyI6Ijs7OztzQ0FBc0MsMEJBQVU7QUFFaEQsTUFBTUEsU0FBUyxJQUFJQyxnQkFBTSxDQUN2QjtJQUNFQyxVQUFVO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsV0FBVztJQUFJO0lBQ3pEQyxVQUFVO1FBQUVKLE1BQU1LO0lBQU87SUFDekJDLE9BQU87UUFBRU4sTUFBTUs7SUFBTztBQUN4QixHQUNBO0lBQ0VFLFlBQVk7QUFDZDtBQUdGQyxPQUFPQyxPQUFPLEdBQUdDLGdCQUFNLEVBQUVDLFVBQVVELGdCQUFNLENBQUNDLE9BQU8sR0FBR0MsSUFBQUEsZUFBSyxFQUFDLFdBQVdmIiwic291cmNlcyI6WyIvaG9tZS9hc3NldC9wcm9qZWN0cy9hbG1hbGUvYWxtYWxlLW5leHQvc3JjL21vZGVscy9Qcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgaW1hZ2VVcmw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAyMDAgfSxcbiAgICBxdWFudGl0eTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICBwcmljZTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kZWxzPy5Qcm9kdWN0ID8gbW9kZWxzLlByb2R1Y3QgOiBtb2RlbChcIlByb2R1Y3RcIiwgc2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJTY2hlbWEiLCJpbWFnZVVybCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInF1YW50aXR5IiwiTnVtYmVyIiwicHJpY2UiLCJ0aW1lc3RhbXBzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlByb2R1Y3QiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Product.js\n");

/***/ }),

/***/ "(rsc)/./src/models/ProductInfo.js":
/*!***********************************!*\
  !*** ./src/models/ProductInfo.js ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = new _mongoose.Schema({\n    productId: {\n        type: String,\n        required: true\n    },\n    src: [\n        {\n            type: String\n        }\n    ]\n}, {\n    timestamps: true\n});\nmodule.exports = _mongoose.models?.ProductInfo ? _mongoose.models.ProductInfo : (0, _mongoose.model)(\"ProductInfo\", schema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Byb2R1Y3RJbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7c0NBQXNDLDBCQUFVO0FBRWhELE1BQU1BLFNBQVMsSUFBSUMsZ0JBQU0sQ0FDdkI7SUFDRUMsV0FBVztRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDMUNDLEtBQUs7UUFBQztZQUFFSCxNQUFNQztRQUFPO0tBQUU7QUFDekIsR0FDQTtJQUNFRyxZQUFZO0FBQ2Q7QUFHRkMsT0FBT0MsT0FBTyxHQUFHQyxnQkFBTSxFQUFFQyxjQUNyQkQsZ0JBQU0sQ0FBQ0MsV0FBVyxHQUNsQkMsSUFBQUEsZUFBSyxFQUFDLGVBQWVaIiwic291cmNlcyI6WyIvaG9tZS9hc3NldC9wcm9qZWN0cy9hbG1hbGUvYWxtYWxlLW5leHQvc3JjL21vZGVscy9Qcm9kdWN0SW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgc2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIHByb2R1Y3RJZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgc3JjOiBbeyB0eXBlOiBTdHJpbmcgfV0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGVscz8uUHJvZHVjdEluZm9cbiAgPyBtb2RlbHMuUHJvZHVjdEluZm9cbiAgOiBtb2RlbChcIlByb2R1Y3RJbmZvXCIsIHNjaGVtYSk7XG4iXSwibmFtZXMiOlsic2NoZW1hIiwiU2NoZW1hIiwicHJvZHVjdElkIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwic3JjIiwidGltZXN0YW1wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJQcm9kdWN0SW5mbyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/ProductInfo.js\n");

/***/ }),

/***/ "(rsc)/./src/models/ProductInfoTranslation.js":
/*!**********************************************!*\
  !*** ./src/models/ProductInfoTranslation.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = new _mongoose.Schema({\n    productInfoId: {\n        type: String,\n        required: true\n    },\n    lang: {\n        type: String,\n        required: true\n    },\n    meta: [\n        {\n            type: String\n        }\n    ]\n}, {\n    timestamps: true\n});\nmodule.exports = _mongoose.models?.ProductInfoTranslation ? _mongoose.models.ProductInfoTranslation : (0, _mongoose.model)(\"ProductInfoTranslation\", schema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Byb2R1Y3RJbmZvVHJhbnNsYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7OztzQ0FBc0MsMEJBQVU7QUFFaEQsTUFBTUEsU0FBUyxJQUFJQyxnQkFBTSxDQUN2QjtJQUNFQyxlQUFlO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM5Q0MsTUFBTTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNFLE1BQU07UUFBQztZQUFFSixNQUFNQztRQUFPO0tBQUU7QUFDMUIsR0FDQTtJQUNFSSxZQUFZO0FBQ2Q7QUFHRkMsT0FBT0MsT0FBTyxHQUFHQyxnQkFBTSxFQUFFQyx5QkFDckJELGdCQUFNLENBQUNDLHNCQUFzQixHQUM3QkMsSUFBQUEsZUFBSyxFQUFDLDBCQUEwQmIiLCJzb3VyY2VzIjpbIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvbW9kZWxzL1Byb2R1Y3RJbmZvVHJhbnNsYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBwcm9kdWN0SW5mb0lkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBsYW5nOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBtZXRhOiBbeyB0eXBlOiBTdHJpbmcgfV0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGVscz8uUHJvZHVjdEluZm9UcmFuc2xhdGlvblxuICA/IG1vZGVscy5Qcm9kdWN0SW5mb1RyYW5zbGF0aW9uXG4gIDogbW9kZWwoXCJQcm9kdWN0SW5mb1RyYW5zbGF0aW9uXCIsIHNjaGVtYSk7XG4iXSwibmFtZXMiOlsic2NoZW1hIiwiU2NoZW1hIiwicHJvZHVjdEluZm9JZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhbmciLCJtZXRhIiwidGltZXN0YW1wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJQcm9kdWN0SW5mb1RyYW5zbGF0aW9uIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/ProductInfoTranslation.js\n");

/***/ }),

/***/ "(rsc)/./src/models/ProductTranslate.js":
/*!****************************************!*\
  !*** ./src/models/ProductTranslate.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema, model, models } = mongoose;\nmongoose.Promise = global.Promise;\nconst schema = new Schema({\n    product: {\n        type: Schema.Types.ObjectId,\n        ref: \"Product\",\n        required: true\n    },\n    language: {\n        type: String,\n        enum: [\n            \"kz\",\n            \"ru\",\n            \"en\"\n        ],\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    title: {\n        type: String\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    diameter: {\n        type: String\n    },\n    size: {\n        type: String\n    },\n    about: {\n        type: String\n    },\n    keywords: {\n        type: String\n    },\n    descriptionMeta: {\n        type: String\n    }\n});\nmodule.exports = models?.ProductTranslation ? models.ProductTranslation : model(\"ProductTranslation\", schema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Byb2R1Y3RUcmFuc2xhdGUuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRW5DLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHSjtBQUNsQ0EsU0FBU0ssT0FBTyxHQUFHQyxPQUFPRCxPQUFPO0FBRWpDLE1BQU1FLFNBQVMsSUFBSUwsT0FBTztJQUN4Qk0sU0FBUztRQUFFQyxNQUFNUCxPQUFPUSxLQUFLLENBQUNDLFFBQVE7UUFBRUMsS0FBSztRQUFXQyxVQUFVO0lBQUs7SUFDdkVDLFVBQVU7UUFBRUwsTUFBTU07UUFBUUMsTUFBTTtZQUFDO1lBQU07WUFBTTtTQUFLO1FBQUVILFVBQVU7SUFBSztJQUNuRUksTUFBTTtRQUFFUixNQUFNTTtRQUFRRixVQUFVO0lBQUs7SUFDckNLLE9BQU87UUFBRVQsTUFBTU07SUFBTztJQUN0QkksYUFBYTtRQUFFVixNQUFNTTtRQUFRRixVQUFVO0lBQUs7SUFDNUNPLFVBQVU7UUFBRVgsTUFBTU07SUFBTztJQUN6Qk0sTUFBTTtRQUFFWixNQUFNTTtJQUFPO0lBQ3JCTyxPQUFPO1FBQUViLE1BQU1NO0lBQU87SUFDdEJRLFVBQVU7UUFBRWQsTUFBTU07SUFBTztJQUN6QlMsaUJBQWlCO1FBQUVmLE1BQU1NO0lBQU87QUFDbEM7QUFFQVUsT0FBT0MsT0FBTyxHQUFHdEIsUUFBUXVCLHFCQUNyQnZCLE9BQU91QixrQkFBa0IsR0FDekJ4QixNQUFNLHNCQUFzQkkiLCJzb3VyY2VzIjpbIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvbW9kZWxzL1Byb2R1Y3RUcmFuc2xhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gPSBtb25nb29zZTtcbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuY29uc3Qgc2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHByb2R1Y3Q6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiUHJvZHVjdFwiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBsYW5ndWFnZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFtcImt6XCIsIFwicnVcIiwgXCJlblwiXSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHRpdGxlOiB7IHR5cGU6IFN0cmluZyB9LFxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRpYW1ldGVyOiB7IHR5cGU6IFN0cmluZyB9LFxuICBzaXplOiB7IHR5cGU6IFN0cmluZyB9LFxuICBhYm91dDogeyB0eXBlOiBTdHJpbmcgfSxcbiAga2V5d29yZHM6IHsgdHlwZTogU3RyaW5nIH0sXG4gIGRlc2NyaXB0aW9uTWV0YTogeyB0eXBlOiBTdHJpbmcgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGVscz8uUHJvZHVjdFRyYW5zbGF0aW9uXG4gID8gbW9kZWxzLlByb2R1Y3RUcmFuc2xhdGlvblxuICA6IG1vZGVsKFwiUHJvZHVjdFRyYW5zbGF0aW9uXCIsIHNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJQcm9taXNlIiwiZ2xvYmFsIiwic2NoZW1hIiwicHJvZHVjdCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJsYW5ndWFnZSIsIlN0cmluZyIsImVudW0iLCJuYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRpYW1ldGVyIiwic2l6ZSIsImFib3V0Iiwia2V5d29yZHMiLCJkZXNjcmlwdGlvbk1ldGEiLCJtb2R1bGUiLCJleHBvcnRzIiwiUHJvZHVjdFRyYW5zbGF0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/ProductTranslate.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nconst { Schema, model, models } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = new Schema({\n    name: {\n        type: String,\n        required: true,\n        minLength: 3,\n        maxLength: 100\n    },\n    mobile: {\n        type: String,\n        required: true,\n        maxLength: 30\n    },\n    // street: { type: String, maxLength: 100 },\n    // city: { type: String, maxLength: 200 },\n    // postalCode: { type: String, maxLength: 20 },\n    email: {\n        type: String,\n        maxLength: 200,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true,\n        minLength: 6\n    }\n}, {\n    timestamps: true\n});\nconst Users = models?.Users || model(\"Users\", schema);\nmodule.exports = Users;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBRUEsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVwRCxNQUFNQyxTQUFTLElBQUlKLE9BQ2pCO0lBQ0VLLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtRQUNWQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtJQUNBQyxRQUFRO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUUsV0FBVztJQUFHO0lBQ3RELDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsK0NBQStDO0lBQy9DRSxPQUFPO1FBQUVOLE1BQU1DO1FBQVFHLFdBQVc7UUFBS0YsVUFBVTtJQUFLO0lBQ3RESyxVQUFVO1FBQUVQLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsV0FBVztJQUFFO0FBQ3pELEdBQ0E7SUFDRUssWUFBWTtBQUNkO0FBR0YsTUFBTUMsUUFBUWIsUUFBUWEsU0FBU2QsTUFBTSxTQUFTRztBQUU5Q1ksT0FBT0MsT0FBTyxHQUFHRiIsInNvdXJjZXMiOlsiL2hvbWUvYXNzZXQvcHJvamVjdHMvYWxtYWxlL2FsbWFsZS1uZXh0L3NyYy9tb2RlbHMvVXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9ID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICBtYXhMZW5ndGg6IDEwMCxcbiAgICB9LFxuICAgIG1vYmlsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMwIH0sXG4gICAgLy8gc3RyZWV0OiB7IHR5cGU6IFN0cmluZywgbWF4TGVuZ3RoOiAxMDAgfSxcbiAgICAvLyBjaXR5OiB7IHR5cGU6IFN0cmluZywgbWF4TGVuZ3RoOiAyMDAgfSxcbiAgICAvLyBwb3N0YWxDb2RlOiB7IHR5cGU6IFN0cmluZywgbWF4TGVuZ3RoOiAyMCB9LFxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgbWF4TGVuZ3RoOiAyMDAsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgbWluTGVuZ3RoOiA2IH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBVc2VycyA9IG1vZGVscz8uVXNlcnMgfHwgbW9kZWwoXCJVc2Vyc1wiLCBzY2hlbWEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJzO1xuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwicmVxdWlyZSIsInNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtb2JpbGUiLCJlbWFpbCIsInBhc3N3b3JkIiwidGltZXN0YW1wcyIsIlVzZXJzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/app/mock/product.json":
/*!***********************************!*\
  !*** ./src/app/mock/product.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"id":"671f8ad851c70fa561f432e2","imageUrl":"/img/set/0.png","quantity":"500","price":"395000"},{"id":"671f8ad851c70fa561f432e3","imageUrl":"/img/pan35/0.png","quantity":"0","price":"0"},{"id":"671f8ad851c70fa561f432e5","imageUrl":"/img/pan6/0.png","quantity":"0","price":"0"},{"id":"671f8ad851c70fa561f432e6","imageUrl":"/img/fryingpan/01.png","quantity":"0","price":"0"},{"id":"671f8ad851c70fa561f432e4","imageUrl":"/img/sousepan/01.png","quantity":"0","price":"0"}]');

/***/ }),

/***/ "(rsc)/./src/app/mock/productinfo.json":
/*!***************************************!*\
  !*** ./src/app/mock/productinfo.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"_id":"12","productId":"675a1528abab837f85c2555c","src":["/img/set/1.png","/img/set/2.png","/img/set/3.png","/img/set/4.png"]},{"_id":"13","productId":"675a1528abab837f85c25553","src":["/img/pan6/1.png","/img/pan6/2.png","/img/pan6/3.png","/img/pan6/4.png"]},{"_id":"14","productId":"675a1528abab837f85c25554","src":["/img/pan35/1.png","/img/pan35/2.png","/img/pan35/3.png","/img/pan35/4.png"]},{"_id":"15","productId":"675a1528abab837f85c25555","src":["/img/sousepan/1.png","/img/sousepan/2.png","/img/sousepan/3.png","/img/sousepan/4.png"]},{"_id":"16","productId":"675a1528abab837f85c25556","src":["/img/fryingpan/1.png","/img/fryingpan/2.png","/img/fryingpan/3.png","/img/fryingpan/4.png"]}]');

/***/ }),

/***/ "(rsc)/./src/app/mock/productinfotranslation.json":
/*!**************************************************!*\
  !*** ./src/app/mock/productinfotranslation.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"_id":"1","productInfoId":"675a1528abab837f85c2555c","lang":"ru","meta":["Набор медной посуды","Медная посуда","Подарок маме","Профессиональная посуда"]},{"_id":"01","productInfoId":"675a1528abab837f85c2555c","lang":"kz","meta":["Мыс ыдыс жиынтығы","Мыс ыдыс","Анаға сыйлық","Кәсіби ыдыс"]},{"_id":"011","productInfoId":"675a1528abab837f85c2555c","lang":"en","meta":["Copper utensil set","Copper utensils","Gift to mom","Professional glassware"]},{"_id":"2","productInfoId":"675a1528abab837f85c25552","lang":"ru","meta":["Кастрюля медная","Медная кастрюля","Кастрюля медь","Медные кастрюли"]},{"_id":"02","productInfoId":"675a1528abab837f85c25552","lang":"kz","meta":["Мыс кастрюль","Мыс кастрюль","Мыс кастрюль","Мыс кастрюльдер"]},{"_id":"022","productInfoId":"675a1528abab837f85c25552","lang":"en","meta":["Copper pan","Copper pan","Pot copper","Copper pots"]},{"_id":"3","productInfoId":"675a1528abab837f85c25551","lang":"ru","meta":["Медная кастрюля","Подарок жене","Профессиональная посуда","Кастрюля медная 6 литров"]},{"_id":"03","productInfoId":"675a1528abab837f85c25551","lang":"kz","meta":["Мыс кастрюль","Әйеліне сыйлық","Кәсіби ыдыс-аяқ","6 литр мыс кастрөл"]},{"_id":"033","productInfoId":"675a1528abab837f85c25551","lang":"en","meta":["Copper pan","Gift to wife","Professional tableware","Copper pot 6 liters"]},{"_id":"4","productInfoId":"675a1528abab837f85c25551","lang":"ru","meta":["Сотейник медный","Медная посуда","Медный сотейник","Сотейник в наборе"]},{"_id":"04","productInfoId":"675a1528abab837f85c25551","lang":"kz","meta":["Мыс ыдыс","Мыс ыдыс-аяқ","Мыс ыдыс","Жиынтықтағы ыдыс"]},{"_id":"044","productInfoId":"675a1528abab837f85c25551","lang":"en","meta":["Copper sauté pan","Copper dishes","Copper sauté pan","Saucepan in Set"]},{"_id":"5","productInfoId":"675a1528abab837f85c25556","lang":"ru","meta":["Сковорода медная","Медная сковорода","Сковорода сотейник медная","Антипригарная сковорода"]},{"_id":"05","productInfoId":"675a1528abab837f85c25556","lang":"kz","meta":["Мыс табасы","Мыс табасы","Мыс ыдыс табасы","Жапсырмайтын табасы"]},{"_id":"055","productInfoId":"675a1528abab837f85c25556","lang":"en","meta":["Copper frying pan","Copper frying pan","Copper sauté pan","Non-stick frying pan"]}]');

/***/ }),

/***/ "(rsc)/./src/app/mock/producttranslations.json":
/*!***********************************************!*\
  !*** ./src/app/mock/producttranslations.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"id":"671f8ad851c70fa561f432ec","product":"674a3cf6deec0f0dd2b22010","language":"kz","name":"Мыс ыдыс жиынтығы Alma Le 1.0","description":"Жинаққа сорпа мен кептірілген тағамдарды дайындауға арналған көлемі 6 литр кастрөл, қуыруға және сөндіруге арналған 3,6 литрлік таба, гарнирлер мен жармаларға арналған көлемі 3,5 литрлік кастрөл, сондай-ақ соустар мен құймаларға арналған көлемі 1,8 литрлік ыдыс кіреді","diameter":""},{"id":"671f8ad851c70fa561f432ed","product":"674a3cf6deec0f0dd2b22010","language":"ru","name":"Медный набор посуды Alma`Le 1.0","description":"Набор включает кастрюлю объемом 6 литров для приготовления супов и тушенных блюд, сковородку на 3,6 литра для жарки и тушения, кастрюлю на 3,5 литра для гарниров и круп, а также сотейник объемом 1,8 литра для соусов и подливок","diameter":""},{"id":"671f8ad851c70fa561f432ee","product":"674a3cf6deec0f0dd2b22010","language":"en","name":"Copper cookware set Alma Le 1.0","description":"The set includes a 6-litre pot for making soups and stews, a 3.6-litre pan for frying and stewing, a 3.5-litre pot for sides and cereals, and a 1.8-litre sauté pan for sauces and gravies","diameter":""},{"id":"671f8ad851c70fa561f432f0","product":"674a3cf6deec0f0dd2b22012","language":"kz","name":"6л кастрөл","description":"Қауіпсіз материалдардан жасалған. Плиталардың барлық түрлері үшін тамаша","diameter":"48 см","about":"Бұл әмбебап кастрюль күнделікті және күрделі тағамдарды дайындауға өте ыңғайлы. Оның үлкен көлемі барлық отбасыға немесе қонақтарға оңай дайындауға мүмкіндік береді.","size":"24*13.5 см","title":"Мыс кастрюль 6 литр | Қазақстанда сатып алу","keywords":"мыс кастрол, мыстан жасалған кастрюль, кастрюль, ас үй жабдықтары, мыс ыдыс-аяқ сатып алу","descriptionMeta":"Жоғары сапалы мыс кастрюль сатып алыңыз! Дайындауға, стильді дизайнға, ұзақ мерзімге арналған."},{"id":"671f8ad851c70fa561f432f1","product":"674a3cf6deec0f0dd2b22012","language":"ru","name":"Кастрюля 6л","description":"Изготовлена из безопасных материалов. Идеальна для всех типов плит","diameter":"48 см","about":"Эта универсальная кастрюля идеально подходит для приготовления как повседневных, так и более сложных блюд. Её большой объем позволяет легко готовить для всей семьи или гостей.","size":"24*13.5 см","title":"Медная кастрюля 6 литров | Купить в Казахстане","keywords":"медная кастрюля, кастрюли из меди, купить кастрюлю, кухонная утварь, медная посуда","descriptionMeta":"Купите медную кастрюлю высокого качества! Идеально для готовки, стильный дизайн, долговечность."},{"id":"671f8ad851c70fa561f432f2","product":"674a3cf6deec0f0dd2b22012","language":"en","name":"Pot 6l","description":"Made of safe materials. Ideal for all plate types","diameter":"48 cm","about":"This versatile saucepan is ideal for preparing both everyday and more complex dishes. Its large volume makes it easy to cook for the whole family or guests.","size":"24*13.5 cm","title":"Copper pot 6 liters | Buy in Kazakhstan","keywords":"copper pot, copper pots, buy pot, kitchen utensils, copper utensils","descriptionMeta":"Buy a high quality copper pan! Perfect for cooking, stylish design, durability."},{"id":"671f8ad851c70fa561f432f4","product":"674a3cf6deec0f0dd2b22011","language":"kz","name":"3,5 л кастрөл","description":"Қауіпсіз материалдардан жасалған. Плиталардың барлық түрлері үшін тамаша","diameter":"24 см","about":"Бұл кастрюль сорпалар, сорпалар, пасталар, пісірілген тағамдар, сондай-ақ джем мен варенье дайындауда сіздің маңызды көмекшіңіз болады.","size":"20*11.5 см","title":"Мыс кастрюль | Қазақстанда сатып алу","keywords":"мыс кастрюль, мыстан жасалған кастрюль, кастрюль, ас үй жабдықтары, мыс ыдыс-аяқ сатып алу","descriptionMeta":"Нағыз дайындықты бағалаушыларға арналған премиум-класс мыс кастрюльдер. Әрбір бөлшектегі экологиялық, жылу оқшаулағыш және сенімділік."},{"id":"671f8ad851c70fa561f432f5","product":"674a3cf6deec0f0dd2b22011","language":"ru","name":"Кастрюля 3,5 л","description":"Изготовлена из безопасных материалов. Идеальна для всех типов плит","diameter":"24 см","about":"Эта кастрюля станет вашим незаменимым помощником при приготовлении супов, бульонов, пасты, тушеных блюд, а также джемов и варенья.","size":"20*11.5 см","title":"Медная кастрюля | Купить в Казахстане","keywords":"медная кастрюля, кастрюли из меди, купить кастрюлю, кухонная утварь, медная посуда ","descriptionMeta":"Медная кастрюля премиум-класса для настоящих ценителей готовки. Экологичность, теплоизоляция и надежность в каждой детали."},{"id":"671f8ad851c70fa561f432f6","product":"674a3cf6deec0f0dd2b22011","language":"en","name":"Pan 3.5l","description":"Made of safe materials. Ideal for all plate types","diameter":"24 cm","about":"This pot will become your indispensable assistant when making soups, broths, pasta, stews, as well as jams and jam.","size":"24*11.5 cm","title":"Copper pan | Buy in Kazakhstan","keywords":"copper pan, copper pots, buy pot, kitchen utensils, copper utensils","descriptionMeta":"Premium copper pots for true cooking connoisseurs. Environmental friendliness, thermal insulation and reliability in every part."},{"id":"671f8ad951c70fa561f432f8","product":"674a3cf6deec0f0dd2b22013","language":"kz","name":"Таба 3,6 л","description":"Қауіпсіз материалдардан жасалған. Плиталардың барлық түрлері үшін тамаша","diameter":"32 см","about":"Бұл таба омлет, қуырылған балық, ет, көкөніс және т.б. дайындауға өте ыңғайлы.","size":"26*7 см","title":"Мыс таба Alma Le төмен бағамен сатып алу","keywords":"мыс табаны, мыстан жасалған табаны, ас үйге арналған табаны, сапалы табаны, жылу өткізгіштігін сатып алу","descriptionMeta":"Мыс табалар - кәсіпқойлар мен аспаздық әуесқойлар үшін тамаша таңдау. Біркелкі қыздыру, бірегей дизайн және ұзақ мерзімді. Мыс ыдыстың артықшылықтарын ашыңыз!"},{"id":"671f8ad951c70fa561f432f9","product":"674a3cf6deec0f0dd2b22013","language":"ru","name":"Сковорода 3,6 л","description":"Изготовлена из безопасных материалов. Идеальна для всех типов плит","diameter":"32 см","about":"Эта сковорода идеально подходит для приготовления омлетов, жареной рыбы, мяса, овощей и многого другого.","size":"26*7 см","title":"Сковорода медная купить на Alma Le","keywords":"медная сковорода, купить сковороду из меди, сковорода для кухни, качественные сковороды, теплопроводность сковороды","descriptionMeta":"Медная сковорода — идеальный выбор для профессионалов и любителей кулинарии. Равномерный нагрев, уникальный дизайн и долговечность. Откройте для себя преимущества медной посуды!"},{"id":"671f8ad951c70fa561f432fa","product":"674a3cf6deec0f0dd2b22013","language":"en","name":"Frying pan 3.6 l","description":"Made of safe materials. Ideal for all plate types","diameter":"32 cm","about":"This pan is perfect for making omelettes, fried fish, meat, vegetables and more.","size":"26*7 cm","title":"Copper pan buy on Alma Le at a low price","keywords":"copper pan, buy copper pan, kitchen pan, quality pans, heat conduction pan","descriptionMeta":"Copper pans are the perfect choice for professionals and culinary enthusiasts. Uniform heating, unique design and durability. Discover the benefits of copper utensils!"},{"id":"671f8ad951c70fa561f432fc","product":"674a3cf6deec0f0dd2b22014","language":"kz","name":"Сотейник 1,8 л","description":"Қауіпсіз материалдардан жасалған. Плиталардың барлық түрлері үшін тамаша","diameter":"24 см","about":"Соустар, таңертеңгі астау, конфитюр және джем дайындау үшін өте ыңғайлы.","size":"16*9.5 см","title":"Мыс ыдыс - Almale сатып алу | Мыс ыдыс тиімді бағамен, Қазақстан бойынша жеткізу","keywords":"мыс ыдыс, мыс ыдыс, ас үй ыдыс-аяғы, мыс таба, мыс кастрөл, ас үйге арналған ыдыс, қуыруға арналған ыдыс, мыс бұйымдары, шеф-аспазшыларға арналған ыдыс","descriptionMeta":"Мыс ыдыс - жоғары тағамдарды дайындау үшін кәсіби таңдау. Мінсіз жылыту, стильді дизайн және ұзақ мерзімді. Дайындығыңызды одан да жақсарыңыз!"},{"id":"671f8ad951c70fa561f432fd","product":"674a3cf6deec0f0dd2b22014","language":"ru","name":"Сотейник 1,8 л","description":"Изготовлен из безопасных материалов. Идеален для всех типов плит","diameter":"24 см","about":"Идеально подходит для приготовления соусов, каши на завтрак, конфитюров и джемов.","size":"16*9.5 см","title":"Медный сотейник – купить Almale | Медный сотейник по выгодным ценам, доставка по Казахстану","keywords":"медный сотейник, сотейник медный, медная посуда, кухонная посуда, сковорода медная, кастрюля медная, посуда для кухни, посуда для жарки, медные изделия, посуда для шеф-поваров","descriptionMeta":"Сотейник медный — профессиональный выбор для приготовления блюд высокой кухни. Идеальный нагрев, стильный дизайн и долговечность. Сделайте свою готовку ещё лучше!"},{"id":"671f8ad951c70fa561f432fe","product":"674a3cf6deec0f0dd2b22014","language":"en","name":"Saucepan 1.8l","description":"Made of safe materials. Ideal for all plate types","diameter":"24 cm","about":"Perfect for making sauces, porridge for breakfast, confiture and jams.","size":"16*9.5 сь","title":"Copper saucepan - buy Almale | Copper saucepan at competitive prices, delivery in Kazakhstan","keywords":"copper sauté pan, copper sauté pan, copper utensils, kitchen utensils, copper pan, copper pan, kitchen utensils, roasting utensils, copper products, chef\'s utensils","descriptionMeta":"Copper saucepans are a professional choice for cooking fine cuisine. Perfect heating, stylish design and durability. Make your cooking even better!"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/nodemailer","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flib%2Fapi%2Forder%2Froute&page=%2Flib%2Fapi%2Forder%2Froute&appPaths=&pagePath=private-next-app-dir%2Flib%2Fapi%2Forder%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();