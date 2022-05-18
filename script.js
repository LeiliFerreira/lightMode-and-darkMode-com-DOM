function mudarModo() {
	mudarClasses(); 
	mudarTexto(); 
}

function mudarClasses() {
	button.classList.toggle(darkModeClass); 
	h1.classList.toggle(darkModeClass); 
	body.classList.toggle(darkModeClass); 
}

function mudarTexto() {
	const lightMode = "Light Mode"; 
	const darkMode = "Dark Mode"; 
	
	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode; 
		h1.innerHTML = darkMode + " ON"; 
		return; 
	}
	button.innerHTML = darkMode; 
	h1.innerHTML = lightMode + " ON"; 
	return; 
}

const darkModeClass = 'dark-mode'; 
const button = document.getElementById('mode-selector'); 
const h1 = document.getElementById('page-title'); 
const body = document.getElementsByTagName('body')[0]; 

button.addEventListener('click', mudarModo); 

