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
        console.log(response.current)
        renderData(locationName, currentCondition, conditionIcon)
    })
    .catch(function(err) {
        console.log('Error');
    });

}

fetchData();

const renderData = (locationName, currentCondition, conditionIcon) => {
    const innerwrapper = `
                        <div class="innerwrapper">
                            <h1>${locationName}</h1>
                            <h3>${currentCondition}</h3>
                            <img src="https:${conditionIcon}" alt="icon">
                        </div>
                        `;
    const body = document.querySelector('body')
    const content = document.createElement('div');
    content.classList.add('wrapper');
    body.appendChild(content);
    content.innerHTML = innerwrapper;
                        

}

