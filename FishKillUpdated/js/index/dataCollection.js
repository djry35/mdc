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

function saveData()
{
	var peopleNotifiedSelector = "input:regex(name, .+Notified[^\"]*)";
	var peopleNotified = $(peopleNotifiedSelector).serializeArray(); 
	
	var peopleInvestigatedSelector = "input:regex(name, .+Investigated[^\"]*)";
	var peopleInvestigated = $(peopleInvestigatedSelector).serializeArray(); 
	
	var sampleStationsSelector = "input:regex(name, waterStation[^\"]*),textarea:regex(name, waterStation[^\"]*)";
	var sampleStations = $("input:regex(name, waterStation[^\"]*),textarea:regex(name, waterStation[^\"]*)").serializeArray();
	
	var arr = $("input:not(" + peopleNotifiedSelector + "," + peopleInvestigatedSelector + "," + sampleStationsSelector + ")," +
		"textarea:not(" + peopleNotifiedSelector + "," + peopleInvestigatedSelector + "," + sampleStationsSelector + ")").serializeArray();
	var fullJSON = JSON.stringify({ FormData: arr , peopleNotified: peopleNotified, PeopleInvestigated: peopleInvestigated, SampleStations: sampleStations });
	
	console.log(fullJSON)
}