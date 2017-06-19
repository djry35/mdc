$("#coordCategory").selectmenu({
	change: function() {

		var selected = $("#coordCategory").val();

		if(selected == "line") 
		{ 
			$("#lineStart").removeAttr("hidden");
			$("#startingUTM_X").attr("required", true);
			$("#startingUTM_Y").attr("required", true);
			$("#lineEnd").removeAttr("hidden");
			$("#endingUTM_X").attr("required", true);
			$("#endingUTM_Y").attr("required", true);
			$("#map").attr("hidden", true);
		}
		else if(selected == "point")
		{
			$("#lineStart").removeAttr("hidden");
			$("#startingUTM_X").attr("required", true);
			$("#startingUTM_Y").attr("required", true);
			$("#map").attr("hidden", true);
			$("#lineEnd").attr("hidden", true);
			$("#endingUTM_X").attr("required", false);
			$("#endingUTM_Y").attr("required", false);
		}
		else
		{
			$("#map").attr("hidden", true);
			$("#lineStart").attr("hidden", true);
			$("#startingUTM_X").attr("required", false);
			$("#startingUTM_Y").attr("required", false);
			$("#lineEnd").attr("hidden", true);
			$("#endingUTM_X").attr("required", false);
			$("#endingUTM_Y").attr("required", false);
		}
	}
});
$("#waterType").selectmenu();

$(".pollutionCat, .agPollution, .indPollution, .munPollution, .transPollution").
	checkboxradio({ icon: false });
$("#naturalPol, #unknownPol, #nonePol, #otherPol").checkboxradio({ icon: false });
$(".MWC, .GWC, .PD, .PA, .SA, .SD, .DD, .DA").checkboxradio({ icon: false });
$(".SpeciesNaturalKill, .fishInjury, .behavior").checkboxradio({ icon: false });
$("#otherDead, #fishDead, #liveFishPresent, #injuriesObserved").checkboxradio();

$("#stateOfDecay").selectmenu();
$("#dmgUnits, #unitsTime").selectmenu();

$("#unitsTempDuring, #cloudCoverDuring, #waterFlowDuring, #waterTurbidityDuring").selectmenu();
$("#unitsTempAfter, #cloudCoverAfter, #waterFlowAfter, #waterTurbidityAfter").selectmenu();
$("#InvestigationDate, #EventDate, #eventDatePol").datepicker({ changeMonth: true, changeYear: true });
$(".timeInput").timepicker({ 'scrollDefault': 'now', 'disableTextInput' : 'true' });
$("#dateNotified1").datepicker({ changeMonth: true, changeYear: true });

$("#form").accordion({
	collapsible: true,
	heightStyle: "content",
	active: false,
	icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },
	beforeActivate: function(event, ui) { 
		if($( "#form" ).accordion("option", "active") !== false)
		{
			$.LoadingOverlay("show");
			saveData();
			$.LoadingOverlay("hide");
		}
	}
});


