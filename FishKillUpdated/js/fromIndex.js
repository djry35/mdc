

//So once the DB is up and running, all fields that can be 
//autocompleted should pull from preexisting sites

/*$("#NearestTown").autocomplete({
	source:[]
})*/

$("#rLastName").focusout(
	function() {
			//grab values from Last Name
			var data = "TestAddr";
			/*$("#rAddress").val(data);
			$("#rZipCode").val(data);
			$("#rCity").val(data);
			$("#rPhone").val(data);

			//jumps to this input field	
			$("#WaterType").focus();*/
		}
);

$(".pollutionCat").change(
	function() {
		var id = $(this).attr("id");
		$("#" + id + "Options").toggle();
		$("#" + id + "Options").children("input").attr("data-parsley-mincheck", $(this).is(":checked") ? "1" : "0");
		$("#" + id + "Options").children("input").attr("required", $(this).is(":checked"));
	}
)

$(".otherSelection").change(
	function() {
		var str = ($(this).attr("class").toString().split(' '))[0];
		var prefix = str.slice(0, str.indexOf("Pollution"));
		$("#" + prefix + "OtherDesc").attr("hidden", !$(this).is(":checked"));
		$("#" + prefix + "OtherDesc").children().attr("required", $(this).is(":checked"));
	}
)

$("#OtherSpecies").change(
	function() {
		$("#speciesOther").toggle();
});



$("#injuryOther").change(
	function() {
		$("#injuriesOther").attr("hidden", !$(this).is(":checked"));
		$("#injuriesOther input").attr("required", $(this).is(":checked"));
});

$("#behaviorOther").change(
	function() {
		$("#behaviorsOther").toggle();
		$("#behaviorsOther input").attr("required", $(this).is(":checked"));
});

$("#otherSpeciesDead").change(
	function() {
		$("#speciesDeadOther").toggle();
		$("#speciesDeadOther input").attr("required", $(this).is(":checked"));
});

$(".PA").change(
	function() {
		$("#precAmt").attr("hidden", $("#NPA").is(":checked"));
		$("#precAmt").children("input").attr("required", !$("#NPA").is(":checked"));
});

$("#fishDead").change(
	function() {
		$("#naturalKillSpec").attr("hidden", !$(this).is(":checked"));
		$("#naturalDeadCt").attr("required", $(this).is(":checked") ? true : false);
});

$("#injuriesObserved").change(
	function() {
		$("#injuries").attr("hidden", !$(this).is(":checked"));
		$("#Abrasions").attr("data-parsley-mincheck", $(this).is(":checked") ? "1" : "0");
		$("#Abrasions").attr("required", $(this).is(":checked"));
		$("#injuryOtherSpec").attr("required", $(this).is(":checked") && $("#injuryOther").prop("checked"));
});