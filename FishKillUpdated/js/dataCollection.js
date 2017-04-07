function collectData()
{
	var masterJSON = [];

	$("input, textarea").each(
		function() {
			masterJSON.push($(this).attr('id') + " : " + $(this).val());
		});
	$("select").each(
		function() {
			masterJSON.push($(this).attr('id') + " : " + $(this).val());
		});

	var radioSets = [];
	$("input[type='radio']").each(
		function() { 
			if($.inArray($(this)[0].name, radioSets) < 0)
			{
				radioSets.push($(this)[0].name);
			}
	});

	for ( var i = 0; i < radioSets.length; i++ ) {
		masterJSON.push($("input[name='" + radioSets[i] + "']:checked").attr('id'));
	}

	console.log(masterJSON);
}

function loadData()
{

}

function saveData()
{

}