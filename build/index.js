/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/svjat-sample-block/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/svjat-sample-block/edit.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

// Load dependencies
const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element;
const {
  InspectorControls,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck
} = wp.editor;
const {
  PanelBody,
  Button,
  ResponsiveWrapper,
  Spinner
} = wp.components;
const {
  compose
} = wp.compose;
const {
  withSelect
} = wp.data;
const ALLOWED_MEDIA_TYPES = ["image"];

class Edit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      bgImage
    } = this.props;
    const {
      bgImageId
    } = attributes;
    const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __("boilerplate instruction"));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "boilerplate"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect((select, props) => {
  const {
    getMedia
  } = select("core");
  const {
    bgImageId
  } = props.attributes;
  return {
    bgImage: bgImageId ? getMedia(bgImageId) : null
  };
}))(Edit));

/***/ }),

/***/ "./src/blocks/svjat-sample-block/svjat-sample-block.js":
/*!*************************************************************!*\
  !*** ./src/blocks/svjat-sample-block/svjat-sample-block.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/svjat-sample-block/edit.js");
const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
  Component
} = wp.element; // Import the Component base class from the React.js abstraction

const {
  InspectorControls,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck
} = wp.editor;

registerBlockType("svjat-r-g-b/svjat-sample-block", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("svjat-sample-block"),
  // Block title.
  icon: {
    foreground: "rgb(2, 255, 20)",
    src: "smiley"
  },
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("svjat-sample-block")],
  attributes: {
    categories: {
      type: "object"
    },
    selectedCategory: {
      type: "string"
    }
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function (props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/svjat-sample-block/svjat-sample-block.scss":
/*!***************************************************************!*\
  !*** ./src/blocks/svjat-sample-block/svjat-sample-block.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_svjat_sample_block_svjat_sample_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/svjat-sample-block/svjat-sample-block.js */ "./src/blocks/svjat-sample-block/svjat-sample-block.js");
/* harmony import */ var _blocks_svjat_sample_block_svjat_sample_block_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/svjat-sample-block/svjat-sample-block.scss */ "./src/blocks/svjat-sample-block/svjat-sample-block.scss");
// Import JS and SCSS files throughout blocks folders


}();
/******/ })()
;
//# sourceMappingURL=index.js.map