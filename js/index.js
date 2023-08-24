//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.addEventListener("click", closeModalOutside);
    }

    function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.removeEventListener("click", closeModalOutside);
    }



    function uploadFile() {
    // Code for uploading file
    }

    function sendForm() {
    // Code for submitting form
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Показать первый набор секций
var sections1 = document.querySelectorAll(".start, .benefits, .team, .finish");
for (var i = 0; i < sections1.length; i++) {
  sections1[i].style.display = "block";
}

// Скрыть второй набор секций
var sections2 = document.querySelectorAll(".start-two, .benefits-two, .team-two, .finish-two, .finish-images");
for (var j = 0; j < sections2.length; j++) {
  sections2[j].style.display = "none";
}

// Получить кнопки
var button1 = document.getElementById("show-sections-1");
var button2 = document.getElementById("show-sections-2");

// Показать первый набор секций при нажатии на кнопку 1
button1.addEventListener("click", function() {
  // Скрыть второй набор секций
  for (var j = 0; j < sections2.length; j++) {
    sections2[j].style.display = "none";
  }

  // Показать первый набор секций
  for (var k = 0; k < sections1.length; k++) {
    sections1[k].style.display = "block";
  }

  // Добавить класс "active" к текущей нажатой кнопке
  button1.classList.add("active");
  button2.classList.remove("active");
});

// Показать второй набор секций при нажатии на кнопку 2
button2.addEventListener("click", function() {
  // Скрыть первый набор секций
  for (var l = 0; l < sections1.length; l++) {
    sections1[l].style.display = "none";
  }

  // Показать второй набор секций
  for (var m = 0; m < sections2.length; m++) {
    sections2[m].style.display = "block";
  }

  // Добавить класс "active" к текущей нажатой кнопке
  button1.classList.remove("active");
  button2.classList.add("active");
});
