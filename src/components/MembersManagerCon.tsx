import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  TableContainer,
  Checkbox,
  Box,
  Button,
} from '@mui/material';
import {
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_RED_60,
  COLOR_UST_60,
} from '../common/styles/Color';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { MembersManagerData } from './MembersData';
import { ChangeEvent, useState } from 'react';

const MembersManagerCon = () => {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onClickAdminButton = () => {
    history.push(`/shopManagement/members/general/detail`);
  };

  return (
    <>
      <Typography fontWeight={400} py={10}>
        총{' '}
        <Typography component="span" color={COLOR_RED_60} fontWeight={400}>
          14
        </Typography>
        명
      </Typography>
      <Box className={classes.rightBox}>
        <Button color="default" variant="contained">
          등록
        </Button>
        <Button color="default" variant="contained">
          삭제
        </Button>
      </Box>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center" className={classes.tableCell}>
                <Checkbox
                  color="default"
                  className={classes.checkBox}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                이름
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                가입채널
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                휴대폰 번호
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                사업부
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                팀
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                권한
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                최근접속일
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MembersManagerData.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className={classes.tableCell}>
                  <Checkbox
                    color="default"
                    className={classes.checkBox}
                    onChange={handleChange}
                  />
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.signUpChannel}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.phone}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.business}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.team}
                  </Typography>
                </TableCell>
                <TableCell
                  align="center"
                  className={clsx(classes.ellipsis, classes.tableCell)}
                >
                  <Typography className={classes.tableCellText}>
                    {row.authority}
                  </Typography>
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  <Typography className={classes.tableCellText}>
                    {row.recentLogin}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={10}
          shape="rounded"
          color="primary"
          className={classes.pagination}
        />
      </TableContainer>
    </>
  );
};

const useStyles = makeStyles((theme: any) => ({
  tableContainer: {
    margin: '9px 0',
  },
  tableHead: {
    '&&': {
      backgroundColor: COLOR_GREY_5,
    },
    '&& th': {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  tableCell: {
    '&&': {
      wordBreak: 'keep-all',
      padding: '14px 15px',
      border: `1px solid ${COLOR_GREY_10}`,
    },
  },
  rightBox: {
    '&&': {
      display: 'flex',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 69,
      '& .MuiButton-root': {
        marginLeft: 14,
      },
    },
  },
  checkBox: {
    '&&': {
      padding: 0,
    },
  },
  tableCellText: {
    '&&': {
      fontSize: 16,
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  pagination: {
    paddingTop: theme.spacing(15),
    '&& .MuiPagination-ul ': {
      justifyContent: 'center',
    },
  },
  linkText: {
    '&&': {
      textDecoration: 'underline',
      cursor: 'pointer',
      color: COLOR_UST_60,
    },
  },
  errorText: {
    color: COLOR_RED_60,
  },
  ellipsis: {
    maxWidth: 211,
    margin: '0 auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default MembersManagerCon;
