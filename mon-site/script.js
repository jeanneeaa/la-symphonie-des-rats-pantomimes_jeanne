// Tableau pour stocker les chemins des images
const ratImages = ['images/rat1.png', 'images/rat2.png', 'images/rat3.png']; // Assurez-vous que ces fichiers sont dans le bon chemin

// Tableau pour stocker les tailles des rats
const ratSizes = [
    { width: 600, height: 600 }, // Taille pour le rat 1
    { width: 300, height:300 }, // Taille pour le rat 2
    { width: 300, height: 300 }  // Taille pour le rat 3
];

// Variable pour suivre l'angle de rotation
let rotationAngle = 0;

// Variable pour suivre l'index de l'image
let currentImageIndex = 0;

document.addEventListener('click', function(event) {
    const rat = document.createElement('img');
    
    // Définir la source de l'image en fonction de l'index
    rat.src = ratImages[currentImageIndex]; 

    // Appliquer la taille aléatoire à l'image
    const size = ratSizes[currentImageIndex]; // Obtenir la taille correspondante
    rat.style.width = size.width + 'px';
    rat.style.height = size.height + 'px';

    rat.classList.add('rat'); // Ajoute la classe pour le style

    // Positionner le rat à l'endroit du clic
    rat.style.left = event.pageX + 'px';
    rat.style.top = event.pageY + 'px';

    // Calculer le nouvel angle
    rotationAngle += 90; // Incrémente de 90 degrés

    // Appliquer la rotation
    rat.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`; 

    // Ajouter le rat au corps de la page
    document.body.appendChild(rat);

    // Mettre à jour l'index de l'image pour le prochain clic
    currentImageIndex = (currentImageIndex + 1) % ratImages.length; // Boucle au début si atteint la fin
    
});

