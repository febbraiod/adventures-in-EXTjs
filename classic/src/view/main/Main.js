/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suit the needs of your application.
 */

// probably not the right way, but if I did want to use an instance where do I define it?
// The tutorial seems to use instantiation in a lot of examples but 
// the example app seems to prefer .define and then calling the xtype

var panels = Ext.create('Ext.panel.Panel', {
    width: 400,
    height: 200,
    title: 'Container Panel',
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            title: 'This works',
            height: 100,
            columnWidth: 0.5
        },
        {
            xtype: 'panel',
            title: 'but is probably wrong',
            height: 100,
            columnWidth: 0.5
        }
    ]
});

var floatingPanel = Ext.create('Ext.panel.Panel', {
    width: 200,
    height: 100,
    floating: true, // make this panel an absolutely-positioned floating component
    title: 'Dragable Floating Panel',
    html: 'Shown with listener',
    // AH-mazing
    draggable: true
});

// this was the true beginning of this file:

Ext.define('DonSenchaApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DonSenchaApp.view.main.MainController',
        'DonSenchaApp.view.main.MainModel',
        'DonSenchaApp.view.main.List',
        'DonSenchaApp.view.main.Panels'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Table/Grid/List',
        iconCls: 'fa-table',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Lorem',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'HTML and Expressions',
        iconCls: 'fa-cogs',
        bind: {
            html: '{don}'
        }
    },{
        title: 'Panels(variable instance)',
        iconCls: 'fa-thumbs-down',
        items: [
            panels
        ]
    },{
        title: 'Panels(seperate file for view)',
        iconCls: 'fa-thumbs-up',
        items: [{
            xtype: 'tab-panels'
        }]
    },{
        title: 'Floating Panel',
        iconCls: 'fa-thumb-tack',
        itemId: 'floatingPanel',
        items: [ floatingPanel ]
    }],
    listeners: {
        // WOOT
    'tabchange': function(tabPanel, tab) {
        if (tab.itemId === 'floatingPanel') {
            floatingPanel.show();
        }
    }
}
});
