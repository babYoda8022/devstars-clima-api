
const apikey = "a7949690a75224daeb991ae38d1aac10"

const search = document.querySelector(".input-search")

const buttonSearch = document.querySelector(".button-search")

const icons = {
    "sun" : "bx bx-sun",
    "cloud" : "bx bx-cloud", 
    "cloudLightRain" : "bx bx-cloud-light-rain",
    "cloudRain" : "bx bx-cloud-rain",
    "cloudLightnig" : "bx bx-cloud-lightning",
    "cloudBroken": "bx bxs-cloud"
}


buttonSearch.addEventListener("click", ()=>{
    let requestCity = getByCity(search.value)
    
    creatInfo(requestCity["weather"][0]["description"], 
                requestCity["main"]["temp"],
                requestCity["weather"][0]["description"],
                requestCity["main"]["humidity"],
                requestCity["wind"]["speed"] )
})

function getByCity(city){
    
    const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    let request = new XMLHttpRequest()
    request.open("GET", urlCity, false)
    request.send()
    return JSON.parse(request.responseText)
}

function creatInfo(vSwitch, vTemp, vdescription, vhumidty, vspeed){

    let main = document.querySelectorAll(".main")[0]
    let mainInfo = document.querySelector(".main-info")
    let h1 = document.querySelector("#temp")
    let description = document.querySelector("#description")
    let icon = document.querySelector("#main-icon")
    let humidity = document.querySelector("#humidity-value")
    let speed = document.querySelector("#speed-value")
    
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
            break
        
        case "light rain":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["cloudLightRain"])
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
            icon.setAttribute("class", icons["cloudLightnig"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            humidity.innerHTML = `${vhumidty}%`
            speed.innerHTML = `${vspeed}km/h`
            break
            
    }
}

console.log(getByCity("Japão"))