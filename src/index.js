"use strict";

const Particles = require("particlesjs");
const key = process.env.AUTH_TOKEN;
let city = 'london';

const particles = () => {
    Particles.init({
      selector: '.background',
      color: '#8f8f8f'
    });
  };

const search = () => {
    const input = document.getElementById('input');
    const submit = document.getElementById('submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value) {
            city = input.value.toLowerCase();
            document.querySelectorAll('.wrapper').forEach((w) => {
            w.remove();
            fetchData();
            });           
        };
    });
};

const time = (is_day) => {
    if (is_day == 1) {
        document.body.style.backgroundColor = "darkblue";
    } else document.body.style.backgroundColor = "#111";
};

const fetchData = () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + city)
    .then(function(response) {
        if (response.status === 400) {
            window.location.reload();
        };
        return response.json();
    })
    .then(function(response) {
        let locationName = response.location.name;
        let currentCondition = response.current.condition.text;
        let conditionIcon = response.current.condition.icon;
        let temp_c = response.current.temp_c;
        let temp_f = response.current.temp_f;
        let region = response.location.region;
        let is_day = response.current.is_day;
        let localtime = response.location.localtime;
        console.log(response);
        time(is_day);
        particles();
        renderData(locationName, currentCondition, conditionIcon, temp_c, temp_f, region, localtime);
        search();
    })
    .catch(function(err) {
        console.log(err);
    });
};

const renderData = (locationName, currentCondition, conditionIcon, temp_c, temp_f, region, localtime) => {
    let innerwrapper = `
                        <div class="container-fluid">
                           <div class="row">
                           <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                           <h1>${locationName}</h1>
                           <p>${region}</p>
                           <div class="input-group">
                           <input  id="input" type="search" class="form-control rounded" placeholder="Search for a city ..." aria-label="Search" aria-describedby="search-addon" />
                            <button id="submit" type="button" class="btn btn-outline-primary">Submit</button>
                            </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h4><img src="https:${conditionIcon}" alt="icon">${currentCondition}</h4>
                            <h3>${localtime}</h3>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h1>${temp_c}°C</h1>
                            <hr>
                            <h1>${temp_f}°F</h1>
                            </div>
                           </div>
                         </div>                   
                         `;
    const body = document.querySelector('body')
    const content = document.createElement('div');
    content.classList.add('wrapper');
    body.appendChild(content);
    content.innerHTML = innerwrapper;
};

fetchData();
