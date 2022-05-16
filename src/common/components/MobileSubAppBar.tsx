import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, TypographyVariant } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { COLOR_BLACK, COLOR_WHITE } from '../styles/Color';

interface MobilesubAppBarProps {
  title: string;
  fontType: TypographyVariant;
}

const MobileSubAppBar = ({ title, fontType }: MobilesubAppBarProps) => {
  const history = useHistory();
  const classes = useStyles();

  const onClickBackButton = () => {
    history.goBack();
  };

  return (
    <AppBar className={classes.navbarWrap} position="static">
      <Toolbar>
        <ArrowBackIosIcon
          className={classes.icons}
          onClick={onClickBackButton}
        />
        <div className={classes.title}>
          <Typography variant={fontType}>{title}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MobileSubAppBar;

const useStyles = makeStyles({
  navbarWrap: {
    height: '56px',
    borderRadius: '0',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: COLOR_WHITE,
    color: COLOR_BLACK,
  },
  icons: {
    color: COLOR_BLACK,
  },
  title: {
    position: 'relative',
    margin: '0 auto',
    left: '-12px',
  },
});
