import React, { useState } from 'react'
import { Box, TextField, Button, styled, Typography, textAlign } from '@mui/material'

const Component = styled(Box)`
  width:510px;
  height:600px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`

const Image = styled('img')({
  width: 100,
  display: 'flex',
  margin: 'auto',
  padding: '50px 0 0'
})

const Wrapper = styled(Box)`
   padding: 25px 35px;
   display:flex;
   flex:1;
   flex-direction:column;
   & > div, & > Button, &>p{
    margin-top: 20px
   }
`

const LoginButton = styled(Button)`
   text-transform: none;
   background: #FB641B;
   height: 48px;
   border-radius: 8px
`

const SignupButton = styled(Button)`
   text-transform: none;
   background: #fff;
   height: 48px;
   border-radius: 8px;
   box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Login = () => {

  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';


  const [account, toggleAccount] = useState('login');

  const toggleSignup =() =>{
    if(account === 'login'){
      toggleAccount('signup')
    }
    else{
      toggleAccount('login')
    }
  }
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />

        {
          account === 'login' ? (
            <Wrapper>
              <TextField variant='standard' label="Enter username" />
              <TextField variant='standard' label="Enter Password" />
              <LoginButton variant="contained">Login</LoginButton>
              <Typography style={{ textAlign: 'center' }}>Or</Typography>
              <SignupButton onClick={() => toggleSignup()}>Create account</SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant='standard' label="Enter Name" />
              <TextField variant='standard' label="Enter username" />
              <TextField variant='standard' label="Enter Password" />
              <LoginButton variant="contained">Signup</LoginButton>
              <Typography style={{ textAlign: 'center' }}>Or</Typography>
              <SignupButton onClick={() => toggleSignup()}>Already have an account</SignupButton>
            </Wrapper>
          )
        }



      </Box>
    </Component>
  )
}

export default Login