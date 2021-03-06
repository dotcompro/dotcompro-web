//1. ISTRINTI MESLA


	var flyout = 
 	{
		init: function() 
	 	{
		 	var $obj=$("ul li");
			if(!$obj.length) return;
			$("html").removeClass("no-js");
			$obj.hover(function(){
			$(this).find('ul').first().stop(true, true).delay(800).slideDown(1200);
			}, function() {
			$(this).find('ul').first().stop(true, true).delay(300).slideUp(1200);
			});
		}
	};

	var submenuLinkTransition = 
	{
		init: function() 
		 {
			var $obj = $(".slider");
			$("li.submenuLink").mouseenter(function() {
				$obj.stop(true, true).animate({
					height: "6rem"}, 800);
			})
			$("li.submenuLink").mouseleave(function() {
				$obj.stop(true, true).delay(1400).animate({
				height: "0rem"}, 1000);
			})
		 }
	};

	var controlInputDescription = 
	{
		init: function()
		{
			$("input, textarea").focusin(function(){
				var focusedElementId = $("*:focus").attr("id");
				inputDescription_up.init(focusedElementId);
			});



		}
	};

	var inputDescription_up = 
	{
		init: function(surroundingDivClassName) 
		{
			$('.'+surroundingDivClassName + ' .floating-label').css({'font-size':'1rem', 'top': '0.5rem'});
			//$('.'+surroundingDivClassName + ' .floating-label').css('top', '0.5rem');
		}
	};


	function getRegularImg(object, partialTitle) 
	{
		 object.src = "img/newImages/"+partialTitle+"Regular.png";
	}

	function getHoverImg(object, partialTitle) 
	{
		 object.src = "img/newImages/"+partialTitle+"Hover.png";
	}

$(document).ready(function(){


			var width = $('div.homePageTextContainer').width()+"px";
			

			flyout.init();
			submenuLinkTransition.init();
			controlInputDescription.init();

			//be careful about changing indexes 4,5 and 6 as they are used in the onLeave function
			var	menuLink = 
			{
				"1" : 	{"Link":"home", "HighlightedLink" : "home", "Highlighted" : false},
				// "2" : 	{"Link":"about", "HighlightedLink" : "about", "Highlighted" : false},
				"2" : 	{"Link":"whydotcompro", "HighlightedLink" : "whydotcompro", "Highlighted" : false},
				"3" : 	{"Link":"corporateDesign", "HighlightedLink" : "portfolio", "Highlighted" : false},
				"4" : 	{"Link":"logoDesign", "HighlightedLink" : "portfolio", "Highlighted" : false},
				"5" : 	{"Link":"webdevelopment", "HighlightedLink" :"portfolio", "Highlighted" : false},
				"6" : 	{"Link":"pricing", "HighlightedLink" :"pricing", "Highlighted" : false},
				"7"  : 	{"Link":"contact", "HighlightedLink" :"contact", "Highlighted" : false},
			}

			$('#fullpage').fullpage({
				scrollingSpeed: 800,
				anchors: ['home', 'whydotcompro', 'corporateDesign', 'logoDesign', 'webdevelopment', 'pricing', 'contact'],
				menu: '#topMenu',
				loopBottom : true,
				afterLoad:function(anchorLink) 
				{
					for (var key in menuLink) 
					{
						if(anchorLink == menuLink[key].Link && menuLink[key].Highlighted == false) 
						{
							$('li.'+menuLink[key].HighlightedLink).addClass('loaded');
							if(menuLink[key].HighlightedLink == 'portfolio') 
							// if(menuLink[key].Link == 'logoDesign' || menuLink[key].Link == 'corporateDesign' || menuLink[key].Link == 'webdevelopment') 
							{
								menuLink[3].Highlighted = true;
								menuLink[4].Highlighted = true;
								menuLink[5].Highlighted = true;
							} 
							else 
							{
								menuLink[key].Highlighted = true;
							}	
						}
					}
				},
				onLeave:function(anchorLink, nextIndex) 
				{
					for (var key in menuLink) 
					{
						if(menuLink[anchorLink].Link == menuLink[key].Link && menuLink[key].Highlighted == true) 
						{
							//just closed page and just opened page are both portfolio pages
							if(menuLink[anchorLink].HighlightedLink == "portfolio" && menuLink[nextIndex].HighlightedLink == "portfolio") 
							{
								return;
							}
							// just closed page is a portfolio page, just opened one isn't a portfolio page
							else if(key == "3" || key == "4" || key == "5") 
							{
								$('li.'+menuLink[key].HighlightedLink).removeClass('loaded');
								menuLink[3].Highlighted = false;
								menuLink[4].Highlighted = false;
								menuLink[5].Highlighted = false;
							}
							//neither just closed page nor just opened page are not portfolio pages
							else 
							{
								$('li.'+menuLink[key].HighlightedLink).removeClass('loaded');
								menuLink[key].Highlighted = false;
							}
						}
					}
				},
			});


			$(function(){
				var ContainerWidth = "-"+$('div.homePageTextContainer').width()+"px";
		  		$("div.introText").css('margin-left', ContainerWidth);
		  		var elementWidthInpercent = ($("div.introText").width() / $("div.homePageTextContainer").width()) * 100;
		  		var emptySpaceInPercent = 100-elementWidthInpercent;
		  		var left = Math.round(emptySpaceInPercent-10) +"%";  		
		  		$("div.introText").animate({'opacity':'1', "margin-left": left}, 1500, "easeOutBack");
			});

			$(function(){
				var ContainerWidth = "-"+$('div.homePageServicesContainer').width()+"px";
				$("ul.serviceList").css('right', ContainerWidth);
				var elementWidthInpercent = ($("ul.serviceList").width()/$("div.homePageServicesContainer").width())*100;
				var emptySpaceInPercent = 100 - elementWidthInpercent;
				var right = Math.round(emptySpaceInPercent-1) +"%";
				$("ul.serviceList").animate({'opacity':'1', "right": right}, 1500, "easeOutBack");
			});

			$(function(){
				$(document).ready(function(){
					$("h1.homePageTitle").fadeIn(4000);
				}, 2500);
			});
				// isijungus langa maza ir paspaudus ant varneles pirmiausia loopina per funkcijos else Verzweigung, o tik sumazinus, pradeda veikti kitaip. 
				// slideToggle veikia betkokiu atveju


				function resizeFunction() {
					var nav = $('.navigation');
					$(window).resize(function(){
						if ($(window).width() < 1015 ) {
							// nav.addClass('navigation-block').removeClass('kazkokia-klase');
							$('.navigation').css('display', 'none');
							$('#fullpage').removeClass('fullPageOpacity');
						} else {
							// nav.removeClass('navigation-block').addClass('kazkokia-klase');
							$('.navigation').css('display', 'block');
							$('#fullpage').removeClass('fullPageOpacity');
						}
					});
				};

				resizeFunction();


			function openMenu() {
				$('.toggle-nav').click(function(){
					$('.navigation').toggle(800);
					$('#fullpage').toggleClass('fullPageOpacity', 1000);
				});
			};
					$('#fullpage').click(function() {
						$('.navigation').hide(800);
						$('#fullpage').removeClass('fullPageOpacity', 1000);
					})

			openMenu();

		
		// lightbox function turn on


		$('.p-body').on('click','li',function(event){
			event.preventDefault();
			if(event.isDefaultPrevented()) {
				console.log('prevented');
			}
			//paspausto li elemento index numeris ul li sarase
			var li_index = $(this).index();
			//nextSection yra section.lightbox
			var nextSection = $(this).parent().parent().next();
			//css ijungia lightbox
			nextSection.css('display', 'flex');
			//next_section_ul yra  .lightbox ul
			var next_section_ul = $(nextSection).find("ul");
			console.log(next_section_ul);
			//.lightbox section ul li yra pridedama klase tam paciam indexui, kuris buvo pirmoj
			var next_section_clicked_li = $(next_section_ul).children().eq(li_index);
			next_section_clicked_li.addClass('gallery-active');
			console.log('clicked on: ' + next_section_clicked_li.index());
		});

			// lighbox slide functions


			function moveRight(clicked_lightboxList, list_count, currentSlide) {
				//current slide yra indexas nuotraukos .lightbox-list li turintis .active-gallery
				console.log('move right');
				clicked_lightboxList.children().eq(currentSlide).removeClass('gallery-active');
				clicked_lightboxList.children().eq(currentSlide + 1).addClass('gallery-active');
				if(currentSlide === list_count-1) {
					clicked_lightboxList.children().eq(currentSlide + 1).removeClass('gallery-active');
					currentSlide = 0;
					clicked_lightboxList.children().eq(currentSlide).addClass('gallery-active');
				}
			
				console.log('current slide: ' + (currentSlide + 2));
			}

			function moveLeft(clicked_lightboxList, list_count, currentSlide) {
				console.log('move left');
				clicked_lightboxList.children().eq(currentSlide).removeClass('gallery-active');
				clicked_lightboxList.children().eq(currentSlide - 1).addClass('gallery-active');
				if(currentSlide === 0) {
					clicked_lightboxList.children().eq(0).removeClass('gallery-active');
					currentSlide = list_count-1;
					clicked_lightboxList.children().eq(currentSlide).addClass('gallery-active');
				}

				console.log('current slide: ' + currentSlide);
			};




			$('img#gal_arrow_right').on('click', this, function(){
				//this yra <img id="gal_arrow_right" src="img/newImages/gallery_arrow_right.png" alt="right">
				var clicked_lightboxList = $(this).prev();
				//clicked_lightboxList reskia ul.lightbox-list
		
				var list_count = clicked_lightboxList.children().length;
				var currentSlide = clicked_lightboxList.children('.gallery-active').index();

				moveRight(clicked_lightboxList, list_count, currentSlide);
			});


			$('img#gal_arrow_left').on('click', this, function(){
				//this yra <img id="gal_arrow_left" src="img/newImages/gallery_arrow_left.png" alt="left">
				var clicked_lightboxList = $(this).next();
				var list_count = clicked_lightboxList.children().length;
				var currentSlide = clicked_lightboxList.children('.gallery-active').index();


				moveLeft(clicked_lightboxList, list_count, currentSlide);	
			});





		


		// pricing menu funkcijos

		var clicked = false;
		var clickedListElement;
		var unclickedListElement;
		var menuList = $('.pricing-menu ul li');
		var pricingParentContainer = $('.pricing-list');
		//childPricingDIV randa visus 3 pricing konteinerius (#webDev, #Logo-Design, #c-design)
		var childPricingDIV = pricingParentContainer.children();
		var pricingIndex = 0;


		function hoverPricing() {

			//pricing menu hover function

			menuList.mouseenter(function(){
				if($(this).hasClass('selected')) {
					clicked = true;
					clickedListElement = $(this);
					//parodo hover elemento indexa
					pricingIndex = $(this).index();
				} else if (!$(this).hasClass('selected')) {
					clicked = false;
					unclickedListElement = $(this);
					$(this).addClass('selected');
				};
			});

			menuList.mouseleave(function() {
				if(clicked === false) {
					$(this).removeClass('selected');
				};
			});
		};


		//pricing menu click function

		function clickMenu() {
			menuList.on('click', function(event){
				if($(this).hasClass('selected') && clicked === true) {
					//2 eilutes parodo, kad jei paspaudi ant aktyvaus menu el, tai ignoruoja kitus veiksmus
					clickedListElement = $(this);
					event.preventDefault();
				} else {
					removeSelectectedClass();
					clicked = true;
					clickedListElement = $(this);
					$(clickedListElement).addClass('selected');
					//surasti paspausto elemento indexa
					pricingIndex = clickedListElement.index();
					//surandi kainu atitinkama indexa
					childPricingDIV = pricingParentContainer.children().eq(pricingIndex);
					// childPricingDIV.css('right', 0);
					childPricingDIV.animate({right: 0});
				};
			});
		};
		function removeSelectectedClass() {
			menuList.removeClass('selected');
			clicked = false;
			// childPricingDIV.css('right', '-300rem');
			childPricingDIV.animate({right: '-300rem'});
		};

		hoverPricing();
		clickMenu();



		// contact form validation

		var first_name = $('input[name="first_name"]');
		var last_name = $('input[name="last_name"]');
		var email = $('input[name="email"]');
		var company = $('input[name="company"]');
		var message = $('textarea[name="msg-area"]');



		var contactForm = {
			// index:   value
			firstName: first_name,
			lastName: last_name,
			email: email,
			message: message
		}

		var validText = ['name', 'last name', 'company','email', 'message'];
		var inputElementClass = $('.form-validation');
		var indexItem = inputElementClass.index(this);
		var emailElement = $('input#email');
		var messagelElement = $('textarea');
		var inputElements = $('input:not("#email")');

		function validateInput() {

			inputElements.on('click', this, function() {

				var indexInput = inputElements.index(this);				

				inputElements.on('input', function(){
					var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
					var input = $(this);
					var is_input = input.val();
					var erg = format.test(is_input);

					if(is_input.length >= 3 && erg == false) {
						$(this, inputElements).next('span').addClass('valid');
						return true;
					} else if (is_input.length >= 3 && erg == true){
						$(this, inputElements).next().next().text('Enter valid ' + validText[indexInput]).css('display', 'block');
						return false;
					} else if (is_input.length < 4) {
						$(this, inputElements).next('span').removeClass('valid');
						$(this, inputElements).next().next().text('').css('display', 'none');
						return false;
					}
					
				})



			});
		};

		validateInput();


		function validateEmail() {
			emailElement.on('click', this, function(){
				var getEmailClass = $(this).parent().attr('class', 'col-70 form-validation');
				//returns index for validText array
				var myIndex = inputElementClass.index(getEmailClass);

				emailElement.on('input', function() {
					var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					var input = $(this);
					var is_email = input.val();
					var erg = regex.test(is_email); // returns true is email

					if (is_email && erg == true) {
						$(this).next('span').addClass('valid');
						$('.invalid', getEmailClass).text('').css('display', 'none');
						return true;
					} else if (is_email.length > 7 && erg == false) {
						$(this).next('span').removeClass('valid');
						$('.invalid', getEmailClass).text('Enter valid ' + validText[myIndex]).css('display', 'block');
						return false;
					} else if (is_email.length < 7)
						$(this).next('span').removeClass('valid');
						$('.invalid', getEmailClass).text('').css('display', 'none');
						return false;
				});
			});
			
		};

		validateEmail();

		function validateMessage() {
			messagelElement.on('click', this, function(){
				var getMessageClass = $(this).parent().find('.form-validation');

				var myIndex = inputElementClass.index(getMessageClass);

				messagelElement.on('input', function() {
					var input = $(this);
					var inputVal = input.val();
					// var format = /[ !@()_\\[\]{};':"\\|,.<>\/?]/;
					// var erg = format.test(input);
					if(inputVal.length > 30) {
						inputVal.length = 30;

							// $('.invalid', getMessageClass).text('Enter min 100 symbols: ' + inputVal.length+'/out of 100').css('display', 'block');
						$(this).next('span').addClass('valid');
					};
						if(inputVal.length < 30) {
							$(this).next('span').removeClass('valid');
							$('.invalid', getMessageClass).text('Enter valid ' + validText[myIndex]).css('display', 'block');
						}
				});
			});
		};

		validateMessage();





			// var contactForm = {
			// 	firstName: first_name.length,
			// 	lastName: last_name.length,
			// 	email: email.length,
			// 	message: message.length
			// }

		// $('.contact-form').submit(function(event){


		// 	// event.preventDefault();
		// 	console.log('contact form submitted ');
		// 	console.log(first_name.length);
		// 	console.log(last_name.length);
		// 	console.log(company.length);
		// 	console.log(email.length);
		// 	console.log(email);
		// 	console.log(message.length);


		// 	jQuery.each(contactForm, function(index, value) {

		// 		if(value < 1) {
		// 			alert(index + ' is empty field');
		// 			event.preventDefault();
		// 		}
		// 	});

		// 	if ($.trim(email).length == 0) {					
		// 			event.preventDefault();
		// 		};

		// 		if (validateEmail(email)) {
		// 			return;
		// 		} else {
		// 			event.preventDefault();
		// 		};

		// 		function validateEmail(email) {
		//         var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		//         if(regex.test(email)) {
		//            return true;
		//         } else {
		//            return false;
		//         }
		//       };

		//       validateEmail();
		// });




		// contact address toggle

		var contact_btn = $('.contact-toggle-btn');
		var addr = $('section.address');
		var addr_wrapper = $('.address-wrapper');
	
		contact_btn.on('click', function(){
				addr.toggleClass('addressToggle', function(){
					if(addr.hasClass('addressToggle')){
						addr_wrapper.delay(100).fadeIn(300);						
					} else {
						addr_wrapper.delay(-100).fadeOut(200);
					}
				})
			});



// baigiasi document.ready()


}); 
		
		// lightbox function turn off

		function closeModal(){
			$('.lightbox').css('display','none');
			$('.lightbox ul li').removeClass('gallery-active');
		};

		closeModal();