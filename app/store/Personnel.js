Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: {
        items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", title: "Captain" },
            { name: 'Worf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222", title: "Security Officer" },
            { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333", title: "Chief Medical Officer" },
            { name: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444", title: "Chief Engineer" },
            { name: 'Max', email: "mr.max@enterprise.com", phone: "555-554-4444", title: "Chief Engineer" },
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
