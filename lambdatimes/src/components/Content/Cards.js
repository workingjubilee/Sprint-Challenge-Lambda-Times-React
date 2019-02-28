import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map(card => <Card headline={card.headline} tab={card.tab} author={card.author} img={card.img} />)}
      {/* props.cards.map.
        Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
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
