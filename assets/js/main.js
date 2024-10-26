/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	// $('#nav > ul').dropotron({
	// 	mode: 'fade',
	// 	noOpenerFade: true,
	// 	alignment: 'center',
	// 	detach: false
	// });
	
	//New
	// script.js
	// script.js
	document.addEventListener('DOMContentLoaded', function () {
		// Function to open a popup
		function openPopup(popupId) {
			document.getElementById(popupId).style.display = 'flex'; // Show the popup
		}

		// Function to close any open popup
		function closePopups() {
			var popups = document.querySelectorAll('.popup');
			popups.forEach(function (popup) {
				popup.style.display = 'none'; // Hide the popup
			});
		}

		// Event listeners for opening popups
		document.getElementById('trigger_thadar').addEventListener('click', function () {
			openPopup('popup_thadar_content');
		});

		document.getElementById('trigger_waiyan').addEventListener('click', function () {
			openPopup('popup_waiyan_content');
		});

		document.getElementById('trigger_heinhtet').addEventListener('click', function () {
			openPopup('popup_heinhtet_content');
		});

		document.getElementById('trigger_henry').addEventListener('click', function () {
			openPopup('popup_henry_content');
		});

		// Add similar event listeners for Wai Yan, Hein Htet, and Henry

		// Event listener for closing popups
		document.querySelectorAll('.close-btn').forEach(function (btn) {
			btn.addEventListener('click', function () {
				closePopups();
			});
		});
	});



})(jQuery);