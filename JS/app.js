const load = document.getElementById('loading-container');
load.style.display = 'block';

const container = document.getElementById('country-container');

const loadCountries = () => {
    container.innerHTML = '';
    load.style.display = 'block';
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showData(data))
}
loadCountries();

const loadAsia = () => {
    container.innerHTML = '';
    load.style.display = 'block';
    fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => showData(data))
}
const loadAfrica = () => {
    container.innerHTML = '';
    load.style.display = 'block';
    fetch('https://restcountries.com/v3.1/region/africa')
        .then(res => res.json())
        .then(data => showData(data))
}
const loadEurope = () => {
    container.innerHTML = '';
    load.style.display = 'block';
    fetch('https://restcountries.com/v3.1/region/europe')
        .then(res => res.json())
        .then(data => showData(data))
}
const loadAmericas = () => {
    container.innerHTML = '';
    load.style.display = 'block';
    fetch('https://restcountries.com/v3.1/region/ame')
        .then(res => res.json())
        .then(data => showData(data))
}
const loadOceania = () => {
    container.innerHTML = '';
    load.style.display = 'block';
    fetch('https://restcountries.com/v3.1/region/oceania')
        .then(res => res.json())
        .then(data => showData(data))
}

const showData = (data) => {
    // sorting the countries alphabetically
    data.sort((a, b) => {
        let fa = a.name.common.toLowerCase(),
            fb = b.name.common.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    data.forEach(element => {
        try {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100 shadow-lg">
                <div class="card-body">
                <hr>
                    <h5 class="card-title">
                    <img style="width: 50px" src="${element.flags.svg}" class="card-img-top" alt="">
                    ${element.name.common} (${element.cca3})
                    </h5>
                    <hr>
                    <strong>Official Name:</strong> ${element.name.official} <br>
                    <strong>Capital:</strong> ${element.capital[0]} <br>
                    <strong>Currencies:</strong> ${element.currencies[Object.keys(element.currencies)[0]].name}  <br>
                    <strong>Currencies Symbol:</strong> ${element.currencies[Object.keys(element.currencies)[0]].symbol} <br>
                    
                    <strong>Language:</strong> ${element.languages[Object.keys(element.languages)[0]]} <br>
                    <strong>Population:</strong> ${element.population} <br>
                    <strong>Region:</strong> ${element.region} <br>
                    <strong>Region:</strong> ${element.subregion}  <br>
                    <strong>TimeZone:</strong> ${element.timezones[0]}
                </div>
                <div class="card-footer text-center">
                    <small class="text-muted"><a href="${element.maps.googleMaps}">
                    <button class="btn btn-primary">Google Map</button>
                    </a> </small>
                </div>
            </div>
            `;
            container.appendChild(div);
            load.style.display = 'none';
        }
        catch (error) {
            console.log(error);
        }
    });
}