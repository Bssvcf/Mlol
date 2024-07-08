let clickCount = 0;

function handleClick() {
    clickCount++;
    if (clickCount === 3) {
        document.getElementById('hiddenLink').style.display = 'inline'; // Pokaż ukryty link
    }
}

// Funkcja do przeniesienia do kolejnej strony po kliknięciu ukrytego linku
document.getElementById('hiddenAnchor').addEventListener('click', function(event) {
    event.preventDefault(); // Zapobiegaj domyślnemu działaniu linku
    window.open(event.target.href, '_blank'); // Otwórz link w nowym oknie lub karcie
});
