$(document).ready(function() {

	var nameInput = $("#name");
	var emailInput = $("#email");
	var bioInput = $("#bio");

	$(document).on("submit", "#team-form", handleTeamForm)

	function handleTeamForm(event) {

		event.preventDefault();

		insertTeam({
			name: nameInput.val().trim(),
			email: emailInput.val().trim(),
			bio: bioInput.val().trim()
		});
	}


	function insertTeam(teamData) {
		console.log(teamData);
		$.post("/api/addteam", teamData)
	}
})