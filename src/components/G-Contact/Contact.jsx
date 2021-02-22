import JumboSectionHeader from 'components/common/JumboSectionHeader'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import { P, Bold } from 'components/common/typography'
import { boxShadow12, ImgCover } from 'styled.js'
import { SendFormData } from 'RESTapi/contactForm'
import Button from 'components/common/Button'
import styled from 'styled-components'
import React, { useState } from 'react'
import { SkyScraper } from 'img'

const Wrapper = styled.div`
  background-image: url(${SkyScraper});
  ${ImgCover} // properties for parallax background
width:100%;
  padding: 1px;
`
const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 100px auto;
  ${boxShadow12}
  padding:10px;
  width: 80%;
`
const InnerWrapper = styled.div`
  width: 540px;
  margin: auto;
`
const TextWrapper = styled.div`
  margin: 10px auto 0px auto;
`
const ContactL = styled.div`
  display: block;
`
const ContactR = styled.div``
const Form = styled.form`
  margin: auto;
`
const ButtonWrapper = styled.div`
  justify-content: space-between;
  margin: 5px auto;
  display: flex;
  height: 100px;
  width: 250px;
`
const StTextField = styled(TextField)`
  margin: 10px !important;
  width: 250px;
`
const StTextareaAutosize = styled(TextareaAutosize)`
  display: block;
  width: 90%;
  margin: 20px auto !important;
`
export default function Contact() {
  let [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Website: '',
    Company: '',
    Message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  function handleSubmit() {
    SendFormData.post('./contactForm', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    handleClear()
  }

  function handleClear() {
    setFormData({
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      Website: '',
      Company: '',
      Message: '',
    })
  }
  return (
    <Wrapper id="contact">
      <WhiteBox>
        <InnerWrapper>
          <JumboSectionHeader>Contact</JumboSectionHeader>
          <TextWrapper>
            <P>
              If you would like to contact me regarding any queries please don't{' '}
              <br /> hesitate and drop me an email or call me directly on my
              mobile. <br /> I'm always more than happy to speak and answer any
              questions.
            </P>
            {/* <SectionHeader>Message Me</SectionHeader> */}
            <hr />
            <TextWrapper style={{ marginTop: '10px', display: 'flex' }}>
              <ContactL style={{ marginLeft: '15px' }}>
                <Bold>Email:</Bold> <br />
                <Bold>Mobile:</Bold> <br />
                <Bold>LinkedIn:</Bold> <br />
              </ContactL>
              <ContactR style={{ marginLeft: '200px' }}>
                p.f.siwek@gmail.com <br />
                07463765514 <br />
                <a
                  target="blank"
                  href="http://www.linkedin.com/in/pawel-siwek-78432119b"
                >
                  Profile
                </a>
              </ContactR>
            </TextWrapper>
          </TextWrapper>
          <Form noValidate autoComplete="on">
            <StTextField
              type="text"
              value={formData.FirstName}
              name="FirstName"
              onChange={handleChange}
              required
              id="standard-basic"
              label="First Name"
            />
            <StTextField
              type="text"
              value={formData.LastName}
              name="LastName"
              id="standard-basic"
              label="Last Name"
              onChange={handleChange}
            />
            <StTextField
              type="email"
              value={formData.Email}
              name="Email"
              id="standard-basic"
              label="Email"
              required
              onChange={handleChange}
            />
            <StTextField
              type="number"
              value={formData.Phone}
              name="Phone"
              id="standard-basic"
              label="Phone"
              onChange={handleChange}
            />
            <StTextField
              type="text"
              value={formData.Website}
              name="Website"
              id="standard-basic"
              label="Website"
              onChange={handleChange}
            />
            <StTextField
              type="text"
              value={formData.Company}
              name="Company"
              id="standard-basic"
              label="Company"
              onChange={handleChange}
            />
            <StTextareaAutosize
              type="text"
              value={formData.Message}
              name="Message"
              aria-label="minimum height"
              rowsMin={4}
              id="outlined-basic"
              placeholder="Message"
              variant="outlined"
              required
              onChange={handleChange}
            />
            <ButtonWrapper>
              <Button onClick={handleSubmit} value="Send">
                Send
              </Button>
              <Button onClick={handleClear}>Clear</Button>
            </ButtonWrapper>
          </Form>
          <TextWrapper></TextWrapper>
        </InnerWrapper>
      </WhiteBox>
    </Wrapper>
  )
}
