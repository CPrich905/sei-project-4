import React from 'react'
import { Link } from 'react-router-dom'
// img, chef, cuisines, tags


const RecipesCard = ({ name, img, id }) => (
  <div className="column is-one-third-desktop is-half-tablet">
    <Link to={`/recipes/${id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={img} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <p>Cuisines go here</p>
          <p>Tags go here</p>
        </div>
      </div>
    </Link>
  </div>
)

export default RecipesCard
