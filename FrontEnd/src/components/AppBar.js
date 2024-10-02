import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FlowerIcon from '@mui/icons-material/LocalFlorist'; // Import your desired icon

const pages = ['Signup', 'Signin'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    const page = event.currentTarget.getAttribute('cp');
    if (page === 'Signin') {
      navigate('/signin');
    } else if (page === 'Signup') {
      navigate('/signup');
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#b22222',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        borderBottom: '2px solid #FF2E63',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar disableGutters>
          {/* Logo on the left */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, marginLeft: '20px' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6ojepi79ShCdIamoZZnYspY1meO-auIICw&s"
              alt="Logo"
              style={{ width: '40px', height: '40px' }}
            />
          </Box>

          {/* Title in the center */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: '2.5rem',
              letterSpacing: '0rem',
              color: '#F9F9F9',
              textDecoration: 'none',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}
          >
            IndiaInsight
          </Typography>

          {/* Right-side container for Signup and Signin */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#F9F9F9',
                  display: 'block',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#FF2E63',
                    color: '#ffffff',
                    transition: '0.4s',
                    borderRadius: '5px',
                  },
                }}
                cp={page}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Profile icon */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* Avatar or user icon placeholder */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: '#0D1B2A',
                      fontWeight: 'bold',
                      '&:hover': {
                        color: '#FF2E63',
                      },
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
