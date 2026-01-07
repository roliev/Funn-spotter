const countryButton = document.querySelector(".active-country");
const screenCountries = document.getElementById("screen-countries");
const screenCities = document.getElementById("screen-cities");

countryButton.addEventListener("click", () => {
  screenCountries.classList.remove("active");
  screenCities.classList.add("active");
});

document.querySelectorAll(".city").forEach(city => {
  city.addEventListener("click", () => {
    alert(`Bestemming gekozen: ${city.innerText}`);
    // volgende stap: categorie selectie
  });
});
