for (const selectedNode of figma.currentPage.selection) {
    switch (selectedNode.type) {
        case 'COMPONENT':
            const parent = selectedNode.parent;
            const newInstance = selectedNode.createInstance();
            parent.appendChild(newInstance);

            newInstance.x = selectedNode.x;
            newInstance.y = selectedNode.y;

            newInstance.detachInstance();
            selectedNode.remove();
            break;
        case 'INSTANCE':
            selectedNode.detachInstance();
            break;
        default:
            figma.notify(String(selectedNode.name) + " is neither a component nor an instance");
    }
}

figma.closePlugin();
