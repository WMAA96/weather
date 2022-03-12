/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9bWV0cmljJkFQUElEPTM2ZmNmOGVkZjZmMzk5YjZiYzNkM2YzZTQ1MmY0YTEwYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBkaXNwbGF5V2VhdGhlcihkYXRhLm5hbWUsIGRhdGEubWFpbi50ZW1wKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uXCIpO1xuICB9XG59XG5cbmxvY2F0aW9uU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgZ2V0V2VhdGhlcihVc2VybG9jYXRpb24udmFsdWUpO1xuICBmb3JtLnJlc2V0KCk7XG59KTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIobG9jYXRpb24sIHRlbXApIHtcbiAgd2hpbGUgKGRpc3BsYXkubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQoZGlzcGxheS5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGN1cnJlbnRMb2NhdGlvbi5hcHBlbmQobG9jYXRpb24pO1xuXG4gIGxldCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB3ZWF0aGVyLmFwcGVuZCh0ZW1wICsgXCLCsCBDXCIpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKS5hcHBlbmQoY3VycmVudExvY2F0aW9uLCB3ZWF0aGVyKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==