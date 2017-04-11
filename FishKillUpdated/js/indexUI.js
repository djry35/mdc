$( "#counties").autocomplete({
    source:["Adair", "Andrew", "Atchison", "Audrain", 
	    "Barry", "Barton", "Bates", "Benton", "Bollinger", 
	    "Boone", "Buchanan", "Butler", "Caldwell", "Callaway", 
	    "Camden", "Cape Girardeau", "Carroll", "Carter", "Cass", 
	    "Cedar", "Chariton", "Christian", "Clark", "Clay", "Clinton", 
	    "Cole", "Cooper", "Crawford", "Dade", "Dallas", "Daviess", "DeKalb", 
	    "Dent", "Douglas", "Dunklin", "Franklin", "Gasconade", "Gentry", "Greene", 
	    "Grundy", "Harrison", "Henry", "Hickory", "Holt", "Howard", "Howell", "Iron", 
	    "Jackson", "Jasper", "Jefferson", "Johnson", "Knox", "Laclede", "Lafayette", "Lawrence", 
	    "Lewis", "Lincoln", "Linn", "Livingston", "McDonald", "Macon", "Madison", "Maries", 
	    "Marion", "Mercer", "Miller", "Mississippi", "Moniteau", "Monroe", "Montgomery", 
	    "Morgan", "New Madrid", "Newton", "Nodaway", "Oregon", "Osage", "Ozark", "Pemiscot", 
	    "Perry", "Pettis", "Phelps", "Pike", "Platte", "Polk", "Pulaski", "Putnam", "Ralls", 
	    "Randolph", "Ray", "Reynolds", "Ripley", "St. Charles", "St. Clair", "St. Francois", 
	    "St. Genevieve", "St. Louis", "Saline", "Schuyler", "Scotland", "Scott", "Shannon", 
	    "Shelby", "St. Louis City", "Stoddard", "Stone", "Sullivan", "Taney", "Texas", "Vernon", 
	    "Warren", "Washington", "Wayne", "Webster", "Worth", "Wright"]
    ,autoFocus: true, delay: 10});

$("#rLastName").autocomplete({
	source:["Bill", "Bob", "Joe", "Johnson"],
	autoFocus: true,
	delay: 10
});

$("#coordCategory").selectmenu({
	change: function() {

		var selected = $("#coordCategory").val();

		if(selected == "line") 
		{ 
			$("#lineStart").removeAttr("hidden");
			$("#StartingUTM_X").attr("required", true);
			$("#StartingUTM_Y").attr("required", true);
			$("#lineEnd").removeAttr("hidden");
			$("#EndingUTM_X").attr("required", true);
			$("#EndingUTM_Y").attr("required", true);
			$("#map").attr("hidden", true);
		}
		else if(selected == "point")
		{
			$("#lineStart").removeAttr("hidden");
			$("#StartingUTM_X").attr("required", true);
			$("#StartingUTM_Y").attr("required", true);
			$("#map").attr("hidden", true);
			$("#lineEnd").attr("hidden", true);
			$("#EndingUTM_X").attr("required", false);
			$("#EndingUTM_Y").attr("required", false);
		}
		else if(selected == "map") 
		{ 
			$("#map").removeAttr("hidden");
			$("#lineStart").attr("hidden", true);
			$("#StartingUTM_X").attr("required", true);
			$("#StartingUTM_Y").attr("required", true);
			$("#lineEnd").attr("hidden", true);
			$("#EndingUTM_X").attr("required", false);
			$("#EndingUTM_Y").attr("required", false);
		}
		else
		{
			$("#map").attr("hidden", true);
			$("#lineStart").attr("hidden", true);
			$("#StartingUTM_X").attr("required", false);
			$("#StartingUTM_Y").attr("required", false);
			$("#lineEnd").attr("hidden", true);
			$("#EndingUTM_X").attr("required", false);
			$("#EndingUTM_Y").attr("required", false);
		}
		
		$(this).parsley().validate();
	}
});
$("#waterType").selectmenu( { change: function() { $(this).parsley().validate(); } } );

$(".pollutionCat, .agPollution, .indPollution, .munPollution, .transPollution").
	checkboxradio({ icon: false });
$("#naturalPol, #unknownPol, #nonePol, #otherPol").checkboxradio({ icon: false });
$(".MWC, .GWC, .PD, .PA, .SA, .SD, .DD, .DA").checkboxradio({ icon: false });
$(".SpeciesNaturalKill, .fishInjury, .behavior").checkboxradio({ icon: false });
$("#otherDead, #fishDead, #liveFishPresent, #injuriesObserved").checkboxradio({ icon: false });

$("#stateOfDecay").selectmenu( { change: function() { $(this).parsley().validate(); } } );
$("#dmgUnits, #unitsTime").selectmenu( { change: function() { $(this).parsley().validate(); } } );

$("#unitsTempDuring, #cloudCoverDuring, #waterFlowDuring, #waterTurbidityDuring").selectmenu( { change: function() { $(this).parsley().validate(); } } );
$("#unitsTempAfter, #cloudCoverAfter, #waterFlowAfter, #waterTurbidityAfter").selectmenu( { change: function() { $(this).parsley().validate(); } } );
$("#InvestigationDate, #EventDate, #eventDatePol").datepicker({ changeMonth: true, changeYear: true, 
			onSelect: function() { $(this).parsley().validate(); } });
$(".timeInput").timepicker({ 'scrollDefault': 'now', 'disableTextInput' : 'true' }).on("change", 
		function() { $(this).parsley().validate(); });
$("#dateNotified1").datepicker({ changeMonth: true, changeYear: true, 
			onSelect: function() { $(this).parsley().validate(); } });

$("#form").accordion({
	collapsible: true,
	heightStyle: "content",
	active: false,
	icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
});

$("#addPeopleNotified").button();

$("#addPeopleNotified").click( 
	function(event) {
		var num = $("#notifiedPeopleContainer").children().last().attr("id").slice(-1);
		if(num == null)
			num = 1;
		else
			num++;

		var agency = "<div class='inputWrapper'><label for='agencyNotified' class='txtFieldHeader'>Agency</label><input class='txtFieldInput agencyDropdown' id='agencyNotified" + num + "'></div>",
			notifiedPerson = "<div class='inputWrapper'><label for='personNotified' class='txtFieldHeader'>Name</label><input class='txtFieldInput' id='personNotified" + num + "'></div>",
			phone = "<div class='inputWrapper'><label for='phoneNotified' class='txtFieldHeader'>Phone</label><input type='tel' class='txtFieldInput' id='phoneNotified" + num + "' pattern='^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$'></div>",
			email = "<div class='inputWrapper'><label for='emailNotified' class='txtFieldHeader'>Email</label><input class='txtFieldInput' id='emailNotified" + num + "' pattern='/^[A-Z0-9._-]+@[A-Z0-9.-]+\\.[A-Z0-9.-]+$/i'></div>",
			date = "<div class='inputWrapper'><label for='dateNotified' class='txtFieldHeader'>Date</label><input class='txtFieldInput dateInput' id='dateNotified" + num + "'></div>",
			time = "<div class='inputWrapper'><label class='txtFieldHeader'>Time</label><input class='timeInput txtFieldInput' style='width: 90px'></div>",
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

		var investigatedPerson = "<div class='inputWrapper'><label for='personInvestigated' class='txtFieldHeader'>Name</label><input class='txtFieldInput' id='personInvestigated" + num + "'></div>",
			division = "<div class='inputWrapper'><label for='divisionInvestigated' class='txtFieldHeader'>Division</label><input class='txtFieldInput' id='divisionInvestigated" + num + "'></div>",
			phone = "<div class='inputWrapper'><label for='phoneInvestigated' class='txtFieldHeader'>Phone</label><input type='tel' class='txtFieldInput' id='phoneInvestigated" + num + "' pattern='^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$'></div>",
			hours = "<div class='inputWrapper'><label for='hoursInvestigated' class='txtFieldHeader'>Hours</label><input class='txtFieldInput' id='hoursInvestigated" + num + "' type='number'></div>",
			date = "<div class='inputWrapper'><label for='dateInvestigated' class='txtFieldHeader'>Date</label><input class='txtFieldInput dateInput' id='dateInvestigated" + num + "'></div>",
			button = "<input type='button' class='investigatedRemoveButton' value='Remove this person' id='removeInvestigated" + num + "'>";

		$("#investigativePeopleContainer").append(
			"<div class='investigatedPerson' id='investigated" + num 
			+ "'><label class='investigatedPersonHeader'>Person Information</label><div>" 
			+ button + "</div>" + investigatedPerson + division + phone + hours + date 
			+  "</div>");

		$("#dateInvestigated" + num).datepicker({ changeMonth: true, changeYear: true });

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

		var stationDescription = "<div class='inputWrapper'><label for='waterSampleStationDescription" + num + "' class='txtFieldHeader'>Station Description</label><input class='txtFieldInput' id='waterSampleStationDescription" + num + "'></div>",

			county = "<div class='inputWrapper'><label for='county" + num + "' class='txtFieldHeader'>Date</label><input class='txtFieldInput' id='county" + num + "'></div>",

			coordinates = "<div class='inputWrapper'><label for='dateRecorded' class='txtFieldHeader'>Coordinates</label><input class='txtFieldInput dateInput' id='dateRecorded" + num + "'></div>",
			DO = "<div class='inputWrapper'><label for='DO" + num + "' class='txtFieldHeader'>DO (mg/L)</label><input class='txtFieldInput' id='DO" + num + "'></div>",

			temp = "<div class='inputWrapper'><label for='temp" + num + "' class='txtFieldHeader'>Temperature</label><input class='txtFieldInput' id='temp" + num + "'></div>",

			pH = "<div class='inputWrapper'><label for='pH" + num + "' class='txtFieldHeader'>pH</label><input class='txtFieldInput' id='pH" + num + "'></div>",

			NH3 = "<div class='inputWrapper'><label for='NH3" + num + "' class='txtFieldHeader'>NH3 (mg/L)</label><input class='txtFieldInput' id='NH3" + num + "'></div>",

			comments = "<div class='inputWrapper'><label for='stationComments" + num + "' class='txtFieldHeader'>Comments</label><input class='txtFieldInput dateInput' id='stationComments" + num + "'></div>",

			date = "<div class='inputWrapper'><label for='dateRecorded' class='txtFieldHeader'>Date</label><input class='txtFieldInput dateInput' id='dateRecorded" + num + "'></div>",

			time = "<div class='inputWrapper'><label class='txtFieldHeader'>Time</label><input class='timeInput txtFieldInput' style='width: 90px'></div>",

			button = "<input type='button' class='stationRemoveButton' value='Remove this station' id='removeStation" + num + "'>";

		$("#waterSampleStationsContainer").append(
			"<div class='sampleStation' id='station" + num 
			+ "'><label class='sampleStationHeader'>Station Information</label><div>" 
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