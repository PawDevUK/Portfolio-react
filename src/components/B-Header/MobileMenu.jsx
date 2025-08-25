import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Burger from 'components/common/Burger'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import dropdown, { ReactComponent as DropdownIconSvg } from 'img/icon/dropdown.svg'
import { ReactComponent as Logo } from 'img/pavdev.svg'
import { Menu } from 'config/headerMenu.config'
import 'aos/dist/aos.css'

const Wrapper = styled.div``
const LogoHeader = styled(Logo)`
  margin: auto 50px auto auto;
  width: auto;
  height: 50px;
  path {
    fill: #17293f;
  }
`

const MobilTopDiv = styled.div`
  display: none;
  @media (max-width: 992px) {
    margin: 0px;
    height: 70px;
    background-color: #fff;
    display: flex;
    width: 100%;
  }
`
const MobilNav = styled.div`
  ${(p) =>
    p.toggle
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
  @media (max-width: 992px) {
    margin: 0px;
    background-color: #ffffff;
  }
`
const LinkContainer = styled.div`
  padding-bottom: 20px;
  margin: 16px auto 0px 86px;
  height: auto;
  @media (min-width: 992px) {
    display: none;
  }
`

const MobileLink = styled.a`
  &:hover {
    color: #353535;
    text-decoration: none;
    opacity: 0.7;
  }
  margin: 5px 0px;
  position: relative;
  color: #353535;
  display: block;
`
const DropDowIcon = styled(DropdownIconSvg)`
  position: absolute;
  left: 85px;
  top: 10px;
`
const DropDown = styled(MobileLink)`
  margin-left: 50px;
  padding: 0px;
`
const MobileText = styled.p`
  color: #444444;
  display: inline-block;
  margin: 30px auto 16px 64px;
  @media (min-width: 992px) {
    display: none;
  }
`
export default function MobileMenu() {
  const [toggle, setToggle] = useState(false)
  const [mouseOver, setMouseOver] = useState(false)

  function click() {
    setToggle((p) => !p)
  }

  function handleMouseHover() {
    setMouseOver((mouseOver) => !mouseOver)
  }
  return (
    <Wrapper>
      <MobilTopDiv>
        <Burger click={click}></Burger>
        <LogoHeader />
      </MobilTopDiv>

      <MobilNav toggle={toggle}>
        <MobileText>PAWEL SIWEK PORTFOLIO</MobileText>
        <LinkContainer>
          {Menu.map((item, i) => (
              <MobileLink
                onMouseEnter={item.react ? handleMouseHover : null}
                onMouseLeave={item.react ? handleMouseHover : null}
                key={i}
                href={item.href}
              >
                {item.title}
                <SlideDown>
                  {mouseOver ? (
                    <DropDown href={item.href}>
                      {item.react ? item.react.title : null}
                    </DropDown>
                  ) : item.react ? (
                    <DropDowIcon path={dropdown}></DropDowIcon>
                  ) : null}
                </SlideDown>
              </MobileLink>
            )
          )}
        </LinkContainer>
      </MobilNav>
    </Wrapper>
  )
}
