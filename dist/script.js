const searchButton = document.getElementById('searchButton')
const searchBox = document.getElementById('searchBox')
const recipeContainer = document.getElementById('recipeContainer')
const addRecipes = document.getElementById('add recipe')

//function to get recipes from user 
let recipeObject ={};
let userRecipes  = [];
let choice = 'y';
addRecipes.addEventListener('click',function(e){
    e.preventDefault();
    functionaddRecipes()})

function functionaddRecipes(){
while(choice == 'y' || choice == 'Y'){
let recipetitle; 
let recipeDescription;
// imgAdress = prompt('enter img address');
recipetitle = prompt('enter recipe name')
recipeDescription = prompt('enter recipe description')
recipeObject = {
    // image: imgAdress,
    title: recipetitle,
    recipe: recipeDescription
}
userRecipes.push(recipeObject);
// console.log(userRecipes)
 choice = prompt("press 'y' or 'Y' if you wanna add more? ")
}
}

// function to display user entered recipes

function updateRecipeContainer(){
    // localStorage.getItem(userRecipes)
for (const recipe of userRecipes) {
    const div = document.createElement('div');
    div.classList.add('text-white', 'flex-col' ,'bg-black', 'mt-4', 'rounded-md', 'p-2','text-white','items-ceter','justify-center', 'sm-h-screen', 'w-50', 'h-50','mr-2');

    const img = document.createElement('img');
    img.src = "https://images.pexels.com/photos/327136/pexels-photo-327136.jpeg?auto=compress&cs=tinysrgb&w=600";
    img.alt = `"${recipe.title}"`; 
    div.appendChild(img);

    const heading = document.createElement('h3');
    heading.innerText = `${recipe.title} recipe`;
    console.log(heading);
    div.appendChild(heading);

    const recipeViewButton = document.createElement('button');
    recipeViewButton.innerText = 'View Recipe';
    // recipeViewButton.classList.add('flex', 'items-center', 'justify-center', 'bg-orange-300')
    div.appendChild(recipeViewButton);
    recipeViewButton.addEventListener('click', ()=>{
        console.log('clicked');
        const div = document.createElement('div')
        div.classList.add('fixed', 'hidden', 'top-0', 'left-0', 'right-0', 'bottom-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50')
        const p = document.createElement('p')
        p.innerText = recipe.recipe
        div.appendChild(p)
        const close = document.createElement('button')
        close.innerText = 'close'
        div.appendChild(close)
        console.log(div);
        document.body.appendChild(div)
    })
    recipeContainer.appendChild(div);
  }
}
// console.log(recipeContainer);
//function to get search value from user
let recipeCreated = false;
let searchValue
searchButton.addEventListener('click',function(e){
    e.preventDefault();
    searchValue = searchBox.value;
    // console.log(searchValue);
    
    // localStorage.setItem(serachValue)
    // console.log(serachValue);
if(recipeCreated==false){
    {
        recipeCreated = true;
        recipes();
    }  
}
// console.log(recipeCreated);
})

//+++++++++++++++++++++ hard coded recipes +++++++++++++++++++++++++++

let recipes = function(){
    const mainText = document.getElementById('mainText')
    mainText.innerHTML = null

    //recipe1

    if(searchValue.trim() == 'tea'){
    const div = document.createElement('div');
    div.classList.add('text-white', 'flex-col' ,'bg-black', 'mt-4', 'rounded-md', 'p-2','text-white', 'items-ceter','justify-center', 'sm-h-screen', 'w-50', 'h-50','mr-2');
    const img = document.createElement('img');
    img.src = "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600";
    img.alt= "masala chai";
    div.appendChild(img);
    const heading = document.createElement('h3');
    heading.innerText="kehwa Recipe";
    div.appendChild(heading);
    const recipeViewButton = document.createElement('button');
    recipeViewButton.innerText = 'view recipe';
    recipeViewButton.classList.add=('bg-pink-600','ml-4');
    div.appendChild(recipeViewButton);
    recipeContainer.appendChild(div);

    //recipe2

    const div1 = document.createElement('div')
    div1.classList.add('text-white', 'flex-col' ,'bg-black', 'mt-4', 'rounded-md', 'p-2','text-white','items-ceter','justify-center', 'sm-h-screen', 'w-50', 'h-50','mr-2')
    const img1 = document.createElement('img')
    img1.src = "https://media.istockphoto.com/id/1480359250/photo/warm-dirty-chai-latte.jpg?s=612x612&w=0&k=20&c=flDB9EoyX8NS0_FEw-1oRPQTwGXx_TXrPsDWcF8KMcQ="
    img1.alt= "masala chai"
    div1.appendChild(img1)
    const heading1 = document.createElement('h3')
    heading1.innerText="Masala Chai Recipe"
    div1.appendChild(heading1);
    const recipeViewButton1 = document.createElement('button')
    recipeViewButton1.innerText = 'view recipe'
    recipeViewButton1.classList.add=('bg-pink-600')
    div1.appendChild(recipeViewButton1);
    recipeContainer.appendChild(div1)

    //recipe 3

    const div2 = document.createElement('div')
    div2.classList.add('text-white', 'flex-col' ,'bg-black', 'mt-4', 'rounded-md', 'p-2','text-white', 'items-ceter','justify-center', 'sm-h-screen', 'w-50', 'h-50','mr-2')
    const img2 = document.createElement('img')
    img2.src = "istockphoto-598139490-612x612.jpg"
    img2.alt= "masala chai"
    div2.appendChild(img2)
    const heading2 = document.createElement('h3')
    heading2.innerText="indian tea Recipe"
    div2.appendChild(heading2);
    const recipeViewButton2 = document.createElement('button')
    recipeViewButton2.classList.add=('bg-pink-600')
    recipeViewButton2.innerText = 'view recipe'
    div2.appendChild(recipeViewButton2);
    recipeContainer.appendChild(div2)
    ///function calling
    updateRecipeContainer()
}
}