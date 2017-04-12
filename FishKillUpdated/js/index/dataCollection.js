$("#submitBtn").button();

$("#submitBtn").click(
	function(event) {
		collectData();
		return false;
	}
)

function collectData()
{
	var masterJSON = [];

	$("input, textarea").each(
		function() {
			if($(this).attr('type') != "radio" || $(this).attr('type') != "checkbox")

				masterJSON.push($(this).attr('id') + " : " + $(this).val());
		});
	$("select").each(
		function() {
			masterJSON.push($(this).attr('id') + " : " + $(this).val());
		});

	/*$("input[type*='checkbox']").each(
	
		function() { console.log($(this)); }
	);*/
	//console.log(masterJSON);
	console.log($("#formWrapper").serializeArray());
	var arr = $("#formWrapper").serializeArray();
	console.log(JSON.stringify(arr));
}

function loadData()
{

}

function saveData()
{

}