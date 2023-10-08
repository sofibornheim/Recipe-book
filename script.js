
// Objects
const RECIPE = [
{
    nameOfRecipe: 'Baked chicken',
    image: 'recipe-images/baked-chicken.jpg',
    type: 'Chicken',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
    rating: 3,
},
{
    nameOfRecipe: 'Chet´s Cheesy Focaccia',
    image: 'recipe-images/cheat’s-cheesy-focaccia.jpg',
    type: 'Vegetarian',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
    rating: 2,
},
{
    nameOfRecipe: 'Chicken Paprikash',
    image: 'recipe-images/chicken-paprikash.jpg',
    type: 'Chicken',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
    rating: 3,
},
{
    nameOfRecipe: 'Deep Fried Fish bones',
    image: 'recipe-images/deep-fried-fish-bones.jpg',
    type: 'Fish',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
    rating: 2,
},
{
    nameOfRecipe: 'Fish Dish',
    image: 'recipe-images/fish-dish.jpg',
    type: 'Fish',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i>',
    rating: 1,
},
{
    nameOfRecipe: 'Grilled Something',
    image: 'recipe-images/grilled.jpg',
    type: 'Pig',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
    rating: 3,

},
{
    nameOfRecipe: 'Just meat',
    image: 'recipe-images/meat.jpg',
    type: 'Pig',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
    rating: 2,

},
{
    nameOfRecipe: 'Vegetarian Shepherd´s Pie',
    image: "recipe-images/vegetarian-shepherd's-pie.jpg",
    type: 'Vegetarian',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i>',
    rating: 1,

},
{
    nameOfRecipe: 'Vegetarian Stir Fried Garlic',
    image: "recipe-images/vegetarian-stir-fried-garlic-s.jpg",
    type: 'Vegetarian',
    degreeOfDifficulty: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>',
    rating: 3

}
];

// Get the ID:s
const container = document.getElementById("container");
const filterDropdown = document.getElementById("filterDropdown");
const sortingDropdown = document.getElementById("sortingDropdown");

// The recipe-boxes
const loadRecipe = (recipeArray) => {
    container.innerHTML = "";

    recipeArray.forEach((recipe) => {
        container.innerHTML += `
        <div class="filter">
        <img src="${recipe.image}">
         <h3>${recipe.nameOfRecipe}</h3>
         <i>${recipe.type}</i><br>
         Degree of difficulty: ${recipe.degreeOfDifficulty}
    </div>
        `
    });
};
// The filter loading type of recipe
const filterRecipe = () => {
    const value = filterDropdown.value;
    if (value === "All") {
        loadRecipe(RECIPE)
    }
    else {
    const filteredList = RECIPE.filter((recipe)=> recipe.type === value)
    loadRecipe(filteredList);
    }
};

// // The filter sorting 
const sortingRecipe = () => {
const valueSorting = sortingDropdown.value;
// if (valueSorting === "AllRecipes") {
//     loadRecipe(RECIPE)
// }
if (valueSorting === "Easy") {
    const sortedListEasy = 
    RECIPE.sort((a, b) => a.rating - b.rating)
    loadRecipe(sortedListEasy)
}
    else {
    const sortedListHard = 
    RECIPE.sort((a, b) => a.rating - b.rating)
    const reverseList =
    sortedListHard.reverse();
    loadRecipe(sortedListHard)

}
}
// // const sortingRecipe =() => {
// //     const valueSorting = sortingDropdown.value;
// //     if (the value are higher then 2> sort 3 2 1)
//     else { the value are 2< sort 1 2 3 }
// // }


// Displaying the recipe-boxes
filterDropdown.addEventListener("change", filterRecipe);
loadRecipe(RECIPE)
sortingDropdown.addEventListener("change", sortingRecipe);
loadRecipe(RECIPE)


// PROBLEMS AND WONDERINGS
// How can I do to let the sorting works even when you chose vegetarian for example? How can the vegetarian recipes 
// be sorted by its difficulty?
