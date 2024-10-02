import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Rating } from '@mui/material';

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleRatingChange = (event, newValue) => {
    setFeedbackData({ ...feedbackData, rating: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedbackData);
    // Add your submission logic here
    alert('Thank you for your feedback!');
  };

  const pageStyle = {
    backgroundImage: `url('https://i.pinimg.com/564x/a2/d7/ae/a2d7ae1f09364e37dd5ded185d28135c.jpg')`, // Cultural background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <Box style={pageStyle}>
      <Container maxWidth="sm" style={formStyle}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#b22222', fontFamily: 'Playfair Display, serif' }}>
          Share Your Feedback
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={feedbackData.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={feedbackData.email}
            onChange={handleInputChange}
            required
          />

          <Typography component="legend" gutterBottom>
            Rate Your Experience
          </Typography>
          <Rating
            name="rating"
            value={feedbackData.rating}
            onChange={handleRatingChange}
            size="large"
          />

          <TextField
            label="Comments"
            name="comments"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            value={feedbackData.comments}
            onChange={handleInputChange}
          />

          <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
            Submit Feedback
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Feedback;
