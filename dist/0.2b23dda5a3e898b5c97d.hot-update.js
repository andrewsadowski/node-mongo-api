require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/api/modules/query.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export controllers */
/* unused harmony export createOne */
/* unused harmony export updateOne */
/* unused harmony export deleteOne */
/* unused harmony export getOne */
/* unused harmony export getAll */
/* unused harmony export findByParam */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateControllers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_merge__ = __webpack_require__("lodash.merge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_merge__);





var _this = this;


var testData = { message: 'hello' };

// These are generic methods used in the generic controllers for all models
var controllers = {
  createOne: function createOne(model, body) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  updateOne: function updateOne(docToUpdate, update) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  deleteOne: function deleteOne(docToDelete) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  getOne: function getOne(docToGet) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  getAll: function getAll(model) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  },
  findByParam: function findByParam(model, id) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(testData);
  }
};

var createOne = function createOne(model) {
  return function (req, res, next) {
    return controllers.createOne(model, req.body).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var updateOne = function updateOne(model) {
  return function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
      var docToUpdate, update;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              docToUpdate = req.docFromId;
              update = req.body;
              return _context.abrupt('return', controllers.updateOne(docToUpdate, update).then(function (doc) {
                return res.status(201).json(doc);
              }).catch(function (error) {
                return next(error);
              }));

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var deleteOne = function deleteOne(model) {
  return function (req, res, next) {
    return controllers.deleteOne(req.docFromId).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var getOne = function getOne(model) {
  return function (req, res, next) {
    return controllers.getOne(req.docToUpdate).then(function (doc) {
      return res.status(200).json(doc);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var getAll = function getAll(model) {
  return function (req, res, next) {
    return controllers.getAll(model).then(function (doc) {
      return res.json(doc);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var findByParam = function findByParam(model) {
  return function (req, res, next, id) {};
};

var generateControllers = function generateControllers(model) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  };

  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, defaults, overrides);
};

/***/ })

};
//# sourceMappingURL=0.2b23dda5a3e898b5c97d.hot-update.js.map