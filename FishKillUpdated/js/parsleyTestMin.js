$(function () {
  $('#formWrapper').parsley({errorsWrapper: "<div></div>", errorTemplate: "<span class='errorMsg'></span>"})
	  .on('field:validated', function() {

  			this.$element.find(".errorMsg").attr("display", this.validationResult === true ? "none" : "inline-block");	

	  		if( this.$element.is("select") )
	  		{
	  			this.$element.next("div:regex(id, parsley-id-\\d{1,})")
	  				.insertAfter(this.$element.parent());
	  		}

	  		$("#pollutants").find("div:regex(id, parsley-id-.*)").remove();
	  		$("#extentDmgWrapper").find("div:regex(id, parsley-id-.*)").remove();
	  		$("#extentDmgWrapper").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#DurationEffects").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#airTempDuring").next("div:regex(id, parsley-id-.*)").remove();
			$("#tempDuringWrapper").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#airTempAfter").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#tempAfterWrapper").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#species").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#speciesDeadOther").find("div:regex(id, parsley-id-.*)").remove();
	  		$("#injuries").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#injuriesOther").find("div:regex(id, parsley-id-.*)").remove();
	  		$("#behaviors").next("div:regex(id, parsley-id-.*)").remove();
	  		$("#behaviorsOther").find("div:regex(id, parsley-id-.*)").remove();
	  		$("#precAmt").find("div:regex(id, parsley-id-.*)").remove();
	  })
	  .on('form:submit', function() {
		  	console.log( $("#formWrapper").serializeArray());

		    return false; // Don't submit form for this demo
	  })
	  .on('form:validate', function() {
	  		$("h3 span").attr("hidden", true);

	  		if(this.isValid({ group: 'fishSpecies' }))
	  			$("#speciesError").attr("hidden", true);

	  		if(this.isValid({ group: 'injuriesFish' }))
	  			$("#injuriesErrorWrapper").attr("hidden", true);

	  		if(this.isValid({ group: 'behaviorFish' }))
	  			$("#behaviorsErrorWrapper").attr("hidden", true);
	  })
	  .on('form:error', function(formInstance) {
	  		if( !formInstance.isValid({ group: 'pollutionCheckboxes' }) ) 
	  		{
	  			$("#pollutantsError").attr("hidden", false);
	  			$("#pollutantsError").children().text("You need to select at least one category and subcategory.");
	  		}
	  		else if( !formInstance.isValid({ group: 'agPollution' }) || 
	  			!formInstance.isValid({ group: 'indPollution' }) || 
	  			!formInstance.isValid({ group: 'munPollution' }) || 
	  			!formInstance.isValid({ group: 'transPollution'}) )
	  		{
  				$("#pollutantsError").attr("hidden", false);
  				$("#pollutantsError").children().text("You need to specify subcategories.");
	  		}
	  		else if( !formInstance.isValid({group: 'otherPollutionSpec'}) )
	  		{
	  			$("#pollutantsError").attr("hidden", false);
	  			$("#pollutantsError").children().text("Please specify 'other' fields.");
	  		}
	  		else 
	  		{
	  			$("#pollutantsError").attr("hidden", true);
	  		}


	  		if( !formInstance.isValid({ group: 'fishSpecies' }) )
	  		{
  				$("#speciesError").attr("hidden", false);
  				$("#speciesError").children().text("You need to specify categories of fish.");
	  		}
	  		else if( !formInstance.isValid({group: 'fishSpeciesOther'}) )
	  		{
	  			$("#speciesError").attr("hidden", false);
	  			$("#speciesError").children().text("Please specify 'other' species.");
	  		}

	  		if( !formInstance.isValid({ group: 'injuriesFish' }) )
	  		{
  				$("#injuriesErrorWrapper").attr("hidden", false);
  				$("#injuriesErrorWrapper").children().text("You need to specify injuries if they were observed.");
	  		}
	  		else if( !formInstance.isValid({group: 'injuriesFishOther'}) )
	  		{
	  			$("#injuriesErrorWrapper").attr("hidden", false);
	  			$("#injuriesErrorWrapper").children().text("Please specify 'other' injuries.");
	  		}

	  		if( !formInstance.isValid({ group: 'behaviorFish' }) )
	  		{
  				$("#behaviorsErrorWrapper").attr("hidden", false);
  				$("#behaviorsErrorWrapper").children().text("You need to specify fish behaviors.");
	  		}
	  		else if( !formInstance.isValid({group: 'behaviorFishOther'}) )
	  		{
	  			$("#behaviorsErrorWrapper").attr("hidden", false);
	  			$("#behaviorsErrorWrapper").children().text("Please specify 'other' behaviors.");
	  		}
	  })
	  .on('field:error', function() {
	  		this.$element.parents(":regex(id, .*Expand)").prev().children().removeAttr("hidden");
	  		
	  		if(this.$element.is("#dmgEval") || this.$element.is("#dmgUnits"))
	  		{
	  			$("#dmgEvalError").attr("hidden", false);
	  			$("#dmgEvalError").children().text("Both fields are required.");
	  		}
	  		else if(this.$element.is("#DurationEffects"))
	  		{
	  			$("#durationEffectsError").attr("hidden", false);
	  			$("#durationEffectsError").children().text("This value is required.");
	  		}
	  		else if(this.$element.is("#precAmtSpec"))
	  		{
	  			$("#precipitationAfterError").attr("hidden", false);
	  			$("#precipitationAfterError").children().text("This value is required.");
	  		}

	  		if(this.$element.is("#airTempDuring") || this.$element.is("#unitsTempDuring"))
	  		{
	  			$("#tempDuringError").attr("hidden", false);
	  			$("#tempDuringError").children().text("Both fields are required.");
	  		}
	  		else if(this.$element.is("#airTempAfter") || this.$element.is("#unitsTempAfter"))
	  		{
	  			$("#tempAfterError").attr("hidden", false);
	  			$("#tempAfterError").children().text("Both fields are required.");
	  		}
	  })
	  .on('field:success', function() {
	  		if(this.$element.is("#dmgEval") || this.$element.is("#dmgUnits"))
	  		{
	  			if(this.$element.is("#dmgEval") && $("#dmgUnits").val())
	  				$("#dmgEvalError").attr("hidden", true);
	  			else if(this.$element.is("#dmgUnits") && $("#dmgEval").val())
	  				$("#dmgEvalError").attr("hidden", true);
	  		}
	  		else if(this.$element.is("#DurationEffects"))
	  			$("#durationEffectsError").attr("hidden", true);
	  		else if(this.$element.is("#precAmtSpec"))
	  			$("#precipitationAfterError").attr("hidden", true);
	  		else if(this.$element.is("#airTempDuring") || this.$element.is("#unitsTempDuring"))
	  		{
	  			if(this.$element.is("#airTempDuring") && $("#unitsTempDuring").val())
	  				$("#tempDuringError").attr("hidden", true);
	  			else if(this.$element.is("#unitsTempDuring") && $("#airTempDuring").val())
	  				$("#tempDuringError").attr("hidden", true);
	  		}
	  		else if(this.$element.is("#airTempAfter") || this.$element.is("#unitsTempAfter"))
	  		{
	  			if(this.$element.is("#airTempAfter") && $("#unitsTempAfter").val())
	  				$("#tempAfterError").attr("hidden", true);
	  			else if(this.$element.is("#unitsTempAfter") && $("#airTempAfter").val())
	  				$("#tempAfterError").attr("hidden", true);
	  		}
	  });
});