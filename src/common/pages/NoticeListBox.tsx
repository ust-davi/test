import styled, { css } from 'styled-components';
import { useRef } from 'react';
import {
  Icon,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Theme,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { COLOR_GREY_0, COLOR_GREY_40, COLOR_GREY_60 } from '../styles/Color';

interface IProps {
  item: any;
  expanded: boolean;
  onClick(id: number): void;
}

const NoticeListBox = ({ item, expanded, onClick }: IProps) => {
  const classes = useStyles();

  const {
    title,
    date,
    reg_DATE: regDate,
    notice,
    contents,
    content,
    toggle,
    id,
  } = item;

  const heightRef = useRef<any>(null);

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick(id);
    }
  };

  return (
    <List
      component="li"
      expanded={expanded}
      onClick={handleClick}
      notice={notice}
      elevation={0}
    >
      <AccordionSummary
        ref={heightRef}
        expandIcon={
          <Icon
            baseClassName="material-icons-round"
            fontSize="large"
            sx={{ color: COLOR_GREY_40 }}
          >
            keyboard_arrow_down
          </Icon>
        }
        className={classes.listContent}
      >
        <TitleText notice={notice}>{title}</TitleText>
        <span className={classes.dateText}>{regDate}</span>
      </AccordionSummary>
      <AccordionDetails className={classes.listDetail}>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </AccordionDetails>
    </List>
  );
};

export default NoticeListBox;

const useStyles = makeStyles((theme: Theme) => ({
  listContent: {
    '& .MuiAccordionSummary-content': {
      flexDirection: 'column',
      margin: theme.spacing(15.25, 6.5),
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      flexDirection: 'column',
      margin: theme.spacing(15.25, 6.5),
    },
  },
  listDetail: {
    '&.MuiAccordionDetails-root': {
      color: COLOR_GREY_60,
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: '-0.025em',
      background: COLOR_GREY_0,
      padding: theme.spacing(15, 14),
    },
  },
  dateText: {
    fontSize: 16,
    fontWeight: 300,
    color: COLOR_GREY_40,
    padding: theme.spacing(2.5, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      textAlign: 'left',
    },
  },
}));

const List = styled<any>(Accordion)`
  list-style: none;
  margin: 0;
  ${({ notice }: any) =>
    notice
      ? css`
          background: #ffeda7;
        `
      : undefined};
  &.MuiAccordion-root {
    margin: 0px !important;
  }
  @media screen and (max-width: 768px) {
    &.MuiAccordion-root {
      flex-direction: column;
      align-items: baseline;
      padding: 0;
    }
  }
`;

const TitleText = styled.span<{ notice: any }>`
  width: 100%;
  font-size: 20px;
  color: #343a40;
  font-weight: 400;
  ${({ notice }) =>
    notice &&
    css`
      font-weight: 800;
    `};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
