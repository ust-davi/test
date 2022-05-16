import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useMainBanner from '../hooks/useMainBanner';
import { Box, Button } from '@mui/material';
import { COLOR_MINT_70, COLOR_ORANGE_40 } from '../common/styles/Color';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useHistory } from 'react-router-dom';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const Slide = () => {
  const { data: sliderItems } = useMainBanner();
  const history = useHistory();

  const onClickGoStoreButton = () => {
    history.push('/store');
  };

  return (
    <Container>
      <SlideWrap
        dots={false}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode
        centerPadding={String('0px')}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {/* {sliderItems?.data?.data.map((item: BannerMain) => (
          <ImageContainer key={item.bannerSeq}>
            <Image src={item.bannerUrl} alt={item.title} />
          </ImageContainer>
        ))} */}
        <Box
          sx={{
            height: '850px',
            background:
              'linear-gradient(130.18deg, #8E54E9 22.89%, #4776E6 77.11%)',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              marginTop: '57px',
              fontSize: '42px',
              fontWeight: 700,
            }}
          >
            24시간 뷰티샵 밀착 매니저 <br />
            <span style={{ color: COLOR_ORANGE_40 }}>
              놓치는 고객이 없도록&nbsp;
            </span>
            유연하게 예약 받으세요!
          </Box>
          <Box sx={{ marginTop: '99px' }}>
            <Box
              sx={{
                display: 'inline-block',
                textAlign: 'left',
                fontSize: '28px',
                fontWeight: 700,
                verticalAlign: 'top',
                marginTop: '53px',
              }}
            >
              실시간 예약 예약 <br />
              승인 시스템 <br />
              즉시 예약변경 및 취소 <br />
              네이버 예약연동 <br />
              <br />
              한눈에 확인하는 예약현황
              <Box sx={{ marginTop: '71px' }}>
                <Button
                  type="button"
                  onClick={onClickGoStoreButton}
                  style={{
                    width: '239px',
                    height: '56px',
                    padding: '13px 42px',
                    background:
                      'linear-gradient(90deg, #4596FB 0%, #67E6DC 100%)',
                    boxShadow:
                      '0px 3px 1px -2px rgba(85, 85, 85, 0.2), 0px 2px 2px rgba(85, 85, 85, 0.14), 0px 1px 5px rgba(85, 85, 85, 0.12)',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                >
                  무료로 이용하기
                  <ArrowForwardIcon
                    style={{ width: '18px', marginLeft: '8px' }}
                  />
                </Button>
              </Box>
            </Box>
            <Box
              component="img"
              src="https://mendlemendle.com/images/renewal_mdmd/Group_7193.png"
              alt=""
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                marginTop: '-44px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            height: '850px',
            background:
              'linear-gradient(130.18deg, #8E54E9 22.89%, #4776E6 77.11%)',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              marginTop: '57px',
              fontSize: '42px',
              fontWeight: 700,
              display: 'inline-block',
              textAlign: 'left',
            }}
          >
            원장님도 <span style={{ color: COLOR_MINT_70 }}>토탈</span> 케어
            받으세요! <br />샵 홍보, 예약/회원/매출관리, 회원혜택 ... 맨들맨들
            하나로!
          </Box>
          <Box sx={{ marginTop: '99px' }}>
            <Box
              component="img"
              src="https://mendlemendle.com/images/renewal_mdmd/Image_12.png"
              alt=""
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
              }}
            />
            <Box
              sx={{
                display: 'inline-block',
                textAlign: 'left',
                fontSize: '28px',
                fontWeight: 700,
                verticalAlign: 'top',
                marginTop: '145px',
                marginLeft: '83px',
              }}
            >
              한 눈에, 한 번에, <br />
              하나로 관리 <br />
              <Box sx={{ marginTop: '71px' }}>
                <Button
                  type="button"
                  onClick={onClickGoStoreButton}
                  style={{
                    width: '239px',
                    height: '56px',
                    padding: '13px 42px',
                    background:
                      'linear-gradient(90deg, #4596FB 0%, #67E6DC 100%)',
                    boxShadow:
                      '0px 3px 1px -2px rgba(85, 85, 85, 0.2), 0px 2px 2px rgba(85, 85, 85, 0.14), 0px 1px 5px rgba(85, 85, 85, 0.12)',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                >
                  무료로 이용하기
                  <ArrowForwardIcon
                    style={{ width: '18px', marginLeft: '8px' }}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </SlideWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  .slick-slider > .slick-prev {
    color: white;
    left: 50px;
    z-index: 5;
  }
  .slick-slider > .slick-next {
    color: white;
    right: 50px;
    z-index: 5;
  }
`;
const SlideWrap = styled(Slider)`
  // max-width: 1156px;
  .slick-slide div {
    border: 0;
  }
  .slick-arrow::before {
    display: none !important;
  }
`;

export default Slide;
