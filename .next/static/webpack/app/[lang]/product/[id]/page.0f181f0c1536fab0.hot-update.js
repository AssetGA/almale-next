"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/product/[id]/page",{

/***/ "(app-pages-browser)/./src/app/components/ProductAbout.js":
/*!********************************************!*\
  !*** ./src/app/components/ProductAbout.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./src/app/components/ProductCard.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip */ \"(app-pages-browser)/./src/app/components/Tooltip.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/hooks */ \"(app-pages-browser)/./src/app/store/hooks.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/api */ \"(app-pages-browser)/./src/app/utils/api.js\");\n/* harmony import */ var _utils_listSrc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/listSrc */ \"(app-pages-browser)/./src/app/utils/listSrc.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ProductAbout = (param)=>{\n    let { lang, t } = param;\n    _s();\n    const products = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.product.entity);\n    const loading = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.product.isLoading);\n    const [selectImage, setSelectImage] = useState({\n        src: \"\"\n    });\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    // Проверяем, если продукты загружены\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: t.utensil.one\n        }, void 0, false, {\n            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!products || products.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: t.utensil.two\n        }, void 0, false, {\n            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n            lineNumber: 24,\n            columnNumber: 12\n        }, undefined);\n    }\n    const product = products.find((elem)=>{\n        return elem._id.toString() === params.split(\"/\").pop();\n    });\n    const filterProducts = products.filter((elem)=>{\n        return elem.name !== products[0].name && elem;\n    });\n    const listSrc = _utils_listSrc__WEBPACK_IMPORTED_MODULE_9__.listProductId.find((elem)=>{\n        return elem.id === product._id;\n    });\n    const handleSelect = (srcSel)=>{\n        if (selectImage !== \"\") {\n            setSelectImage(srcSel);\n        } else {\n            setSelectImage(srcSel);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col px-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row bg-white rounded-lg p-4 max-w-4xl mx-auto my-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-1/2 flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold mb-2 sm:hidden\",\n                                style: {\n                                    fontFamily: \"Montserrat-Bold\"\n                                },\n                                children: product === null || product === void 0 ? void 0 : product.name\n                            }, void 0, false, {\n                                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-6 sm:hidden\",\n                                children: product === null || product === void 0 ? void 0 : product.description\n                            }, void 0, false, {\n                                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w*full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4 hover:shadow-lg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            className: \"w-full object-cover rounded-lg\",\n                                            src: product === null || product === void 0 ? void 0 : product.imageUrl,\n                                            width: 320,\n                                            height: 300,\n                                            alt: product === null || product === void 0 ? void 0 : product.name,\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-4 gap-2 sm:gap-3\",\n                                        children: listSrc !== undefined && listSrc.arr.map((elem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"aspect-w-1 aspect-h-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \" rounded-lg cursor-pointer border border-gray-200 hover:border-gray\",\n                                                    src: elem.src,\n                                                    width: 200,\n                                                    height: 200,\n                                                    alt: \"alma le\",\n                                                    priority: true\n                                                }, void 0, false, {\n                                                    fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, elem._id, false, {\n                                                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-1/2 md:pl-8 flex flex-col justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-2 hidden sm:block\",\n                                    style: {\n                                        fontFamily: \"Montserrat-Bold\"\n                                    },\n                                    children: product === null || product === void 0 ? void 0 : product.name\n                                }, void 0, false, {\n                                    fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-6 hidden sm:block\",\n                                    children: product === null || product === void 0 ? void 0 : product.description\n                                }, void 0, false, {\n                                    fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden sm:grid grid-cols-6 gap-1 pb-10\",\n                                    children: _utils_api__WEBPACK_IMPORTED_MODULE_8__.haracter.map((elem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tooltip__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            text: elem.name,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                src: elem.imageUrl,\n                                                width: 100,\n                                                height: 100,\n                                                alt: elem.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, elem.id, false, {\n                                            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/\".concat(lang, \"/product\"),\n                                            className: \"right-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                                                children: t.productAbout.buttonBack\n                                            }, void 0, false, {\n                                                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                                lineNumber: 119,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/\".concat(lang, \"/basket\"),\n                                            className: \"right-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600\",\n                                                children: t.productAbout.buttonBuy\n                                            }, void 0, false, {\n                                                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid lg:grid-cols-3 grid-cols-2 gap-10 max-w-4xl mx-auto mb-20\",\n                children: filterProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            product: product,\n                            lang: lang,\n                            t: t\n                        }, void 0, false, {\n                            fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                            lineNumber: 135,\n                            columnNumber: 13\n                        }, undefined)\n                    }, product._id, false, {\n                        fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/asset/projects/almale/almale-next/src/app/components/ProductAbout.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductAbout, \"yUXWsvPuNyOOVH5A019C1aIsQps=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = ProductAbout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductAbout);\nvar _c;\n$RefreshReg$(_c, \"ProductAbout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0QWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDRjtBQUNIO0FBQ2M7QUFDUjtBQUNjO0FBQ0U7QUFDUjtBQUNTO0FBRWpELE1BQU1TLGVBQWU7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLENBQUMsRUFBRTs7SUFDL0IsTUFBTUMsV0FBV04sNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsT0FBTyxDQUFDQyxNQUFNO0lBQy9ELE1BQU1DLFVBQVVWLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLE9BQU8sQ0FBQ0csU0FBUztJQUNqRSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0MsU0FBUztRQUFFQyxLQUFLO0lBQUc7SUFDekQsTUFBTUMsU0FBU2pCLDREQUFXQTtJQUMxQixxQ0FBcUM7SUFDckMsSUFBSVcsU0FBUztRQUNYLHFCQUFPLDhEQUFDTztzQkFBR1osRUFBRWEsT0FBTyxDQUFDQyxHQUFHOzs7Ozs7SUFDMUI7SUFFQSxJQUFJLENBQUNiLFlBQVlBLFNBQVNjLE1BQU0sS0FBSyxHQUFHO1FBQ3RDLHFCQUFPLDhEQUFDSDtzQkFBR1osRUFBRWEsT0FBTyxDQUFDRyxHQUFHOzs7Ozs7SUFDMUI7SUFFQSxNQUFNYixVQUFVRixTQUFTZ0IsSUFBSSxDQUFDLENBQUNDO1FBQzdCLE9BQU9BLEtBQUtDLEdBQUcsQ0FBQ0MsUUFBUSxPQUFPVCxPQUFPVSxLQUFLLENBQUMsS0FBS0MsR0FBRztJQUN0RDtJQUVBLE1BQU1DLGlCQUFpQnRCLFNBQVN1QixNQUFNLENBQUMsQ0FBQ047UUFDdEMsT0FBT0EsS0FBS08sSUFBSSxLQUFLeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQ3dCLElBQUksSUFBSVA7SUFDM0M7SUFFQSxNQUFNUSxVQUFVN0IseURBQWFBLENBQUNvQixJQUFJLENBQUMsQ0FBQ0M7UUFDbEMsT0FBT0EsS0FBS1MsRUFBRSxLQUFL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TXJCOztRQUNhSCx3REFBY0E7UUFDZkEsd0RBQWNBO1FBRWZELHdEQUFXQTs7O0tBSnRCSTtBQWtJTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvZHVjdEFib3V0LmpzP2E1NjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi9Ub29sdGlwXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uL3N0b3JlL2hvb2tzXCI7XG5pbXBvcnQgeyBoYXJhY3RlciB9IGZyb20gXCIuLi91dGlscy9hcGlcIjtcbmltcG9ydCB7IGxpc3RQcm9kdWN0SWQgfSBmcm9tIFwiLi4vdXRpbHMvbGlzdFNyY1wiO1xuXG5jb25zdCBQcm9kdWN0QWJvdXQgPSAoeyBsYW5nLCB0IH0pID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3QuZW50aXR5KTtcbiAgY29uc3QgbG9hZGluZyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdC5pc0xvYWRpbmcpO1xuICBjb25zdCBbc2VsZWN0SW1hZ2UsIHNldFNlbGVjdEltYWdlXSA9IHVzZVN0YXRlKHsgc3JjOiBcIlwiIH0pO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXRobmFtZSgpO1xuICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC10YHQu9C4INC/0YDQvtC00YPQutGC0Ysg0LfQsNCz0YDRg9C20LXQvdGLXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPnt0LnV0ZW5zaWwub25lfTwvcD47XG4gIH1cblxuICBpZiAoIXByb2R1Y3RzIHx8IHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8cD57dC51dGVuc2lsLnR3b308L3A+O1xuICB9XG5cbiAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKGVsZW0pID0+IHtcbiAgICByZXR1cm4gZWxlbS5faWQudG9TdHJpbmcoKSA9PT0gcGFyYW1zLnNwbGl0KFwiL1wiKS5wb3AoKTtcbiAgfSk7XG5cbiAgY29uc3QgZmlsdGVyUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoKGVsZW0pID0+IHtcbiAgICByZXR1cm4gZWxlbS5uYW1lICE9PSBwcm9kdWN0c1swXS5uYW1lICYmIGVsZW07XG4gIH0pO1xuXG4gIGNvbnN0IGxpc3RTcmMgPSBsaXN0UHJvZHVjdElkLmZpbmQoKGVsZW0pID0+IHtcbiAgICByZXR1cm4gZWxlbS5pZCA9PT0gcHJvZHVjdC5faWQ7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzcmNTZWwpID0+IHtcbiAgICBpZiAoc2VsZWN0SW1hZ2UgIT09IFwiXCIpIHtcbiAgICAgIHNldFNlbGVjdEltYWdlKHNyY1NlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdEltYWdlKHNyY1NlbCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB4LTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBiZy13aGl0ZSByb3VuZGVkLWxnIHAtNCBtYXgtdy00eGwgbXgtYXV0byBteS0yMFwiPlxuICAgICAgICB7Lyog0JvQtdCy0LDRjyDRh9Cw0YHRgtGMOiDQvtGB0L3QvtCy0L3QvtC1INC40LfQvtCx0YDQsNC20LXQvdC40LUg0Lgg0LzQuNC90LjQsNGC0Y7RgNGLICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMiBzbTpoaWRkZW5cIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJNb250c2VycmF0LUJvbGRcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9kdWN0Py5uYW1lfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgey8qINCe0L/QuNGB0LDQvdC40LUg0YLQvtCy0LDRgNCwICovfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgc206aGlkZGVuXCI+e3Byb2R1Y3Q/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICB7Lyog0J7RgdC90L7QstC90L7QtSDQuNC30L7QsdGA0LDQttC10L3QuNC1INGC0L7QstCw0YDQsCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIncqZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGhvdmVyOnNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdD8uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3Q/Lm5hbWV9XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qINCc0LjQvdC40LDRgtGO0YDRiyDQuNC30L7QsdGA0LDQttC10L3QuNC5ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC0yIHNtOmdhcC0zXCI+XG4gICAgICAgICAgICAgIHtsaXN0U3JjICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBsaXN0U3JjLmFyci5tYXAoKGVsZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtlbGVtLl9pZH0gY2xhc3NOYW1lPVwiYXNwZWN0LXctMSBhc3BlY3QtaC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItZ3JheS0yMDAgaG92ZXI6Ym9yZGVyLWdyYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWxlbS5zcmN9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhbG1hIGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qINCf0YDQsNCy0LDRjyDRh9Cw0YHRgtGMOiDQvtC/0LjRgdCw0L3QuNC1INGC0L7QstCw0YDQsCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBtZDpwbC04IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01XCI+XG4gICAgICAgICAgICB7Lyog0J3QsNC30LLQsNC90LjQtSDRgtC+0LLQsNGA0LAgKi99XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTIgaGlkZGVuIHNtOmJsb2NrXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJNb250c2VycmF0LUJvbGRcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvZHVjdD8ubmFtZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICB7Lyog0J7Qv9C40YHQsNC90LjQtSDRgtC+0LLQsNGA0LAgKi99XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IGhpZGRlbiBzbTpibG9ja1wiPntwcm9kdWN0Py5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmdyaWQgZ3JpZC1jb2xzLTYgZ2FwLTEgcGItMTBcIj5cbiAgICAgICAgICAgICAge2hhcmFjdGVyLm1hcCgoZWxlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwIGtleT17ZWxlbS5pZH0gdGV4dD17ZWxlbS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2VsZW0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2VsZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qINCm0LXQvdCwINGC0L7QstCw0YDQsCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2xhbmd9L3Byb2R1Y3RgfSBjbGFzc05hbWU9XCJyaWdodC0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbiBob3ZlcjpiZy1ncmVlbi1saWdodCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgICAgICB7dC5wcm9kdWN0QWJvdXQuYnV0dG9uQmFja31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bGFuZ30vYmFza2V0YH0gY2xhc3NOYW1lPVwicmlnaHQtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4gaG92ZXI6YmctZ3JlZW4tbGlnaHQgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICAgICAge3QucHJvZHVjdEFib3V0LmJ1dHRvbkJ1eX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTIgZ2FwLTEwIG1heC13LTR4bCBteC1hdXRvIG1iLTIwXCI+XG4gICAgICAgIHtmaWx0ZXJQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5faWR9PlxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IGxhbmc9e2xhbmd9IHQ9e3R9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0QWJvdXQ7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJQcm9kdWN0Q2FyZCIsIlRvb2x0aXAiLCJ1c2VQYXRobmFtZSIsInVzZUFwcFNlbGVjdG9yIiwiaGFyYWN0ZXIiLCJsaXN0UHJvZHVjdElkIiwiUHJvZHVjdEFib3V0IiwibGFuZyIsInQiLCJwcm9kdWN0cyIsInN0YXRlIiwicHJvZHVjdCIsImVudGl0eSIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJzZWxlY3RJbWFnZSIsInNldFNlbGVjdEltYWdlIiwidXNlU3RhdGUiLCJzcmMiLCJwYXJhbXMiLCJwIiwidXRlbnNpbCIsIm9uZSIsImxlbmd0aCIsInR3byIsImZpbmQiLCJlbGVtIiwiX2lkIiwidG9TdHJpbmciLCJzcGxpdCIsInBvcCIsImZpbHRlclByb2R1Y3RzIiwiZmlsdGVyIiwibmFtZSIsImxpc3RTcmMiLCJpZCIsImhhbmRsZVNlbGVjdCIsInNyY1NlbCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3R5bGUiLCJmb250RmFtaWx5IiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJpb3JpdHkiLCJ1bmRlZmluZWQiLCJhcnIiLCJtYXAiLCJ0ZXh0IiwiaHJlZiIsInByb2R1Y3RBYm91dCIsImJ1dHRvbkJhY2siLCJidXR0b25CdXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProductAbout.js\n"));

/***/ })

});