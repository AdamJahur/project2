$(document).ready(function() {


	$(document).on("click", "#sign", loginUser);

	function loginUser() {

	var email = $("#emailaddress").val();
	var pass = $("#password").val();

		console.log("Email:", email);
		console.log("Password:", pass);


		$.get("/api/login/" + email, function(data) {
			
			var input = data.password;

			console.log(data);

			if (input === pass) {
				
				console.log("True");

				$.get("/home", function() {

				})
			} else {
				console.log("False");
			}

		})
		return false;
	}
})