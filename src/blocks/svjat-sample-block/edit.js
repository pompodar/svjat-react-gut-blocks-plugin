// Load dependencies
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } =
    wp.editor;
const { PanelBody, Button, ResponsiveWrapper, Spinner } = wp.components;
const { compose } = wp.compose;
const { withSelect } = wp.data;

const ALLOWED_MEDIA_TYPES = ["image"];

class Edit extends Component {
    render() {
        const { attributes, setAttributes, bgImage } = this.props;
        const { bgImageId } = attributes;
        const instructions = (
            <p>
                {__(
                    "boilerplate instruction"
                )}
            </p>
        );
        return (
            <Fragment>
                <div>
                    boilerplate
                </div>
            </Fragment>
        );
    }
}

export default compose(
    withSelect((select, props) => {
        const { getMedia } = select("core");
        const { bgImageId } = props.attributes;

        return {
            bgImage: bgImageId ? getMedia(bgImageId) : null,
        };
    })
)
(Edit);
