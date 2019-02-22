import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {props.tabs.map(tab => <Tab key={tab} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />)}
          {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// /* {props.tabs.map(tab => return <Tab key={tab.name} />)} */
// Make sure to use PropTypes to validate your types!

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

export default Tabs;
