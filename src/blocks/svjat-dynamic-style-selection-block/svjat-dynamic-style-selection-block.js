const { registerBlockType } = wp.blocks;
const { Component } = wp.element;
const { RichText, InspectorControls, BlockControls, AlignmentToolbar } =
    wp.blockEditor;
const {
    ToggleControl,
    PanelBody,
    PanelRow,
    CheckboxControl,
    SelectControl,
    ColorPicker,
    Toolbar,
    IconButton,
} = wp.components;

class FirstBlockEdit extends Component {    
    render() {
        const { attributes, setAttributes } = this.props;

        const alignmentClass =
            attributes.textAlignment != null
                ? "has-text-align-" + attributes.textAlignment
                : "";

        let cats = [];
        let selectedCat;

        wp.apiFetch({
            url: "/wp-json/wp/v2/categories",
        }).then((categories) => {
            setAttributes({
                categories: categories,
            });
        });
                        
        if (attributes.categories) {
            cats = attributes.categories;
            selectedCat = attributes.selectedCategory;
        }
                
        function updateCategory(e) {
            setAttributes({
                selectedCategory: e.target.value,
            });
        }
        
        const divStyle = {
            background: attributes.favoriteColor
        };
        
        return (
            <div className={alignmentClass}>
                <InspectorControls>
                    <PanelBody
                        title="Most awesome settings ever"
                        initialOpen={true}
                    >
                        <PanelRow>
                            <ToggleControl
                                label="Toggle me"
                                checked={attributes.toggle}
                                onChange={(newval) =>
                                    setAttributes({ toggle: newval })
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <SelectControl
                                label="What's your favorite animal?"
                                value={attributes.favoriteAnimal}
                                options={[
                                    { label: "Dogs", value: "dogs" },
                                    { label: "Cats", value: "cats" },
                                    {
                                        label: "Something else",
                                        value: "weird_one",
                                    },
                                ]}
                                onChange={(newval) =>
                                    setAttributes({ favoriteAnimal: newval })
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ColorPicker
                                color={attributes.favoriteColor}
                                onChangeComplete={(newval) => {
                                    setAttributes({
                                        favoriteColor: newval.hex,
                                    });
                                }}
                                disableAlpha
                            />
                        </PanelRow>
                        <PanelRow>
                            <CheckboxControl
                                label="Activate lasers?"
                                checked={attributes.activateLasers}
                                onChange={(newval) =>
                                    setAttributes({ activateLasers: newval })
                                }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar
                        value={attributes.textAlignment}
                        onChange={(newalign) =>
                            setAttributes({ textAlignment: newalign })
                        }
                    />
                    <Toolbar>
                        <IconButton
                            label="My very own custom button"
                            icon="edit"
                            className="my-custom-button"
                            onClick={() => console.log("pressed button")}
                        />
                    </Toolbar>
                </BlockControls>
                <select onChange={updateCategory} value={selectedCat}>
                    {cats.map((cat) => {
                        return (
                            <option value={cat.id} key={cat.id}>
                                {cat.name}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}

registerBlockType("svjat-r-g-b/svjat-dynamic-style-selection-block", {
    title: "svjat-dynamic-style-selection-block",
    category: "common",
    icon: {
        foreground: "rgb(2, 255, 20)",
        src: "smiley",
    },
    keywords: ["svjat-dynamic-style-selection-block"],
    attributes: {
        myRichHeading: {
            type: "string",
        },
        myRichText: {
            type: "string",
        },
        textAlignment: {
            type: "string",
        },
        toggle: {
            type: "boolean",
            default: true,
        },
        favoriteAnimal: {
            type: "string",
            default: "dogs",
        },
        favoriteColor: {
            type: "string",
            default: "#DDDDDD",
        },
        activateLasers: {
            type: "boolean",
            default: false,
        },
        categories: {
            type: "object",
        },
        selectedCategory: {
            type: "string",
        },
    },
    supports: {
        align: ["wide", "full"],
    },
    edit: FirstBlockEdit,
    save: (props) => {
        return null;
    },
});
