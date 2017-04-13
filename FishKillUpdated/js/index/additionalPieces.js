$("#addPeopleNotified").button();
$("#addPeopleNotified").click( 
	function(event) {
		var num = $("#notifiedPeopleContainer").children().last().attr("id").slice(-1);
		if(num == null)
			num = 1;
		else
			num++;

		var agency = "<div class='inputWrapper'><label for='agencyNotified" + num + "' class='txtFieldHeader'>Agency</label><input class='txtFieldInput agencyDropdown' name='agencyNotified" + num + "' id='agencyNotified" + num + "'></div>",
			notifiedPerson = "<div class='inputWrapper'><label for='personNotified" + num + "' class='txtFieldHeader'>Name</label><input class='txtFieldInput' name='personNotified" + num + "' id='personNotified" + num + "'></div>",
			phone = "<div class='inputWrapper'><label for='phoneNotified" + num + "' class='txtFieldHeader'>Phone</label><input type='tel' class='txtFieldInput' name='phoneNotified" + num + "' id='phoneNotified" + num + "' pattern='^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$'></div>",
			email = "<div class='inputWrapper'><label for='emailNotified" + num + "' class='txtFieldHeader'>Email</label><input class='txtFieldInput' name='emailNotified" + num + "' id='emailNotified" + num + "' pattern='/^[A-Z0-9._-]+@[A-Z0-9.-]+\\.[A-Z0-9.-]+$/i'></div>",
			date = "<div class='inputWrapper'><label for='dateNotified" + num + "' class='txtFieldHeader'>Date</label><input class='txtFieldInput dateInput' name='dateNotified" + num + "' id='dateNotified" + num + "'></div>",
			time = "<div class='inputWrapper'><label class='txtFieldHeader' for='timeNotified" + num + "'>Time</label><input class='timeInput txtFieldInput' name='timeNotified" + num + "' id='timeNotified" + num + "' style='width: 90px'></div>",
			button = "<input type='button' class='notifiedRemoveButton' value='Remove this person' id='removeNotified" + num + "'>";

		$("#notifiedPeopleContainer").append(
			"<div class='notifiedPerson' id='notified" + num 
			+ "'><label class='notifiedPersonHeader'>Person Information</label><div>" 
			+ button + "</div>" + agency + notifiedPerson + phone + email + date + time + "</div>");
		$("#dateNotified" + num).datepicker({ changeMonth: true, changeYear: true, 
			onSelect: function() { $(this).parsley().validate(); } });
		$(".agencyDropdown").autocomplete({
			source: ["DNR-EER", "DNR-Regional", "MDC-Aquatic Health Unit", 
				"MDC-Supervisor"]
			,autoFocus: true, delay: 10});
		$("#removeNotified" + num).button();
		$(".notifiedRemoveButton").click(
			function(event) {
				var num = $(this).attr("id").slice(-1);
				$("#notified" + num).remove();
			}
		);
		$("#unitsTime" + num + "-button.ui-selectmenu-button.ui-button").
			css("width", "100px");
	}
);


$("#addPeopleInvestigated").button();
$("#addPeopleInvestigated").click( 
	function(event) {
		var num = $("#investigativePeopleContainer").children().last().attr("id");
		if(num == null)
			num = 1;
		else
		{
			num = num.slice(-1);
			num++;
		}

		var investigatedPerson = "<div class='inputWrapper'><label for='personInvestigated' class='txtFieldHeader'>Name</label><input class='txtFieldInput' name='personInvestigated" + num + "' id='personInvestigated" + num + "'></div>",
			division = "<div class='inputWrapper'><label for='divisionInvestigated' class='txtFieldHeader'>Division</label><input name='divisionInvestigated" + num + "' class='txtFieldInput' id='divisionInvestigated" + num + "'></div>",
			phone = "<div class='inputWrapper'><label for='phoneInvestigated' class='txtFieldHeader'>Phone</label><input type='tel' name='phoneInvestigated" + num + "' class='txtFieldInput' id='phoneInvestigated" + num + "' pattern='^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$' style='width: 150px'></div>",
			hours = "<div class='inputWrapper'><label for='hoursInvestigated' class='txtFieldHeader'>Hours</label><input name='hoursInvestigated" + num + "' class='txtFieldInput' id='hoursInvestigated" + num + "' type='number' style='width: 90px'></div>",
			date = "<div class='inputWrapper'><label for='dateInvestigated' class='txtFieldHeader'>Date</label><input name='dateInvestigated" + num + "' class='txtFieldInput dateInput' id='dateInvestigated" + num + "'></div>",
			checkbox = "<label for='fieldInvestigator" + num + "' style='margin-left:212px'>Field Investigator</label><input name='fieldInvestigator' value='fieldInvestigator' type='checkbox' id='fieldInvestigator" + num + "'>",
			button = "<input type='button' class='investigatedRemoveButton' value='Remove this person' id='removeInvestigated" + num + "'>";

		$("#investigativePeopleContainer").append(
			"<div class='investigatedPerson' id='investigated" + num 
			+ "'><label class='investigatedPersonHeader'>Person Information</label><div>" 
			+ button + "</div>" + investigatedPerson + division + phone + hours + date 
			+  checkbox + "</div>");

		$("#dateInvestigated" + num).datepicker({ changeMonth: true, changeYear: true });
		$("#fieldInvestigator" + num).checkboxradio();
		$("#removeInvestigated" + num).button();
		$(".investigatedRemoveButton").click(
			function(event) {
				var num = $(this).attr("id").slice(-1);
				$("#investigated" + num).remove();
			}
		);
	}
);


$("#addWaterSampleStations").button();
$("#addWaterSampleStations").click( 
	function(event) {
		var num = $("#waterSampleStationsContainer").children().last().attr("id");
		if(num == null)
			num = 1;
		else
		{
			num = num.slice(-1);
			num++;
		}

		var stationDescription = "<div class='inputWrapper'><label for='waterSampleStationDescription" + num + "' class='txtFieldHeader'>Station Description</label><textarea name='waterSampleStationDescription" + num + "' class='txtFieldInput' id='waterSampleStationDescription" + num + "' style='width: 20%'></textarea></div>",

			county = "<div class='inputWrapper'><label for='waterStationCounty" + num + "' class='txtFieldHeader'>County</label><input name='waterStationCounty" + num + "' class='txtFieldInput' id='waterStationCounty" + num + "'></div>",

			coordinates = "<div class='inputWrapper'><label for='dateRecorded" + num + "' class='txtFieldHeader'>Coordinates</label><input class='txtFieldInput dateInput'></div>",
			DO = "<div class='inputWrapper'><label for='DO" + num + "' class='txtFieldHeader'>DO (mg/L)</label><input name='DO" + num + "' class='txtFieldInput' id='DO" + num + "' style='width: 90px'></div>",

			temp = "<div class='inputWrapper'><label for='temp" + num + "' class='txtFieldHeader'>Temperature</label><input name='temp" + num + "' class='txtFieldInput' id='temp" + num + "' style='width: 90px'></div>",

			pH = "<div class='inputWrapper'><label for='pH" + num + "' class='txtFieldHeader'>pH</label><input name='pH" + num + "' class='txtFieldInput' id='pH" + num + "' style='width: 90px'></div>",

			NH3 = "<div class='inputWrapper'><label for='NH3" + num + "' class='txtFieldHeader'>NH3 (mg/L)</label><input name='NH3" + num + "' class='txtFieldInput' id='NH3" + num + "' style='width: 90px'></div>",

			comments = "<div class='inputWrapper'><label for='stationComments" + num + "' class='txtFieldHeader'>Comments</label><textarea name='stationComments" + num + "' class='txtFieldInput dateInput' id='stationComments" + num + "' cols='100' style='width: 20%'></textarea></div>",

			date = "<div class='inputWrapper'><label for='dateRecorded" + num + "' class='txtFieldHeader'>Date</label><input name='dateRecorded" + num + "' class='txtFieldInput dateInput' id='dateRecorded" + num + "'></div>",

			time = "<div class='inputWrapper'><label for='stationTimeRecorded" + num + "' class='txtFieldHeader'>Time</label><input name='stationTimeRecorded" + num + "' class='timeInput txtFieldInput' id='stationTimeRecorded" + num + "' style='width: 90px'></div>",

			

			button = "<input type='button' class='stationRemoveButton' value='Remove this station' id='removeStation" + num + "'>";

		$("#waterSampleStationsContainer").append(
			"<div class='sampleStation' id='station" + num 
			+ "' style='height: 700px'><label class='sampleStationHeader'>Station Information</label><div>" 
			+ button + "</div>" + stationDescription + county + coordinates 
			+ DO + temp + pH + NH3 + comments + date + time + "</div>");

		$("#dateRecorded" + num).datepicker({ changeMonth: true, changeYear: true });
		$("#removeStation" + num).button();
		$(".stationRemoveButton").click(
			function(event) {
				var num = $(this).attr("id").slice(-1);
				$("#station" + num).remove();
			}
		);
	}
);