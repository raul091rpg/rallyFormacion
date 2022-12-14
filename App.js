Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log('our first app rally');
        this._loadData();
    },
    _loadData: function() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(mystore, data, success) {
                    console.log('got data',mystore,data,success);
                    this._loadGrid(myStore);
                },
                scope:this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },

    _loadGrid: function(myStoryStore) {
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myStoryStore,
            columCfgs:[
                'FormattedID','Name', 'ScheduleState'
            ]
        });
        this.add(myGrid);
        console.log('what is this ',this);
    }
});