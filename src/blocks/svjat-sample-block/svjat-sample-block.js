const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element; // Import the Component base class from the React.js abstraction
const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } =
    wp.editor;

import Edit from "./edit.js";

registerBlockType("svjat-r-g-b/svjat-sample-block", {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __("svjat-sample-block"), // Block title.
    icon: {
        foreground: "rgb(2, 255, 20)",
        src: "smiley",
    }, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [__("svjat-sample-block")],
    attributes: {
        categories: {
            type: "object",
        },
        selectedCategory: {
            type: "string",
        },
    },
    edit : Edit,
    save: function (props) {
        return null;
    },
});
