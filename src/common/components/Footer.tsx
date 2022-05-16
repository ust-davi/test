import React from 'react';
import { Link } from 'react-router-dom';

import FooterLink from './FooterLink';
import { SNS_URL } from '../constants';
import { makeStyles } from '@mui/styles';
import theme from '../theme';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div
        style={{
          width: '100%',
          maxWidth: 1158,
        }}
      >
        <div className={classes.footerWrap}>
          <Link to="/">
            <img
              src="https://www.mendlemendle.com/images/renewal_mdmd/logo-web-admin-white.svg"
              alt="logo-white"
            />
          </Link>
          <div
            className={classes.footerText}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/">회사소개</Link>
            <Link to="/">서비스 이용약관</Link>
            <Link to="/">개인정보 보호정책</Link>
            <Link to="/">입점 문의</Link>
          </div>
        </div>
        <div className={classes.footerText}>
          <div className={classes.footerBreak}>
            (주)유에스티 | 대표 방민규 | 사업자등록번호 124-87-20754 |
            통신판매업신고번호 2018-화성동부-0093
            <br /> 경기도 화성시 동탄산단4길 9-16 | 개인정보책임자 : ktk@ust.co
            | 고객 문의 및 제휴: mendlemendle@ust.co
            <br />
            (주)유에스티는 통신판매중개자로 예약, 이용 및 환불 등과 관련한
            의무와 책임은 각 판매자에게 있습니다.
          </div>
          <div className={classes.copyright}>
            <div className={classes.footerLinks}>
              <FooterLink
                href={SNS_URL.FACEBOOK}
                ico="https://mendlemendle.com/images/renewal_mdmd/icon/facebook-icon.svg"
                alt="facebook"
              />
              <FooterLink
                href={SNS_URL.INSTAGRAM}
                ico="https://mendlemendle.com/images/renewal_mdmd/icon/instagram-icon.svg"
                alt="instagram"
              />
              <FooterLink
                href={SNS_URL.NAVER_CAFE}
                ico="https://mendlemendle.com/images/renewal_mdmd/icon/navercafe-icon.svg"
                alt="navercafe"
              />
            </div>
            <span
              style={{ fontWeight: 700, fontFamily: 'var(--font-secondary)' }}
            >
              Copyright ⓒ UST Corp. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    width: '100%',
    height: '396px',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#495057',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding: '50px 10px',
    },
  },
  footerText: {
    fontWeight: 500,
    color: 'var(--white)',
    fontSize: '20px',

    '& > a': {
      color: 'var(--white)',
      textDecoration: 'none',
      fontWeight: 700,
      width: '50%',
      marginBottom: '13px',
    },

    [theme.breakpoints.down('lg')]: {
      fontWeight: 500,
      color: 'var(--white)',
      fontSize: '20px',

      '& > a': {
        color: 'var(--white)',
        textDecoration: 'none',
        fontWeight: 700,
        width: '50%',
        marginBottom: '13px',
      },
    },
    [theme.breakpoints.down(640)]: {
      fontSize: '1rem',

      '& > a': {
        lineHeight: '2rem',
        marginBottom: '0',
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      margin: '0',

      '& > a': {
        lineHeight: '2rem',
        marginBottom: '0',
      },
    },
  },
  footerBreak: {
    margin: '21px 0 57px 0',
    paddingTop: '8px',
    borderTop: '1px solid var(--white)',
    wordBreak: 'keep-all',
    fontFamily: 'var(--font-secondary)',

    [theme.breakpoints.down(640)]: {
      margin: '21px 0 57px 0',
      paddingTop: '8px',
      paddingBottom: '0',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  },
  footerLinks: {
    position: 'absolute',
    left: '0',
    color: 'var(--white)',
    fontWeight: 700,
    lineHeight: 'normal',
    fontSize: 'var(--font_size_caption_small)',
    letterSpacing: 'var(--letter_spacing_caption_small)',

    '& > a': {
      display: 'inline-block',
      color: 'var(--white)',
      textDecoration: 'none',
      marginRight: '1rem',
      textAlign: 'center',
    },

    '& > a:last-of-type': {
      marginRight: 0,
    },

    '& > a:hover': {
      color: 'var(--blue70)',
      textDecoration: 'none',
    },

    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    },

    [theme.breakpoints.down('lg')]: {
      position: 'absolute',
    },
  },
  footerWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      '& > a > img': {
        width: '50%',
        maxWidth: '200px',
        paddingBottom: '20px',
      },
      display: 'block',
      paddingBottom: '20px',
    },
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    lineHeight: 'normal',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      '& > span': {
        display: 'none',
      },
    },
  },
});
