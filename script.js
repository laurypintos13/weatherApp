const show= document.querySelector('.divSearched');
const form = document.querySelector('.getWeather');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
const btnform = document.querySelector('#btnform');
const emptyField = document.getElementById('emptyField');
const bodyBG = document.getElementById('bodyBG');


form.addEventListener('submit', (e)=>{
    e.preventDefault(e)
    if(city.value === '' || country.value === ''){
        showError('Required fields');
        return; //para que salga y no siga ejecutando lo que esta fuera del if
    }   

    callAPI(city.value, country.value)

   
})

function showError (message){
    console.log(message);
    const alertError = document.createElement('p');
    alertError.classList.add('alert-error');
    alertError.innerHTML = message

    form.appendChild(alertError)
    setTimeout(() => {
        alertError.remove()
    }, 3000);
}

function callAPI(city, country){
    const APIkey = '7aaebe6adb275a752400963107a4a5bc'
    const APIurl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`
    
    fetch(APIurl)
        .then(data =>{
            return data.json();
        })
        .then(dataJSON =>{
            if(dataJSON.cod === '404'){
                showError('Please check the fields')
            }else{
                clean()
                showWeather(dataJSON)
                console.log(dataJSON)
                
            }
        })
} 

function showWeather(data){
    const {timezone,name, main:{temp, temp_min, temp_max}, weather:[arr]}= data

    degrees = kelvintoCeltigrade(temp);
    degreesMin = kelvintoCeltigrade(temp_min);
    degreesMax = kelvintoCeltigrade(temp_max);

    show.innerHTML = `
    
    <p class="degree">${degrees}°C</p>     
    <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt"">
    <p class="countrySearched">${name}</p>     
    <p class="maxminDegree">Min: ${degreesMin}°C</p>
    <p class="maxminDegree">Max: ${degreesMax}°C</p>
    <p></p>
    `
    background(arr.icon);
}

function kelvintoCeltigrade(temp){
    return parseInt(temp - 273.15);
}
function clean(){
    show.innerHTML = ``
}

function background(dataicon){
    if (dataicon === "01d"){
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp7399557.jpg')";    
    }else if(dataicon === "01n"){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80')";  
    }else if(dataicon === "02d"){
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?cs=srgb&dl=pexels-skitterphoto-3768.jpg&fm=jpg')";  
    }else if(dataicon === "02n"){
        document.body.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/324/780/HD-wallpaper-moon-peers-through-some-nighttime-clouds-glow-moon-cloud-silver-sky-clouds-night-blue-argent.jpg')";  
    }else if(dataicon === "03d"){
        document.body.style.backgroundImage = "url('https://rare-gallery.com/uploads/posts/535766-air-blue-blue.jpg')";  
    }else if(dataicon === "03n"){
        document.body.style.backgroundImage = "url('https://www.pixel4k.com/wp-content/uploads/2018/10/clouds-sky-night-4k_1540574638.jpg')";  
    }else if(dataicon === "04d"){
        document.body.style.backgroundImage = "url('https://rare-gallery.com/uploads/posts/535766-air-blue-blue.jpg')";  
    }else if(dataicon === "04n"){
        document.body.style.backgroundImage = "url('https://www.pixel4k.com/wp-content/uploads/2018/10/clouds-sky-night-4k_1540574638.jpg')";  
    }else if(dataicon === "09d"){
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp7714748.jpg')";  
    }else if(dataicon === "09n"){
        document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/66/330/336/rain-city-street-waterdrop-wallpaper-preview.jpg')";  
    }else if(dataicon === "10d"){
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp7714748.jpg')";  
    }else if(dataicon === "10n"){
        document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/66/330/336/rain-city-street-waterdrop-wallpaper-preview.jpg')";  
    }else if(dataicon === "11d"){
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp7714748.jpg')";  
    }else if(dataicon === "11n"){
        document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/66/330/336/rain-city-street-waterdrop-wallpaper-preview.jpg')";  
    }else if(dataicon === "13d"){
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/snow-falling-down-forest-trees-mountainsbeautiful-4k-ultra-hd-video-clip-filmed-cold-winter-day-carpathian-mountain-parkfootage-snowy-season-highland-national-park-filmed-4k_571754-1090.jpg?w=2000')";  
    }else if(dataicon === "13n"){
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp8964012.jpg')";  
    }else if(dataicon === "50d"){
        document.body.style.backgroundImage = "url('')";  
    }else if(dataicon === "50n"){
        document.body.style.backgroundImage = "url('')";  
    }
}
