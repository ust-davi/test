import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from '../components/NavBar';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../common/theme';
import useCommonUserStyles from '../common/styles/tempUserStyles';
import { NoticeWriteRequest } from '../type';
import useNoticeWrite from '../hooks/useNoticeWrite';
import Footer from '../common/components/Footer';

const NoticeWrite = () => {
  const classes = useStyles();
  const userClasses = useCommonUserStyles();

  const [content, setcontent] = useState('');
  const [isImportantNotice, setIsImportantNotice] = useState(true);
  const [title, setTitle] = useState('');
  const [boardClassification, setBoardClassification] = useState('공지');
  const { mutateAsync } = useNoticeWrite();

  const history = useHistory();

  const onChangeContent = (event: any, editor: any) => {
    const data = editor.getData();
    setcontent(data);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onClickPostButton = () => {
    const notice: NoticeWriteRequest = {
      title,
      content,
    };

    mutateAsync(notice);
  };

  return (
    <div className={classes.container}>
      <NavBar />
      <main className={classes.wrap}>
        <Typography variant="h2" style={{ margin: '30px 0' }}>
          공지사항
        </Typography>
        <div className={classes.noticeWrap}>
          <div className={classes.typeWrap}>
            <div className={classes.typeBox}>
              <Typography className={classes.headText} variant="h5">
                구분
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="notice-write-selectbox" />
                  <Select
                    className={classes.selectBox}
                    labelId="notice-write-selectbox"
                    size="small"
                  >
                    <MenuItem value={10} selected>
                      공지
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={classes.noticeCheckWrap}>
              {/* <Checkbox
                type="dense"
                color="default"
                view="notice"
                label=""
                checked={isImportantNotice}
                onChange={() => setIsImportantNotice(!isImportantNotice)}
              /> */}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="중요 공지사항으로 등록"
              />
              <span>중요 공지사항으로 등록</span>
            </div>
          </div>
          <div className={classes.typeWrap}>
            <Typography className={classes.headText} variant="h5">
              제목
            </Typography>
            <TextField
              type="text"
              className={userClasses.textfield}
              variant="outlined"
              size="small"
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className={classes.typeWrap}>
            <Typography className={classes.headText} variant="h5">
              내용
            </Typography>
          </div>
          <CKEditor
            editor={ClassicEditor}
            onChange={onChangeContent}
            onReady={(editor: any) => {
              editor.editing.view.change((writer: any) => {
                writer.setStyle(
                  'height',
                  '200px',
                  editor.editing.view.document.getRoot(),
                );
              });
            }}
          />
        </div>
        <div className={classes.bottomButtonWrap}>
          <Button type="button" variant="contained">
            취소
          </Button>
          <Button type="button" variant="contained" onClick={onClickPostButton}>
            등록
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    background: '#fff',
    width: '100%',
    overflowX: 'hidden',

    '& .ck.ck-editor': {
      padding: '0 20px 20px',
    },

    '& .ck-editor__editable_inline': {
      minHeight: '889px',
    },

    '& .ck-editor__editable': {
      border: '1px solid var(--violet70) !important',
      borderRadius: '4px !important',
    },
  },
  wrap: {
    width: '100%',
    maxWidth: '1158px',
    margin: '37px auto',
    paddingTop: '196px',
    [theme.breakpoints.down('md')]: {
      margin: '72px auto',
      padding: '0 16px',
    },
    [theme.breakpoints.down(1158)]: {
      padding: '0 16px',
    },
  },
  noticeWrap: {
    border: '1px solid var(--grey30)',
  },
  typeWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    marginTop: '-1px',

    borderTop: '1px solid var(--grey30)',
    '& .bp3-popover-wrapper': {
      width: '100%',
    },
    '& .bp3-popover-wrapper > span': {
      width: '100%',
    },

    [theme.breakpoints.down('md')]: {
      '&:first-child': {
        display: 'block',
      },
    },
  },
  typeBox: {
    display: 'flex',
    alignItems: 'center',
  },
  selectBox: {
    width: '220px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    marginRight: '10px !important',
    wordBreak: 'keep-all',
  },
  noticeCheckWrap: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '41px',
  },
  bottomButtonWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px 0',
    '& > button': {
      marginLeft: '10px',
    },
  },
});

export default NoticeWrite;
