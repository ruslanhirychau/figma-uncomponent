// Loop through each selected node on the current page
for (const selectedNode of figma.currentPage.selection) {
  // Check the type of the selected node
  switch (selectedNode.type) {
    // If the selected node is a component
    case "COMPONENT":
      // Get the parent of the selected component
      const parent = selectedNode.parent;

      // Create a new instance of the selected component
      const newInstance = selectedNode.createInstance();

      // Add the new instance as a child of the selected component's parent
      const objectIndex = parent.children.indexOf(selectedNode);
      parent.insertChild(objectIndex, newInstance);

      // Set the position of the new instance to the position of the selected component
      newInstance.x = selectedNode.x;
      newInstance.y = selectedNode.y;

      // Detach the new instance from the selected component
      newInstance.detachInstance();

      // Remove the selected component from the page
      selectedNode.remove();
      break;

    // If the selected node is an instance
    case "INSTANCE":
      // Detach the instance from its parent
      selectedNode.detachInstance();
      break;

    // If the selected node is neither a component nor an instance
    default:
      figma.notify(
        String(selectedNode.name) + " is neither a component nor an instance"
      );
  }
}

// Close the plugin
figma.closePlugin();
