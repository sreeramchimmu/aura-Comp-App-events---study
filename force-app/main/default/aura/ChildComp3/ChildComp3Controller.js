({
	handleApplicationEvent5 : function(component, event, helper) {
		var message = event.getParam("message1");
        alert(message+' in ChildComp3');
	} 
})