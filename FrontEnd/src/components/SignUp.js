import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#ffcc00',
    },
  },
  typography: {
    fontFamily: "'Tajawal', sans-serif",
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Indian Insight
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // Reset errors
    setErrors({ firstName: '', lastName: '', email: '', password: '' });

    // Validation
    let formValid = true;
    const newErrors = {};

    if (!data.get('firstName')) {
      newErrors.firstName = 'First Name is required';
      formValid = false;
    }
    if (!data.get('lastName')) {
      newErrors.lastName = 'Last Name is required';
      formValid = false;
    }
    if (!data.get('email')) {
      newErrors.email = 'Email is required';
      formValid = false;
    }
    if (!data.get('password')) {
      newErrors.password = 'Password is required';
      formValid = false;
    }

    setErrors(newErrors);

    // If form is valid, make API call
    if (formValid) {
      axios.post("http://localhost:8081/signup", {
        fname: data.get('firstName'),
        lname: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password')
      }).then((res) => {
        navigate('/signin');
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/lohri-celebration-india_23-2151150944.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            padding: '30px',
            borderRadius: '15px',
            background: 'linear-gradient(135deg, rgba(255,204,0,0.8), rgba(211,47,47,0.8))',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            marginTop: '50px',
            marginLeft: '50px',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoComplete="family-name"
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={!!errors.password}
                    helperText={errors.password}
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  '&:hover': { backgroundColor: 'secondary.main' },
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/signin" variant="body2" sx={{ color: '#fff' }}>
                    Already have an account? SignIn
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 0, color: '#fff' }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
