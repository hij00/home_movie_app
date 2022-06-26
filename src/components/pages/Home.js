import { useEffect } from "react";
import { movieApi } from "../../api";

export const Home = () => {
  useEffect(() => {
    const movieData = async () => {
      //   console.log(movieApi.nowPlaying());
      //   promise로 뜸, 필요한 값은 promise > object > data > results
      //   한번 가공해줘야함 => 변수로?!

      //   const playing = movieApi.nowPlaying();
      //   console.log(playing);
      //   아까와 똑같이 나옴(너무 길어지는걸 방지하기 위해 변수로 변경?!)

      const playing = movieApi.nowPlaying();
      //   console.log(await (await playing).data.results);
      //   배열 값으로 나오지만 점점 길어짐 => 객체 비구조화 할당으로 불러오기

      const {
        data: { results },
      } = await playing;
      console.log(results[0]);
      //   마지막 객체가 변수가 됨 => 콘솔에 찍을때 마지막 객체명 입력(배열방식으로 입력)
    };
    // 함수를 실행(호출)해줘야 함수안의 결과값 확인가능
    movieData();
  }, []);

  return <></>;
};
