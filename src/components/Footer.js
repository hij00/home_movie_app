import styled from "styled-components";

const SFooter = styled.div`
  padding: 75px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;

export const Footer = () => {
  return (
    <SFooter>
      <span>&copy; choi Heejeong 2022</span>
      {/* 날짜 연도 어떻게 가져오는 거지? {new Date().getFullYear()} */}
    </SFooter>
  );
};
