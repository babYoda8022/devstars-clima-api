
const apikey = "a7949690a75224daeb991ae38d1aac10"
const search = document.querySelector(".input-search")
const buttonSearch = document.querySelector(".button-search")
const buttonsCity = document.querySelectorAll(".buttons-city")

const fundo = document.querySelector(".fundo")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector("#modal-close")

const pDate = document.querySelector("#date")
let date = String(new Date()).split(" ")
console.log(date)

const card = document.querySelectorAll(".card")

pDate.innerHTML = `${date[0]}, ${date[1]}, ${date[2]}/${date[3]}` 

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

modalClose.addEventListener("click", ()=>{
    fundo.setAttribute("id", "close")
    modal.setAttribute("id", "close")
})

buttonSearch.addEventListener("click", async ()=>{
    let requestCity = await getInfo(search.value)
    let requestCards = await getDays(search.value)["list"]

    console.log(requestCards)

    if(requestCity["cod"] == "404"){
        fundo.removeAttribute("id")
        modal.removeAttribute("id")
    }else{
        creatInfo(requestCity["weather"][0]["description"], 
                    requestCity["main"]["temp"],
                    requestCity["weather"][0]["description"],
                    requestCity["main"]["humidity"],
                    requestCity["wind"]["speed"] )

        creatInfoCards(requestCards)
        
    }
                
    search.value = ""
})

buttonsCity.forEach((value, index)=>{
    
    buttonsCity[index].addEventListener("click", async ()=>{
        let requestCity = await getInfo(value.innerHTML)
        let requestCards = await getDays(value.innerHTML)["list"]
        console.log(requestCards)

        creatInfo(requestCity["weather"][0]["description"], 
        requestCity["main"]["temp"],
        requestCity["weather"][0]["description"],
        requestCity["main"]["humidity"],
        requestCity["wind"]["speed"] )

        creatInfoCards(requestCards)
    })

});

//Left Infos
function getInfo(city){
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return JSON.parse(request.responseText)
}

function creatInfo(vicon, vTemp, vdescription, vhumidty, vspeed){


    let main = document.querySelectorAll(".main")[0]
    let mainInfo = document.querySelector(".main-info")
    let h1 = document.querySelector("#temp")
    let description = document.querySelector("#description")
    let icon = document.querySelector("#main-icon")
    let humidity = document.querySelector("#humidity-value")
    let speed = document.querySelector("#speed-value")

    
    h1.innerHTML = `${Math.round(vTemp)}°`
    mainInfo.appendChild(h1)        
    icon.setAttribute("class", icons[vicon])
    mainInfo.appendChild(icon)
    description.innerHTML = vdescription
    main.appendChild(description)
    humidity.innerHTML = `${vhumidty}%`
    speed.innerHTML = `${vspeed}km/h`

}

//Right Infos

var daysWeek = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]

let week = String(new Date().getDay()).split(" ")[0]

console.log(week)

function getDays(city){
    url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}` 

    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return JSON.parse(request.responseText)
}

function creatInfoCards(request){ 
    var num = 9
    card.forEach((value, index)=>{
        var day = String(request[index+1]["dt_txt"]).split(" ")[0].split("-")[2]
        if(index > 0){
            day = String(request[num]["dt_txt"]).split(" ")[0].split("-")[2]
            num = num + 9
            console.log(num)
        }
        value.innerHTML = `
        <div class="header">
            <p>Day ${day}</p>
        </div>
        <div class="main">
            <i class="${icons[request[index+1]["weather"][0]["description"]]}"></i>
        </div>
        <div class="footer">
            <p class="title">Humidity</p>
            <p>${request[index+1]["main"]["humidity"]}%</p>
            <p class="title">Wing speed</p>
            <p>${request[index+1]["wind"]["speed"]}km/h</p>
        </div>
`
    })
}

