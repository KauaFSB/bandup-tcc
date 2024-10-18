
    function changeLanguage(lang) {
        const selectedLangElement = document.getElementById('selected-lang');
        if (lang === 'PT-BR') {
            selectedLangElement.innerText = 'PT-BR';
        } else if (lang === 'EN') {
            selectedLangElement.innerText = 'EN';
        }
    }

