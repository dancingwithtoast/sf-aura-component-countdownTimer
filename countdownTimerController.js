({
	onMinutesChange : function(component, event, helper) {
		var minutes = component.get('v.minutes');
        if (minutes != null && minutes > 0) {
            component.set('v.countDownMinutes', minutes - 1);
            component.set('v.countDownSeconds', 60);
        }
	},
    onStartTime : function(component, event, helper) {
		var minutes = component.get('v.minutes');
        if (minutes != null && minutes > 0){
        	function countDownTimer() {
                var countDownMinutes = component.get('v.countDownMinutes');
                var countDownSeconds = component.get('v.countDownSeconds');
                if (countDownMinutes == 0 && countDownSeconds == 0) {
                    alert('Congratutlations, you\'ve completed your target time for studying!!');
                    location.reload();
                }
                if (countDownSeconds == 0) {
                    component.set('v.countDownMinutes', countDownMinutes - 1);
                    component.set('v.countDownSeconds', 60);
                }else{
                    component.set('v.countDownSeconds', countDownSeconds - 1);
                }
        	}
            setInterval(countDownTimer, 1000);
        }
	},
})