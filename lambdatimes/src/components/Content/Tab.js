import React from 'react';
import styled from 'styled-components';

// background: ${props => props.primary ? "palevioletred" : "white"};
// color: ${props => props.primary ? "white" : "palevioletred"};


// .tabs {
//   border-bottom: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   height: 47px;
//   background-color: #fff;
// }
// @media (min-width: 1280px) {
//   .tabs {
//     width: 1280px;
//   }
// }
// .tabs .topics {
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
// }
// .tabs .topics .title {
//   font-size: 12px;
//   letter-spacing: 1px;
//   font-weight: bold;
// }
// .tabs .topics .tab {
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
//   color: #fff;
//   background-color: #333;
//   margin: 0 5px;
//   padding: 2px 10px;
//   font-size: 12px;
//   letter-spacing: 2px;
//   cursor: pointer;
//   font-weight: bold;
// }
// .tabs .topics .tab:hover {
//   text-decoration: underline;
// }
// .tabs .topics .active-tab {
//   background-color: #fff;
//   color: #333;
//   border: 2px solid #333;
// }

const Tab = props => {
  // logicActiveTab = () => { }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab': 'tab'}
      onClick={() => {props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

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


export default Tab;
