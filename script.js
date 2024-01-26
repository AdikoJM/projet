
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML = '';

    if (name === '') {
        errorMessage.innerHTML += 'Le nom est obligatoire.<br>';
    }

    if (email === '') {
        errorMessage.innerHTML += 'L\'email est obligatoire.<br>';
    } else if (!isValidEmail(email)) {
        errorMessage.innerHTML += 'L\'email n\'est pas valide.<br>';
    }

    if (password === '') {
        errorMessage.innerHTML += 'Le mot de passe est obligatoire.<br>';
    }

    // Autres validations peuvent être ajoutées ici

    // Si aucune erreur, le formulaire est valide
    if (errorMessage.innerHTML === '') {
        alert('Formulaire valide !');
        // Vous pouvez soumettre le formulaire ici ou effectuer d'autres actions nécessaires
    }
}

function isValidEmail(email) {
    // Une validation email simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}