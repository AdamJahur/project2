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

	var url = window.location.search;
	var profileId;

	if (url.indexOf("?profile_id") !== -1) {
		profileId = url.split("=")[1];
		profileTeam(profileId);
	}

	function profileTeam(profile) {
		console.log("Profile ID:", profile);
		profileId = profile || "";
		if (profileId) {
			profileId = "/?profile_id=" + profileId;
		}
		console.log("Full Profile ID: ", profileId)

		$.get("/api/profileteam/" + profile, function(data) {
			console.log(data);
		});
	}
})