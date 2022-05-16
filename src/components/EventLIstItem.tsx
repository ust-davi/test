import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const EventListItem = ({ eventList, count }: any) => {
  const [countedEventList, setCountEventArr] = useState([]);

  useEffect(() => {
    const tempArr =
      count !== undefined || count < 10
        ? eventList.slice(0, count)
        : eventList.slice(0, 10);

    setCountEventArr(tempArr);
  }, [eventList]);
  return (
    <List>
      {countedEventList.map((item: any) => {
        return (
          <ListItem key={item.id}>
            <ImgWrap>
              <Link to={`/event/${item.id}`}>
                <Imgaes src={item.imgSrc} key={item.id} alt={item.alt} />
              </Link>
            </ImgWrap>
            <TextArea>
              <Typography variant="h4">{item.title}</Typography>
              <InfoWrap>
                {/* <Button view="filled" color="secondary" text={item.status} /> */}
                <Status>{item.status}</Status>
                <Typography variant="body1">{item.date}</Typography>
              </InfoWrap>
            </TextArea>
          </ListItem>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  width: 49.5%;
  position: relative;
  height: inherit;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1158px) {
    height: auto;
  }
`;

const Imgaes = styled.img`
  width: 100%;
  margin: auto;
  vertical-align: middle;
`;

const TextArea = styled.div`
  color: var(--black);
  margin: 10px 0 27px 0;
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  & > * {
    margin-right: 10px;
  }
`;

const Status = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background: var(--mint60);
  border-radius: 4px;
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
`;

export default EventListItem;
