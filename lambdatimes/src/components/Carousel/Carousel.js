import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      carouSelect: 0
    }
  }
  componentDidMount(){
    this.setState({
      carousel: [...carouselData],
      carouSelect: 0
    })

  }

  leftClick = () => {
    let newSelect = this.state.carouSelect;
    let carouseLimit = this.state.carousel.length -1;
    if (newSelect === 0) {
      newSelect = carouseLimit
    }  else {
      newSelect--
    }
    this.setState({
      carouSelect: newSelect
    });
  }

  rightClick = () => {
    let newSelect = this.state.carouSelect;
    let carouseLimit = this.state.carousel.length -1;
    if (newSelect === carouseLimit ) {
      newSelect = 0;
    }  else {
      newSelect++
    }

    this.setState({
      carouSelect: newSelect
    });
  }

  // selectedImage = () => {
  //   return <img src={this.state.carousel[this.state.carouSelect]} style={{display: 'block'}} alt="" />
  // }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.carousel[this.state.carouSelect]} style={{display: 'block'}} alt="" />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
