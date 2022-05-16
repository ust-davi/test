import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { Paper, Container, Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { COLOR_GREY_10 } from '../common/styles/Color';
import Footer from '../common/components/Footer';

const SubLayout = ({ children }: any) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <NavBar />
      <Paper elevation={0} className={classes.pager}>
        <Sidebar />
        <div className={classes.box}>{children}</div>
      </Paper>
      <Footer />
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&&': {
      width: '100%',
      minWidth: 1920,
      padding: 0,
      borderRadius: 0,
      marginTop: 150,
    },
  },
  pager: {
    '&&': {
      display: 'flex',
      padding: 0,
      background: COLOR_GREY_10,
    },
  },
  box: {
    width: 'calc(100% - 250px)',
    padding: theme.spacing(25, 14.5, 16, 14.5),
  },
}));

export default SubLayout;
