import React from "react";
import { Typography, AppBar, Button, CssBaseline, Grid, Toolbar, Container, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { PhotoCamera } from '@mui/icons-material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import BackgroundDiv from './BackgroundDiv';

const theme = createTheme();

const Icon = styled(PhotoCamera)(({ theme }) => ({
  marginRight: '20px'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '40px'
}));

const CardGrid = styled(Container)(({ theme }) => ({
  padding: '20px 0'
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%' // 16:9 aspect ratio
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  flexGrow: 1
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Icon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <BackgroundDiv>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone. This is a photo album and I'm trying to make this sentence as long as possible so that we can see how does it look like on the screen.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <StyledButton variant="contained" color="primary">
                    View Album
                  </StyledButton>
                  <StyledButton variant="outlined" color="primary">
                    Secondary Action
                  </StyledButton>
                </Grid>
              </Grid>
            </div>
          </Container>
        </BackgroundDiv>
        <CardGrid maxWidth="md">
          <Grid container spacing={4}>
            {[...Array(6)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMediaStyled
                    image={`https://source.unsplash.com/featured/?nature,water`}
                    title="Image title"
                  />
                  <CardContentStyled>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this to describe the content.
                    </Typography>
                  </CardContentStyled>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="secondary">Edit</Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </CardGrid>
      </main>
    </ThemeProvider>
  );
};

export default App;
