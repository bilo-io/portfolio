export default getLabel = (selection) => {
    return selection.pretty_label ? selection.pretty_label : selection.label;
}