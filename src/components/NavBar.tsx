import {
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Avatar,
} from '@mui/material';
import { useStyles } from '../styles';
import InfoIcon from '@mui/icons-material/Info';

import { memo, SyntheticEvent, useState, useMemo } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { COLOR_GREY_70, COLOR_WHITE } from '../common/styles/Color';
import Cookies from 'universal-cookie';
import useUserInfo from '../common/hooks/useUserInfo';
import useLogout from '../common/hooks/useLogout';

const menuItems = [
  {
    id: '1',
    name: '고객센터',
  },
];

const gnbMenuItems = [
  {
    id: 1,
    name: '이벤트/혜택',
    link: '/event',
  },
  {
    id: 2,
    name: '입점 문의',
    link: '/store',
  },
  {
    id: 3,
    name: '샵 관리',
    link: '/shopManagement/shopoperation',
  },
];

interface INavBarProps {
  searchInput?: boolean;
}

const NavBar = ({ searchInput }: INavBarProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { mutateAsync } = useLogout();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const cookies = new Cookies();
  const { data: userInfoData, isLoading: isUserInfoLoading } = useUserInfo();

  const path = useMemo(() => location.pathname.split('/')[1], [location]);

  const activeMenu = useMemo(() => {
    const filterMenu = gnbMenuItems.filter((menu) => menu.link.includes(path));
    return filterMenu.length > 0 ? filterMenu[0].id : 0;
  }, [path]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickLoginButton = () => {
    history.push('/login');
  };

  const onClickSignupButton = () => {
    history.push('/termsAgreement');
  };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onClickLogoutButton = () => {
    mutateAsync(cookies.get('accessToken'), {
      onSuccess: () => {
        handleClose();
        history.go(0);
      },
    });
  };

  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.headerWrap}>
        <Box component="h1" className={classes.logoArea}>
          <Link to="/">
            <img
              src="https://mendlemendle.com/images/renewal_mdmd/assets/logo-web-admin.svg"
              width={272}
              height={50}
              alt="logo"
              className={classes.logo}
            />
          </Link>
        </Box>

        <Box className={classes.serviceMenu}>
          {/* <Box component="ul" className={classes.menuList}>
            {menuItems.map((item) => (
              <Typography
                component="li"
                key={item.id}
                sx={{ ml: 4 }}
                className={classes.menuItem}
              >
                {item.name}
              </Typography>
            ))}
            <Typography
              component="li"
              sx={{ ml: 4 }}
              className={classes.menuItem}
            >
              아카데미
            </Typography>
          </Box> */}
          {isUserInfoLoading ? null : userInfoData?.data &&
            userInfoData?.status === 200 ? (
            <Button className={classes.memberName} onClick={handleClickOpen}>
              <strong>{userInfoData.data.name}</strong>님
              <Avatar
                src={
                  userInfoData.data.profile_IMG
                    ? userInfoData.data.profile_IMG
                    : ''
                }
                sx={{ ml: 1 }}
                alt={`${userInfoData.data.name}님`}
              />
            </Button>
          ) : (
            <Box className={classes.myMenu}>
              <Button
                variant="outlined"
                onClick={onClickLoginButton}
                sx={{
                  color: COLOR_GREY_70,
                  border: `1px solid ${COLOR_GREY_70}`,
                  '&:hover': {
                    backgroundColor: COLOR_WHITE,
                    color: COLOR_GREY_70,
                    border: `1px solid ${COLOR_GREY_70}`,
                  },
                }}
              >
                로그인
              </Button>
              <Button
                variant="contained"
                color="default"
                onClick={onClickSignupButton}
              >
                회원가입
              </Button>
            </Box>
          )}
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle id="alert-dialog-title" sx={{ color: '#4A4B57' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InfoIcon sx={{ color: '#B591FE' }} />
              안내
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ fontWeight: 400 }}
            >
              로그아웃 하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between' }}>
            <Button onClick={handleClose} sx={{ color: '#4A4B57' }}>
              취소
            </Button>
            <Button
              onClick={onClickLogoutButton}
              autoFocus
              variant="contained"
              disableElevation
              color="primary"
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>

        <Box component="nav" className={classes.gnb}>
          <Tabs
            value={activeMenu}
            onChange={handleChange}
            className={classes.menuList}
            component="ul"
            TabIndicatorProps={{
              style: { transition: 'none' },
            }}
          >
            {gnbMenuItems?.map((item) => (
              <Tab
                component={Link}
                key={item.id}
                value={item.id}
                className={classes.menuItem}
                id={`simple-tab-${item.id}`}
                to={item.link}
                label={
                  <Typography variant="h5" className={classes.menuItem}>
                    {item.name}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(NavBar);
