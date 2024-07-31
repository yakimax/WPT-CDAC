import React from 'react' ;
import Avatar from '@mui/material/Avatar' ;
import Button from '@mui/material/Button' ;
import CssBaseline from '@mui/material/CssBaseline' ;
import TextField from '@mui/material/TextField' ;
import FormControlLabel from '@mui/material/FormControlLabel' ;
import Checkbox from '@mui/material/Checkbox' ;
import {Link} from 'react-router-dom' ;
import Paper from '@mui/material/Paper' ;
import Box from '@mui/material/Box' ;
import Grid from '@mui/material/Grid' ;
import LockOutlinedIcon from '@mui/icons-material/LockOutlined' ;
import Typography from '@mui/material/Typography' ;
import { createTheme, ThemeProvider } from '@mui/material/styles' ;
import Navbar from './Navbar' ;
// import { createUser } from '../Services/service' ;

const defaultTheme = createTheme() ;

export default function Signup() {
    const handleSubmit = async (event) => {
    event.preventDefault() ;
    const data = new FormData(event.currentTarget) ;
    let user = JSON.stringify({
      email:data.get('email') ,
      password:data.get('password')
    })
    try{
      const response = await fetch('http://localhost:4000/SIGNUP',{
        method:'POST',
        body:user,
        headers:{
        'Content-Type':'application/json'
        }
    })
      console.log(await response.json()) ;
    }
    catch(err) {
      console.dir(err) ;
    }
    // console.log(await response.json()) ;
    // try{
    //     let res = await createUser({
    //       email: data.get('email') ,
    //       password: data.get('password')
    //     }) ;
    //     if ( res ) {
    //       console.log( await res.JSON() ) ;
    //     } else {
    //       console.log( "user not found" ) ;
    //     }
    // } catch(err) {
    //   console.log(err) ;
    // }
  } ;

  return (
    <ThemeProvider theme = {defaultTheme}>
    <Navbar/>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m : 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign Up </Button>
              <Grid container>
                <Grid item xs>
                  <Link to='/LOGIN' variant="body2">
                  Log in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  ) ;
}
