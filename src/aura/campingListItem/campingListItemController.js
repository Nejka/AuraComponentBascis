/**
 * Created by nejka on 19/04/2020.
 */

({
    packItem: function(component, event, helper) {
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled", true);
        component.set("v.item.Packed__c", true);
    }
});