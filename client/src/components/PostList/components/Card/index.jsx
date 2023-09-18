import React from "react";
import './styles.css'

const Card = (props) => {
  return(
    <div className="card">
      <div className="body-card">
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}

export default Card