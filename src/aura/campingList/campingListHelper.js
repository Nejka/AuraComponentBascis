/**
 * Created by nejka on 19/04/2020.
 */

({
    addItem: function(component, newItem) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": newItem
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {

            }
        });
        $A.enqueueAction(action);
    },
});