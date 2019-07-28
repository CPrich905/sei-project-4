import React from 'react'


const StoreCupboard = ({ storeCupChange, storeCupSubmit }) => (
  <form onSubmit={storeCupSubmit}>
    <div className="field">
      <label className="label">Add to your store cupboard...</label>
      <br />
      <textarea
        className="input"
        name="storeCupboard"
        placeholder="..."
        onChange={storeCupChange}
      />
    </div>
    <button>Submit</button>
  </form>
)

export default StoreCupboard
