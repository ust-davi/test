import React from 'react';
import styled from 'styled-components';

const EventBanner = () => {
  return (
    <EventBannerContainer>
      <img
        src="https://mendlemendle.com/images/renewal_mdmd/Frame_7197.png"
        alt="eventbanner"
      />
    </EventBannerContainer>
  );
};

const EventBannerContainer = styled.section`
  max-width: 1156px;
  margin: 92px auto;
  text-align: center;
  & > img {
    width: 100%;
  }
`;

export default EventBanner;
