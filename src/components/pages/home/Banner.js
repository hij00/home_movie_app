import styled from "styled-components";
import { imgUrl } from "../../../constant";
import { mainStyle } from "../../../styles/globalStyle";

const MainBanner = styled.div`
  width: 100%;
  height: 80vh;
  padding: ${mainStyle.padding};
  padding-top: 250px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 900;
  max-width: 650px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  max-width: 700px;
  line-height: 2rem;
`;

export const Banner = ({ playingData }) => {
  return (
    <>
      <MainBanner
        style={{
          background: `url(${imgUrl}${playingData.backdrop_path}) no-repeat center / cover`,
        }}
      >
        <Title>{playingData.title}</Title>
        <Desc>{playingData.overview.slice(0, 100)}</Desc>
      </MainBanner>
    </>
  );
};
