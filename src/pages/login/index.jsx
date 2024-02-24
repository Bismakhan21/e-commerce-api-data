import React, { useState } from "react";
import TextField from "../../components/Input";
import { Custom_Button } from "../../components/custombuton";
import { Link, useNavigate,  } from "react-router-dom";
import Paper from "@mui/material/Paper";
import {  Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button'
import { useDispatch } from "react-redux";
import { set_user_auth } from "../../store/slice/user_data_slice";
// import  signInWithEmailAndPassword  from "../../config/firebase_config"; 

const Login = () => {

  
  const [data, setData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const change_handle = (e) => {
    const { value, id } = e.target;
    setData({ ...data, [id]: value });
  };

  const submit_handle = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        data.email,
        data.password
      );
      dispatch(set_user_auth({ loggedIn: true, loading: false }));
      navigate("/");
      console.log(userCredential.user);
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      dispatch(set_user_auth({ loggedIn: false, loading: false, error: errorMessage }));
    }
  };

  //   const submit_handle = (e) => {
  //     e.preventDefault();

  //     signInWithEmailAndPassword(auth, data.email, data.password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log(user)
  //         // ...
  //     })
  //     .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(user)
  //       });
  //   };

  // const submit_handle = async (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     set_user_auth({
  //       loggedIn: true,
  //       loading: false,
  //     })
  //   );
  //   set_user_auth()
  //   func()
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       data.email,
  //       data.password
  //     );
  //     dispatch(set_user_auth(true));
  //     navigate("/");
  //     console.log(userCredential.user);
  //   } catch (error) {
  //     const errorMessage = error.message;
  //     console.log(errorMessage);
  //     dispatch(set_user_auth(false));
  //   }

    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user)
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage)
    //   });
  // };

    return (
    <Paper
      sx={{ width: "400px", margin: "100px auto", height: "350px" }}
      elevation={5}
    >
      <form
        onSubmit={submit_handle}
      >
        <Typography sx={{ textAlign: "center", paddingTop: "35px", fontSize:'20px', fontWeight:'600', color:'#333' }}>
          LOGIN
        </Typography>
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
          <Custom_Button type="submit">Login</Custom_Button>
        </Link>

        <Stack sx={{margin:'25px'}}>
          <Typography>Don't have account... 
         
          <Link to="/signup">
            <Button> Signup now</Button>
          </Link>
          </Typography>
          </Stack>
      </form>
    </Paper>
  );
};


export default Login;
