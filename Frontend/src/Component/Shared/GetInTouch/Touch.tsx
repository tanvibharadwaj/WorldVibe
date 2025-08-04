import { Box, Container, Typography, Stack, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Touch = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f4ff', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          Have questions, suggestions, or just want to say hello? We'd love to hear from you.
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon sx={{ color: '#6366F1' }} />
            <Link
              href="mailto:info@blogspace.com"
              underline="none"
              color="textPrimary"
            >
              info@blogspace.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon sx={{ color: '#EC4899' }} />
            <Typography color="textPrimary">+91 12345 67890</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Touch;
