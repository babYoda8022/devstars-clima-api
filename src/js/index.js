
const apikey = "a7949690a75224daeb991ae38d1aac10"

const search = document.querySelector(".input-search")

const buttonSearch = document.querySelector(".button-search")

const icons = {
    "sun" : "bx bx-sun",
    "cloud" : "bx bx-cloud", 
    "cloudLightRain" : "bx bx-cloud-light-rain",
    "cloudRain" : "bx bx-cloud-rain",
    "cloudLightnig" : "bx bx-cloud-lightning"
}


buttonSearch.addEventListener("click", ()=>{
    let requestCity = getByCity(search.value)
    
    creatInfo(requestCity["weather"][0]["description"], 
                requestCity["main"]["temp"],
                requestCity["weather"][0]["description"])
})

function getByCity(city){
    
    const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    let request = new XMLHttpRequest()
    request.open("GET", urlCity, false)
    request.send()
    return JSON.parse(request.responseText)
}

function creatInfo(vSwitch, vTemp, vdescription){

    let main = document.querySelectorAll(".main")[0]
    let mainInfo = document.querySelector(".main-info")
    let h1 = document.querySelector("#temp")
    let description = document.querySelector("#description")
    let icon = document.querySelector("#main-icon")
    
    switch(vSwitch){
        case "overcast clouds":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["cloud"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            break
        
        case "light rain":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["cloudLightRain"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            break
        
        case "few clouds":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["cloud"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            break
        
        case "clear sky":
            h1.innerHTML = `${Math.round(vTemp)}°`
            mainInfo.appendChild(h1)        
            icon.setAttribute("class", icons["sun"])
            mainInfo.appendChild(icon)
            description.innerHTML = vdescription
            main.appendChild(description)
            break
    }
}