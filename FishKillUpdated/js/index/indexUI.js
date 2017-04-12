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
	}
});
$("#waterType").selectmenu();

$(".pollutionCat, .agPollution, .indPollution, .munPollution, .transPollution").
	checkboxradio({ icon: false });
$("#naturalPol, #unknownPol, #nonePol, #otherPol").checkboxradio({ icon: false });
$(".MWC, .GWC, .PD, .PA, .SA, .SD, .DD, .DA").checkboxradio({ icon: false });
$(".SpeciesNaturalKill, .fishInjury, .behavior").checkboxradio({ icon: false });
$("#otherDead, #fishDead, #liveFishPresent, #injuriesObserved").checkboxradio({ icon: false });

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
	icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
});


