$(".pollutionCat").change(
	function() {
		var id = $(this).attr("id");
		$("#" + id + "Options").attr("hidden", !$(this).is(":checked"));
	}
)

$(".otherSelection").change(
	function() {
		var str = ($(this).attr("class").toString().split(' '))[0];
		var prefix = str.slice(0, str.indexOf("Pollution"));
		$("#" + prefix + "OtherDesc").attr("hidden", !$(this).is(":checked"));
	}
)

$("#OtherSpecies").change(
	function() {
		$("#speciesOther").attr("hidden", !$(this).is(":checked"));
});

$("#injuryOther").change(
	function() {
		$("#injuriesOther").attr("hidden", !$(this).is(":checked"));
});

$("#behaviorOther").change(
	function() {
		$("#behaviorsOther").attr("hidden", !$(this).is(":checked"));
});

$("#otherSpeciesDead").change(
	function() {
		$("#speciesDeadOther").attr("hidden", !$(this).is(":checked"));
});

$(".PA").change(
	function() {
		$("#precAmt").attr("hidden", $("#NPA").is(":checked"));
});

$("#fishDead").change(
	function() {
		$("#naturalKillSpec").attr("hidden", !$(this).is(":checked"));
});

$("#injuriesObserved").change(
	function() {
		$("#injuries").attr("hidden", !$(this).is(":checked"));
});
