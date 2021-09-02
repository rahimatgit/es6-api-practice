
// search field
function searchFood() {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.meals));
}

// showing search result
const searchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100" onclick="loadMealDetail(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });
}

// showing detail result
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    const displayResult = document.getElementById('detail-result');
    displayResult.innerHTML = '';
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="card w-25 mx-auto">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">${'watch the recipie'}</a>
            </div>
        </div>
    `
    displayResult.appendChild(div);
}