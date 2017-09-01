const plugin = (editor) => {
    editor.addButton('tinymceGenericPlugin', {
        text: editor.getParam('generic_plugin_data').plugin_text || false,
        icon: editor.getParam('generic_plugin_data').plugin_icon || false,
        tooltip: editor.getParam('generic_plugin_data').plugin_tooltip || '',
        onclick: () => {
            editor.windowManager.open({
                title: editor.getParam('generic_plugin_data').plugin_title || 'Generic plugin',
                body: [
                    {
                        type: 'iframe',
                        id:"tinymce-generic-plugin",
                        url: editor.getParam('generic_plugin_data').plugin_frame_url,
                        minWidth: editor.getParam('generic_plugin_data').plugin_width || 800,
                        minHeight: editor.getParam('generic_plugin_data').plugin_height || 600
                    }
                ],
                width: editor.getParam('generic_plugin_data').plugin_width || 800,
                height: editor.getParam('generic_plugin_data').plugin_height || 800,
                buttons: [{
                    text: editor.getParam('generic_plugin_data').plugin_close_txt || 'Close',
                    onclick: 'close'
                }],
                scrollbars: true
            }, {
                customData : editor.getParam('generic_plugin_data')
            });
        }
    });
};

export default plugin;
