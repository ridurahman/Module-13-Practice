"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(req, res) {\n    // console.log(\"I am middleware\");\n    if (req.nextUrl.pathname.startsWith(\"/api/product\")) {\n        console.log(\"This is API Route Inside Product Dir\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    } else if (req.nextUrl.pathname.startsWith(\"/cartlist\")) {\n        console.log(\"This is API Route Inside CArt List Dir\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    }\n} // export const config = {\n //   matcher: [\"/api/:path*\", \"/cartlist\"],\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUVwQyxTQUFTQyxXQUFXQyxHQUFHLEVBQUVDLEdBQUc7SUFDakMsa0NBQWtDO0lBQ2xDLElBQUlELElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsaUJBQWlCO1FBQ25EQyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPUixrRkFBWUEsQ0FBQ1MsSUFBSTtJQUMxQixPQUFPLElBQUlQLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsY0FBYztRQUN2REMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT1Isa0ZBQVlBLENBQUNTLElBQUk7SUFDMUI7QUFDRixFQUVBLDBCQUEwQjtDQUMxQiwyQ0FBMkM7Q0FDM0MsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEsIHJlcykge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBtaWRkbGV3YXJlXCIpO1xyXG4gIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FwaS9wcm9kdWN0XCIpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgQVBJIFJvdXRlIEluc2lkZSBQcm9kdWN0IERpclwiKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG4gIH0gZWxzZSBpZiAocmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9jYXJ0bGlzdFwiKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIEFQSSBSb3V0ZSBJbnNpZGUgQ0FydCBMaXN0IERpclwiKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gICBtYXRjaGVyOiBbXCIvYXBpLzpwYXRoKlwiLCBcIi9jYXJ0bGlzdFwiXSxcclxuLy8gfTtcclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});