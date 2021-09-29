var mykey = My_KEY;
var timeDisplayEl = document.querySelector("#time-display");
var cardTitle = document.querySelector(".card-title");
var cityname = document.querySelector("#cityname");
var humidity = document.querySelector("#humidity");
var temperature = document.querySelector("#temp");
var UVindex = document.querySelector("#UV");
var windspeed = document.querySelector("#windspeed");
var Icon = document.querySelector("#Icon");
var button = document.querySelector("#generateweather");
var Day1Temp = document.querySelector("#Day1Temp");
var Day1Windspeed = document.querySelector("#Day1Windspeed");
var Day1Humidity = document.querySelector("#Day1Humidity");
var Day1UV = document.querySelector("#Day1UV");
var Day1Icon = document.querySelector("#Day1Icon");
var Day2Temp = document.querySelector("#Day2Temp");
var Day2Windspeed = document.querySelector("#Day2Windspeed");
var Day2Humidity = document.querySelector("#Day2Humidity");
var Day2UV = document.querySelector("#Day2UV");
var Day2Icon = document.querySelector("#Day2Icon");
var Day3Temp = document.querySelector("#Day3Temp");
var Day3Windspeed = document.querySelector("#Day3Windspeed");
var Day3Humidity = document.querySelector("#Day3Humidity");
var Day3UV = document.querySelector("#Day3UV");
var Day3Icon = document.querySelector("#Day3Icon");
var Day4Temp = document.querySelector("#Day4Temp");
var Day4Windspeed = document.querySelector("#Day4Windspeed");
var Day4Humidity = document.querySelector("#Day4Humidity");
var Day4UV = document.querySelector("#Day4UV");
var Day4Icon = document.querySelector("#Day4Icon");
var Day5Temp = document.querySelector("#Day5Temp");
var Day5Windspeed = document.querySelector("#Day5Windspeed");
var Day5Humidity = document.querySelector("#Day5Humidity");
var Day5UV = document.querySelector("#Day5UV");
var Day5Icon = document.querySelector("#Day5Icon");
var Buttonlist= document.querySelector("#ButtonList");
var Currenttime = document.querySelector("#Currenttime");
var SearchHistory = JSON.parse(localStorage.getItem("SearchHistory"))|| [];
// var SearchHistory = []

function init() {
  RenderSearchHistory() 
}

async function getWeatherData() {
  var cityforecast = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityname.value +
      "&appid=" +
      mykey +
      ""
  ).then((response) => response.json());
  console.log(cityforecast);
  var oneCall = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${cityforecast.coord.lat}&lon=${cityforecast.coord.lon}&appid=${mykey}&units=metric`
  ).then((response) => response.json());
  console.log(oneCall);
  if (oneCall.current.weather[0].main === "Rain") {
    var img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Icon.appendChild(img);
  }
  else if (oneCall.current.weather[0].main === "Thunderstorm") {
    var img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Icon.appendChild(img);
  }
  else if (oneCall.current.weather[0].main === "Drizzle") {
    var img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Icon.appendChild(img);
  }
  else if (oneCall.current.weather[0].main === "Snow") {
    var img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Icon.appendChild(img);
  }
  else if (oneCall.current.weather[0].main === "Clouds") {
    var img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Icon.appendChild(img);
    console.log(Icon)
  }
  else if (oneCall.current.weather[0].main === "Clear") {
    var img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Icon.appendChild(img);
  }
  temperature.textContent = "Current Temp: " + oneCall.current.temp + " C";
  windspeed.textContent = "Wind Speed: " + cityforecast.wind.speed;
  UVindex.textContent = "UV Index: " + oneCall.current.uvi;
  humidity.textContent = "Humidity: " + oneCall.current.humidity;
  if (oneCall.daily[1].weather[0].main === "Rain") {
    var img1 = document.createElement("img");
    img1.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day1Icon.appendChild(img1);
  }
  else if (oneCall.daily[1].weather[0].main === "Thunderstorm") {
    var img1 = document.createElement("img");
    img1.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day1Icon.appendChild(img1);
  }
  else if (oneCall.daily[1].weather[0].main === "Drizzle") {
    var img1 = document.createElement("img");
    img1.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day1Icon.appendChild(img1);
  }
  else if (oneCall.daily[1].weather[0].main === "Snow") {
    var img1 = document.createElement("img");
    img1.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day1Icon.appendChild(img1);
  }
  else if (oneCall.current.weather[0].main === "Clouds") {
    var img1 = document.createElement("img");
    img1.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day1Icon.appendChild(img1);
    console.log(Day1Icon)
  }
  else if (oneCall.daily[1].weather[0].main === "Clear") {
    var img1 = document.createElement("img");
    img1.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day1Icon.appendChild(img1);
  }
  console.log(oneCall.daily[1].weather[0].main);
  Day1Temp.textContent = "Forecast Temp: " + oneCall.daily[1].temp.day;
  Day1Humidity.textContent = "Humidity: " + oneCall.daily[1].humidity;
  Day1UV.textContent = "UV Index: " + oneCall.daily[1].uvi;
  Day1Windspeed.textContent = "Wind Speed: " + oneCall.daily[1].wind_speed;
  if (oneCall.daily[2].weather[0].main === "Rain") {
    var img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day2Icon.appendChild(img2);
  }
  else if (oneCall.daily[2].weather[0].main === "Thunderstorm") {
    var img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day2Icon.appendChild(img2);
  }
  else if (oneCall.current.weather[0].main === "Clouds") {
    var img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day2Icon.appendChild(img2);
  }
  else if (oneCall.daily[2].weather[0].main === "Drizzle") {
    var img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day2Icon.appendChild(img2);
  }
  else if (oneCall.daily[2].weather[0].main === "Snow") {
    var img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day2Icon.appendChild(img2);
  }
  else if (oneCall.daily[2].weather[0].main === "Clear") {
    var img2 = document.createElement("img");
    img2.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day2Icon.appendChild(img2);
  }
  Day2Temp.textContent = "Forecast Temp: " + oneCall.daily[2].temp.day;
  Day2Humidity.textContent = "Humidity: " + oneCall.daily[2].humidity;
  Day2UV.textContent = "UV Index: " + oneCall.daily[2].uvi;
  Day2Windspeed.textContent = "Wind Speed: " + oneCall.daily[2].wind_speed;
  if (oneCall.daily[3].weather[0].main === "Rain") {
    var img3 = document.createElement("img");
    img3.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day3Icon.appendChild(img3);
  }
  else if (oneCall.current.weather[0].main === "Clouds") {
    var img3 = document.createElement("img");
    img3.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day3Icon.appendChild(img3);
  }
  else if (oneCall.daily[3].weather[0].main === "Thunderstorm") {
    var img3 = document.createElement("img");
    img3.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day3Icon.appendChild(img3);
  }
  else if (oneCall.daily[3].weather[0].main === "Drizzle") {
    var img3 = document.createElement("img");
    img3.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day3Icon.appendChild(img3);
  }
  else if (oneCall.daily[3].weather[0].main === "Snow") {
    var img3 = document.createElement("img");
    img3.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day3Icon.appendChild(img3);
  }
  else if (oneCall.daily[3].weather[0].main === "Clear") {
    var img3 = document.createElement("img");
    img3.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day3Icon.appendChild(img3);
  }
  Day3Temp.textContent = "Forecast Temp: " + oneCall.daily[3].temp.day;
  Day3Humidity.textContent = "Humidity: " + oneCall.daily[3].humidity;
  Day3UV.textContent = "UV Index: " + oneCall.daily[3].uvi;
  Day3Windspeed.textContent = "Wind Speed: " + oneCall.daily[3].wind_speed;
  if (oneCall.daily[4].weather[0].main === "Rain") {
    var img4 = document.createElement("img");
    img4.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day4Icon.appendChild(img4);
  }
  else if (oneCall.daily[4].weather[0].main === "Thunderstorm") {
    var img4 = document.createElement("img");
    img4.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day4Icon.appendChild(img4);
  }
  else if (oneCall.current.weather[0].main === "Clouds") {
    var img4 = document.createElement("img");
    img4.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day4Icon.appendChild(img4);
  }
  else if (oneCall.daily[4].weather[0].main === "Drizzle") {
    var img4 = document.createElement("img");
    img4.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day4Icon.appendChild(img4);
  }
  else if (oneCall.daily[4].weather[0].main === "Snow") {
    var img4 = document.createElement("img");
    img4.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day4Icon.appendChild(img4);
  }
  else if (oneCall.daily[4].weather[0].main === "Clear") {
    var img4 = document.createElement("img");
    img4.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day4Icon.appendChild(img4);
  }
  Day4Temp.textContent = "Forecast Temp: " + oneCall.daily[4].temp.day;
  Day4Humidity.textContent = "Humidity: " + oneCall.daily[4].humidity;
  Day4UV.textContent = "UV Index: " + oneCall.daily[4].uvi;
  Day4Windspeed.textContent = "Wind Speed: " + oneCall.daily[4].wind_speed;
  if (oneCall.daily[5].weather[0].main === "Rain") {
    var img5 = document.createElement("img");
    img5.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day5Icon.appendChild(img5);
  }
  else if (oneCall.current.weather[0].main === "Clouds") {
    var img5 = document.createElement("img");
    img5.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day5Icon.appendChild(img5);
  }
  else if (oneCall.daily[5].weather[0].main === "Thunderstorm") {
    var img5 = document.createElement("img");
    img5.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day5Icon.appendChild(img5);
  }
  else if (oneCall.daily[5].weather[0].main === "Drizzle") {
    var img5 = document.createElement("img");
    img5.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day5Icon.appendChild(img5);
  }
  else if (oneCall.daily[5].weather[0].main === "Snow") {
    var img5 = document.createElement("img");
    img5.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day5Icon.appendChild(img5);
  }
  else if (oneCall.daily[5].weather[0].main === "Clear") {
    var img5 = document.createElement("img");
    img5.src = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png";
    Day5Icon.appendChild(img5);
  }
  Day5Temp.textContent = "Forecast Temp: " + oneCall.daily[5].temp.day;
  Day5Humidity.textContent = "Humidity: " + oneCall.daily[5].humidity;
  Day5UV.textContent = "UV Index: " + oneCall.daily[5].uvi;
  Day5Windspeed.textContent = "Wind Speed: " + oneCall.daily[5].wind_speed;
    var rightNow = moment().format("MMM DD, YYYY");
    cardTitle.textContent = cityforecast.name + " " + rightNow;
    console.log(cityname.value);
  }


cityname.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {

    getWeatherData();
    RenderSearchHistory();
  }
});
button.addEventListener("click", function () {
  SearchHistory.push(cityname.value)
  var Searchstring = JSON.stringify(SearchHistory);
  localStorage.setItem("SearchHistory", Searchstring);
  getWeatherData();
  RenderSearchHistory();

});

function RenderSearchHistory() {

//iterate through the search history

for (i=0; i < SearchHistory.length; i++) {
var PreviousSearchTerm = SearchHistory[i];
var Button = document.createElement("button");
Button.textContent = PreviousSearchTerm;

Button.setAttribute("id", "Button" + i);
}
Buttonlist.appendChild(Button)
console.log(Button);

//Use JQuery to create button element with the search term
//Bind event listener to new button element so that when clicked it should call the API with the cityname
//append button element into the search history div

// }

}
init()
//iterate through the search history
//render button for each city name
//place button into the search history div
//everytime a button is pressed it should call the API function with that cityname
//change the data attribute to the cityname

// var PreviousCity = localStorage.getItem("generateweather")
// var search1 = document.querySelector("#Search1")
// search1.text(PreviousCity)
// console.log(PreviousCity)



//add moment to current card and five day forecast

//localstorage for search terms
//make previous searches clickable
//fix up CSS


//adding moment to the card title with Sydney element
//adding an extra day for each date below
//avoiding the duplication of images
//fixing up localstorage buttons

//set css to hide and then display when searched