({
	handleComponentEvent2 : function(component, event, helper) {
		var message = event.getParam("message");
        alert(message+' in GrandParentComp');
	},
    handleApplicationEvent3 : function(component, event, helper) {
		var message = event.getParam("message1");
        alert(message+' in GrandParentComp');
	} 
})