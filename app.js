function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'es,en,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
}

const buscarFrase = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
  
    console.log(res)
  
    const frase = await res.json();
  
    console.log(frase.value);

    const texto = document.querySelector('.card-text');
    texto.textContent = frase.value;
  };
  
  buscarFrase();