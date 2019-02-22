import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: [...tabData],
      cards: [...cardData]
    })
  }

  selectTabHandler = tab => {
    this.setState({
      selected: tab
    })
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = tabSelect => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selected

      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows:
        - if the selected tab is 'all' it should return all
          of the items from cardData.
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    if (tabSelect === 'all') {
      return this.state.cards
    } else {
      return this.state.cards.filter(card => card.tab === tabSelect)
    }
  };

  render() {
    return (
      <div className="content-container">

        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.selectTabHandler} tabs={this.state.tabs} />
        <Carousel />
        <Cards cards={this.filterCards(this.state.selected)} />
      </div>
    );
  }
}
