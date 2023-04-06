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
let dotIndex2 =0;
let imageIndex = 1;
let textIndex = 1;
let dot = document.getElementsByClassName("dot");
const BannerImage = document.getElementById("banner-img");
const BannerTagLine= document.getElementById("banner-text");

console.log(dot) ;

// // evenement sur la fleche droite
document.querySelector(".arrow_right").addEventListener("click", function() {
	// ajout class selected 		
	dot[dotIndex++].classList.add("dot_selected");
	// supprimer class selected 
	dot[dotIndex2++].classList.remove("dot_selected");	
	// changement de l'image 		
	BannerImage.src = "./assets/images/slideshow/"+ slides[imageIndex++].image;	
	// changement du texte 
	BannerTagLine.innerHTML = slides[textIndex++].tagLine;
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
	// changement du bullet point actif au suivant 	
	dot[dotIndex++].classList.remove("dot_selected");
	dot[dotIndex].classList.add("dot_selected");	
	// changement de l'image 		
	BannerImage.src = "./assets/images/slideshow/"+ slides[imageIndex--].image;	
	// changement du texte 
	BannerTagLine.innerHTML = slides[textIndex--].tagLine;
})



