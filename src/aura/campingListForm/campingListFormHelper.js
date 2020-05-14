/**
 * Created by nejka on 19/04/2020.
 */

({createItem: function(component, newItem) {
        var addItemEvent = component.getEvent("addItem");
        addItemEvent.setParams({ "item": newItem });
        addItemEvent.fire();
        //set new item back to blank item
        component.set("v.newItem",{'sobjectType':'Camping_Item__c',
            'Name': '',
            'Quantity__c': 0,
            'Price__c': 0,
            'Packed__c': false});
    },});