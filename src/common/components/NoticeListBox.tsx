import styled, { css } from 'styled-components';

import { useEffect, useRef, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';
import theme from '../theme';
import { useLocation } from 'react-router-dom';

const NoticeListBox = ({ item, toggleIdx }: any) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const { seq, title, content, reg_DATE: regDate } = item;

  const heightRef = useRef<any>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const idx = new URLSearchParams(useLocation().search).get('idx');

  useEffect(() => {
    if (idx && parseInt(idx, 10) === seq) {
      setOpen(true);
      setScrollY(heightRef.current?.offsetHeight * toggleIdx + 293);

      window.scrollTo({
        top: scrollY,
        behavior: 'smooth',
      });
    }
  }, [item, scrollY, idx]);

  return (
    <ListWrap
      // notice
      sx={{
        width: '100%',
        padding: 0,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} ref={heightRef}>
        <ListItemText primary={<TitleText notice>{title}</TitleText>} />
        <ListItemText
          style={{ textAlign: 'right' }}
          primary={<span className={classes.dateText}>{regDate}</span>}
        />
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        style={{ background: '#fff' }}
      >
        <List component="div" style={{ padding: '34px 24px' }}>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </List>
      </Collapse>
    </ListWrap>
  );
};

export default NoticeListBox;

const useStyles = makeStyles({
  dateText: {
    fontSize: '18px',
    color: '#343a40',
    fontFamily: 'var(--font-primary)',
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
      textAlign: 'left',
    },
  },
});

const ListWrap = styled<any>(List)`
  ${({ notice }: any) =>
    notice
      ? css`
          background: #ffeda7;
        `
      : undefined};
  & > div {
    padding: 49px 20px;
  }
  @media screen and (max-width: 768px) {
    & > div {
      flex-direction: column;
      align-items: baseline;
      padding: 22px;
    }
  }
`;

const TitleText = styled.span<{ notice: any }>`
  font-size: 21px;
  color: #343a40;
  font-family: var(--font-primary);
  ${({ notice }) =>
    notice &&
    css`
      font-weight: 800;
    `};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
