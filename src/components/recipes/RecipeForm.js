import React from 'react'
import Select from 'react-select'


const RecipeForm = ({ data, handleChange, handleSubmit, handleTimeHr, handleTimeMin, cuisines, tags, handleCuisine, handleTags, ingredient, ingredientChange, handleIngredient, ingredients, deleteIngredient, instruction, instructionChange, handleInstruction, instructions, deleteInstruction }) => (

  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="title">Name</label>
      <p>We check these for duplicates, so please make sure your recipe doesn't already exist!</p>
      <div className="control">
        <input
          className="input"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={data.name || ''}
        />
      </div>
    </div>

    <div className="container">
      <p className="title">Timings...</p>
      <p>If you only need one field (hours or minutes), just leave the other empty.</p>
      <div className="field">
        <label className="label">Prep time in hours and minutes: </label>
        <select
          name="prep_time_hr"
          onChange={handleTimeHr}
        >
          <option value = "0">0</option>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
          <option value = "6">6</option>
          <option value = "7">7</option>
          <option value = "8">8</option>
          <option value = "9">9</option>
          <option value = "10">10</option>
        </select>
        <select
          name="prep_time_min"
          onChange={handleTimeMin}
        >
          <option value = "0">0</option>
          <option value = "15">15</option>
          <option value = "30">30</option>
          <option value = "45">45</option>
        </select>
      </div>
      <div className="field">
        <label className="label">Cooking time in hours and minutes: </label>
        <select
          name="cook_time_hr"
          onChange={handleTimeHr}
        >
          <option value = "0">0</option>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
          <option value = "6">6</option>
          <option value = "7">7</option>
          <option value = "8">8</option>
          <option value = "9">9</option>
          <option value = "10">10</option>
        </select>
        <select
          name="cook_time_min"
          onChange={handleTimeMin}
        >
          <option value = "0">0</option>
          <option value = "15">15</option>
          <option value = "30">30</option>
          <option value = "45">45</option>
        </select>
      </div>
    </div>
    <div>
      <label>Serves</label>
      <div className="field">
        <select
          name="serves"
          onChange={handleTimeHr}
        >
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
          <option value = "6">6</option>
        </select>
      </div>
    </div>
    <hr />
    <div className="container">
      <p className="title">Cuisines and tags</p>
      <p>Either pick from the drop down lists or start typing to add cuisines and tags to your recipe. <br /> You can select as many of these as you like - if you think we're missing one, please let us know!</p>
      <label className="label">Cusines</label>
      <Select isMulti
        value={cuisines.value}
        onChange={handleCuisine}
        options={cuisines} />

      <label className="label">Tags</label>
      <Select
        isMulti
        value={tags.value}
        onChange={handleTags}
        options={tags} />
    </div>

    <hr />

    <div className="field">
      <label className="title">Ingredients & Instructions</label>
      <br />
      <p>Add your instructions and ingredients one at a time, you will then see them display above the text box. Don't worry if you make a mistake, you can either edit your recipe later, or click on the ingredient/instruction to delete it.</p>
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

    <div className="field">
      <div className="control">
        {instructions.map((instruction, i) => (
          <div
            key={i}
            value={instruction}
            onClick={(e)=> deleteInstruction(e, i)}>
            {instruction}
          </div>

        ))}
        <input
          type="text"
          className="textarea"
          name="instructions"
          placeholder="Instructions"
          onChange={instructionChange}
          value={instruction}
        />
        <button
          type="button"
          onClick={handleInstruction}>
          Add instruction
        </button>
      </div>
    </div>

    <hr />

    <div className="field">
      <label className="title">Media</label>
      <label className="label">Add a photo</label>
      <div className="control">
        <input
          className="input"
          name="img"
          placeholder="image-url"
          onChange={handleChange}
          value={data.img || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Video</label>
      <div className="control">
        <input
          className="input"
          name="video"
          placeholder="video-url"
          onChange={handleChange}
          value={data.video || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Links</label>
      <div className="control">
        <input
          className="input"
          name="link"
          placeholder="link-url"
          onChange={handleChange}
          value={data.link || ''}
        />
      </div>
    </div>

    <hr />

    <div className="field">
      <p>You can edit any recipe you've created at any time - just go to the recipe and click the edit button. If you're ready to submit now, please tick the button below!</p>
      <button type="submit" className="button">Submit</button>
    </div>
  </form>
)

export default RecipeForm

// tags, handleTags, cuisines, handleCuisine

// <div className="field">
//   <label className="label">Cuisine</label>
//  create select outside then map options NOT select
// first option should blank/"pick a cuisine"
//   {...cuisine.map((cuisine, i)  => (<Select
//     key={i}
//     defaultValue="Cuisine"
//     onChange={handleCuisine}
//     isMulti
//   />
//   ))}
// </div>
// <div className="field">
//   <label className="label">Tags</label>
//
//   <Select
//     defaultValue="Tags"
//     options={tags}
//     onChange={handleTags}
//     isMulti
//   />
// </div>
