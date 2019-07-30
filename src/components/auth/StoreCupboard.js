import React from 'react'


const StoreCupboard = ({ storeCupChange, storeCupSubmit, storecupboardItem }) => (
  <form>
    <div className="field">
      <label className="label">Add to your store cupboard...</label>
      <br />
      <input
        type="text"
        className="textarea"
        name="storeCupboard"
        placeholder="..."
        onChange={storeCupChange}
        value={storecupboardItem}
      />
    </div>
    <button
      onClick={storeCupSubmit}>Submit</button>
  </form>
)

export default StoreCupboard
