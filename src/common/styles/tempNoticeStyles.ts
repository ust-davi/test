import { makeStyles } from '@mui/styles';
import theme from '../theme';

const useCommonNoticeStyles = makeStyles({
  container: {
    background: '#fff',
    width: '100%',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      overflowY: 'auto',
      height: '100vh',
    },
  },
  wrap: {
    width: '100%',
    maxWidth: '1158px',
    margin: '37px auto',
    paddingTop: '196px',
    [theme.breakpoints.down('md')]: {
      margin: '72px auto',
    },
  },
});

export default useCommonNoticeStyles;
