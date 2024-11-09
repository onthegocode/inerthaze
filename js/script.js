"use strict";

// Mobile Menu Function
let mobile = () => {
	const menu = document.querySelector(".burgerMenu");
	const nav = document.querySelector(".navLinks");

	menu.addEventListener("click", () => {
		menu.classList.toggle("isActive");
		nav.classList.toggle("isActive");
		document.querySelector("body").classList.toggle("stick");
	});
};

// Make nav and footer links active to show current page
let currentPage = () => {
	// Select all navbar links
	const navLinks = document.querySelectorAll(".link a");

	// Loop through the links and add an 'active' class to the current page link
	navLinks.forEach((link) => {
		console.log(link.href);
		if (link.href === window.location.href) {
			link.classList.add("isActive");
		}
	});
};

let realPageHeight = () => {
	// Get the height of the header
	let headerHeight = $("header").outerHeight();

	// Get the screen height
	let screenHeight = $(window).height();

	// Calculate the available height by subtracting the header height from the screen height
	let availableHeight = screenHeight - headerHeight;

	// Set the CSS variable --screen-height in the root element
	document.documentElement.style.setProperty(
		"--screen-height",
		availableHeight + "px"
	);

	document.documentElement.style.setProperty(
		"--full-screen-height",
		screenHeight + "px"
	);
};

// Initiates functions
let init = function () {
	mobile();
	currentPage();
	realPageHeight();
};

// Only calls when dom is ready
$(document).ready(init);
