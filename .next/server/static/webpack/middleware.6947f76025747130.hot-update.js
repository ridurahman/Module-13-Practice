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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\nfunction middleware(req, res) {\n    // console.log(\"I am middleware\");\n    if (req.nextUrl.pathname.startsWith(\"api/product\")) {\n        console.log(\"This is API Route Inside Product Dir\");\n    } else if (req.nextUrl.pathname.startsWith(\"/cartlist\")) {\n        console.log(\"This is API Route Inside CArt List Dir\");\n    }\n} // export const config = {\n //   matcher: [\"/api/:path*\", \"/cartlist\"],\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsV0FBV0MsR0FBRyxFQUFFQyxHQUFHO0lBQ2pDLGtDQUFrQztJQUNsQyxJQUFJRCxJQUFJRSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGdCQUFnQjtRQUNsREMsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsT0FBTyxJQUFJTixJQUFJRSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGNBQWM7UUFDdkRDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0FBQ0YsRUFFQSwwQkFBMEI7Q0FDMUIsMkNBQTJDO0NBQzNDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS5qcz8zYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSwgcmVzKSB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJJIGFtIG1pZGRsZXdhcmVcIik7XHJcbiAgaWYgKHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCJhcGkvcHJvZHVjdFwiKSkge1xyXG4gICAgY29uc29sZS5sb2coXCJUaGlzIGlzIEFQSSBSb3V0ZSBJbnNpZGUgUHJvZHVjdCBEaXJcIik7XHJcbiAgfSBlbHNlIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2NhcnRsaXN0XCIpKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgQVBJIFJvdXRlIEluc2lkZSBDQXJ0IExpc3QgRGlyXCIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gICBtYXRjaGVyOiBbXCIvYXBpLzpwYXRoKlwiLCBcIi9jYXJ0bGlzdFwiXSxcclxuLy8gfTtcclxuIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});