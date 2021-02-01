({
	handleComponentEvent1 : function(component, event, helper) {
		var message = event.getParam("message");
        alert(message+' in ParentComp1');
	}
})