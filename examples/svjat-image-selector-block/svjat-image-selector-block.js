const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element; // Import the Component base class from the React.js abstraction
const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } =
    wp.editor;
import Edit from "./edit.js";

registerBlockType("svjat-r-g-b/svjat-image-selector-block", {
    // TODO CHANGABLE
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __("svjat-image-selector-block"), // TODO CHANGABLE
    icon: {
        foreground: "rgb(2, 255, 20)",
        src: "smiley",
    }, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [__("svjat-image-selector-block")], // TODO CHANGABLE
    attributes: {
        bgImageId: {
            type: "number",
        },
    },
    edit : Edit,
    save() {
        return <InnerBlocks.Content />;
    },
});