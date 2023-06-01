const key = process.env.AUTH_TOKEN
const city = 'london'

window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#8f8f8f'
    });
  };



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
                        <div class="container-fluid">
                           <div class="row">
                           <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                           <h1>${locationName}</h1>
                           <div class="input-group">
                           <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary">Submit</button>
                            </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h4><img src="https:${conditionIcon}" alt="icon">${currentCondition}</h4>
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
                        

}

