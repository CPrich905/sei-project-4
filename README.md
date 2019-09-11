# SEI - 41 - FINAL PROJECT
## Brief
Our final project was an opportunity to showcase our abilities so far. We had the option to work in pairs or in groups with a focus on quality code over  quantity.

### Timeframe: 7 Days

## Technical Requirements
* An ERD diagram showing relationships between models and a basic front-end wireframe/plan of how you will consume and display the data was required for sign off.

* The end-state must be a full-stack application making your own backend and your own front-end

* Use a PYTHON FLASK API to serve data from a PostgreSQL database

* Consume API with a separate front-end built with React

* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models

* Be deployed online so it's publicly accessible.

## Deployed Link

This app is deployed on Heroku at: https://cookingwithmum.herokuapp.com/

## Technologies used
* HTML5

* SCSS and Bulma

* JavaScript (ECMAScript6)

* React.js

* GitHub

## Dependencies and Getting Started
* Axios

Installation through CLI:
```<!-- to install JavaScript Packages: -->
$ yarn
<!-- to install Python packages: -->
$ pipenv
<!--Then to seed the database: -->
$ pipenv run python seeds.py
<!-- Run the frontend in your localhost: -->
$ yarn serve:front
<!-- Run the backend in your localhost: -->
$ yarn serve:back
```

## My Approach
For my final project, I decided to create an easy to use recipe sharing platform inspired by the excellent cooks in my family and loosely based on the  [BBC Good Food](https://www.bbcgoodfood.com/)  website.

I began by considering the features I wanted to include:
* An initial database of recipes visible to all users.

* Users to be able to register and create a profile.

* Registered users can

	* CRUD new recipes.

	* Save recipes to their profile

	* Create a shopping list from recipes. Individual ingredients can be added/removed.

	* Profile to include a store cupboard of common ingredients.

* / Search and filter functions for recipes, cuisines and tags - not currently a feature./

This dictated the datatypes I would need to include in my recipe schema and the relationships I would need to build between recipes and users. Using a small set of seeds, I moved on to building my initial user interface with basic styling.

A key feature I wanted to include for my users was the ability to add and remove individual ingredients on the shopping list and store cupboard. This meant adding each ingredient as a string that could then be deleted with a mouse click and I later applied the same process to the instructions making it easier to edit or delete steps when creating a new recipe.

## User Journey
On arrival, the user is greeted by a simple welcome page and three choices: Recipes, Login and Register. All users can see the index of recipes (fig 1) and click through to see instructions and ingredients.
![Alt text](./src/assets/readme/index.jpg?raw=true "Title")
(img: recipes index page)

Once a user has registered, they are taken directly to their profile page and the navigation bar updates to show Recipes, Submit new recipe, Logout and Profile. The recipe index and show pages also updates to allow users to like a recipe, saving it to their personal profile. Saved recipes can then be activated, adding the ingredients to the user's shopping list, removing those ingredients that they already have registered in their store cupboard.
![Alt text](./src/assets/readme/profile.jpg?raw=true "Title")
(img: user profile page showing items saved to shopping list and store cupboard)

## Major hurdles
The biggest issue I encountered in creating the app was formatting recipes to allow easy manipulation of the ingredients list when a shopping list is created. By adding each ingredient and each step individually, each step or ingredient is saved as its own string and can be more easily manipulated from the user's home page. This helped not only with the shopping list but also made it easier for a user to correct any mistakes when submitting a new recipe.

```javascript
<div className="field">
  <label className="title">Ingredients & Instructions</label>
  <br />
  <p>Add your instructions and ingredients one at a time, you will then see them display above the text box. Dont worry if you make a mistake, you can either edit your recipe later, or click on the ingredient/instruction to delete it.</p>
  <br />
  <div className="control">
    {ingredients.map((ingredient, i) => (
      <div
        key={i}
        value={ingredient}
        onClick={(e) => deleteIngredient(e, i)}>
        {ingredient}
      </div>
    ))}
    <input
      type="text"
      className="textarea"
      name="ingredients"
      placeholder="Ingredients"
      onChange={ingredientChange}
      value={ingredient}
    />
    <button
      type="button"
      onClick={handleIngredient}>
      Add ingredient
    </button>
  </div>
</div>
```


Once I had this in place, I began working on the interface on the user's profile page to enable users to remove individual ingredients. By clicking 'Add ingredients to shopping list', the user sets the recipe's state to 'active', makes a Get request for the ingredients, parses and then spreads the response into the user's shopping list. Subsequent clicks to an ingredient on the shopping list will remove that item.

```javascript
recipeActivated({ id }){
  axios.get(`/api/recipes/${id}`)
    .then(res => this.setState({ shoppingList: [...this.state.shoppingList, ...JSON.parse(res.data.ingredients)] }))
    .catch(err => console.log(err))
}
```

My solution to this was to treat both shopping list and store cupboard as if they were a basic 'To do' list. Though this was relatively simple, it became a time consuming task which meant I did not have time to include key features in my end product.

## Unfinished
The main feature I had hoped to include was a search function for recipes. While this does not currently affect user experience as there is only a small number of seeds, this will be the first inclusion should I develop this app further.

Other basic features I had hoped to include are:
  * Filter by cuisine or tag

  * Allow users to suggest tags for recipes (to be approved by the owner)

  * Shopping list and store cupboard to setState or be saved in local storage

## Future development
There is a large amount of potential development for a recipe sharing site such as this. While I will be leaving the current version of this project on GitHub for reference, should I return to this project with more time available I would add in the following:
  * Price check of ingredients against Tesco API

    * Identify the package size of an ingredient, comparing against the amount required by the recipe then calculating any remainder. Remaining ingredients/part packages to be added to the user's store cupboard.

  * Users can follow favourite chefs/cuisines/tags and view on their profile page.

  * Users to create groups with friends or family.

  * Add comments and suggestions to recipes and ingredients.

  * Add discussion groups for recipes, cuisines and equipment.

## Wins and Key Learnings
The initial seed was time consuming and a factor in my decision to only include a small number of seeds, however later allowed me to more easily manipulate the ingredients when users are interacting with their shopping list. This also made adding a new step when writing a new recipe simpler and more user friendly as well.

Seed sample:
```python
name='Summer couscous salad',
    cuisine=[fusion],
    chef=cath,
    ingredients='[ "250g couscous", "250ml vegetable stock, boiling", "400g can chickpeas, drained and rinsed", "1-2 tbsp vegetable or olive oil", "300g courgette, sliced on the slant", "300g small vine-ripened tomatoes, halved", "250g pack halloumi cheese, thickly sliced and then halved lengthways", "125ml olive oil", "3 tbsp lime juice", "2 large garlic cloves, finely chopped", "2 tbsp chopped fresh mint", "1/2 tsp sugar"]',
    instructions='["1. Tip the couscous into a bowl, pour the boiling stock over and mix well with a fork. Cover with a plate and leave for 4 minutes. Meanwhile, tip all the dressing ingredients into a bowl and mix well. Fluff up the couscous with a fork, stir in the chickpeas and follow with half the dressing. Mix well and pile on to a large serving dish.",
```

Creating the full app on my own really allowed me to push my ability as much as possible and allowed me to increase my understanding of each element. This was also the first time for me building a full app using Python, which was a fantastic opportunity to increase my experience of different languages.
