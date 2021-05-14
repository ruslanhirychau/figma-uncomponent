// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

for (const node of figma.currentPage.selection) 
{
    switch (node.type) 
    {
        case 'COMPONENT':
            const instance = node.createInstance();
            instance.x = node.x;
            instance.y = node.y;
    
            node.remove();
            instance.detachInstance();
          break;
        case 'INSTANCE':
            node.detachInstance();
          break;
        default:
          figma.notify(String(node.name) + " is neither a component nor an instance");
    }      
}

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.

figma.closePlugin()