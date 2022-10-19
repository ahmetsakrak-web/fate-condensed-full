import styled from "styled-components";

export const YeteneklerStresKutuları = styled.div`
  grid-area: yeteneklerStresKutuları;
`;

export const YetenekGrup = styled.div`
  max-width: 210px;
  margin: 5px auto;
`;

export const Yetenekler = styled.div`
  margin-top: 5px;
`;

export const Yetenek = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  resize: none;
  overflow: hidden;
  max-height: 31px;
  width: 67px;
  color: rgb(37, 168, 217);
  text-align: center;

  margin-left: 1px;

  letter-spacing: 0.5px;

  text-align: center;
  margin: 5px 1px;

  border: none;

  border-image: initial;
  border-bottom: 2px solid rgb(56, 0, 0);

  transition: all 0.1s ease 0s;
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(37, 168, 217);
  }
`;

export const StressKutulari = styled.div`
  align-items: left;
`;

export const StressGrup = styled.div`
  display: block;
  margin-top: 10px;
  text-align: center;
  border-top: 1px solid black;
`;

export const StressKutusu = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin-left: 10px;
  margin-top: 5px;
  padding: 10px;

  border-radius: 5px;
  border: 2px solid #380000;
  transition: all 0.3s ease;

  :checked {
    background-color: black;
    padding: 7px;
  }
`;

export const SpanStres = styled.span`
  display: block;
  margin: 5px auto;
`;
