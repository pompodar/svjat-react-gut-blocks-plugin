/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/svjat-copied-block1/svjat-copied-block1.js":
/*!***************************************************************!*\
  !*** ./src/blocks/svjat-copied-block1/svjat-copied-block1.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
  Component
} = wp.element; // Import the Component base class from the React.js abstraction

registerBlockType("svjat-r-g-b/svjat-copied-block1", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("svjat-copied-block1"),
  // Block title.
  icon: {
    foreground: "rgb(2, 255, 20)",
    src: "smiley"
  },
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("svjat-copied-block1")],
  attributes: {
    categories: {
      type: "object"
    },
    selectedCategory: {
      type: "string"
    }
  },
  edit: props => {
    let cats = [];
    let selectedCat;
    wp.apiFetch({
      url: "/wp-json/wp/v2/categories"
    }).then(categories => {
      props.setAttributes({
        categories: categories
      });
    });

    if (props.attributes.categories) {
      cats = props.attributes.categories;
      selectedCat = props.attributes.selectedCategory;
    }

    function updateCategory(e) {
      props.setAttributes({
        selectedCategory: e.target.value
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      onChange: updateCategory,
      value: selectedCat
    }, cats.map(cat => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: cat.id,
        key: cat.id
      }, cat.name);
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: ""
    }));
  },
  save: function (props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/svjat-dynamic-block/svjat-dynamic-block.js":
/*!***************************************************************!*\
  !*** ./src/blocks/svjat-dynamic-block/svjat-dynamic-block.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
  Component
} = wp.element; // Import the Component base class from the React.js abstraction

registerBlockType("svjat-r-g-b/svjat-dynamic-block", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("svjat-dynamic-block"),
  // Block title.
  icon: {
    foreground: "rgb(2, 255, 20)",
    src: "smiley"
  },
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("svjat-dynamic-style-selection-block")],
  attributes: {
    categories: {
      type: "object"
    },
    selectedCategory: {
      type: "string"
    }
  },
  edit: props => {
    let cats = [];
    let selectedCat;
    wp.apiFetch({
      url: "/wp-json/wp/v2/categories"
    }).then(categories => {
      props.setAttributes({
        categories: categories
      });
    });

    if (props.attributes.categories) {
      cats = props.attributes.categories;
      selectedCat = props.attributes.selectedCategory;
    }

    function updateCategory(e) {
      props.setAttributes({
        selectedCategory: e.target.value
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      onChange: updateCategory,
      value: selectedCat
    }, cats.map(cat => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: cat.id,
        key: cat.id
      }, cat.name);
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: ""
    }));
  },
  save: function (props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.js":
/*!***********************************************************************************************!*\
  !*** ./src/blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  Component
} = wp.element;
const {
  RichText,
  InspectorControls,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;
const {
  ToggleControl,
  PanelBody,
  PanelRow,
  CheckboxControl,
  SelectControl,
  ColorPicker,
  Toolbar,
  IconButton
} = wp.components;

class FirstBlockEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const alignmentClass = attributes.textAlignment != null ? "has-text-align-" + attributes.textAlignment : "";
    let cats = [];
    let selectedCat;
    wp.apiFetch({
      url: "/wp-json/wp/v2/categories"
    }).then(categories => {
      setAttributes({
        categories: categories
      });
    });

    if (attributes.categories) {
      cats = attributes.categories;
      selectedCat = attributes.selectedCategory;
    }

    function updateCategory(e) {
      setAttributes({
        selectedCategory: e.target.value
      });
    }

    const divStyle = {
      background: attributes.favoriteColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: alignmentClass
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Most awesome settings ever",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Toggle me",
      checked: attributes.toggle,
      onChange: newval => setAttributes({
        toggle: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "What's your favorite animal?",
      value: attributes.favoriteAnimal,
      options: [{
        label: "Dogs",
        value: "dogs"
      }, {
        label: "Cats",
        value: "cats"
      }, {
        label: "Something else",
        value: "weird_one"
      }],
      onChange: newval => setAttributes({
        favoriteAnimal: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.favoriteColor,
      onChangeComplete: newval => {
        setAttributes({
          favoriteColor: newval.hex
        });
      },
      disableAlpha: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Activate lasers?",
      checked: attributes.activateLasers,
      onChange: newval => setAttributes({
        activateLasers: newval
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: attributes.textAlignment,
      onChange: newalign => setAttributes({
        textAlignment: newalign
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      label: "My very own custom button",
      icon: "edit",
      className: "my-custom-button",
      onClick: () => console.log("pressed button")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      onChange: updateCategory,
      value: selectedCat
    }, cats.map(cat => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: cat.id,
        key: cat.id
      }, cat.name);
    })));
  }

}

registerBlockType("svjat-r-g-b/svjat-dynamic-style-selection-block", {
  title: "svjat-dynamic-style-selection-block",
  category: "common",
  icon: {
    foreground: "rgb(2, 255, 20)",
    src: "smiley"
  },
  keywords: ["svjat-dynamic-style-selection-block"],
  attributes: {
    myRichHeading: {
      type: "string"
    },
    myRichText: {
      type: "string"
    },
    textAlignment: {
      type: "string"
    },
    toggle: {
      type: "boolean",
      default: true
    },
    favoriteAnimal: {
      type: "string",
      default: "dogs"
    },
    favoriteColor: {
      type: "string",
      default: "#DDDDDD"
    },
    activateLasers: {
      type: "boolean",
      default: false
    },
    categories: {
      type: "object"
    },
    selectedCategory: {
      type: "string"
    }
  },
  supports: {
    align: ["wide", "full"]
  },
  edit: FirstBlockEdit,
  save: props => {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/svjat-image-selector-block/edit.js":
/*!*******************************************************!*\
  !*** ./src/blocks/svjat-image-selector-block/edit.js ***!
  \*******************************************************/
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
    const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __("To edit the background image, you need permission to upload media.", "image-selector-example"));

    const onUpdateImage = image => {
      setAttributes({
        bgImageId: image.id
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        bgImageId: undefined
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Background settings", "image-selector-example"),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-image-selector-example-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, {
      fallback: instructions
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      title: __("Background image", "image-selector-example"),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: bgImageId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          className: !bgImageId ? "editor-post-featured-image__toggle" : "editor-post-featured-image__preview",
          onClick: open
        }, !bgImageId && __("Set background image", "image-selector-example"), !!bgImageId && !bgImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), !!bgImageId && bgImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveWrapper, {
          naturalWidth: bgImage.media_details.width,
          naturalHeight: bgImage.media_details.height
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: bgImage.source_url,
          alt: __("Background image", "image-selector-example")
        })));
      }
    })), !!bgImageId && bgImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      title: __("Background image", "image-selector-example"),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: bgImageId,
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, __("Replace background image", "image-selector-example"));
      }
    })), !!bgImageId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, __("Remove background image", "image-selector-example")))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Icon Selector"));
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

/***/ "./src/blocks/svjat-image-selector-block/svjat-image-selector-block.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/svjat-image-selector-block/svjat-image-selector-block.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/svjat-image-selector-block/edit.js");

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

registerBlockType("svjat-r-g-b/svjat-image-selector-block", {
  // TODO CHANGABLE
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("svjat-image-selector-block"),
  // TODO CHANGABLE
  icon: {
    foreground: "rgb(2, 255, 20)",
    src: "smiley"
  },
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("svjat-image-selector-block")],
  // TODO CHANGABLE
  attributes: {
    bgImageId: {
      type: "number"
    }
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }

});

/***/ }),

/***/ "./src/blocks/svjat-select-color-block/svjat-select-color-block.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/svjat-select-color-block/svjat-select-color-block.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
  withColors,
  getColorClassName
} = wp.blockEditor;

const BlockWithColorSettings = props => {
  const {
    textColor,
    setTextColor
  } = props; // Props received from withColors

  let divClass;
  let divStyles = {};

  if (textColor != undefined) {
    if (textColor.class != undefined) {
      divClass = textColor.class;
    } else {
      divStyles.color = textColor.color;
    }
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
    title: __("Color settings"),
    colorSettings: [{
      value: textColor.color,
      onChange: setTextColor,
      label: __("Text color"),
      colors: [{
        name: "white",
        color: "#fff"
      }, {
        name: "black",
        color: "#222"
      }]
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: divClass,
    style: divStyles
  }, "PanelColorSettings Demo"));
};

registerBlockType("svjat-r-g-b/svjat-select-color-block", {
  title: __("svjat-select-color-block"),
  icon: {
    foreground: "rgb(2, 255, 20)",
    src: "smiley"
  },
  category: "common",
  attributes: {
    textColor: {
      type: "string"
    },
    customTextColor: {
      type: "string"
    }
  },
  edit: withColors({
    textColor: "color"
  })(BlockWithColorSettings),
  save: props => {
    const {
      textColor,
      customTextColor
    } = props.attributes;
    let divClass;
    let divStyles = {};

    if (textColor != undefined) {
      divClass = getColorClassName("color", textColor);
    }

    if (customTextColor != undefined) {
      divStyles.color = customTextColor;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: divClass,
      style: divStyles
    }, "PanelColorSettings Demo");
  }
});

/***/ }),

/***/ "./src/blocks/svjat-copied-block1/svjat-copied-block1.scss":
/*!*****************************************************************!*\
  !*** ./src/blocks/svjat-copied-block1/svjat-copied-block1.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/svjat-dynamic-block/svjat-dynamic-block.scss":
/*!*****************************************************************!*\
  !*** ./src/blocks/svjat-dynamic-block/svjat-dynamic-block.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.scss":
/*!*************************************************************************************************!*\
  !*** ./src/blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/svjat-image-selector-block/svjat-dynamic-block.scss":
/*!************************************************************************!*\
  !*** ./src/blocks/svjat-image-selector-block/svjat-dynamic-block.scss ***!
  \************************************************************************/
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
/* harmony import */ var _blocks_svjat_dynamic_block_svjat_dynamic_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/svjat-dynamic-block/svjat-dynamic-block.js */ "./src/blocks/svjat-dynamic-block/svjat-dynamic-block.js");
/* harmony import */ var _blocks_svjat_dynamic_block_svjat_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/svjat-dynamic-block/svjat-dynamic-block.scss */ "./src/blocks/svjat-dynamic-block/svjat-dynamic-block.scss");
/* harmony import */ var _blocks_svjat_dynamic_style_selection_block_svjat_dynamic_style_selection_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.js */ "./src/blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.js");
/* harmony import */ var _blocks_svjat_dynamic_style_selection_block_svjat_dynamic_style_selection_block_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.scss */ "./src/blocks/svjat-dynamic-style-selection-block/svjat-dynamic-style-selection-block.scss");
/* harmony import */ var _blocks_svjat_select_color_block_svjat_select_color_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/svjat-select-color-block/svjat-select-color-block.js */ "./src/blocks/svjat-select-color-block/svjat-select-color-block.js");
/* harmony import */ var _blocks_svjat_image_selector_block_svjat_image_selector_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/svjat-image-selector-block/svjat-image-selector-block.js */ "./src/blocks/svjat-image-selector-block/svjat-image-selector-block.js");
/* harmony import */ var _blocks_svjat_image_selector_block_svjat_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/svjat-image-selector-block/svjat-dynamic-block.scss */ "./src/blocks/svjat-image-selector-block/svjat-dynamic-block.scss");
/* harmony import */ var _blocks_svjat_copied_block1_svjat_copied_block1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/svjat-copied-block1/svjat-copied-block1.js */ "./src/blocks/svjat-copied-block1/svjat-copied-block1.js");
/* harmony import */ var _blocks_svjat_copied_block1_svjat_copied_block1_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/svjat-copied-block1/svjat-copied-block1.scss */ "./src/blocks/svjat-copied-block1/svjat-copied-block1.scss");
// Import JS and SCSS files throughout blocks folders









}();
/******/ })()
;
//# sourceMappingURL=index.js.map