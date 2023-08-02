;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append('<ul> <li class="active"><a href="index.html" id="homeMini">Home</a></li> ' + 
		'<li><a href="gallery.html" id="galleryMini">Gallery</a></li> ' + 
		'<li><a href="about.html" id="practiceMini">Practice</a></li> ' + 
		'<li><a href="pricing.html" id="servicesMini">Services</a></li> ' + 
		'<li><a href="contact.html" id="contactMini">Contact</a></li> </ul>');
		// $('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	var tabs = function() {

		// Auto adjust height
		$('.fh5co-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.fh5co-tab-content-wrap'),
					tabHeight = $('.fh5co-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.fh5co-tab-content-wrap'),
						tabHeight = $('.fh5co-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();

		var openToday = function() {
			var todayInNum = new Date().getDay() + 1;
			var $this = $(this);

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.fh5co-tab-nav li').removeClass('active');
			
			$('.fh5co-tabs')
					.find('.day-heading[data-tab="'+todayInNum+'"]')
					.closest('li')
					.addClass('active')

			$('.fh5co-tabs')
					.find('.tab-content[data-tab-content="'+todayInNum+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();
		}
		openToday();


		// Click tab menu
		$('.fh5co-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.fh5co-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.fh5co-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		parallax();
		testimonialCarousel();
		tabs();
	});


}());

// JSON data for the languages
const data = {
	"en": {
	  "title": "Welcome!",
	  "address": "Facharzt Innere Medizin, Zusatzweiterbildung Intensivmedizin <br> Saarstr.4, 38440 Wolfsburg",
	  "home": "Home",
	  "gallery": "Gallery",
	  "practice": "Practice",
	  "services": "Services",
	  "contact": "Contact",
	  "contactH3": "Contact Information",
	  "contactH2": "Click here to view on google map <a href=\"https://www.google.co.in/maps/place/Saarstra%C3%9Fe+4,+38440+Wolfsburg,+Germany/@52.4237273,10.7752997,17z/data=!4m5!3m4!1s0x47af9252e1591315:0x77492fdcb094ff7b!8m2!3d52.4239138!4d10.7753641?authuser=1\" \"target=\"_blank\" rel=\"noopener noreferrer\">hausarztabraham.de</a>",
	  "contactH1": "Contact us",
	  "servicesHeaderH1": "Our Services",
	  "servicesHeaderH2": "Services within the framework of the statutory health insurance",
	  "servicesDesc": "Discover Our Services: At our hospital, we offer a comprehensive range of top-notch medical services, backed by a team of experienced professionals and state-of-the-art facilities. From preventive care to advanced treatments, we are committed to providing the highest level of healthcare and improving the well-being of our patients.",
	  "timingHeader": "Timing",
	  "teamHeaderh2": "Dedicated hospital practice team providing exceptional care and expertise to patients.",
	  "galleryH2": "Gallery",
	  "galleryh2desc": "Discover our hospital's image gallery, displaying compassionate care, modern facilities, and our medical team's expertise dedicated to your well-being.",
	  "galleryDesc": "Explore our hospital image gallery, showcasing our compassionate care and modern facilities. Witness the expertise of our medical team as they prioritize your well-being and deliver top-notch services to our valued patients.",
	  "imprint": "Imprint/Data protection",
	  "practiceTeamHeader": "Meet Our Practice Team",
	  "practiceTeamBody": "We take pride in our exceptional team of healthcare professionals. Our practice team is composed of highly skilled and compassionate doctors, nurses, specialists, and support staff who are dedicated to providing the best possible care to our patients. Each member of our team brings a wealth of experience and expertise, ensuring that you receive personalized and top-notch medical attention. We are committed to your well-being and look forward to serving you with the utmost care and professionalism."
	},
	"de": {
	  "title": "Willkommen!",
	  "address": "Saarstraße 4, 38440 Wolfsburg",
	  "home": "heim",
	  "gallery": "Galerie",
	  "practice": "Praxisteam",
	  "services": "Dienstleistungen",
	  "contact": "kontaktiere",
	  "contactH3": "Kontaktinformationen",
	  "contactH2": "Klicken Sie hier, um auf Google Maps anzuzeigen <a href=\"https://www.google.co.in/maps/place/Saarstra%C3%9Fe+4,+38440+Wolfsburg,+Germany/@52.4237273,10.7752997,17z/data=!4m5!3m4!1s0x47af9252e1591315:0x77492fdcb094ff7b!8m2!3d52.4239138!4d10.7753641?authuser=1\" \"target=\"_blank\" rel=\"noopener noreferrer\">hausarztabraham.de</a>",
	  "contactH1": "KONTAKTIERE UNS",
	  "servicesHeaderH1": "Unsere Dienstleistungen",
	  "servicesHeaderH2": "Leistungen im Rahmen der gesetzlichen Krankenversicherung",
	  "servicesDesc": "Unsere Dienstleistungen entdecken: In unserem Krankenhaus bieten wir eine umfassende Palette erstklassiger medizinischer Leistungen, unterstützt von einem erfahrenen Team und modernster Ausstattung. Von der Präventivmedizin bis zu fortgeschrittenen Behandlungen verpflichten wir uns, die bestmögliche Gesundheitsversorgung zu bieten und das Wohlbefinden unserer Patienten zu verbessern.",
	  "timingHeader": "Zeitangaben",
	  "teamHeaderh2": "Engagiertes Krankenhaus-Praxisteam bietet außergewöhnliche Betreuung und Fachkompetenz für Patienten.",
	  "galleryH2": "Galerie",
	  "galleryh2desc": "Entdecken Sie unsere Krankenhaus-Bildergalerie, die mitfühlende Betreuung, moderne Einrichtungen und das Fachwissen unseres medizinischen Teams zeigt, das Ihrem Wohlbefinden gewidmet ist.",
	  "galleryDesc": "Entdecken Sie unsere Krankenhaus-Bildergalerie, die mitfühlende Betreuung und moderne Einrichtungen zeigt. Erleben Sie die Fachkompetenz unseres medizinischen Teams, während sie Ihr Wohlbefinden in den Mittelpunkt stellen und erstklassige Dienstleistungen für unsere geschätzten Patienten erbringen.",
	  "imprint": "Impressum/Datenschutz",
	  "practiceTeamHeader": "Unser Praxisteam kennenlernen",
	  "practiceTeamBody": "Unser Praxisteam besteht aus hochqualifizierten und mitfühlenden Ärzten, Krankenschwestern, Spezialisten und Unterstützungspersonal, die sich dafür einsetzen, die bestmögliche Versorgung für unsere Patienten zu gewährleisten. Jedes Mitglied unseres Teams bringt eine Fülle von Erfahrung und Fachwissen mit, um sicherzustellen, dass Sie eine individuelle und erstklassige medizinische Betreuung erhalten. Wir sind Ihrem Wohlbefinden verpflichtet und freuen uns darauf, Sie mit größter Sorgfalt und Professionalität zu behandeln."
	}
  };
  
  function updateLanguage(language) {
	if (document.getElementById("title") != null) document.getElementById("title").innerHTML = data[language].title;
	if (document.getElementById("address") != null) document.getElementById("address").innerHTML = data[language].address;
	if (document.getElementById("practiceTeamHeader") != null) document.getElementById("practiceTeamHeader").innerHTML = data[language].practiceTeamHeader;
	if (document.getElementById("teamHeaderh1") != null) document.getElementById("teamHeaderh1").innerHTML = data[language].practiceTeamHeader;
	if (document.getElementById("teamHeaderh2") != null) document.getElementById("teamHeaderh2").innerHTML = data[language].teamHeaderh2;
	if (document.getElementById("practiceTeamBody") != null) document.getElementById("practiceTeamBody").innerHTML = data[language].practiceTeamBody;
	if (document.getElementById("home") != null) document.getElementById("home").innerHTML = data[language].home;
	if (document.getElementById("gallery") != null) document.getElementById("gallery").innerHTML = data[language].gallery;
	if (document.getElementById("practice") != null) document.getElementById("practice").innerHTML = data[language].practice;
	if (document.getElementById("services") != null) document.getElementById("services").innerHTML = data[language].services;
	if (document.getElementById("contact") != null) document.getElementById("contact").innerHTML = data[language].contact;
	if (document.getElementById("practiceTeamBody") != null) document.getElementById("practiceTeamBody").innerHTML = data[language].practiceTeamBody;
	if (document.getElementById("imprint") != null) document.getElementById("imprint").innerHTML = data[language].imprint;
	if (document.getElementById("timingHeader") != null) document.getElementById("timingHeader").innerHTML = data[language].timingHeader;
	if (document.getElementById("galleryH1") != null) document.getElementById("galleryH1").innerHTML = data[language].galleryH2;
	if (document.getElementById("galleryH2") != null) document.getElementById("galleryH2").innerHTML = data[language].galleryH2;
	if (document.getElementById("galleryDesc") != null) document.getElementById("galleryDesc").innerHTML = data[language].galleryDesc;
	if (document.getElementById("homeMini") != null) document.getElementById("homeMini").innerHTML = data[language].home;
	if (document.getElementById("galleryMini") != null) document.getElementById("galleryMini").innerHTML = data[language].gallery;
	if (document.getElementById("practiceMini") != null) document.getElementById("practiceMini").innerHTML = data[language].practice;
	if (document.getElementById("servicesMini") != null) document.getElementById("servicesMini").innerHTML = data[language].services;
	if (document.getElementById("contactMini") != null) document.getElementById("contactMini").innerHTML = data[language].contact;
	if (document.getElementById("galleryh2desc") != null) document.getElementById("galleryh2desc").innerHTML = data[language].galleryh2desc;
	if (document.getElementById("servicesHeaderH1") != null) document.getElementById("servicesHeaderH1").innerHTML = data[language].servicesHeaderH1;
	if (document.getElementById("servicesH2") != null) document.getElementById("servicesH2").innerHTML = data[language].servicesHeaderH1;
	if (document.getElementById("servicesHeaderH2") != null) document.getElementById("servicesHeaderH2").innerHTML = data[language].servicesHeaderH2;
	if (document.getElementById("servicesDesc") != null) document.getElementById("servicesDesc").innerHTML = data[language].servicesDesc;
	if (document.getElementById("contactH3") != null) document.getElementById("contactH3").innerHTML = data[language].contactH3;
	if (document.getElementById("contactH2") != null) document.getElementById("contactH2").innerHTML = data[language].contactH2;
	if (document.getElementById("contactH1") != null) document.getElementById("contactH1").innerHTML = data[language].contactH1;
  }
  
  document.getElementById("language-toggle").addEventListener("change", function() {
	const language = this.checked ? "en" : "de";
	updateLanguage(language);
  });
  
  // Set the initial language to English
  updateLanguage("de");