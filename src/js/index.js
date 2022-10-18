
const apikey = "a7949690a75224daeb991ae38d1aac10"
const search = document.querySelector(".input-search")
const buttonSearch = document.querySelector(".button-search")
const buttonsCity = document.querySelectorAll(".buttons-city")

const icons = {
    "clear sky": "bi bi-brightness-high",
    "overcast clouds": "bi bi-cloud",
    "scattered clouds": "bi bi-clouds",
    "light rain": "bi bi-cloud-drizzle",
    "few clouds": "bi bi-cloud",
    "broken clouds": "bi bi-cloud-fill",
    "moderate rain": "bi bi-cloud-rain",
    "light intensity shower rain": "bi bi-cloud-lightning-rain",
    "light intensity drizzle": "bi bi-cloud-drizzle",
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

    
    h1.innerHTML = `${Math.round(vTemp)}°`
    mainInfo.appendChild(h1)        
    icon.setAttribute("class", icons[vSwitch])
    mainInfo.appendChild(icon)
    description.innerHTML = vdescription
    main.appendChild(description)
    humidity.innerHTML = `${vhumidty}%`
    speed.innerHTML = `${vspeed}km/h`
    console.log(icon)
    
}


console.log(getInfo("Joinville"))

//scattered clouds