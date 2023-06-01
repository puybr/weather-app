const key = process.env.AUTH_TOKEN
const city = 'london'

const fetchData = () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + city)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const locationName = response.location.name;
        const currentCondition = response.current.condition.text;
        const conditionIcon = response.current.condition.icon;
        const temp_c = response.current.temp_c;
        const temp_f = response.current.temp_f;
        console.log(response)
        renderData(locationName, currentCondition, conditionIcon, temp_c, temp_f)
    })
    .catch(function(err) {
        console.log('Error');
    });

}

fetchData();

const renderData = (locationName, currentCondition, conditionIcon, temp_c, temp_f) => {
    const innerwrapper = `
                        <div="wrapper">
                        <div class="innerwrapper">
                            <h3>${locationName}</h3>
                            <h4><img src="https:${conditionIcon}" alt="icon">${currentCondition}</h4>
    
                        </div>
                        <div><h1>${temp_c}°C</h1></div>
                        <div><h1>${temp_f}°F</h1></div>
                        </div>
                        `;
    const body = document.querySelector('body')
    const content = document.createElement('div');
    content.classList.add('wrapper');
    body.appendChild(content);
    content.innerHTML = innerwrapper;
                        

}

