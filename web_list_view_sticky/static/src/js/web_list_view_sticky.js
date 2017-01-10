odoo.define('web.FreezeTableHeader',function (require) {
    "use strict";

    var core = require('web.core');
    var ListView = require('web.ListView');

    var _t = core._t;

    var FreezeTableHeader = ListView.include({
        load_list: function () {
            var self = this;
            self._super.apply(this, arguments);
            setTimeout(function(){
                var scrollArea = self.$el.parents('.oe-view-manager.oe_view_manager_current').find('.oe-view-manager-content .oe-view-manager-view-list')[0];
                if(scrollArea){
                    self.$el.find('table.oe_list_content').each(function(){
                        $(this).stickyTableHeaders({scrollableArea: scrollArea, leftOffset: scrollArea, "fixedOffset": 1 })
                    });
                }
         }, 1000);
            
        },
    });

});

