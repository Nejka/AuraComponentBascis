/**
 * Created by nejka on 19/04/2020.
 */

public with sharing class campingListController {
 @AuraEnabled
public static List<Camping_Item__c> getItems(){
     return [select Name, Price__c, Quantity__c, Packed__c from Camping_Item__c];
}
    @AuraEnabled
    public static void saveItem(Camping_Item__c item){
            insert item;
    }

}