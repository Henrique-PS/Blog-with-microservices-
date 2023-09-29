import React from "react";
import './styles.css'
import CommentCreate from "../CommentCrate";

const Card = (props) => {
  return(
    <div className="card">
      <div className="body-card">
        <h3>{props.title}</h3>
        <CommentCreate postId={props.id}/>
      </div>
    </div>
  )
}

export default Card