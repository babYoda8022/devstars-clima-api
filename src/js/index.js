
const apikey = "a7949690a75224daeb991ae38d1aac10"
const search = document.querySelector(".input-search")
const buttonSearch = document.querySelector(".button-search")
const buttonsCity = document.querySelectorAll(".buttons-city")

const icons = {
    "sun" : "bi bi-brightness-high",
    "scateringClouds": "bi bi-clouds",
    "cloud" : "bi bi-cloud", 
    "lightRain" : "bi bi-cloud-drizzle",
    "rain" : "bi bi-cloud-rain",
    "lightnig" : "bi bi-cloud-lightning-rain",
    "cloudBroken": "bi bi-cloud-fill",
    "mist": "bi bi-cloud-haze"
}


buttonSearch.addEventListener("click", ()=>{
    let requestCity = getInfo(search.value)
    
    creatInfo(requestCity["weather"][0]["description"], 
                requestCity["main"]["temp"],
                requestCity["weather"][0]["description"],
                requestCity["main"]["humidity"],
                requestCity["wind"]["speed"] )
    search.value = ""
})

buttonsCity.forEach((value, index)=>{
    
    buttonsCity[index].addEventListener("click", ()=>{
        let requestCity = getInfo(value.innerHTML)
        creatInfo(requestCity["weather"][0]["description"], 
        requestCity["main"]["temp"],
        requestCity["weather"][0]["description"],
        requestCity["main"]["humidity"],
        requestCity["wind"]["speed"] )

    })

});

function getInfo(city){
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return JSON.parse(request.responseText)
}

function creatInfo(vSwitch, vTemp, vdescription, vhumidty, vspeed){

    //Left Infos
    let main = document.querySelectorAll(".main")[0]
    let mainInfo = document.querySelector(".main-info")
    let h1 = document.querySelector("#temp")
    let description = document.querySelector("#description")
    let icon = document.querySelector("#main-icon")
    let humidity = document.querySelector("#humidity-value")
    let speed = document.querySelector("#speed-value")

    //Create Infos
    switch(vSwitch){
        
        case "overcast clouds":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["cloud"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            console.log(icon)
            break
        
        case "scattered clouds":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["scateringClouds"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break

        case "light rain":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["lightRain"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break
        
        case "few clouds":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["cloud"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break
        
        case "clear sky":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["sun"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break

        case "broken clouds":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["cloudBroken"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break

        case "light intensity shower rain":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["lightnig"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break

        case "light intensity drizzle":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["lightRain"])
            mainInfo.appendChild(icon)
            description.innerHTML = "drizzle"
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break
        
        case "moderate rain":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["rain"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break

        case "mist":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["mist"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break
    }
}


console.log(getInfo("Joinville"))

//scattered clouds