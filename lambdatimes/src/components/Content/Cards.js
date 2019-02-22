import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* props.cards.map.
        Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

// CommentSection.propTypes = {
//   comments: PropTypes.array
// }
//
// PostContainer.propTypes = {
//   post: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     comments: PropTypes.array
//   })
// }

export default Cards;
