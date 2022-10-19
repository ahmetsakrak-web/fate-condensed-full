import styled from "styled-components";

export const Container = styled.div`
  max-width: 984px;
  margin: 0px auto;
  text-align: center;
`;

export const CharacterGroup = styled.div`
  max-height: 100%;
  max-width: 100%;
  
  display: flex;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100px;
  h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.color};
    margin-left: 10px;
  }
`;
export const Sil = styled.p`
  margin-top: 10px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: chocolate;
  }
`;

