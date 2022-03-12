async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=36fcf8edf6f399b6bc3d3f3e452f4a10`,
      { mode: "cors" }
    );
    const data = await response.json();
    displayWeather(data.name, data.main.temp);
  } catch (error) {
    alert("Please enter a valid location");
  }
}

locationSubmit.addEventListener("click", e => {
  getWeather(Userlocation.value);
  form.reset();
});

form.addEventListener("submit", e => {
  e.preventDefault();
});

function displayWeather(location, temp) {
  while (display.lastElementChild) {
    display.removeChild(display.lastElementChild);
  }

  let currentLocation = document.createElement("h1");
  currentLocation.append(location);

  let weather = document.createElement("h2");
  weather.append(temp + "° C");

  document.getElementById("display").append(currentLocation, weather);
}
