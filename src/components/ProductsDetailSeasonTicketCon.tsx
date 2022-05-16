import {
  Button,
  Grid,
  Box,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableSortLabel,
  TextField,
  Icon,
} from '@mui/material';

import {
  COLOR_GREY_0,
  COLOR_GREY_10,
  COLOR_GREY_5,
  COLOR_GREY_20,
  COLOR_WHITE,
  COLOR_GREY_40,
  COLOR_GREY_60,
} from '../common/styles/Color';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import { ProductsDetailSeasonTicketData } from './ProductsData';
import SelectInput from '../common/components/SelectInput';

const buttons = [
  {
    id: 1,
    label: '새로입력',
  },
  {
    id: 2,
    label: '삭제',
  },
  {
    id: 3,
    label: '저장',
  },
];

const ProductsDetailSeasonTicketCon = () => {
  const classes = useStyles();

  return (
    <>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>
              <TableSortLabel
                active
                className={classes.tableSortLabel}
                IconComponent={(props) => (
                  <Icon {...props}>keyboard_arrow_down</Icon>
                )}
              >
                구분
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <TableSortLabel
                active
                className={classes.tableSortLabel}
                IconComponent={(props) => (
                  <Icon {...props}>keyboard_arrow_down</Icon>
                )}
              >
                성별
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <TableSortLabel
                active
                className={classes.tableSortLabel}
                IconComponent={(props) => (
                  <Icon {...props}>keyboard_arrow_down</Icon>
                )}
              >
                카테고리
              </TableSortLabel>
            </TableCell>
            <TableCell
              align="center"
              className={clsx(classes.tableCell, classes.pdTableCell)}
            >
              상품
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              횟수
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <TableSortLabel
                active
                className={classes.tableSortLabel}
                IconComponent={(props) => (
                  <Icon {...props}>keyboard_arrow_down</Icon>
                )}
              >
                금액
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              소요시간
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <TableSortLabel
                active
                className={classes.tableSortLabel}
                IconComponent={(props) => (
                  <Icon {...props}>keyboard_arrow_down</Icon>
                )}
              >
                등록일자
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <TableSortLabel
                active
                className={classes.tableSortLabel}
                IconComponent={(props) => (
                  <Icon {...props}>keyboard_arrow_down</Icon>
                )}
              >
                상태
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProductsDetailSeasonTicketData.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.type}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.sex}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.category}
                </Typography>
              </TableCell>
              <TableCell
                className={clsx(classes.tableCell, classes.pdTableCell)}
              >
                <Typography className={classes.tableCellText}>
                  {row.pdName}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.num}회
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.price.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.time}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  {row.date}
                </Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography className={classes.tableCellText}>
                  <SelectInput
                    size="small"
                    placeholder={row.status[0].value}
                    menuItems={row.status}
                    className={classes.statusSelect}
                    menuItmesClassName={classes.statusMenuItem}
                  />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.registrationBox}>
        <Typography variant="h6" fontWeight={500} pb={16.75}>
          상품 등록 - 네일아트
        </Typography>
        <Grid container columnSpacing={37.5} rowSpacing={15}>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              구분
            </Typography>
            <SelectInput
              size="small"
              placeholder="선택"
              className={classes.selectInput}
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              상품
            </Typography>
            <SelectInput
              size="small"
              placeholder="선택"
              className={classes.selectInput}
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              판매여부
            </Typography>
            <SelectInput
              size="small"
              className={classes.selectInput}
              placeholder="판매중"
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              횟수
            </Typography>
            <TextField
              size="small"
              type="number"
              className={classes.numInput}
            />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography width={100} mr={10}>
              금액
            </Typography>
            <TextField
              size="small"
              type="number"
              className={classes.priceInput}
            />
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          justifyContent="flex-end"
          spacing={3}
          mt={15}
        >
          {buttons.map((item) => (
            <Grid item key={item.id}>
              <Button
                variant="contained"
                disableElevation={
                  !(item.label === buttons[0].label) ? true : undefined
                }
                className={
                  item.label === buttons[0].label
                    ? classes.darkgreyBtn
                    : classes.greyBtn
                }
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={15}>
        <Button variant="contained" className={classes.darkgreyBtn}>
          카테고리추가
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: any) => ({
  table: {
    margin: '13px 0 30px 0',
    tableLayout: 'fixed',
  },
  tableCell: {
    '&&': {
      position: 'relative',
      width: 'calc( 100% - 200px )',
      height: 50,
      border: `1px solid ${COLOR_GREY_10}`,
      fontSize: 16,
      padding: '0 11px',
      fontWeight: 400,
      whiteSpace: 'pre-line',
    },
  },
  pdTableCell: {
    '&&': {
      width: 617,
    },
  },
  tableCellText: {
    '&&': {
      fontWeight: 400,
    },
  },
  tableHead: {
    '&&': {
      width: 200,
      backgroundColor: COLOR_GREY_0,
      '& th': {
        fontWeight: 700,
      },
    },
  },
  tableSortLabel: {
    '&.MuiTableSortLabel-root': {
      width: '100%',
      position: 'relative',
      justifyContent: 'center',
    },
    '& .MuiTableSortLabel-icon': {
      position: 'absolute',
      right: 0,
    },
  },
  numInput: {
    '&.MuiFormControl-root': {
      width: 199,
      height: 40,
      '& .MuiOutlinedInput-root': {
        background: COLOR_WHITE,
      },
    },
  },
  priceInput: {
    '&&': {
      width: 199,
      height: 40,
      '& .MuiOutlinedInput-root': {
        background: COLOR_WHITE,
      },
    },
  },
  statusSelect: {
    '& .MuiSelect-select': {
      fontSize: 16,
      textAlign: 'left',
      fontWeight: 400,
      padding: 0,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-icon': {
      right: 0,
    },
  },
  statusMenuItem: {
    '&.MuiMenuItem-root': {
      fontWeight: 400,
    },
  },
  selectInput: {
    '&&': {
      width: 199,
      height: 40,
      background: COLOR_WHITE,
    },
  },
  registrationBox: {
    width: '100%',
    background: COLOR_GREY_0,
    marginTop: 69,
    padding: '32.5px 30px',
    border: `0.5px solid ${COLOR_GREY_20} `,
  },
  rightBox: {
    '&&': {
      display: 'flex',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      top: 108,
    },
  },
  darkgreyBtn: {
    '&.MuiButton-root': {
      height: 40,
      background: COLOR_GREY_60,
      color: COLOR_GREY_0,
      fontSize: 14,
      '&:hover': {
        background: COLOR_GREY_60,
        color: COLOR_GREY_0,
      },
    },
  },
  greyBtn: {
    '&.MuiButton-root': {
      height: 40,
      background: COLOR_GREY_5,
      color: COLOR_GREY_40,
      fontSize: 14,
      '&:hover': {
        background: COLOR_GREY_5,
        color: COLOR_GREY_40,
      },
    },
  },
}));

export default ProductsDetailSeasonTicketCon;
