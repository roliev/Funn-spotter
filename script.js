const screenCountries = document.getElementById("screen-countries");
const screenCities = document.getElementById("screen-cities");
const screenCategories = document.getElementById("screen-categories");

// Spanje → steden
document.querySelector(".active-country").addEventListener("click", () => {
  screenCountries.classList.remove("active");
  screenCities.classList.add("active");
});

// Stad → categorieën
document.querySelectorAll(".city").forEach(city => {
  city.addEventListener("click", () => {
    screenCities.classList.remove("active");
    screenCategories.classList.add("active");
  });
});

// Categorie klik
document.querySelectorAll(".category").forEach(category => {
  category.addEventListener("click", () => {
    alert(`Categorie gekozen: ${category.innerText}`);
    // volgende stap: resultaten / video feed
  });
});
