import { Button, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Custom_Button } from "../custombuton";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase_config";
import { set_user_auth } from "../../store/slice/user_data_slice";

const Navbar_Component = () => {
  const user_data = useSelector((store) => store.user_data);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout_handle = () =>{
    signOut(auth)
    .then((res)=>{
        dispatch(set_user_auth(false))
        navigate('/')
        console.log('logout successful!')
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
  }
  return (
    <Paper>
      <Stack>Logo</Stack>
          <div>
            {user_data.isLoggedIn ? (
              <Stack>
                <Typography>{user_data.username}</Typography>
                <Custom_Button sx={{float:'right'}} onClick={logout_handle} >
                    Logout
                </Custom_Button>
              </Stack>
            ) : (
              <Stack sx={{display: "flex", justifyContent:'flex-end', flexDirection:'row'}}>
                <Button><Link to="/">Login </Link></Button>
                
                <Button><Link to="/signup">Signup </Link></Button>
              </Stack>
            )}
          </div>
        
      </Paper>
  );
};

export { Navbar_Component };