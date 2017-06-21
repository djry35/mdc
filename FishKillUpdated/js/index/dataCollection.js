$("#submitBtn").button();

$("#submitBtn").click(
	function(event) {
		collectData();
		return false;
	}
)

function collectData()
{
	var arr = $("#formWrapper").serializeArray();
	//console.log(JSON.stringify(arr));
	//console.log(arr);

	
	var soapRequest = function (){
		//the soap request code
	    var createCORSRequest = function (method, url) { 
	        var xhr = new XMLHttpRequest();
	        if ("withCredentials" in xhr)  { 
	            xhr.open(method, url); 
	        } else if (typeof XDomainRequest != "undefined") { 
	            var xhr = new XDomainRequest(); 
	            xhr.open(method, url); 
	        } else {
	            console.log("CORS not supported"); 
	            alert("CORS not supported"); 
	            xhr = null; 
	        } 
	        return xhr; 
	    }//end of function createCORSRequest//

	    //calling the xhr 
	    var xhr = createCORSRequest("POST", "https://thelocalserver/therequest?wsdl");

	    if (!xhr){ 
	        console.log("XHR issue"); 
	        return; 
	    } 

	    xhr.onload = function (){
	        var results = xhr.responseText; 
	        console.log(results); 
	    }//end of function onload

	}//end of function soapRequest//

	soapRequest();
}

function loadData()
{

}

function ArraysToJSON(extraForm, peopleNotified, peopleInvestigated, sampleStations)
{
	var extraFormArray = {};
	var peopleNotifiedArray = [];
	var peopleInvestigatedArray = [];
	var sampleStationsArray = [];
	var subVar = {};
	var counter = 1;
	var incrementor = 0;
	
	for (var i = 0; i < extraForm.length; i++)
	{
		if(extraForm[i]['name'] == "pollutionCategory" ||
			extraForm[i]['name'] == "agOpsSubcategory" ||
			extraForm[i]['name'] == "indOpsSubcategory" ||
			extraForm[i]['name'] == "munOpsSubcategory" ||
			extraForm[i]['name'] == "transOpsSubcategory" ||
			extraForm[i]['name'] == "injuryCategory" ||
			extraForm[i]['name'] == "behaviorCategory" ||
			extraForm[i]['name'] == "speciesCategory")
		{
				if(undefined === extraFormArray[extraForm[i]['name']])
				{
					extraFormArray[extraForm[i]['name']] = extraForm[i]['value'];
				}
				else
				{
					extraFormArray[extraForm[i]['name']] = extraFormArray[extraForm[i]['name']] + "," + extraForm[i]['value'];
				}
		}
			else
			{
				extraFormArray[extraForm[i]['name']] = extraForm[i]['value'];
			}
	}
	

	for (var i = 0; i < peopleNotified.length; i++)
	{
		subVar[peopleNotified[i]['name']] = peopleNotified[i]['value'];
		incrementor++;
		if(incrementor == 7)
		{
			peopleNotifiedArray.push(subVar);
			subVar = {};
			counter++;
			incrementor = 0;
		}
	}
	peopleNotifiedArray = JSON.stringify(peopleNotifiedArray);
	peopleNotifiedArray = peopleNotifiedArray.replace(/[1-9]{1,}?/g, '');

	for (var i = 0; i < peopleInvestigated.length; i++)
	{
		subVar[peopleInvestigated[i]['name']] = peopleInvestigated[i]['value'];
		incrementor++;
		if(incrementor == 6)
		{
			peopleInvestigatedArray.push(subVar);
			subVar = {};
			counter++;
			incrementor = 0;
		}
	}
	peopleInvestigatedArray = JSON.stringify(peopleInvestigatedArray);
	peopleInvestigatedArray = peopleInvestigatedArray.replace(/[1-9]{1,}?/g, '');
	
	for (var i = 0; i < sampleStations.length; i++)
	{
		subVar[sampleStations[i]['name']] = sampleStations[i]['value'];
		incrementor++;
		if(incrementor == 11)
		{
			sampleStationsArray.push(subVar);
			subVar = {};
			counter++;
			incrementor = 0;
		}
	}
	sampleStationsArray = JSON.stringify(sampleStationsArray);
	sampleStationsArray = sampleStationsArray.replace(/[1-9]{1,}?/g, '');
	
	
	var fullJSON = JSON.stringify({ FormData: extraFormArray , peopleNotified: peopleNotifiedArray, PeopleInvestigated: peopleInvestigatedArray, SampleStations: sampleStationsArray })
		.replace(/\\/g, '').replace(/\"\[/g, '[').replace(/\]\"/g, ']');
		
	return fullJSON;
}

function saveData()
{
	var peopleNotifiedSelector = "input:regex(name, .+Notified[^\"]*)";
	var peopleNotified = $(peopleNotifiedSelector).serializeArray(); 
	
	var peopleInvestigatedSelector = "input:regex(name, .+Investigated[^\"]*)";
	var peopleInvestigated = $(peopleInvestigatedSelector).serializeArray(); 
	
	var sampleStationsSelector = "input:regex(name, waterStation[^\"]*),textarea:regex(name, waterStation[^\"]*)";
	var sampleStations = $(sampleStationsSelector).serializeArray();
	
	var extraForm = $("input:not(" + peopleNotifiedSelector + "," + peopleInvestigatedSelector + "," + sampleStationsSelector + ")," +
		"textarea:not(" + peopleNotifiedSelector + "," + peopleInvestigatedSelector + "," + sampleStationsSelector + ")").serializeArray();
	
	fullJSON = ArraysToJSON(extraForm, peopleNotified, peopleInvestigated, sampleStations);

	console.log(fullJSON);
}