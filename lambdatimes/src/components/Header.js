import React from 'react';
import styled from 'styled-components';

// const somethingTemp
// const somethingDate
// const somethingHeader
const LambdaHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
  }
`;

// rip off "header" in the css

// .header h1 {
//   font-size: 60px;
//   font-family: Didot, serif;
//   font-weight: bold;
//   flex: 8;
//   text-align: center;
//   color: #000;
// }
// .header span {
//   align-self: flex-end;
//   font-size: 11px;
//   font-weight: bold;
//   letter-spacing: 1px;
// }
// .header .date {
//   margin-left: 25px;
//   flex: 1;
// }
// .header .temp {
//   text-align: right;
//   margin-right: 25px;
//   flex: 1;
// }

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <LambdaHeader>
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </LambdaHeader>
  )
}

export default Header
