$( "#counties").autocomplete({
    source:["Adair", "Andrew", "Atchison", "Audrain", 
	    "Barry", "Barton", "Bates", "Benton", "Bollinger", 
	    "Boone", "Buchanan", "Butler", "Caldwell", "Callaway", 
	    "Camden", "Cape Girardeau", "Carroll", "Carter", "Cass", 
	    "Cedar", "Chariton", "Christian", "Clark", "Clay", "Clinton", 
	    "Cole", "Cooper", "Crawford", "Dade", "Dallas", "Daviess", "DeKalb", 
	    "Dent", "Douglas", "Dunklin", "Franklin", "Gasconade", "Gentry", "Greene", 
	    "Grundy", "Harrison", "Henry", "Hickory", "Holt", "Howard", "Howell", "Iron", 
	    "Jackson", "Jasper", "Jefferson", "Johnson", "Knox", "Laclede", "Lafayette", "Lawrence", 
	    "Lewis", "Lincoln", "Linn", "Livingston", "McDonald", "Macon", "Madison", "Maries", 
	    "Marion", "Mercer", "Miller", "Mississippi", "Moniteau", "Monroe", "Montgomery", 
	    "Morgan", "New Madrid", "Newton", "Nodaway", "Oregon", "Osage", "Ozark", "Pemiscot", 
	    "Perry", "Pettis", "Phelps", "Pike", "Platte", "Polk", "Pulaski", "Putnam", "Ralls", 
	    "Randolph", "Ray", "Reynolds", "Ripley", "St. Charles", "St. Clair", "St. Francois", 
	    "St. Genevieve", "St. Louis", "Saline", "Schuyler", "Scotland", "Scott", "Shannon", 
	    "Shelby", "St. Louis City", "Stoddard", "Stone", "Sullivan", "Taney", "Texas", "Vernon", 
	    "Warren", "Washington", "Wayne", "Webster", "Worth", "Wright"]
    ,autoFocus: true, delay: 10});

$("#rLastName").autocomplete({
	source:["Bill", "Bob", "Joe", "Johnson"],
	autoFocus: true,
	delay: 10
});

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

//So once the DB is up and running, all fields that can be 
//autocompleted should pull from preexisting sites

/*$("#NearestTown").autocomplete({
	source:[]
})*/