import React, { useState } from 'react'
import Paper from "@mui/material/Paper";
import { Stack, Typography } from '@mui/material';
import  TextField  from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import { Custom_Button } from "../../components/custombuton";
import Login from '../../pages/login';
// import { signInWithGoogle } from '../../config/firebase_config';

function Signup() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

const change_handle = (e) => {
  const { value, id } = e.target;

  setData({ ...data, [id]: value });
};

const submit_handle = (e) => {
  e.preventDefault();

  console.log(data)

  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log('user', user)
     navigate('/')
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorMessage', errorMessage)
      
    });
};



  return (
    <>
    <Paper
      sx={{ width: "400px", margin: "100px auto", minHeight: "350px" }}
      elevation={5}
    >
      <form
        onSubmit={submit_handle}
      >
        <Typography sx={{ textAlign: "center", paddingTop: "35px", fontSize:'20px', fontWeight:'600', color:'#333' }}>
          SIGNUP
        </Typography>
        <Stack spacing={2} margin={'20px'}>
          <TextField
            required= {true}
            id="first_name"
            type="text"
            label="First_name"
            placeholder="Enter here..."
            onChange={change_handle}
           
          />

          <TextField
            required= {true}
            id="last_name"
            type="text"
            label="Last_name"
            placeholder="Enter here..."
            onChange={change_handle}
          />
        </Stack>

        <Stack spacing={2} margin={'20px'}>
          <TextField
            required= {true}
            id="email"
            type="email"
            label="User_email"
            placeholder="Enter here...."
            onChange={change_handle}
          />

          <TextField
            required= {true}
            id="password"
            type="password"
            label="User_password"
            placeholder="Enter here..."
            onChange={change_handle}
          />
        </Stack>

        <Link to="/dashboard">
          <Custom_Button type="submit">Signup</Custom_Button>
        </Link>

        <Stack sx={{margin:'25px'}}>
          <Typography>Already have an account... 
          <Link to="/">
            <Button>Login </Button>
          </Link>
          </Typography>
          {/* <Button className="button" onClick={signInWithGoogle}>Sign in with google</Button> */}
        </Stack>
        {/* <i className="fab fa-google"></i> */}
      </form>
    </Paper>
    </>
  )
}

export default Signup