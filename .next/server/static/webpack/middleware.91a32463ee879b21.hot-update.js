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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(req, res) {\n    // console.log(\"I am middleware\");\n    if (req.nextUrl.pathname.startsWith(\"api/product\")) {\n        console.log(\"This is API Route Inside Product Dir\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    } else if (req.nextUrl.pathname.startsWith(\"/cartlist\")) {\n        console.log(\"This is API Route Inside CArt List Dir\");\n    }\n} // export const config = {\n //   matcher: [\"/api/:path*\", \"/cartlist\"],\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUVwQyxTQUFTQyxXQUFXQyxHQUFHLEVBQUVDLEdBQUc7SUFDakMsa0NBQWtDO0lBQ2xDLElBQUlELElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsZ0JBQWdCO1FBQ2xEQyxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPUixrRkFBWUEsQ0FBQ1MsSUFBSTtJQUMxQixPQUFPLElBQUlQLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsY0FBYztRQUN2REMsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7QUFDRixFQUVBLDBCQUEwQjtDQUMxQiwyQ0FBMkM7Q0FDM0MsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEsIHJlcykge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBtaWRkbGV3YXJlXCIpO1xyXG4gIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiYXBpL3Byb2R1Y3RcIikpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBBUEkgUm91dGUgSW5zaWRlIFByb2R1Y3QgRGlyXCIpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiAgfSBlbHNlIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2NhcnRsaXN0XCIpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgQVBJIFJvdXRlIEluc2lkZSBDQXJ0IExpc3QgRGlyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gICBtYXRjaGVyOiBbXCIvYXBpLzpwYXRoKlwiLCBcIi9jYXJ0bGlzdFwiXSxcclxuLy8gfTtcclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/exports/next-response.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__.NextResponse)\n/* harmony export */ });\n/* harmony import */ var _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spec-extension/response */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/response.js\");\n// This file is for modularized imports for next/server to get fully-treeshaking.\n //# sourceMappingURL=next-response.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRkFBaUY7QUFDWixDQUVyRSx5Q0FBeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanM/NjQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZm9yIG1vZHVsYXJpemVkIGltcG9ydHMgZm9yIG5leHQvc2VydmVyIHRvIGdldCBmdWxseS10cmVlc2hha2luZy5cbmV4cG9ydCB7IE5leHRSZXNwb25zZSBhcyBkZWZhdWx0IH0gZnJvbSBcIi4uL3NwZWMtZXh0ZW5zaW9uL3Jlc3BvbnNlXCI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5leHQtcmVzcG9uc2UuanMubWFwIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\n");

/***/ })

});