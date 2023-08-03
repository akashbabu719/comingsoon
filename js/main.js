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
	  "sunday": "Sunday",
	  "monday": "Monday",
	  "tuesday": "Tuesday",
	  "wednesday": "Wednesday",
	  "thursday": "Thursday",
	  "friday": "Friday",
	  "saturday": "Saturday",
	  "timingDesc1": "Outside Consultation hours on weekdays by appointment",
	  "timingDesc2": "**Without an appointment, for short, acute concerns with a waiting time",
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
	  "practiceTeamBody": "We take pride in our exceptional team of healthcare professionals. Our practice team is composed of highly skilled and compassionate doctors, nurses, specialists, and support staff who are dedicated to providing the best possible care to our patients. Each member of our team brings a wealth of experience and expertise, ensuring that you receive personalized and top-notch medical attention. We are committed to your well-being and look forward to serving you with the utmost care and professionalism.",
	  "time21": "08:00 AM - 12:00 PM",
	  "time22": "03:00 PM - 05:00 PM",
	  "time23": "08:00 AM - 09:00 AM",
	  "time31": "08:00 AM - 12:00 PM",
	  "time32": "03:00 PM - 05:00 PM",
	  "time33": "08:00 AM - 09:00 AM",
	  "time41": "08:00 AM - 01:00 PM",
	  "time42": "08:00 AM - 09:00 AM",
	  "time51": "08:00 AM - 12:00 PM",
	  "time52": "03:00 PM - 05:00 PM",
	  "time53": "08:00 AM - 09:00 AM",
	  "time61": "08:00 AM - 01:00 PM",
	  "time62": "08:00 AM - 09:00 AM",
	  "privateService": "Private Services",
	  "appointmentSpan1": "By appointment",
	  "appointmentH41": "By appointment only",
	  "timeH42": "Emergency consultation hours",
	  "timingDesc1": "Outside Consultation hours on weekdays by appointment",
	  "timingDesc2": "**Without an appointment, for short, acute concerns with a waiting time",
	  "private1": "Laboratory tests",
	  "private2": "Basic Check-up (Private)",
	  "private3": "Check-up Premium (Private)",
	  "private4": "Vaccine recommendations for traveling abroad",
	  "private5": "Echocardiography",
	  "private6": "Ultrasound of the veins (compression ultrasound to rule out deep vein thrombosis and thrombophlebitis)",
	  "private7": "Ultrasound diagnosis of the extracranial neck vessels",
	  "private8": "Prices for private services are available on request. The prices are based on the fee schedule for doctors (GOÄ)",
	  "service1": "Treatment of acute and chronic diseases of all age groups",
	  "service2": "Psychosomatic basic care",
	  "service3": "Skin cancer screening (every 2 years)",
	  "service4": "DMP (asthma, COPD, CAD, diabetes mellitus type 2)",
	  "service5": "Hausarzt - centered care (HzV)",
	  "service6": "Vaccine recommendations",
	  "service7": "Vaccinations as part of the STIKO",
	  "service8": "Innoculation of vaccines",
	  "service9": "Advice on preventive care",
	  "service10": "Check-up examination within the statutory health insurance (every 3 years)",
	  "service11": "Check-up 35",
	  "service12": "Cancer screening for men",
	  "service13": "Colorectal cancer screening (i FOBT)",
	  "service14": "Innoculation of vaccines",
	  "service15": "Aortic aneurysm screening (>65 years)",
	  "service16": "ECG",
	  "service17": "Holter ECG",
	  "service18": "Stress ECG",
	  "service19": "24 hour- Blood Pressure",
	  "service20": "Lung Function Test (Spirometry)",
	  "service21": "Laboratory tests as part of statutory health insurance",
	  "service22": "Ultrasound",
	  "service23": "Abdomen",
	  "service24": "Thyroid",
	  "service25": "Urogenital organ (B-mode, transcutaneous)",
	  "service26": "Geriatric screening including dementia testing",
	  "service27": "Physician's assistant in the Hausarzt practice (VERAH)"
	},
	"de": {
	  "title": "Willkommen!",
	  "address": "Saarstraße 4, 38440 Wolfsburg",
	  "home": "heim",
	  "gallery": "Galerie",
	  "practice": "Praxisteam",
	  "services": "Dienstleistungen",
	  "contact": "kontaktiere",
	  "sunday": "Sonntag",
	  "monday": "Montag",
	  "tuesday": "Dienstag",
	  "wednesday": "Mittwoch",
	  "thursday": "Donnerstag",
	  "friday": "Freitag",
	  "saturday": "Samstag",
	  "timingDesc1": "Außerhalb der Sprechzeiten werktags nach Vereinbarung",
	  "timingDesc2": "**Ohne Termin, für kurzfristige, akute Anliegen mit Wartezeit",
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
	  "practiceTeamBody": "Unser Praxisteam besteht aus hochqualifizierten und mitfühlenden Ärzten, Krankenschwestern, Spezialisten und Unterstützungspersonal, die sich dafür einsetzen, die bestmögliche Versorgung für unsere Patienten zu gewährleisten. Jedes Mitglied unseres Teams bringt eine Fülle von Erfahrung und Fachwissen mit, um sicherzustellen, dass Sie eine individuelle und erstklassige medizinische Betreuung erhalten. Wir sind Ihrem Wohlbefinden verpflichtet und freuen uns darauf, Sie mit größter Sorgfalt und Professionalität zu behandeln.",
	  "time21": "08:00 Uhr - 12:00 Uhr",
	  "time22": "15:00 Uhr - 17:00 Uhr",
	  "time23": "08:00 Uhr - 09:00 Uhr",
	  "time31": "08:00 Uhr - 12:00 Uhr",
	  "time32": "15:00 Uhr - 17:00 Uhr",
	  "time33": "08:00 Uhr - 09:00 Uhr",
	  "time41": "08:00 Uhr - 13:00 Uhr",
	  "time42": "08:00 Uhr - 09:00 Uhr",
	  "time51": "08:00 Uhr - 12:00 Uhr",
	  "time52": "15:00 Uhr - 17:00 Uhr",
	  "time53": "08:00 Uhr - 09:00 Uhr",
	  "time61": "08:00 Uhr - 13:00 Uhr",
	  "time62": "08:00 Uhr - 09:00 Uhr",
	  "privateService": "Selbstzahlleistungen",
	  "appointmentSpan1": "Nach Vereinbarung",
	  "appointmentH41": "Nur mit Termin",
	  "timeH42": "Notfallsprechstunde",
	  "timingDesc1": "Außerhalb der Sprechzeiten werktags nach Vereinbarung",
	  "timingDesc2": "**Ohne Termin, für kurze, akute Anliegen mit Wartezeit",
	  "private1": "Laboruntersuchungen",
	  "private2": "Checkup Basis (Privat)",
	  "private3": "Checkup Premium (Privat)",
	  "private4": "Impfleistungen im Rahmen von Auslandsreisen",
	  "private5": "Echokardiographie",
	  "private6": "Venen der Extremitäten (Kompression Ultraschall zum Ausschluss Tiefe Venenthrombose und Thrombophlebitis)",
	  "private7": "Ultraschalldiagnostik der Extrakraniellen Halsgefäße",
	  "private8": "Preise für Selbstzahlerleistungen erhalten Sie auf Anfrage. Die Preise orientieren sich an der Gebührenordnung für Ärzte (GOÄ)",
	  "service1": "Behandlung akuter und chronischer Erkrankungen aller Altersgruppen",
	  "service2": "Hausärztliche psychosomatische Grundversorgung",
	  "service3": "Hautkrebsscreening (alle 2 Jahren)",
	  "service4": "DMP-Teilnahme (Asthma, COPD, KHK, Diabetes mellitus Typ 2)",
	  "service5": "Teilnahme an der Hausarztzentrierten Versorgung (HzV)",
	  "service6": "Impfberatung",
	  "service7": "Impfungen im Rahmen der STIKO Empfehlung",
	  "service8": "Durchführung von Schutzimpfungen",
	  "service9": "Vorsorgeuntersuchungen",
	  "service10": "Beratung zu Vorsorgen",
	  "service11": "Checkup Untersuchung im gesetzlichen Rahmen (alle 3 Jahren)",
	  "service12": "Checkup 35",
	  "service13": "Krebsvorsorg Männer",
	  "service14": "Darmkrebs Früherkennung (i FOBT)",
	  "service15": "Aortenaneurysma Screening (&gt;65 J)",
	  "service16": "EKG",
	  "service17": "Langzeit EKG",
	  "service18": "Belastung EKG",
	  "service19": "Langzeit Blutdruck",
	  "service20": "Lungenfunktionsdiagnostik (Spirometrie)",
	  "service21": "Laboruntersuchungen im Rahmen der Kassenarztbetreuung",
	  "service22": "Ultraschall",
	  "service23": "Bauchraum",
	  "service24": "Schilddrüse",
	  "service25": "Urogenetalorgan(B-modus,transkutan)",
	  "service26": "Geriatrisches Screening einschl. Demenztestung",
	  "service27": "Versorgungsassistent/in in der Hausärztlichen Praxis (VERAH)"
	}
  };
  
  function updateLanguage(language) {
	if (document.getElementById("service1") != null) document.getElementById("service1").innerHTML = data[language].service1;
	if (document.getElementById("service2") != null) document.getElementById("service2").innerHTML = data[language].service2;
	if (document.getElementById("service3") != null) document.getElementById("service3").innerHTML = data[language].service3;
	if (document.getElementById("service4") != null) document.getElementById("service4").innerHTML = data[language].service4;
	if (document.getElementById("service5") != null) document.getElementById("service5").innerHTML = data[language].service5;
	if (document.getElementById("service6") != null) document.getElementById("service6").innerHTML = data[language].service6;
	if (document.getElementById("service7") != null) document.getElementById("service7").innerHTML = data[language].service7;
	if (document.getElementById("service8") != null) document.getElementById("service8").innerHTML = data[language].service8;
	if (document.getElementById("service9") != null) document.getElementById("service9").innerHTML = data[language].service9;
	if (document.getElementById("service10") != null) document.getElementById("service10").innerHTML = data[language].service10;
	if (document.getElementById("service11") != null) document.getElementById("service11").innerHTML = data[language].service11;
	if (document.getElementById("service12") != null) document.getElementById("service12").innerHTML = data[language].service12;
	if (document.getElementById("service13") != null) document.getElementById("service13").innerHTML = data[language].service13;
	if (document.getElementById("service14") != null) document.getElementById("service14").innerHTML = data[language].service14;
	if (document.getElementById("service15") != null) document.getElementById("service15").innerHTML = data[language].service15;
	if (document.getElementById("service16") != null) document.getElementById("service16").innerHTML = data[language].service16;
	if (document.getElementById("service17") != null) document.getElementById("service17").innerHTML = data[language].service17;
	if (document.getElementById("service18") != null) document.getElementById("service18").innerHTML = data[language].service18;
	if (document.getElementById("service19") != null) document.getElementById("service19").innerHTML = data[language].service19;
	if (document.getElementById("service20") != null) document.getElementById("service20").innerHTML = data[language].service20;
	if (document.getElementById("service21") != null) document.getElementById("service21").innerHTML = data[language].service21;
	if (document.getElementById("service22") != null) document.getElementById("service22").innerHTML = data[language].service22;
	if (document.getElementById("service23") != null) document.getElementById("service23").innerHTML = data[language].service23;
	if (document.getElementById("service24") != null) document.getElementById("service24").innerHTML = data[language].service24;
	if (document.getElementById("service25") != null) document.getElementById("service25").innerHTML = data[language].service25;
	if (document.getElementById("service26") != null) document.getElementById("service26").innerHTML = data[language].service26;
	if (document.getElementById("service27") != null) document.getElementById("service27").innerHTML = data[language].service27;
	if (document.getElementById("private1") != null) document.getElementById("private1").innerHTML = data[language].private1;
	if (document.getElementById("private2") != null) document.getElementById("private2").innerHTML = data[language].private2;
	if (document.getElementById("private3") != null) document.getElementById("private3").innerHTML = data[language].private3;
	if (document.getElementById("private4") != null) document.getElementById("private4").innerHTML = data[language].private4;
	if (document.getElementById("private5") != null) document.getElementById("private5").innerHTML = data[language].private5;
	if (document.getElementById("private6") != null) document.getElementById("private6").innerHTML = data[language].private6;
	if (document.getElementById("private7") != null) document.getElementById("private7").innerHTML = data[language].private7;
	if (document.getElementById("private8") != null) document.getElementById("private8").innerHTML = data[language].private8;
	if (document.getElementById("privateService") != null) document.getElementById("privateService").innerHTML = data[language].privateService;
	if (document.getElementById("timingDesc1") != null) document.getElementById("timingDesc1").innerHTML = data[language].timingDesc1;
	if (document.getElementById("timingDesc2") != null) document.getElementById("timingDesc2").innerHTML = data[language].timingDesc2;
	if (document.getElementById("time21") != null) document.getElementById("time21").innerHTML = data[language].time21;
	if (document.getElementById("time22") != null) document.getElementById("time22").innerHTML = data[language].time22;
	if (document.getElementById("time23") != null) document.getElementById("time23").innerHTML = data[language].time23;
	if (document.getElementById("time31") != null) document.getElementById("time31").innerHTML = data[language].time31;
	if (document.getElementById("time32") != null) document.getElementById("time32").innerHTML = data[language].time32;
	if (document.getElementById("time33") != null) document.getElementById("time33").innerHTML = data[language].time33;
	if (document.getElementById("time41") != null) document.getElementById("time41").innerHTML = data[language].time41;
	if (document.getElementById("time42") != null) document.getElementById("time42").innerHTML = data[language].time42;
	if (document.getElementById("time51") != null) document.getElementById("time51").innerHTML = data[language].time51;
	if (document.getElementById("time52") != null) document.getElementById("time52").innerHTML = data[language].time52;
	if (document.getElementById("time53") != null) document.getElementById("time53").innerHTML = data[language].time53;
	if (document.getElementById("time61") != null) document.getElementById("time61").innerHTML = data[language].time61;
	if (document.getElementById("time62") != null) document.getElementById("time62").innerHTML = data[language].time62;
	if (document.getElementById("appointmentSpan1") != null) document.getElementById("appointmentSpan1").innerHTML = data[language].appointmentSpan1;
	if (document.getElementById("appointmentSpan7") != null) document.getElementById("appointmentSpan7").innerHTML = data[language].appointmentSpan1;
	if (document.getElementById("appointmentH47") != null) document.getElementById("appointmentH47").innerHTML = data[language].appointmentH41;
	if (document.getElementById("appointmentH47") != null) document.getElementById("appointmentH47").innerHTML = data[language].appointmentH41;
	if (document.getElementById("timeH42") != null) document.getElementById("timeH42").innerHTML = data[language].timeH42;
	if (document.getElementById("timeH43") != null) document.getElementById("timeH43").innerHTML = data[language].timeH42;
	if (document.getElementById("timeH44") != null) document.getElementById("timeH44").innerHTML = data[language].timeH42;
	if (document.getElementById("timeH45") != null) document.getElementById("timeH45").innerHTML = data[language].timeH42;
	if (document.getElementById("timeH46") != null) document.getElementById("timeH46").innerHTML = data[language].timeH42;
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
	if (document.getElementById("s") != null) document.getElementById("s").innerHTML = data[language].sunday.slice(0, 2);
	if (document.getElementById("m") != null) document.getElementById("m").innerHTML = data[language].monday.slice(0, 2);
	if (document.getElementById("t") != null) document.getElementById("t").innerHTML = data[language].tuesday.slice(0, 2);
	if (document.getElementById("w") != null) document.getElementById("w").innerHTML = data[language].wednesday.slice(0, 2);
	if (document.getElementById("th") != null) document.getElementById("th").innerHTML = data[language].thursday.slice(0, 2);
	if (document.getElementById("f") != null) document.getElementById("f").innerHTML = data[language].friday.slice(0, 2);
	if (document.getElementById("sa") != null) document.getElementById("sa").innerHTML = data[language].saturday.slice(0, 2);
	if (document.getElementById("sunday") != null) document.getElementById("sunday").innerHTML = data[language].sunday;
	if (document.getElementById("monday") != null) document.getElementById("monday").innerHTML = data[language].monday;
	if (document.getElementById("tuesday") != null) document.getElementById("tuesday").innerHTML = data[language].tuesday;
	if (document.getElementById("wednesday") != null) document.getElementById("wednesday").innerHTML = data[language].wednesday;
	if (document.getElementById("thursday") != null) document.getElementById("thursday").innerHTML = data[language].thursday;
	if (document.getElementById("friday") != null) document.getElementById("friday").innerHTML = data[language].friday;
	if (document.getElementById("saturday") != null) document.getElementById("saturday").innerHTML = data[language].saturday;
  }
  
  document.getElementById("language-toggle").addEventListener("change", function() {
	const language = this.checked ? "en" : "de";
	updateLanguage(language);
  });
  
  // Set the initial language to English
  updateLanguage("de");