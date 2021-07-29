(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);


const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({
    server: process.env.SMTP_SERVER,
    from: process.env.EMAIL_FROM
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })],
  database: process.env.DB_CONNECTION
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJuYW1lcyI6WyJvcHRpb25zIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwic2VydmVyIiwicHJvY2VzcyIsImVudiIsIlNNVFBfU0VSVkVSIiwiZnJvbSIsIkVNQUlMX0ZST00iLCJjbGllbnRJZCIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJkYXRhYmFzZSIsIkRCX0NPTk5FQ1RJT04iLCJyZXEiLCJyZXMiLCJOZXh0QXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLE1BQU1BLE9BQU8sR0FBRztBQUNkQyxXQUFTLEVBQUUsQ0FDVEMsZ0VBQUEsQ0FBZ0I7QUFDZEMsVUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FETjtBQUVkQyxRQUFJLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZKLEdBQWhCLENBRFMsRUFLVE4saUVBQUEsQ0FBaUI7QUFDZk8sWUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssU0FEUDtBQUVmQyxnQkFBWSxFQUFFUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU87QUFGWCxHQUFqQixDQUxTLEVBU1RWLGlFQUFBLENBQWlCO0FBQ2ZPLFlBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlRLGdCQURQO0FBRWZGLGdCQUFZLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUztBQUZYLEdBQWpCLENBVFMsQ0FERztBQWVkQyxVQUFRLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVztBQWZSLENBQWhCO0FBa0JBLCtEQUFlLENBQUNDLEdBQUQsRUFBc0JDLEdBQXRCLEtBQ2JDLGdEQUFRLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFXbEIsT0FBWCxDQURWLEU7Ozs7Ozs7Ozs7O0FDdEJBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgUHJvdmlkZXJzLkVtYWlsKHtcclxuICAgICAgc2VydmVyOiBwcm9jZXNzLmVudi5TTVRQX1NFUlZFUixcclxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcclxuICAgIH0pLFxyXG4gICAgUHJvdmlkZXJzLkdpdEh1Yih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gICAgUHJvdmlkZXJzLkdvb2dsZSh7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfQ09OTkVDVElPTixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT5cclxuICBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==