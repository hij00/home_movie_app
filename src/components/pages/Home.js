import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { imgUrl } from "../../constant";

const Section1 = styled.section``;

const MainBanner = styled.div`
  width: 100%;
  height: 80vh;
`;

const TextWrap = styled.div``;

const Title = styled.h3``;

const Desc = styled.p``;

export const Home = () => {
  const [playing, setPlaying] = useState();

  useEffect(() => {
    const movieData = async () => {
      //   console.log(movieApi.nowPlaying());
      //   promise로 뜸(async가 promise로 반환?, 필요한 값은 promise > object > data > results
      //   한번 가공해줘야함 => 변수로?!

      //   const playing = movieApi.nowPlaying();
      //   console.log(playing);
      //   아까와 똑같이 나옴(너무 길어지는걸 방지하기 위해 변수로 변경?!)

      const play = movieApi.nowPlaying();
      //   console.log(await (await playing).data.results);
      //   배열 값으로 나오지만 점점 길어짐 => 객체 비구조화 할당으로 불러오기

      // const {
      //   data: { results: playingData },
      // } = await playing;
      // // async는 함수 앞에 붙이기
      // // await는 async 와 짝일때만 작동함 / await 뒤를 읽는 동안 다른 것들을 처리

      // // console.log(results[0]);
      // //   마지막 객체가 변수가 됨 => 콘솔에 찍을때 마지막 객체명 입력(배열방식으로 입력)

      // // results의 이름을 바꾸고싶다면 : 변경할 이름

      // setPlaying(playingData);
      // // useEffect 값을 밖으로 꺼내서 사용하려면 useState 사용해야함(react로 호출해서 사용!)

      // ======================================

      try {
        const {
          data: { results: playingData },
        } = await play;
        // console.log(playingData);
        setPlaying(playingData);
      } catch (error) {}
    };
    // 함수를 실행(호출)해줘야 함수안의 결과값 확인가능
    movieData();
  }, []);
  // useEffect 를 쓸 땐 함수안에 함수 하나 더!

  // console.log(playing[0]);

  return (
    <Section1>
      <MainBanner
        style={{
          background: `url(${imgUrl}${playing[0].backdrop_path}) no-repeat center / cover`,
        }}
      >
        <TextWrap>
          <Title></Title>
          <Desc></Desc>
        </TextWrap>
      </MainBanner>
    </Section1>
  );
};
