const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "rapping",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "aziz",
				weight: 15
			}, {
				text: "newText",
				weight: 7
			}
		];
		return words;
	}
	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}
	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}
	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"I am an Android Developer.", "love everything about code.", "I have strong passion for Flutter.", "Java Developer."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 20,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#2b7fc8"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
// Slider Function for each one

	let slideIndex = 1;
	showSlides(slideIndex);
	
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}
	
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
	  let i;
	  let slides = document.getElementsByClassName("mySlides");
	  let dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " active";
	}
	
	let slideIndex2 = 1;
	showSlides2(slideIndex2);
	
	function plusSlides2(n) {
	  showSlides2(slideIndex2 += n);
	}
	
	function currentSlide2(n) {
	  showSlides2(slideIndex2 = n);
	}
	
	function showSlides2(n) {
	  let i;
	  let slides2 = document.getElementsByClassName("mySlides2");
	  let dots2 = document.getElementsByClassName("dot2");
	  if (n > slides2.length) {slideIndex2 = 1}    
	  if (n < 1) {slideIndex2 = slides2.length}
	  for (i = 0; i < slides2.length; i++) {
		slides2[i].style.display = "none";  
	  }
	  for (i = 0; i < dots2.length; i++) {
		dots2[i].className = dots2[i].className.replace(" active", "");
	  }
	  slides2[slideIndex2-1].style.display = "block";  
	  dots2[slideIndex2-1].className += " active";
	}
	
	let slideIndex3 = 1;
	showSlides3(slideIndex3);
	
	function plusSlides3(n) {
	  showSlides3(slideIndex3 += n);
	}
	
	function currentSlide3(n) {
	  showSlides3(slideIndex3 = n);
	}
	
	function showSlides3(n) {
	  let i;
	  let slides3 = document.getElementsByClassName("mySlides3");
	  let dots3 = document.getElementsByClassName("dot3");
	  if (n > slides3.length) {slideIndex3 = 1}    
	  if (n < 1) {slideIndex3 = slides3.length}
	  for (i = 0; i < slides3.length; i++) {
		slides3[i].style.display = "none";  
	  }
	  for (i = 0; i < dots3.length; i++) {
		dots3[i].className = dots3[i].className.replace(" active", "");
	  }
	  slides3[slideIndex3-1].style.display = "block";  
	  dots3[slideIndex3-1].className += " active";
	}
	let slideIndex4 = 1;
	showSlides4(slideIndex4);
	
	function plusSlides4(n) {
	  showSlides4(slideIndex4 += n);
	}
	
	function currentSlide4(n) {
	  showSlides4(slideIndex4 = n);
	}
	
	function showSlides4(n) {
	  let i;
	  let slides4 = document.getElementsByClassName("mySlides4");
	  let dots4 = document.getElementsByClassName("dot4");
	  if (n > slides4.length) {slideIndex4 = 1}    
	  if (n < 1) {slideIndex4 = slides4.length}
	  for (i = 0; i < slides4.length; i++) {
		slides4[i].style.display = "none";  
	  }
	  for (i = 0; i < dots4.length; i++) {
		dots4[i].className = dots4[i].className.replace(" active", "");
	  }
	  slides4[slideIndex4-1].style.display = "block";  
	  dots4[slideIndex4-1].className += " active";
	}
	let slideIndex5 = 1;
	showSlides5(slideIndex5);
	function plusSlides5(n) {
	  showSlides5(slideIndex5 += n);
	}
	
	function currentSlide5(n) {
	  showSlides5(slideIndex5 = n);
	}
	
	function showSlides5(n) {
	  let i;
	  let slides5 = document.getElementsByClassName("mySlides5");
	  let dots5 = document.getElementsByClassName("dot5");
	  if (n > slides5.length) {slideIndex5 = 1}    
	  if (n < 1) {slideIndex5 = slides5.length}
	  for (i = 0; i < slides5.length; i++) {
		slides5[i].style.display = "none";  
	  }
	  for (i = 0; i < dots5.length; i++) {
		dots5[i].className = dots5[i].className.replace(" active", "");
	  }
	  slides5[slideIndex5-1].style.display = "block";  
	  dots5[slideIndex5-1].className += " active";
	}
	let slideIndex6 = 1;
	showSlides6(slideIndex6);
	function plusSlides6(n) {
	  showSlides6(slideIndex6 += n);
	}
	function currentSlide6(n) {
		showSlides6(slideIndex6 = n);
	  }
	  
	  function showSlides6(n) {
		let i;
		let slides6 = document.getElementsByClassName("mySlides6");
		let dots6 = document.getElementsByClassName("dot6");
		if (n > slides6.length) {slideIndex6 = 1}    
		if (n < 1) {slideIndex6 = slides6.length}
		for (i = 0; i < slides6.length; i++) {
		  slides6[i].style.display = "none";  
		}
		for (i = 0; i < dots6.length; i++) {
		  dots6[i].className = dots6[i].className.replace(" active", "");
		}
		slides6[slideIndex6-1].style.display = "block";  
		dots6[slideIndex6-1].className += " active";
	  }

	  let slideIndex7 = 1;
	  showSlides7(slideIndex7);
	  function plusSlides7(n) {
		showSlides7(slideIndex7 += n);
	  }
	  function currentSlide7(n) {
		showSlides7(slideIndex7 = n);
	  }
	  
	  function showSlides7(n) {
		let i;
		let slides7 = document.getElementsByClassName("mySlides7");
		let dots7 = document.getElementsByClassName("dot7");
		if (n > slides7.length) {slideIndex7 = 1}    
		if (n < 1) {slideIndex7 = slides7.length}
		for (i = 0; i < slides7.length; i++) {
		  slides7[i].style.display = "none";  
		}
		for (i = 0; i < dots7.length; i++) {
		  dots7[i].className = dots7[i].className.replace(" active", "");
		}
		slides7[slideIndex7-1].style.display = "block";  
		dots7[slideIndex7-1].className += " active";
	  }
	
