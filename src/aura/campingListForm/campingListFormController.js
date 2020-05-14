/**
 * Created by nejka on 19/04/2020.
 */

({
    clickCreateItem: function(component, event, helper) {
        //check if input is valid
        let validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);


        // Create the new item
        let newItem = component.get("v.newItem");

        helper.createItem(component, newItem);







    }
});