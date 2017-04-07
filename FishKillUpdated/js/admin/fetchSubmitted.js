$(function() {
		//fetch from backend
		var jsonTmp = { "0": { "FirstName": "Joe", "LastName": "Shmoe", "one": "oneVal", "two": "twoVal", "three":"threeVal" }, 
			"1" : { "FirstName": "Bob", "LastName": "Joe", "one": "oneVal", "two": "twoVal", "three":"threeVal" },
			"2" : { "FirstName": "Bill", "LastName": "Simmons", "one": "oneVal", "two": "twoVal", "three":"threeVal" } };

		var index;
		/*for(index = 0; index < jsonTmp.length; index++)
		{
			$("#submitted").append("<option id='submitted" + index + "'>" + 
				jsonTmp[index][0] + "</option>");
		}*/

/*
		var arr = $.map(obj, function(el) { return el });*/

		var arr = $.map(jsonTmp, function(element) { return element });
		console.log(arr);
		console.log(arr[0]["FirstName"]);
		//$("#submitted").selectmenu();
});