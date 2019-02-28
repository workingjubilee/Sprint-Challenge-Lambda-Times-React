import React from 'react';
import styled from 'styled-components';


// @media (min-width: 1280px) {
//   .top-bar .container {
//     width: 1280px;
//   }
// }



// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const BigContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

`;

// @media (min-width: 1280px) {
//   .top-bar .container {
//     width: 1280px;
//   }
// }

const PlacedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: none;
`;

const CenterContainer = styled(PlacedContainer)`
  flex: 3;
  justify-content: center;
`;

const RightContainer = styled(PlacedContainer)`
  justify-content: flex-end;
`;


const Point = styled.span`
  font-size; 9px;
  cursor: pointer;
`;

const CenterPoint = styled(Point)`
  margin-right: 5%;
  :last-child {
    margin-right: 0
  }
  :hover {
    text-decoration: underline
  }
`;

const FatPoint = styled(Point)`
  font-size: 11px;
  font-weight: bold;
`;

const LeftPoint = styled(FatPoint)`
  margin-right: 25%;
`

// .top-bar .container .container-left {
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
//   flex: 1;
//   font-size: 11px;
// }
// .top-bar .container .container-center {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   flex: 3;
//   font-size: 9px;
// }
// .top-bar .container .container-right {
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   flex-direction: row;
//   flex: 1;
//   font-size: 11px;
//   font-weight: bold;
// }

const TopBar = () => {
  return (
    <TopNav>
      <BigContainer>
        <PlacedContainer>
          <LeftPoint>TOPICS</LeftPoint><LeftPoint>SEARCH</LeftPoint>
        </PlacedContainer>
        <CenterContainer>
          <CenterPoint>GENERAL</CenterPoint><CenterPoint>BROWNBAG</CenterPoint><CenterPoint>RANDOM</CenterPoint><CenterPoint>MUSIC</CenterPoint><CenterPoint>ANNOUNCEMENTS</CenterPoint>
        </CenterContainer>
        <RightContainer>
          <FatPoint>LOG IN</FatPoint>
        </RightContainer>
      </BigContainer>
    </TopNav>
  )
}

export default TopBar;
