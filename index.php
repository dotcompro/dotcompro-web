<?php 
	$title_main = "dotcompro";
	$title_sidebar = "This is a title in sidebar.php file";
	$another_title = "H2 title content.php faile";
	$another_title2 = "H3 title testing";
	$web_site_description = "Individuelles- und Logo Design";

	require "templates/partials/head.php";
	require "templates/partials/navigation.php";

	require "templates/pages/homePage.php";
	// require "templates/pages/about.php";
	require "templates/pages/whyDotComPro.php";

	require "templates/pages/corporateDesign.php";
	require "templates/pages/logoDesign.php";
	require "templates/pages/webDevelopment.php";

	require "templates/pages/pricing.php";
	require "templates/pages/contact.php";