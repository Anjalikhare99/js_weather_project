const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

async function renderWeatherInfo(data) {
    let newpara = document.createElement('p');
        newpara.textContent = `${data?.main?.temp.toFixed(2)}°C`
        document.body.appendChild(newpara);
}

async function fatchWeatherDetails() {
    try {

        let city = "goa";
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data = await response.json()
    
        console.log("weather",data);
    
        renderWeatherInfo(data);
    }
    catch(err) {

    }
}

async function getCustomWeatherDetails() {
    try {
        let latitude = 15.6333;
        let longitude = 18.3333;
    
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    
        const data = await response.json()
    
        console.log(data);
    }
    catch(err) {
        console.log("error",err);

    }

}

async function switchTab(clikedTab) {

    apiErrorContainer.classlist.remove("active");
    
    if(clikedTab!==currentTab)
        currentTab.classlist.remove("current-tab");
        currentTab  = clikedTab;
        currentTab.classlist.add("current-tab");

        if(!searchForm.classlist.contains("active")) {
            userInfoContainer.classlist.remove("active");
            grantAccessContainer.classlist.remove("active");
            searchForm.classlist.add("active");
        }
        else {
            searchForm.classlist.remove("active");
            userInfoContainer.classlist.remove("active");
        }
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}