
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
		init: function($surroundingDivClassName) 
		{
			$('.'+surroundingDivClassName + ' .floating-label').css({'font-size':'1rem', 'top': '0.5rem'});
			//$('.'+surroundingDivClassName + ' .floating-label').css('top', '0.5rem');
		}
	};

	// var inputDescription_down = 
	// {
	// 	init: function() 
	// 	{

	// 	}
	// };






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
		
		// var ContainerHeight = "-"+$('div.homePageH1').height()+"px";
		// console.log(ContainerHeight);
		// $(".homePageH1 h1").css('top', ContainerHeight);
		// var elementHeightInpercent = ($(".homePageH1 h1").height() / 
		// 	($("div.homePageH1").height()+$('div.header-container').height()))*100;
		// console.log(elementHeightInpercent);
		// var emptySpaceInPercent = 100 - elementHeightInpercent;
		// console.log(emptySpaceInPercent);
		// var top = Math.round(emptySpaceInPercent-1) +"%";
		// console.log(top);
		// $(".homePageH1 h1").animate({'opacity':'1', "top": top}, 5000, "easeOutBack");
	});
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
	$(document).ready(resizeFunction);


	function openMenu() {
				$('.toggle-nav').click(function(){
					$('.navigation').toggle(1000);
					$('#fullpage').toggleClass('fullPageOpacity', 1000);
				});
	};
	$(document).ready(openMenu);


// $(document).ready(function () {
//     $('#introText').fadeIn(4000);
// });



	// $(document).load(bla);



	// containers faiding/sliding-in on homepage

	// function slideInContainer() {
	// 	var title = $('.homePageH1');
	// 	var infoBox = $('.homePageTextContainer');
	// 	var serviceBox = $('.homePageServicesContainer');
	// 	var items = ["title", "infoBox", "serviceBox"];
	// 		for ( var i in items) {
	// 			console.log(items[i]);
	// 			items[i].css('margin', '50rem');
	// 		}
	// }
	// $(document).ready(slideInContainer);