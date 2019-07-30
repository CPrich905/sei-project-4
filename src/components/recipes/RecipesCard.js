import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

// img, chef, cuisines, tags


const RecipesCard = ({ name, img, id, serves, prep_time_hr, prep_time_min, description, cuisine, tags, handleLike }) => (
  <div className="column is-one-third-desktop is-half-tablet">
    <Link to={`/recipes/${id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image is-square">
            <img src={img} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <p>Preptime: {prep_time_hr + prep_time_min}</p>
          <p>{description}</p>
          <p>Serves: {serves}</p>
          <hr />
          <p>Cuisines: </p> {cuisine.map(cuisine =>
            <p key={cuisine.id}>{cuisine.name}</p>)}
          <p>Tags: </p>{tags.map(tags =>
            <p key={tags.id}>{tags.name}</p>)}

        </div>
        <div className="card-footer">
          {Auth.isAuthenticated() && <button className="button is-primary is-fullwidth" onClick={() => handleLike(id)}>Like</button>}

        </div>
      </div>
    </Link>
  </div>
)

export default RecipesCard
