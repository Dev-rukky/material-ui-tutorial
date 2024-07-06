import { styled } from '@mui/material/styles';

const BackgroundDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
  background: theme.palette.background.paper,
}));

export default BackgroundDiv;
