({
	handleComponentEvent : function(component, event, helper) {
		var message = event.getParam("message");
        alert(message+' in ChildComp2');
	},
    handleApplicationEvent4 : function(component, event, helper) {
		var message = event.getParam("message1");
        alert(message+' in ChildComp2');
	}
})