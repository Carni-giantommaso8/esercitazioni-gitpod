function showImage(image, page) {
    const imgElement = document.getElementById('ingredient-image');
    imgElement.src = image;
    imgElement.alt = `Immagine di ${image.split('.')[0]}`;
    
}

function Navigate(image, page) {
setTimeout(() => {
    window.location.href = page;
}, 500); // Mostra l'immagine per un breve momento prima di navigare

}
