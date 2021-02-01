({
    methodfirst : function(component, event, helper) {
        var compEvent = component.getEvent("ChildComp1");
		compEvent.setParams({
            "message" : "Component EVENT message from childComp1" });
        compEvent.fire();
    }
})