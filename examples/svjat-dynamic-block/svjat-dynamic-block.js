const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component } = wp.element; // Import the Component base class from the React.js abstraction

registerBlockType("svjat-r-g-b/svjat-dynamic-block", {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __("svjat-dynamic-block"), // Block title.
    icon: {
        foreground: "rgb(2, 255, 20)",
        src: "smiley",
    }, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [__("svjat-dynamic-style-selection-block")],
    attributes: {
        categories: {
            type: "object",
        },
        selectedCategory: {
            type: "string",
        },
    },
    edit: (props) => {
        let cats = [];
        let selectedCat;

        wp.apiFetch({
            url: "/wp-json/wp/v2/categories",
        }).then((categories) => {
            props.setAttributes({
                categories: categories,
            });
        });

        if (props.attributes.categories) {
            cats = props.attributes.categories;
            selectedCat = props.attributes.selectedCategory;
        }

        function updateCategory(e) {
            props.setAttributes({
                selectedCategory: e.target.value,
            });
        }

        return (
            <div>
                <select onChange={updateCategory} value={selectedCat}>
                    {cats.map((cat) => {
                        return (
                            <option value={cat.id} key={cat.id}>
                                {cat.name}
                            </option>
                        );
                    })}
                </select>
                <input type="text" placeholder=""></input>
            </div>
        );
    },
    save: function (props) {
        return null;
    },
});
