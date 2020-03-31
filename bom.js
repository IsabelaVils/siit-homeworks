
(function getPreference () {
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=c7da641777760054e5ca6164eb47580a';
    let celsius;
    let fahrenheit;
    fetch(url)
        .then((res) => res.json())
        .then(temp);

    function temp(data) {
        celsius = data.main.temp - 273.15;
        fahrenheit = celsius * 1.8 + 32;
        const span = document.querySelector('[data-temperature]');
        
        if (document.getElementById('celsius').checked) {
            span.innerHTML = celsius.toFixed(1) + '&deg;C';
        
        } else if (document.getElementById('fahrenheit').checked) {
            span.innerHTML = fahrenheit.toFixed(1) + '&deg;F';
        }
    }

    document.addEventListener('change', handleLangChange);
    
    function handleLangChange(e) {
        if(e.target.name === 'meteo')
            console.log(e.target.value);

        localStorage.setItem('meteo', e.target.value);
        document.cookie = 'meteo=' +e.target.value;

        const span = document.querySelector('[data-temperature]');
        if (document.getElementById('celsius').checked) {
            span.innerHTML = celsius.toFixed(1) + '&deg;C';
        } else if (document.getElementById('fahrenheit').checked) {
            span.innerHTML = fahrenheit.toFixed(1) + '&deg;F';
        }
    }
})();


(function () {
   const meteo = localStorage.getItem('meteo');
    if(meteo) {
      document.querySelector('#'+ meteo).setAttribute('checked', true);
    }
})();






