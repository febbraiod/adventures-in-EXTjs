
Ext.define('DonSenchaApp.view.main.Panels', {
    extend: 'Ext.panel.Panel',
    xtype: 'tab-panels',


    height: 300,
    title: 'Container Panels',
    items: [
        {
            xtype: 'panel',
            title: 'Almost definitely a better way',
            height: 100,
            width: '75%',
            margin: '10 0 0 0'
        },
        {
            xtype: 'panel',
            title: "Keeps each file's code discreet",
            height: 100,
            width: '75%'
        }
    ]
});
