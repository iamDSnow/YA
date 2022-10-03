import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { useState } from 'react'
import { navigate } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const Wrapper = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-bottom: 10%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #000;
  background: gold;

`

const Head = styled.div`
  padding-top: 20px;
  @media only screen and (min-width: 900px) {
    padding-top: 40px;

   }
`
const HTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding: 32px 0;
  font-weight: bold;

 @media only screen and (min-width: 600px) {
    font-size: 40px;

   }
   @media only screen and (min-width: 2560px) {
    font-size: 60px;

   }
`
const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  padding: 32px 0;
  font-weight: bold;
  @media only screen and (min-width: 600px) {
    font-size: 40px;

   }
   @media only screen and (min-width: 2560px) {
    font-size: 60px;

   }
`
const SubText = styled.p`
  padding-bottom: 20px;
  font-size: 16px;
  @media only screen and (min-width: 600px) {
    font-size: 26px;

   }
   @media only screen and (min-width: 900px) {
    font-size: 22px;
    padding: 1rem;

   }
   @media only screen and (min-width: 2560px) {
    font-size: 40px;

   }
`
const FormWrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  padding: 3rem;
  padding-top: 0px;
  padding-bottom: 0px;
  background: gold;

  @media only screen and (min-width: 600px) {
    align-items: center;
    justify-items: center;
    
   }
   @media only screen and (min-width: 900px) {
    padding-top: 40px;

    
   }
  

`
const Label = styled.label`
  padding-bottom: 16px;
  font-size: 16px;
  @media only screen and (min-width: 600px) {
    font-size: 26px;
    


   }
  @media screen and (min-width: 920px) {
    font-size: 24px;
  }
  @media only screen and (min-width: 2560px) {
    font-size: 40px;

   }
`
const StringInput = styled.input`
  margin-top: 8px;
  height: 35px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  color: black;
  border: 1px solid #000;
  width: 100%;
  padding-left: 4px;

  @media screen and (min-width: 600px) {
    width: 65vw;
    height: 50px;
  }
  @media screen and (min-width: 920px) {
    width: 40vw;
    height: 32px;
    margin-top: 16px;
  }
  @media only screen and (min-width: 2560px) {
    font-size: 40px;
    height: 100px;


   }
`
const AreaText = styled.textarea`
  font-weight: bold;
  border-radius: 8px;
  margin-top: 8px;
  border: 1px solid #000;
  width: 100%;  
  padding-left: 4px;
  @media screen and (min-width: 600px) {
    width: 65vw;
  }
  @media screen and (min-width: 900px) {
    width: 40vw;
  }
  @media only screen and (min-width: 2560px) {
    font-size: 40px;
    height: 100px;


   }
`
const Submit = styled.button`
  width: 40%;
  margin: 20px auto;
  padding: 4px;
  font-size: 24px;
  border: 1px solid #000;
  cursor: pointer;
  :hover{
    background-color: gold;
  }
  @media screen and (min-width: 920px) {
    width: 15%;
  }
  @media only screen and (min-width: 2560px) {
    font-size: 40px;


   }
`

const Contactya = () => {
  const data = useStaticQuery(graphql`
    {
      sanityContactya {
        title
        text {
          children {
            text
          }
        }
        text2 {
          children {
            text
          }
        }
      }
    }
  `)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [company, setCompany] = useState('')
  const [description, setDescription] = useState('')
  function encode (data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  const handleSubmit = event => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        fname: firstName,
        lname: lastName,
        email: email,
        telephone: telephone,
        description: description,
        company: company

      })
    })
      .then(() => navigate('/thankyou'))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <Head>
        <Title>{data.sanityContactya.title}</Title>
        {data.sanityContactya.text.map(ST => {
          return ST.children.map(payload => {
            return <SubText> {payload.text}</SubText>
          })
        })}
        {data.sanityContactya.text2.map(ST => {
          return ST.children.map(payload => {
            return <SubText> {payload.text}</SubText>
          })
        })}
      </Head>
      <Wrapper>
        <HTitle>Contact Information</HTitle>
        <FormWrapper
          autoComplete='on'
          netlify-honeypot='bot-field'
          name='contact'
          method='POST'
          data-netlify='true'
          action='/'
          onSubmit={handleSubmit}
        >
          <input name='form-name' value='Netlify Rocks' type='hidden' />
          <input type='hidden' name='bot-field' />
          <Label htmlFor='firstName'>
            First Name <br />
            <StringInput
              required
              type='text'
              name='fNfirstNameame'
              placeholder='First Name'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            ></StringInput>
          </Label>
          <Label htmlFor='lastName'>
            Last Name
            <br />
            <StringInput
              required
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            ></StringInput>
          </Label>
          <Label htmlFor='Email'>
            Email
            <br />
            <StringInput
              required
              type='text'
              name='email'
              placeholder='email@email.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></StringInput>
          </Label>
          <Label htmlFor='telephone'>
            Telephone <br />
            <StringInput
              required
              type='tel'
              name='telephone'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              placeholder='123-456-7890'
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
            ></StringInput>
          </Label>
          <Label htmlFor='company'>
            Company <br />
            <StringInput
              required
              type='company'
              name='company'
              placeholder='company'
              value={company}
              onChange={e => setCompany(e.target.value)}
            ></StringInput>
          </Label>
          <Label htmlFor='description'>
            Message <br />
            <AreaText
              name='description'
              rows='4'
              cols='20'
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder='How can we help you!'
            />
          </Label>
          <Submit type='submit' onSubmit={handleSubmit}>
            Submit
          </Submit>
        </FormWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Contactya
