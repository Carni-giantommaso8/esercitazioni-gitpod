function colorerosso() {
    document.body.style.backgroundColor = 'red';
}

function colorebianco() {
    document.body.style.backgroundColor = 'white';
}

(function() {
     titolo = document.getElementById('mioTitolo');

    titolo.addEventListener('mouseover', function() {
        titolo.textContent = 'Arrivederci';
    });

    titolo.addEventListener('mouseout', function() {
        titolo.textContent = 'Ciao';
    });
})();


 button = document.getElementById('myButton');

button.addEventListener('click', () => {
    if (button.style.backgroundColor == 'red') {
        button.style.backgroundColor = 'blue';
        button.textContent = 'Blu';
    } else {
        button.style.backgroundColor = 'red';
        button.textContent = 'Rosso';
    }
});


