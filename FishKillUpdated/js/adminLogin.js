$("#adminLoginBtn").click(
	function() {
		var user = $("#adminName").val();
		var pw = $("#adminPW").val();
		
		if(user != "admin" || pw != "test")
		{
			$("#adminLoginError").removeAttr("hidden");
			$("#adminLoginError").children().text("Incorrect username or password");
		}
		else
		{
			Cookies.set('adminKey', 'hash_for_test', { expires: 604800, secure: true } );
			window.location.href = "./admin.html";
		}
		return false; //prevent default click events (reload)
});