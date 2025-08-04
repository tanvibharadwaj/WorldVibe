import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const teamMembers = [
  {
    initials: 'PP',
    name: 'Prveen Panday',
    title: 'Founder & CEO',
    description:
      'With over 10 years in digital publishing, Priya leads our vision of democratizing content creation.',
  },
  {
    initials: 'PP',
    name: 'Pyoush Panday',
    title: 'CTO of InternNexux',
    description:
      'A seasoned editor with expertise in curating high-quality articles across diverse topics.',
  },
  {
    initials: 'VM',
    name: 'Varsha Mishra',
    title: 'Community Manager',
    description:
      'Passionate about building connections and fostering meaningful discussions within our community.',
  },
];

const Teams = () => {
  return (
    <Box sx={{ backgroundColor: '#eceaeaff', py: 8, pb: 5 }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ mb: 5 }}
        >
          The passionate individuals behind BlogSpace who work tirelessly to make this platform amazing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid size={{xs : 12, sm : 6, md : 4}} key={index}>
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                  boxShadow: 2,
                  maxWidth: 370,
                }}
              >
                <Avatar
                  sx={{
                    mx: 'auto',
                    bgcolor: '#f3e8ff',
                    color: '#a855f7',
                    width: 80,
                    height: 80,
                    fontSize: 24,
                    fontWeight: 'bold',
                    mb: 2,
                  }}
                >
                  {member.initials}
                </Avatar>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#a855f7', mb: 2 }}
                  >
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Teams;
