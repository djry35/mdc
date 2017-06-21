$("#addPeopleNotified").button();
$("#addPeopleNotified").click( 
	function(event) {
		var num = $("#notifiedPeopleContainer").children().last().attr("id").slice(-1);
		if(num == null)
			num = 1;
		else
			num++;

		var agency = "<div class='inputWrapper'><label for='agencyNotified" + num + "' class='txtFieldHeader'>Agency</label><input class='txtFieldInput agencyDropdown' name='agencyNotified" + num + "' id='agencyNotified" + num + "'></div>",
			FName = "<div class='inputWrapper'><label for='personNotifiedFName" + num + "' class='txtFieldHeader'>First Name</label><input class='txtFieldInput' name='personNotifiedFName" + num + "' id='personNotifiedFName" + num + "'></div>",
			LName = "<div class='inputWrapper'><label for='personNotifiedLName" + num + "' class='txtFieldHeader'>Last Name</label><input class='txtFieldInput' name='personNotifiedLName" + num + "' id='personNotifiedLName" + num + "'></div>",
			phone = "<div class='inputWrapper'><label for='phoneNotified" + num + "' class='txtFieldHeader'>Phone</label><input type='tel' class='txtFieldInput' name='phoneNotified" + num + "' id='phoneNotified" + num + "' pattern='^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$'></div>",
			email = "<div class='inputWrapper'><label for='emailNotified" + num + "' class='txtFieldHeader'>Email</label><input class='txtFieldInput' name='emailNotified" + num + "' id='emailNotified" + num + "' pattern='/^[A-Z0-9._-]+@[A-Z0-9.-]+\\.[A-Z0-9.-]+$/i'></div>",
			date = "<div class='inputWrapper'><label for='dateNotified" + num + "' class='txtFieldHeader'>Date</label><input class='txtFieldInput dateInput' name='dateNotified" + num + "' id='dateNotified" + num + "'></div>",
			time = "<div class='inputWrapper'><label class='txtFieldHeader' for='timeNotified" + num + "'>Time</label><input class='timeInput txtFieldInput' name='timeNotified" + num + "' id='timeNotified" + num + "' style='width: 90px'></div>",
			button = "<input type='button' class='notifiedRemoveButton' value='Remove this person' id='removeNotified" + num + "'>";

		$("#notifiedPeopleContainer").append(
			"<div class='notifiedPerson' id='notified" + num 
			+ "'><label class='notifiedPersonHeader'>Person Information</label><div>" 
			+ button + "</div>" + agency + FName + LName + phone + email + date + time + "</div>");
		$("#dateNotified" + num).datepicker({ changeMonth: true, changeYear: true, 
			/* onSelect: function() { $(this).parsley().validate(); } */ });
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

		var FName = "<div class='inputWrapper'><label for='personInvestigatedFName" + num + "' class='txtFieldHeader'>First Name</label><input class='txtFieldInput' name='personInvestigatedFName" + num + "' id='personInvestigatedFName" + num + "'></div>",
			LName = "<div class='inputWrapper'><label for='personInvestigatedLName" + num + "' class='txtFieldHeader'>Last Name</label><input class='txtFieldInput' name='personInvestigatedLName" + num + "' id='personInvestigatedLName" + num + "'></div>",
			division = "<div class='inputWrapper'><label for='divisionInvestigated" + num + "' class='txtFieldHeader'>Division</label><input name='divisionInvestigated" + num + "' class='txtFieldInput' id='divisionInvestigated" + num + "'></div>",
			phone = "<div class='inputWrapper'><label for='phoneInvestigated" + num + "' class='txtFieldHeader'>Phone</label><input type='tel' name='phoneInvestigated" + num + "' class='txtFieldInput' id='phoneInvestigated" + num + "' pattern='^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$' style='width: 150px'></div>",
			hours = "<div class='inputWrapper'><label for='hoursInvestigated" + num + "' class='txtFieldHeader'>Hours</label><input name='hoursInvestigated" + num + "' class='txtFieldInput' id='hoursInvestigated" + num + "' type='number' style='width: 90px'></div>",
			date = "<div class='inputWrapper'><label for='dateInvestigated" + num + "' class='txtFieldHeader'>Date</label><input name='dateInvestigated" + num + "' class='txtFieldInput dateInput' id='dateInvestigated" + num + "'></div>",
			checkbox = "<label for='fieldInvestigator" + num + "' style='margin-left:212px'>Field Investigator</label><input name='fieldInvestigator" + num + "' type='checkbox' id='fieldInvestigator" + num + "'>",
			button = "<input type='button' class='investigatedRemoveButton' value='Remove this person' id='removeInvestigated" + num + "'>";

		$("#investigativePeopleContainer").append(
			"<div class='investigatedPerson' id='investigated" + num 
			+ "'><label class='investigatedPersonHeader'>Person Information</label><div>" 
			+ button + "</div>" + FName + LName + division + phone + hours + date 
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

		var ID = "<div class='inputWrapper'><label for='waterStationID" + num + "' class='txtFieldHeader'>Station ID</label><input name='waterStationID" + num + "' class='txtFieldInput' id='waterStationID" + num + "' style='width: 90px'></div>",
			stationDescription = "<div class='inputWrapper'><label for='waterStationDescription" + num + "' class='txtFieldHeader'>Station Description</label><textarea name='waterStationDescription" + num + "' class='txtFieldInput' id='waterStationDescription" + num + "' style='width: 20%'></textarea></div>",
			county = "<div class='inputWrapper'><label for='waterStationCounty" + num + "' class='txtFieldHeader'>County</label><input name='waterStationCounty" + num + "' class='txtFieldInput' id='waterStationCounty" + num + "'></div>",
			coordinates = "<div class='inputWrapper'><label for='waterStationCoordinate" + num + "' class='txtFieldHeader'>Coordinates</label><input name='waterStationCoordinate" + num + "' class='txtFieldInput dateInput' id='waterStationCoordinate" + num + "'></div>",
			DO = "<div class='inputWrapper'><label for='waterStationDO" + num + "' class='txtFieldHeader'>DO (mg/L)</label><input name='waterStationDO" + num + "' class='txtFieldInput' id='waterStationDO" + num + "' style='width: 90px'></div>",
			temp = "<div class='inputWrapper'><label for='waterStationTemp" + num + "' class='txtFieldHeader'>Temperature</label><input name='waterStationTemp" + num + "' class='txtFieldInput' id='waterStationtemp" + num + "' style='width: 90px'></div>",
			pH = "<div class='inputWrapper'><label for='waterStationPH" + num + "' class='txtFieldHeader'>pH</label><input name='waterStationPH" + num + "' class='txtFieldInput' id='waterStationpH" + num + "' style='width: 90px'></div>",
			NH3 = "<div class='inputWrapper'><label for='waterStationNH3" + num + "' class='txtFieldHeader'>NH3 (mg/L)</label><input name='waterStationNH3" + num + "' class='txtFieldInput' id='waterStationNH3" + num + "' style='width: 90px'></div>",
			comments = "<div class='inputWrapper'><label for='waterStationComments" + num + "' class='txtFieldHeader'>Comments</label><textarea name='waterStationComments" + num + "' class='txtFieldInput dateInput' id='waterStationComments" + num + "' cols='100' style='width: 20%'></textarea></div>",
			date = "<div class='inputWrapper'><label for='waterStationDateRecorded" + num + "' class='txtFieldHeader'>Date</label><input name='waterStationDateRecorded" + num + "' class='txtFieldInput dateInput' id='waterStationDateRecorded" + num + "'></div>",
			time = "<div class='inputWrapper'><label for='waterStationTimeRecorded" + num + "' class='txtFieldHeader'>Time</label><input name='waterStationTimeRecorded" + num + "' class='timeInput txtFieldInput' id='waterStationTimeRecorded" + num + "' style='width: 90px'></div>",
			button = "<input type='button' class='stationRemoveButton' value='Remove this station' id='removeStation" + num + "'>";

		$("#waterSampleStationsContainer").append(
			"<div class='sampleStation' id='station" + num 
			+ "' style='height: 700px'><label class='sampleStationHeader'>Station Information</label><div>" 
			+ button + "</div>" + ID + stationDescription + county + coordinates 
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