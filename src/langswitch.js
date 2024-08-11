function switchLanguage() {
    var languageSelect = document.getElementById("language");
    var selectedOption = languageSelect.options[languageSelect.selectedIndex];
    var selectedLanguage = selectedOption.value;

    localStorage.setItem('selectedLanguage', selectedLanguage);

    switch (selectedLanguage) {
        case "en":
            window.location.href = "index.html";
            break;
        case "de":
            window.location.href = "index_de.html";
            break;
        case "fr":
            window.location.href = "index_fr.html";
            break;
        case "es":
            window.location.href = "index_es.html";
            break;
        default:
            window.location.href = "index.html";
            break;
    }
}

window.onload = function() {
    var savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    var languageSelect = document.getElementById("language");

    for (var i = 0; i < languageSelect.options.length; i++) {
        if (languageSelect.options[i].value === savedLanguage) {
            languageSelect.selectedIndex = i;
            languageSelect.style.backgroundImage = 'url(' + languageSelect.options[i].getAttribute('data-flag') + ')';
            break;
        }
    }
}