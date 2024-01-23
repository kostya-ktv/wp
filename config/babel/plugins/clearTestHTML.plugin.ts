import { PluginItem } from "@babel/core";
/* Remove test prop from element */
export function clearTestHTML(): PluginItem {
  return {
    visitor: {
      JSXOpeningElement(path, state) {
        const forbiddenProp = state.opts.props?.length
          ? state.opts.props[0]
          : undefined;

        // Check if the element has any attributes (props)
        if (forbiddenProp && path.node.attributes) {
          // Filter out the data-testid prop
          path.node.attributes = path.node.attributes.filter((attribute) => {
            if (
              attribute.type === "JSXAttribute" &&
              attribute.name.name === forbiddenProp
            ) {
              return false; // Remove the data-testid prop
            }
            return true; // Keep other props
          });
        }
      },
    },
  };
}
/* Remove whole element */
// export function clearTestHTML(): PluginItem {
//   return {
//     visitor: {
//       Program(path, state) {
//         const forbiddenProps = state.opts.props || [];

//         path.traverse({
//           JSXIdentifier(current) {
//             const nodeName = current.node.name;

//             if (forbiddenProps.includes(nodeName)) {
//               current.parentPath.remove();
//             }
//           },
//         });
//       },
//     },
//   };
// }
