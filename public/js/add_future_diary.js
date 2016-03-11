'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	// $('.project a').click(function(e) {
	// 	// Prevent following the link
	// 	e.preventDefault();

	// 	// Get the div ID, e.g., "project3"
	// 	var projectID = $(this).closest('.project').attr('id');
	// 	// get rid of 'project' from the front of the id 'project3'
	// 	var idNumber = projectID.substr('project'.length);

	// 	// this is the URL we'll call
	// 	var url_call = '/future_travels/'+idNumber;

	// 	// How to respond to the GET request
	// 	function addProjectDetails(future_json) {
	// 		// We need to compute a display string for the date
	// 		// Search 'toLocaleDateString' online for more details.
	// 		var date_obj = new Date(future_json['date']);
	// 		var options = {
	// 			weekday: "long",
	// 			year: "numeric",
	// 			month: "long",
	// 			day: "numeric"
	// 		};
	// 		var display_date = date_obj.toLocaleDateString('en-US', options);

	// 		// compose the HTML
	// 		var new_html =
	// 			'<div class="project-date">'+display_date+'</div>'+
	// 			'<div class="project-summary">'+future_json['summary']+'</div>'+
	// 			'<button class="project-delete btn btn-default" '+
	// 				'type="button">delete</button>';

	// 		// get the DIV to add content to
	// 		var details_div = $('#project' + idNumber + ' .details');
	// 		// add the content to the DIV
	// 		details_div.html(new_html);

	// 		details_div.find('.project-delete').click(function(e) {
	// 			$.post('/future_travels/'+idNumber+'/delete', function() {
	// 				window.location.href = '/future_travels';
	// 			});
	// 		});
	// 	}

	// 	// issue the GET request
	// 	$.get(url_call, addProjectDetails);
	// });

$('#newProjectSubmitButton2').click(function(e) {
		console.log('clicked');
		var title = $('#new-project-form #title').val();
		var image_url = $('#new-project-form #image_url').val();
		// var image_upload = $('#new-project-form #image_upload').val();
		var date = $('#new-project-form #date').val();
		var summary = $('#new-project-form #summary').val();
		var json = {
			'project_title': title,
			'image_url': image_url,
			// 'image_upload' : image_upload,
			'date':  date,
			'summary': summary
		};

		$.post('/future_travels/new', json, function() {
			window.location.href = '/future_travels'; // reload the page
		});
	});
}