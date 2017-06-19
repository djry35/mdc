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
	/*var arr = $("#formWrapper").serializeArray();
	var jsonBody = JSON.stringify(arr);
	jsonBody = jsonBody.replace('[{', '{');
	jsonBody = jsonBody.replace('}]', '}');*/
	
	/*var re = /({\"name\":\"agencyNotified.+timeNotified.+?})/;
	jsonBody = jsonBody.replace(re, "{\"Name\":\"PeopleNotified\",\"Value\":[$&]}");
	re = /({\"name\":\"agencyNotified.+?timeNotified.+?})/g;
	jsonBody = jsonBody.replace(re, "[$&]");
	re = /Notified[1-9]/g;
	jsonBody = jsonBody.replace(re, "Notified");
	re = /NotifiedFName[1-9]/g;
	jsonBody = jsonBody.replace(re, "Notified");
	re = /NotifiedLName[1-9]/g;
	jsonBody = jsonBody.replace(re, "NotifiedLName");*/
	
	//var test = $("#notifiedPeopleContainer").serializeArray();
	//var testBody = JSON.stringify(test);
	var zxcv = $("input:regex(name, .+Notified[^\"]*)").serializeArray(); 
	zxcv = JSON.stringify(zxcv);
	zxcv = zxcv.replace('[{', '{');
	zxcv = zxcv.replace('}]', '}');
	
	
	var zxcv = $("input:regex(name, .+Investigated[^\"]*)").serializeArray(); 
	zxcv = JSON.stringify(zxcv);
	zxcv = zxcv.replace('[{', '{');
	zxcv = zxcv.replace('}]', '}');
	
	var zxcv = $("input:regex(name, waterSampleStation[^\"]*)").serializeArray(); 
	zxcv = JSON.stringify(zxcv);
	zxcv = zxcv.replace('[{', '{');
	zxcv = zxcv.replace('}]', '}');
	
	var arr = $("#formWrapper").serializeArray();
	var jsonBody = JSON.stringify(arr);
	jsonBody = jsonBody.replace('[{', '{');
	jsonBody = jsonBody.replace('}]', '}');
	jsonBody = jsonBody.replace(zxcv + ',', '');
	console.log(jsonBody);
}