import { makeStyles } from '@mui/styles';
import { COLOR_MINT_80, COLOR_WHITE } from './Color';

const useCommonEventStyle = makeStyles({
  container: {
    background: COLOR_WHITE,
    width: '100%',
  },
  wrap: {
    width: '100%',
    maxWidth: '1158px',
    margin: 'auto',
    padding: '220px 0 126px',
    overflow: 'hidden',
  },
  infoWrap: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    '& > *': {
      marginRight: '10px',
    },
  },
  list: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '0',
    margin: '0',
  },
  status: {
    background: `${COLOR_MINT_80} !important`,
    '& .MuiChip-label': {
      padding: 0,
      color: COLOR_WHITE,
    },
  },
});

export default useCommonEventStyle;
