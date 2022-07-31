import React from 'react'
import {
  Container,
  Title
} from './footer'
import {
  Facebook,
  Instagram,
  Twitter
} from '@mui/icons-material';
import {
  BottomWrapper,
  BottomWrapperCenter,
  BottomWrapperLeft,
  BottomWrapperRight,
  Container,
  Icon,
  Logo,
  Name,
  TopWrapper,
  TopWrapperLeft,
  TopWrapperRight,
  LineFooter,
  BottomWrapperRightTop
} from './footer'

function Footer() {
  return (
    <>
    <Container>
      <TopWrapper>
        <TopWrapperLeft>
          <Name>FTEAM</Name>
        </TopWrapperLeft>

        <TopWrapperRight>
        </TopWrapperRight>
      </TopWrapper>

      <BottomWrapper>
        <BottomWrapperLeft>
        </BottomWrapperLeft>

        <BottomWrapperCenter>
        </BottomWrapperCenter>

        <BottomWrapperRight>
        <BottomWrapperRightTop>
        </BottomWrapperRightTop>
        </BottomWrapperRight>
      </BottomWrapper>

    </Container>
    <LineFooter></LineFooter>
    </>
  )
}

export default Footer