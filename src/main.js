/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
    console.log(oTop);
  } else {
    navbar.removeClass("sticky");
  }
});

// JSON data for the languages
const data = {
  "en": {
    "title": "Welcome!",
    "address": "Facharzt Innere Medizin, Zusatzweiterbildung Intensivmedizin <br> Saarstr.4, 38440 Wolfsburg"
  },
  "de": {
    "title": "Willkommen!",
    "address": "Saarstraße 4, 38440 Wolfsburg"
  }
};

function updateLanguage(language) {
  document.getElementById("title").innerHTML = data[language].title;
  document.getElementById("address").innerHTML = data[language].address;
}

document.getElementById("language-toggle").addEventListener("change", function() {
  const language = this.checked ? "en" : "de";
  updateLanguage(language);
});

// Set the initial language to English
updateLanguage("de");