import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const videoBanners = [
  {
    id: 1,
    src: 'https://mendlemendle.com/images/renewal_mdmd/movie-01.jpg',
  },
  {
    id: 2,
    src: 'https://mendlemendle.com/images/renewal_mdmd/movie-02.jpg',
  },
  {
    id: 3,
    src: 'https://mendlemendle.com/images/renewal_mdmd/movie-03.jpg',
  },
  {
    id: 4,
    src: 'https://mendlemendle.com/images/renewal_mdmd/movie-04.jpg',
  },
];

const BeautyVideo = () => {
  return (
    <ContainerWrap>
      <H2>뷰티 View</H2>
      <VideoWrap>
        {videoBanners.map((item: any) => {
          return <img src={item.src} alt="" key={item.id} />;
        })}
      </VideoWrap>
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 46px;
  line-height: 120%;
  letter-spacing: -0.025em;
`;

const VideoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > img {
    margin-bottom: 15px;
  }
`;
export default BeautyVideo;
