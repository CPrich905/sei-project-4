import React from 'react'
import Select from 'react-select'
// import TimePicker  from 'react-time-picker'
// import { cuisine } from './FormComponents/Cuisine'

const RecipeForm = ({ data, handleChange, handleSubmit, handleTimeHr, handleTimeMin, cuisines, handleCuisine }) => (

  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name</label>
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

    <div className="field">
      <label className="label">Cuisine</label>

      <Select
        defaultValue="Cuisine"
        options={cuisines}
        onChange={handleCuisine}
        isMulti
      />
    </div>
    <div>
      <label>Prep time</label>
      <div className="field">
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
    <div className="field">
      <label className="label">Ingredients</label>
      <div className="control">
        <textarea
          className="input"
          name="ingredients"
          placeholder="Ingredients"
          onChange={handleChange}
          value={data.ingredients || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Instructions</label>
      <div className="control">
        <textarea
          className="input"
          name="instructions"
          placeholder="Instructions"
          onChange={handleChange}
          value={data.instructions || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Image</label>
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
    <button type="submit" className="button">Submit</button>
  </form>
)

export default RecipeForm
