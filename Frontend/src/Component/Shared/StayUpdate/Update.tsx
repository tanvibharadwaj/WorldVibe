import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const Update = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      // Add your API call or logic here
      setEmail('');
    }
  };

  return (
    <Box sx={{ backgroundColor: '#fafafa', py: 6 }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Subscribe to our newsletter and never miss an article. Get the latest insights delivered directly to your inbox.
        </Typography>
        <Box sx={{ display: 'flex', mt: 3, gap: 2, justifyContent: 'center' }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '60%' }}
          />
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(45deg, #DA62C4, #9333EA)',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: 2,
              padding: '10px 24px',
              px: 4,
                '&:hover': {
                    background: 'linear-gradient(45deg, #9333EA, #DA62C4)',
                },
            }}
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Update;
