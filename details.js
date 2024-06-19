document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mealId = urlParams.get('id');
  
    if (mealId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((res) => res.json())
        .then((detail) => {
          let meal = detail.meals[0];
          let details = document.getElementById("details");
          details.innerHTML = "";
  
          let detailsDiv = document.createElement("div");
          let detailsInfo = `
            <div class="card" style="width: 19rem;">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
              <div class="card-body">
                <h3 class="card-text">${meal.strMeal}</h3>
                <h6>Ingredientes</h6>
                <ul>
                  <li>${meal.strArea}</li>
                  <li>${meal.strCategory}</li>
                  <li>${meal.strIngredient1}</li>
                  <li>${meal.strIngredient2}</li>
                  <li>${meal.strIngredient3}</li>
                  <li>${meal.strIngredient4}</li>
                  <li>${meal.strIngredient5}</li>
                </ul>
              </div>
            </div>
          `;
          detailsDiv.innerHTML = detailsInfo;
          details.appendChild(detailsDiv);
        });
    } else {
      document.getElementById("details").innerHTML = "<p>ID de la comida no encontrado.</p>";
    }
  });
  