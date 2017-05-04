//what to do for minified...
$(function () {
  $('#formWrapper').parsley({errorsWrapper: "<div></div>", errorTemplate: "<span class='errorMsg'></span>"})
	  .on('field:validated', function() {
	  })
	  .on('form:submit', function() {
		  	console.log( $("#formWrapper").serializeArray());

		    return false; // Don't submit form for this demo
	  })
	  .on('form:validate', function() {
	  })
	  .on('form:error', function(formInstance) {
	  })
	  .on('field:error', function() {
	  })
	  .on('field:success', function() {
	  });
});