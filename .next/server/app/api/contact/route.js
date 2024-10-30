"use strict";
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
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_asset_projects_almale_almale_next_src_app_api_contact_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/contact/route.js */ \"(rsc)/./src/app/api/contact/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"/home/asset/projects/almale/almale-next/src/app/api/contact/route.js\",\n    nextConfigOutput,\n    userland: _home_asset_projects_almale_almale_next_src_app_api_contact_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/contact/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYXNzZXQlMkZwcm9qZWN0cyUyRmFsbWFsZSUyRmFsbWFsZS1uZXh0JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGYXNzZXQlMkZwcm9qZWN0cyUyRmFsbWFsZSUyRmFsbWFsZS1uZXh0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FsbWFsZS1wcm9kLz9hNTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb250YWN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY29udGFjdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2Fzc2V0L3Byb2plY3RzL2FsbWFsZS9hbG1hbGUtbmV4dC9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jb250YWN0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/contact/route.js":
/*!**************************************!*\
  !*** ./src/app/api/contact/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./src/lib/mongodb.js\");\n/* harmony import */ var _utils_telegraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/telegraf */ \"(rsc)/./src/app/utils/telegraf.js\");\n/* harmony import */ var _utils_telegraf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_telegraf__WEBPACK_IMPORTED_MODULE_2__);\n// app/api/product/route.js\n\n\n\nasync function GET(request) {\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDataBase)();\n    try {\n        const headers = {\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Allow-Methods\": \"GET, POST, OPTIONS, PUT, PATCH, DELETE\",\n            \"Access-Control-Allow-Headers\": \"Origin, X-Requested-With, Content-Type, Accept\"\n        };\n        // Обрабатываем запрос OPTIONS для CORS preflight\n        if (request.method === \"OPTIONS\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(null, {\n                status: 200,\n                headers\n            });\n        }\n        // Получаем query-параметры\n        const { searchParams } = new URL(request.url);\n        console.log(\"search\", searchParams);\n        const name = searchParams.get(\"name\");\n        const phone = searchParams.get(\"phone\");\n        const email = searchParams.get(\"email\");\n        const message = searchParams.get(\"message\");\n        // Логика обработки\n        const getInfo = await (0,_utils_telegraf__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(`Имя заказчика: ${name}, почта: ${email}, номер телефона: https://wa.me/8${phone}, сообщение: ${message}`);\n        console.log(\"get.\", getInfo);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: getInfo\n        }, {\n            status: 200,\n            headers\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"На сервере произошла ошибка попробуйте позже\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkJBQTJCO0FBQ2dCO0FBQ2M7QUFDTjtBQUU1QyxlQUFlRyxJQUFJQyxPQUFPO0lBQy9CLE1BQU1ILCtEQUFpQkE7SUFDdkIsSUFBSTtRQUNGLE1BQU1JLFVBQVU7WUFDZCwrQkFBK0I7WUFDL0IsZ0NBQWdDO1lBQ2hDLGdDQUNFO1FBQ0o7UUFDQSxpREFBaUQ7UUFDakQsSUFBSUQsUUFBUUUsTUFBTSxLQUFLLFdBQVc7WUFDaEMsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQyxNQUFNO2dCQUFFQyxRQUFRO2dCQUFLSDtZQUFRO1FBQ3hEO1FBRUEsMkJBQTJCO1FBQzNCLE1BQU0sRUFBRUksWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSU4sUUFBUU8sR0FBRztRQUM1Q0MsUUFBUUMsR0FBRyxDQUFDLFVBQVVKO1FBQ3RCLE1BQU1LLE9BQU9MLGFBQWFNLEdBQUcsQ0FBQztRQUM5QixNQUFNQyxRQUFRUCxhQUFhTSxHQUFHLENBQUM7UUFDL0IsTUFBTUUsUUFBUVIsYUFBYU0sR0FBRyxDQUFDO1FBQy9CLE1BQU1HLFVBQVVULGFBQWFNLEdBQUcsQ0FBQztRQUVqQyxtQkFBbUI7UUFDbkIsTUFBTUksVUFBVSxNQUFNakIsNERBQVdBLENBQy9CLENBQUMsZUFBZSxFQUFFWSxLQUFLLFNBQVMsRUFBRUcsTUFBTSxpQ0FBaUMsRUFBRUQsTUFBTSxhQUFhLEVBQUVFLFFBQVEsQ0FBQztRQUUzR04sUUFBUUMsR0FBRyxDQUFDLFFBQVFNO1FBQ3BCLE9BQU9uQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVXLFNBQVNDO1FBQVEsR0FBRztZQUFFWCxRQUFRO1lBQUtIO1FBQVE7SUFDeEUsRUFBRSxPQUFPZSxHQUFHO1FBQ1YsT0FBT3BCLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO1lBQ0VXLFNBQVM7UUFDWCxHQUNBO1lBQUVWLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxtYWxlLXByb2QvLi9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLmpzPzU4ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9wcm9kdWN0L3JvdXRlLmpzXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFCYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gXCIuLi8uLi91dGlscy90ZWxlZ3JhZlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3QpIHtcbiAgYXdhaXQgY29ubmVjdFRvRGF0YUJhc2UoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIjogXCJHRVQsIFBPU1QsIE9QVElPTlMsIFBVVCwgUEFUQ0gsIERFTEVURVwiLFxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6XG4gICAgICAgIFwiT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdFwiLFxuICAgIH07XG4gICAgLy8g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INC30LDQv9GA0L7RgSBPUFRJT05TINC00LvRjyBDT1JTIHByZWZsaWdodFxuICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJPUFRJT05TXCIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihudWxsLCB7IHN0YXR1czogMjAwLCBoZWFkZXJzIH0pO1xuICAgIH1cblxuICAgIC8vINCf0L7Qu9GD0YfQsNC10LwgcXVlcnkt0L/QsNGA0LDQvNC10YLRgNGLXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnNvbGUubG9nKFwic2VhcmNoXCIsIHNlYXJjaFBhcmFtcyk7XG4gICAgY29uc3QgbmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJuYW1lXCIpO1xuICAgIGNvbnN0IHBob25lID0gc2VhcmNoUGFyYW1zLmdldChcInBob25lXCIpO1xuICAgIGNvbnN0IGVtYWlsID0gc2VhcmNoUGFyYW1zLmdldChcImVtYWlsXCIpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWVzc2FnZVwiKTtcblxuICAgIC8vINCb0L7Qs9C40LrQsCDQvtCx0YDQsNCx0L7RgtC60LhcbiAgICBjb25zdCBnZXRJbmZvID0gYXdhaXQgc2VuZE1lc3NhZ2UoXG4gICAgICBg0JjQvNGPINC30LDQutCw0LfRh9C40LrQsDogJHtuYW1lfSwg0L/QvtGH0YLQsDogJHtlbWFpbH0sINC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsDogaHR0cHM6Ly93YS5tZS84JHtwaG9uZX0sINGB0L7QvtCx0YnQtdC90LjQtTogJHttZXNzYWdlfWBcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0LlwiLCBnZXRJbmZvKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBnZXRJbmZvIH0sIHsgc3RhdHVzOiAyMDAsIGhlYWRlcnMgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6IFwi0J3QsCDRgdC10YDQstC10YDQtSDQv9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9C20LVcIixcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdFRvRGF0YUJhc2UiLCJzZW5kTWVzc2FnZSIsIkdFVCIsInJlcXVlc3QiLCJoZWFkZXJzIiwibWV0aG9kIiwianNvbiIsInN0YXR1cyIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZ2V0IiwicGhvbmUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJnZXRJbmZvIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/contact/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/utils/telegraf.js":
/*!***********************************!*\
  !*** ./src/app/utils/telegraf.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\nconst baseUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`;\nconst sendMessage = async (message)=>{\n    const url = `${baseUrl}sendMessage?chat_id=${process.env.CHAT_ID}&text=${message}`;\n    const response = await fetch(url);\n    return response.ok;\n};\nmodule.exports = {\n    sendMessage\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL3V0aWxzL3RlbGVncmFmLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEscUZBQXdCO0FBRXhCLE1BQU1FLFVBQVUsQ0FBQyw0QkFBNEIsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBRXZFLE1BQU1DLGNBQWMsT0FBT0M7SUFDekIsTUFBTUMsTUFBTSxDQUFDLEVBQUVOLFFBQVEsb0JBQW9CLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDLE1BQU0sRUFBRUYsUUFBUSxDQUFDO0lBQ2xGLE1BQU1HLFdBQVcsTUFBTUMsTUFBTUg7SUFDN0IsT0FBT0UsU0FBU0UsRUFBRTtBQUNwQjtBQUVBQyxPQUFPQyxPQUFPLEdBQUc7SUFDZlI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FsbWFsZS1wcm9kLy4vc3JjL2FwcC91dGlscy90ZWxlZ3JhZi5qcz84YzQzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG5cbmNvbnN0IGJhc2VVcmwgPSBgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdCR7cHJvY2Vzcy5lbnYuQk9UX1RPS0VOfS9gO1xuXG5jb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9c2VuZE1lc3NhZ2U/Y2hhdF9pZD0ke3Byb2Nlc3MuZW52LkNIQVRfSUR9JnRleHQ9JHttZXNzYWdlfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgcmV0dXJuIHJlc3BvbnNlLm9rO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNlbmRNZXNzYWdlLFxufTtcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJCT1RfVE9LRU4iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1cmwiLCJDSEFUX0lEIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/utils/telegraf.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.js":
/*!****************************!*\
  !*** ./src/lib/mongodb.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDataBase: () => (/* binding */ connectToDataBase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// track the connection\nlet isConnected = false;\nconst connectToDataBase = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"DB connected already\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL, {\n            dbName: \"test\"\n        });\n        isConnected = true;\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QixJQUFJQyxjQUFjO0FBQ1gsTUFBTUMsb0JBQW9CO0lBQy9CRixtREFBWSxDQUFDLGVBQWU7SUFDNUIsSUFBSUMsYUFBYTtRQUNmRyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBQ0EsSUFBSTtRQUNGLE1BQU1MLHVEQUFnQixDQUFDTyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUM5Q0MsUUFBUTtRQUNWO1FBQ0FULGNBQWM7SUFDaEIsRUFBRSxPQUFPVSxPQUFPO1FBQ2RQLFFBQVFDLEdBQUcsQ0FBQ007SUFDZDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbG1hbGUtcHJvZC8uL3NyYy9saWIvbW9uZ29kYi5qcz84YjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbi8vIHRyYWNrIHRoZSBjb25uZWN0aW9uXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EYXRhQmFzZSA9IGFzeW5jICgpID0+IHtcbiAgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgdHJ1ZSk7XG4gIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgIGNvbnNvbGUubG9nKFwiREIgY29ubmVjdGVkIGFscmVhZHlcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xuICAgICAgZGJOYW1lOiBcInRlc3RcIixcbiAgICB9KTtcbiAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0VG9EYXRhQmFzZSIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJMIiwiZGJOYW1lIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fasset%2Fprojects%2Falmale%2Falmale-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();