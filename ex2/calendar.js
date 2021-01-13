$(document).ready(function() {
	$.ajax({
		url: "test-task2.php",
		type: "GET",
		dataType: "json"
	}).done(function(data){
		//console.log(data);
		var n = 5,
			freeBusyDays = new Object();
		for (key in data) {
			if (data[key] < n) {
				freeBusyDays[key] = 1;
			} else if (data[key] >= n) {
				freeBusyDays[key] = 0;
			}
		}

		var options = {
            	showAlways: true,
            	cssName: 'darkneon',
    			// todayDate: new Date(2021, 1, 13),
    			todayDate: new Date(),
    			selectedDate: null,
    			selectableDates: [

    			]
            },
        	i = 0,
        	date = new Object();
        // Добавление дней, на которые возможна бронь
        for (key in freeBusyDays) {
			if (freeBusyDays[key] == 1) {
				var dateObj = new Date(key),
					year = dateObj.getFullYear(),
					month = dateObj.getMonth() + 1,
					day = dateObj.getDate();

				options['selectableDates'][i] = new Object();
				options['selectableDates'][i]['date'] = new Date(year, month, day);
				i++;
			}
		};

        $('#mydate').glDatePicker(options);

	}).fail(function(){
		alert("Request failed"); 
	})
})
