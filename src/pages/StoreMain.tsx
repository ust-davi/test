import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import Layout from './Layout';
import { Button, Typography } from '@mui/material';

const boxItems = [
  {
    id: 1,
    text: '내 샵 정보와 서비스, 이벤트 정보를 쉽게 등록하고 관리할 수 있어요.',
  },
  {
    id: 2,
    text: '고객의 예약 상태를 한 눈에 확인할 수 있어요.',
  },
  {
    id: 3,
    text: '커뮤니티에서 직접 고객과 소통하고 내 샵 방문을 유도할 수 있어요.',
  },
];

const fieldList = [
  {
    id: 1,
    text: '네일아트',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 2,
    text: '피부관리 에스테틱',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 3,
    text: '속눈썹',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 4,
    text: '태닝',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 5,
    text: '왁싱',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 6,
    text: '아이브로우',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 7,
    text: '맛사지',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 8,
    text: '발관리',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 9,
    text: '체형관리',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
];

const stepList = [
  {
    id: 1,
    text: '회원 가입',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 2,
    text: '맨들맨들 샵 승인',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
  {
    id: 3,
    text: '맨들맨들에서 예약받기',
    imgSrc: 'https://www.mendlemendle.com/images/renewal_meme/circle.png',
  },
];

const StoreMain = () => {
  const history = useHistory();

  const onClickJoinBtn = () => {
    history.push('/store/form');
  };

  return (
    <Layout shopManagement={false}>
      <Typography variant="h2">입점 문의</Typography>

      <InnerBanner>
        <Typography variant="h2">
          맨들맨들 입점하고
          <br />더 많은 고객을 만나보세요.
        </Typography>
        <JoinBtn type="default" view="filled" color="primary">
          입점 신청하기
        </JoinBtn>
      </InnerBanner>

      <Typography variant="h3" style={{ textAlign: 'center' }}>
        맨들맨들이 좋은 3가지 이유
      </Typography>
      <BoxList>
        {boxItems?.map((item) => (
          <Box key={item.id}>
            <Typography variant="h5">{item.text}</Typography>
          </Box>
        ))}
      </BoxList>

      <Typography variant="h3" style={{ textAlign: 'center' }}>
        입점 분야
      </Typography>
      <BoxList field>
        {fieldList &&
          fieldList.map((item) => (
            <Box field key={item.id}>
              <BoxImg imgSrc={item.imgSrc} />
              <Typography variant="h5">{item.text}</Typography>
            </Box>
          ))}
      </BoxList>

      <Typography variant="h3" style={{ textAlign: 'center' }}>
        입점 절차
      </Typography>
      <EntryStepBoxItem field>
        {stepList &&
          stepList.map((item) => (
            <React.Fragment key={item.id}>
              <Box field>
                <BoxImg imgSrc={item.imgSrc} />
                <Typography variant="h5">{item.text}</Typography>
              </Box>
              <span>{'>'}</span>
            </React.Fragment>
          ))}
      </EntryStepBoxItem>

      <CenteredInnerBanner>
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          지금 바로 맨들맨들에 입점해보세요!
        </Typography>
        <CenteredJoinBtn
          type="default"
          view="filled"
          color="primary"
          onClick={onClickJoinBtn}
        >
          입점 신청하기
        </CenteredJoinBtn>
      </CenteredInnerBanner>
    </Layout>
  );
};

const Container = styled.div`
  background: #fff;
  width: 100%;
`;

const Wrap = styled.main`
  width: 100%;
  max-width: 1158px;
  margin: auto;
  padding: 180px 0 30px;
`;

const InnerBanner = styled.div`
  width: 100%;
  background: #ccc;
  padding: 63px 51px;
  margin: 50px 0;
`;

const CenteredInnerBanner = styled(InnerBanner)`
  background: #404040;
  margin: 0;
`;

const JoinBtn = styled<any>(Button)`
  width: 200px;
  background: var(--violet80) !important;
  display: block;
  margin: 76px 0 0 0;
`;

const CenteredJoinBtn = styled(JoinBtn)`
  margin: 76px auto 0;
  height: 60px;
`;

const BoxList = styled.ul<{ field?: any }>`
  width: 100%;
  min-height: 248px;
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
  justify-content: space-between;
  list-style: none;
  ${(props: any) =>
    props.field &&
    css`
      height: auto;
      background: #ccc;
      text-align: center;
      justify-content: center;
      padding: 5% 20%;
      span {
        color: var(--white);
        font-size: 50px;
        margin: auto;
      }
      span:last-child {
        display: none;
      }
    `}
`;

const EntryStepBoxItem = styled(BoxList)`
  padding: 5% 10%;
`;

const Box = styled.li<{ field?: any }>`
  width: 32.3%;
  padding: 27px 21px;
  background: #ccc;
  text-align: left;
  word-break: keep-all;
  & > h5 {
    line-height: initial;
    font-weight: 500;
  }
  ${(props: any) =>
    props.field &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: auto;
      text-align: center;
    `}
`;

const BoxImg = styled.div<{ imgSrc: any }>`
  width: 150px;
  height: 150px;
  margin-bottom: 27px;
  background: center / cover no-repeat url(${(props: any) => props.imgSrc});
  border-radius: 100%;
`;

export default StoreMain;
