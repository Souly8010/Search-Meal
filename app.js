async function searchMeals(){
    const plat = document.getElementById("input").value;
    const listPlat = document.getElementById("mealList");
    listPlat.innerHTML = '';

    try {
        const resultApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${plat}`);
        const data = await resultApi.json();

        if(data.meals){
            data.meals.forEach(meal => {
                const mealDiv = document.createElement("div");
                mealDiv.classList.add('meal-item');

                const mealImg = document.createElement("img");
                mealImg.src = meal.strMealThumb ? meal.strMealThumb : 'default-image.jpg';  // Utilisez une image par défaut si aucune n'est disponible

                const mealInfo = document.createElement("div");
                mealInfo.innerHTML = `<h2>${meal.strMeal}</h2><p>${meal.strInstructions}</p>`;

                mealDiv.appendChild(mealImg);
                mealDiv.appendChild(mealInfo);

                listPlat.appendChild(mealDiv);
            });
        } else {
            listPlat.innerHTML = '<p>Pas de plats trouvés.</p>';
        }
    } catch (error){
        console.log('Erreur: ', error);
        listPlat.innerHTML = '<p>Une erreur est survenue</p>';
    }
}

document.getElementById("input").addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        searchMeals();
    }
});
