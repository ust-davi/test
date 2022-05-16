import { useLocation, useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  MenuList,
  Divider,
  MenuItem,
  Typography,
  ListItemIcon,
  Icon,
} from '@mui/material';
import clsx from 'clsx';

import { useStyles } from '../styles';
import {
  COLOR_GREY_10,
  COLOR_GREY_50,
  COLOR_WHITE,
} from '../common/styles/Color';

const sidebarItems = [
  {
    id: 1,
    text: '샵 운영 지표',
    icon: 'home',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/home.svg',
    link: '/shopManagement/shopoperation',
  },
  {
    id: 2,
    text: '매출',
    icon: 'chart',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/chart.svg',
    link: '/shopManagement/sales',
  },
  {
    id: 3,
    text: '예약',
    icon: 'calendar',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/calendar.svg',
    link: '/shopManagement/reservation',
  },
  {
    id: 4,
    text: '회원',
    icon: 'people',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/people.svg',
    link: '/shopManagement/members',
  },
  {
    id: 5,
    text: '상품',
    icon: 'product',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/product.svg',
    link: '/shopManagement/products',
  },
  {
    id: 6,
    text: '이벤트',
    icon: 'gift-box',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/gift-box.svg',
    link: '/shopManagement/event',
  },
  {
    id: 7,
    text: '리뷰',
    icon: 'review',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/review.svg',
    link: '/shopManagement/review?tab=row&page=1&startDate=2021-01-10&endDate=2022-01-10',
  },
  {
    id: 8,
    text: '1:1 문의',
    icon: 'annotation',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/annotation.svg',
    link: '/shopManagement/qna',
  },
  {
    id: 9,
    text: '정산',
    icon: 'receipt',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/receipt.svg',
    link: '/shopManagement/calculate',
  },
  {
    id: 10,
    text: '광고',
    icon: 'advertising',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/advertising.svg',
    link: '/shopManagement/ad',
  },
  {
    id: 11,
    text: '샵 설정',
    icon: 'cog',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/cog.svg',
    link: '/shopManagement/shopsetting',
  },
];

const superadminItems = [
  {
    id: 1,
    text: '서비스 관리',
    icon: 'service',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/community.svg',
    link: '/shopManagement/servicemanagement',
  },
  {
    id: 2,
    text: '영업 관리',
    icon: 'presentation',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/presentation.svg',
    link: '/shopManagement/salesmanagement',
  },
  {
    id: 3,
    text: '마케팅 도구',
    icon: 'martketing',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/martketing.svg',
    link: '/shopManagement/marketingtool',
  },
  {
    id: 4,
    text: '커뮤니티 관리',
    icon: 'community',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/community.svg',
    link: '/shopManagement/communitymanagement',
  },
  {
    id: 5,
    text: '고객센터',
    icon: 'write',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/write.svg',
    link: '/shopManagement/serviceenter',
  },
];

const channeltems = [
  {
    id: 1,
    subtext: 'KaKao Channel',
    text: '사장님 전용 채팅방',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/kakaotalk.svg',
  },
  {
    id: 2,
    subtext: 'KaKao Channel',
    text: '맨들맨들 STORY',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/kakaoch.svg',
  },
  {
    id: 3,
    subtext: '네이버 카페',
    text: '맨들맨들 카페',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/navercafe.svg',
  },
  {
    id: 4,
    subtext: '맨들맨들 소식',
    text: 'Instargram',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/instagram.svg',
  },
  {
    id: 5,
    subtext: '맨들맨들 소식',
    text: 'Facebook',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/facebook.svg',
  },
  {
    id: 6,
    subtext: '맨들맨들 소식',
    text: 'Youtube',
    src: 'https://mendlemendle.com/images/renewal_mdmd/icon/youtube.svg',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const history = useHistory();
  const active = location.pathname;

  const handleClick = (path: string) => {
    history.push(path);
  };

  const isActiveMenu = (link: string) => {
    const pathname = active.split('/')[2];
    const linkname = link.split('/')[2].split('?')[0];
    const isActiveMenu = pathname === linkname;

    return isActiveMenu;
  };

  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <MenuList
        sx={{
          '&.MuiList-root': {
            py: 9.225,
          },
        }}
      >
        {sidebarItems?.map((item: any) => {
          return (
            <MenuItem
              key={item.id}
              disabled={!!(item.text === '광고' || item.text === '정산')}
              onClick={() => {
                handleClick(item.link);
              }}
              className={clsx(
                classes.adminMenu,
                isActiveMenu(item.link) && classes.active,
              )}
            >
              <img
                src={item.src}
                alt={item.icon}
                style={{ marginRight: 12.6 }}
              />
              <Typography variant="h6" fontWeight={400}>
                {item.text}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
      <Divider color={COLOR_GREY_50} />
      <MenuList
        sx={{
          '&.MuiList-root': {
            py: 20.83,
          },
        }}
      >
        {superadminItems?.map((item) => {
          return (
            <MenuItem
              key={item.id}
              disabled={!(item.text === '서비스 관리')}
              onClick={() => {
                handleClick(item.link);
              }}
              className={clsx(
                classes.adminMenu,
                active.includes(item.link) && classes.active,
              )}
            >
              <img
                src={item.src}
                alt={item.icon}
                style={{ marginRight: 12.6 }}
              />
              <Typography variant="h6" fontWeight={400}>
                {item.text}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
      <MenuList
        sx={{
          width: '90%',
          border: '1px solid #e1e1e3',
          borderRadius: '20px',
          overflow: 'hidden',
          m: '0 auto 117px auto',
        }}
      >
        {channeltems?.map((item: any) => {
          return (
            <div key={item.id}>
              <MenuItem>
                <Grid container alignItems="center">
                  <Grid xs={3} item display="flex">
                    <img
                      src={item.src}
                      alt={item.icon}
                      style={{ marginRight: 12.6 }}
                    />
                  </Grid>
                  <Grid xs={8} item>
                    <Typography fontSize={14} fontWeight={400} color="#D0D1D2">
                      {item.subtext}
                    </Typography>
                    <Typography fontSize={14} color={COLOR_WHITE}>
                      {item.text}
                    </Typography>
                  </Grid>
                  <Grid xs={1} item>
                    <ListItemIcon>
                      <Icon sx={{ color: COLOR_GREY_10 }}>ios_share</Icon>
                    </ListItemIcon>
                  </Grid>
                </Grid>
              </MenuItem>
              {item.id !== 6 && <Divider color={COLOR_GREY_50} />}
            </div>
          );
        })}
      </MenuList>
    </div>
  );
};

export default Sidebar;
