import { chatOpen, chatClose } from 'actions/isChatOpen.actions'
import { SectionHeader } from 'components/common/typography'
import { isChatOpen } from 'selectors/isChatOpen.selector'
import React, { useState, useEffect } from 'react'
import { ChatButtonLarge1px, BrainBot } from 'img'
import styled, { css } from 'styled-components'
import { SvgLoader } from 'react-svgmt'
import { store } from 'configureStore'
import { connect } from 'react-redux'
import WhiteMessage from './WhiteMSG'
import BlueMessage from './BlueMSG'
import Input from './Input.jsx'
import axios from 'axios'

const parseString = require('xml2js').parseString

const Button = styled(SvgLoader)`
  ${(p) =>
    p.buttonAnimation
      ? css`
          transition: margin-right 0.4s;
          margin-right: 5px;
        `
      : css``};
  padding:0px;
  margin-top:324px;
`

const Wrapper = styled.div`
  position: absolute;
  padding-top:0px;
  height:100%;
  top: 0px;
  right: 0px;
  @media (max-width: 1000px) {
    display: none;
  }
  z-index:2000;
`

const InnerWrapper = styled.div`
  display: flex;
  position: sticky;
  top: ${p=>p.chatPosition}px;
`

const Window = styled.div`
  ${(p) =>
    p.open
      ? css`
      transition:display 0.4s
          display: block;
        `
      : css`
          display: none;
        `};
  width: 250px;
  height: 301px;
  background-color: white;
  position: relative;
`

const ChatWrapper = styled.div`
  overflow-y: auto;
  height: 242px;
  width: 100%;
`
//header
const HeaderWrapper = styled.div`
  border-bottom:1px solid #17293f40;
  border-radius: 5px 5px 0px 0px;
  background-color: #fff;
  display: flex;
  height:60px;
`
const Header = styled.div`
  z-index: 1;
  left: -100px;
  position: absolute;
  background-color: #fff;
  border-radius: 5px 0px 0px 5px;
  width: 109px;
  height: 30px;
  display: flex;
  padding: 3px 5px;
`
const HeaderImg = styled.div`
  z-index: 100;
  height: 50px;
  width: 50px;
  background-image: url(${BrainBot});
`
// <- header

const Form = styled.form`
  height:60px;
`

function Chat(props) {

  const [formInput, setInput] = useState('')
  const [chat, setChat] = useState([])
  const [buttonAnimation, setButtonAnimation] = useState(false)
  const [chatPosition, setChatPosition] = useState(400)
  
  /**
   * applies animation to chat button
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setButtonAnimation((p) => !p)
    }, 500)
    return () => clearTimeout(timeout)
  }, [buttonAnimation]);

  useEffect(()=>{
    const screenHeight = document.documentElement.clientHeight ;
    setChatPosition(screenHeight / 2 )
  },[chatPosition])

  function HandleClick() {
    if(props.isChatOpen){
      store.dispatch(chatClose())
    }else{
      store.dispatch(chatOpen())
    }
  }

  function toBottom() {
    const wrapper = document.getElementById('chatWrapper')
    if (wrapper.scrollHeight !== null) {
      return (wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight)
    } else {
      return
    }
  }

  function Submit(e) {
    e.preventDefault()
    setChat((prevState) => {
      return [
        ...prevState,
        {
          user: true,
          text: formInput,
        },
      ]
    })

    axios
      .get(
        `https://www.botlibre.com/rest/api/form-chat?&application=4120366723131427615&instance=165&message=${formInput}`,
      )
      .then((r) => {
        parseString(r.data, (err, result) => {
          setChat((prevState) => {
            return [
              ...prevState,
              {
                user: false,
                text: result.response.message[0],
              },
            ]
          })
        })
        toBottom()
      })
    document.getElementById('field').reset()
    toBottom()
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <Wrapper 
      id='chat' 
      open={props.isChatOpen} 
    >
      <InnerWrapper 
        id='chatInnerWrapper' 
        open={props.open}
        chatPosition={chatPosition}
      >
        <Button
          buttonAnimation={!props.isChatOpen ? buttonAnimation : null}
          onClick={HandleClick}
          path={ChatButtonLarge1px}
        ></Button>
        <Window open={props.isChatOpen} id='chatWindow'>
          <HeaderWrapper>
            <Header>
              <SectionHeader>Brain Bot</SectionHeader>
            </Header>
            <HeaderImg></HeaderImg>
          </HeaderWrapper>

          <ChatWrapper id="chatWrapper">
            {chat.map((p) => {
              return p.user ? (
                <WhiteMessage>{p.text}</WhiteMessage>
              ) : (
                <BlueMessage>{p.text}</BlueMessage>
              )
            })}
          </ChatWrapper>

          <Form
            id="field"
            onSubmit={(e) => {
              Submit(e)
            }}
            onChange={(e) => handleChange(e)}
          >
            <Input
              label="Chat"
              placeholder="Input text"
              underText="Type in whatever you like"
            ></Input>
          </Form>
        </Window>
      </InnerWrapper>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    isChatOpen:isChatOpen(state)
  }
}

export default connect(mapStateToProps)(Chat)