const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
	}
]


let dotIndex = 1;
let dotIndex2 = 0;
let dotIndex3 = 3;

let imageIndex = 1;
let imageIndex2 = 3;

let textIndex = 1;
let textIndex2 = 3;

let dot = document.getElementsByClassName("dot");
const BannerImage = document.getElementById("banner-img");
const BannerTagLine= document.getElementById("banner-text");

// // evenement sur la fleche droite
document.querySelector(".arrow_right").addEventListener("click", function() {		
	// changement de l'image 		
	BannerImage.src = "./assets/images/slideshow/"+ slides[imageIndex++].image;	
	// changement du texte 
	BannerTagLine.innerHTML = slides[textIndex++].tagLine;	
	// bullet points		
	dot[dotIndex++].classList.add("dot_selected");
	dot[dotIndex2++].classList.remove("dot_selected");
	// Conditions pour boucle infinie 
	if (imageIndex >= slides.length) {
		imageIndex = 0;	
	}
	if(textIndex >= slides.length) {
		textIndex = 0;
	}
	if(dotIndex >= dot.length) {
		dotIndex = 0;
	}
	if(dotIndex2 == 4) {
		dotIndex2 = 0;
	}
});


// 	// evenement sur la fleche gauche
document.querySelector(".arrow_left").addEventListener("click", function() {	
	// changement de l'image 	
	BannerImage.src = "./assets/images/slideshow/"+ slides[imageIndex2--].image;	
	// changement du texte 	
	BannerTagLine.innerHTML = slides[textIndex2--].tagLine;	
	// bullet points		
	dot[dotIndex3--].classList.add("dot_selected");
	dot[dotIndex2--].classList.remove("dot_selected");
	// Conditions pour boucle infinie 
	if (imageIndex2 < 0) {
		imageIndex2 = 3;	
	}	
	if(textIndex2 < 0) {
		textIndex2 = 3;
	}
	if(dotIndex3 < 0) {
		dotIndex3 = 3;
	}
	if(dotIndex2 < 0) {
		dotIndex2 = 3;
	}
})





