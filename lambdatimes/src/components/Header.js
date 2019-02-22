import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

`;

// @media (min-width: 1280px) {
//   .header {
//     width: 1280px;
//   }
// }

// @media (min-width: 1280px) {
//   .header {
//     width: 1280px;
//   }
// }

const TheTitle = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const TheDate = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`

const TheTemp = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`

const Header = () => {
  return (
    <LambdaHeader>
      <TheDate>SMARCH 32, 2018</TheDate>
      <TheTitle>Lambda Times</TheTitle>
      <TheTemp>98°</TheTemp>
    </LambdaHeader>
  )
}

export default Header
