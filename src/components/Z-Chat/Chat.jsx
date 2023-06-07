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
  right:${p=> p.open ? 30 : 0}px;
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
          transition:display 0.4s;
          display: flex;
        `
      : css`
          display: none;
        `};
  flex-direction: column;
  width: 250px;
  height: 361px;
  position: relative;
  border:1px solid #17293f40;
  border-radius: 5px 5px 0px 0px;
`
const ChatBody = styled.div`
  background-color: white;
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
const CloseIcon = styled.div`
  margin: 6px 0px 0px 6px;
  font-size:20px;
  font-weight:bold;
  cursor:pointer;
`
const Header = styled.div`
  border-radius: 5px 0px 0px 5px;
  width: 109px;
  height: 30px;
  padding: 3px 5px;
  margin: auto 0px auto 50px;
`
const HeaderImg = styled.div`
  margin:auto 0px; 
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
  const [clientHeight, setClientHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(90)
 
  useEffect(() => {
  /**
   * @timeout
   * applies animation to the chat button
  */
    const timeout = setTimeout(() => {
      setButtonAnimation((p) => !p)
    }, 500);
    return () => clearTimeout(timeout)
  }, [buttonAnimation]);

  useEffect(()=>{
    /**
     * adds heights of the viewport and footer height to the state for the chat
     */
    setClientHeight(document.documentElement.clientHeight);
    setFooterHeight(document.getElementById('FooterWrapper').clientHeight)

  },[clientHeight, footerHeight])

  function HandleClick() {
    if(props.isChatOpen){
      store.dispatch(chatClose())
    }else{
      store.dispatch(chatOpen())
    }
  }

  /**
   * @toBottom
   * scrolls down chat while user chats therefore keeps last message of the chat in the viewport
   */
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
        chatPosition={clientHeight - 360 - (footerHeight + 60)}
      >
        <Button
          buttonAnimation={!props.isChatOpen ? buttonAnimation : null}
          onClick={HandleClick}
          path={ChatButtonLarge1px}
        ></Button>
        <Window open={props.isChatOpen} id='chatWindow'>
          <HeaderWrapper>
            <CloseIcon onClick={HandleClick}>X</CloseIcon>
            <Header>
              <SectionHeader>Brain Bot</SectionHeader>
            </Header>
            <HeaderImg></HeaderImg>
          </HeaderWrapper>
          <ChatBody>
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
          </ChatBody>
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