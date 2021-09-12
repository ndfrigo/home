let brDozvSl = 4;
	 
// SRC trenutle slike. Secemo ga da bismo izvrsili poredjenje
let trenSlSrc = document.querySelector('.trenutna-slika').getAttribute('src');
console.log(trenSlSrc);

// broj od koga vrsimo opsecanje
let brOd = trenSlSrc.lastIndexOf('-') + 1;

// broj do koga vrsimo opsecanje
let brDo = trenSlSrc.lastIndexOf('.');


//Odseceni broj
let brTrenSl = parseInt(trenSlSrc.split("").slice(brOd, brDo).join(""));
console.log(brTrenSl);


// Klik na levo dugme smanjuje broj ucitane slike za 1 (staje na minimalnom broju (1))
document.querySelector('.levi-klik').addEventListener('click', function(event){
	 if (brTrenSl > 1) {
		  brTrenSl--;
		  document.querySelector('.trenutna-slika').setAttribute('src', 'images/image-' + brTrenSl + '.jpg');
	 } else {
		  document.querySelector('.trenutna-slika').setAttribute('src', 'images/image-1.jpg');
	 }
});

// Klik na desno dugme uvecava broj ucitane slike za 1 (staje na dozvoljenom broju slika (8, u ovom slucaju))
document.querySelector('.desni-klik').addEventListener('click', function(){
	 if (brTrenSl < 8) {
		  brTrenSl++
		  document.querySelector('.trenutna-slika').setAttribute('src', 'images/image-' + brTrenSl + '.jpg');
	 } else {
		  document.querySelector('.trenutna-slika').setAttribute('src', 'images/image-8.jpg');
	 }
	 console.log(brTrenSl);
});
