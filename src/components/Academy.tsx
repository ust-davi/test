import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Paper } from '@mui/material';

const Academy = () => {
  return (
    <ContainerWrap>
      <H2>맨들맨들 아카데미</H2>
      <Paper
        elevation={3}
        color="default"
        style={{
          padding: '22px 23px',
        }}
      >
        {/* {academyItems?.map((item: any) => {
          return (
            <List key={item.id}>
              <LeftContents>
                <img src={item.src} alt="" />
                <div>
                  <H5>서울</H5>
                  <H5>이미경 강사님</H5>
                  <H3>{item.titleText}</H3>
                </div>
              </LeftContents>
              <RightContents>
                <H4>5월 25일</H4>
                <Button
                  type="default"
                  view="filled"
                  color="default"
                  dense
                  text="D-11"
                  icon={false}
                  rightIcon={false}
                  loading={false}
                  disabled={false}
                  fill={false}
                  style={{ background: 'var(--black)' }}
                />
              </RightContents>
            </List>
          );
        })} */}
        <Button
          variant="contained"
          color="primary"
          style={{ height: '48px', fontSize: '20px', fontWeight: 700 }}
        >
          맨들맨들 아카데미 더보기
        </Button>
      </Paper>
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  button {
    box-shadow: none !important;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  border: 1px solid #dadada;
  padding: 15.33px;
`;

const LeftContents = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 30.11px;
  }
  div > h5 {
    display: inline-flex;
  }
`;

const RightContents = styled.div`
  text-align: right;
  button {
    margin-top: 15px;
    box-shadow: none !important;
  }
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 46px;
  line-height: 120%;
  letter-spacing: -0.025em;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 36px;
  line-height: 124%;
  letter-spacing: -0.01em;
  margin: 23px 0 0 0;
`;

const H4 = styled.h4`
  font-weight: 700;
  font-size: 28px;
  margin: 0;
  line-height: 128%;
  letter-spacing: -0.035em;
`;

const H5 = styled.h5`
  font-weight: 700;
  font-size: 21px;
  margin: 0 20px 0 0;
`;

export default Academy;
