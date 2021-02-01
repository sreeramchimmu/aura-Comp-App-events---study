({
	methodsecond1 : function(component, event) {
        
        var appEvent = $A.get("e.c:ApplicationEvent");
        appEvent.setParams({
            message1 : "Application EVENT message from ParentComp2" });
        appEvent.fire();
    }
})