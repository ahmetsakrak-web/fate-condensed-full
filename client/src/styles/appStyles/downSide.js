import styled from "styled-components";
export const Sonuclar = styled.div`
  grid-area: sonuclar;

  display: flex;
  justify-content: space-around;
  padding: 5px;
`;

export const Sonuc = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  overflow: hidden;
  min-height: 115px;
  min-width: 153px;
  max-width: 153px;
  max-height: 230px;
  margin: 0 2px;
  height: 115px;
  font-weight: 300;
  color: #25a8d9;
  padding: 10px;
  letter-spacing: 0.5px;
  line-height: 1.2;
  border: solid 2px black;
  border-radius: 10px;
  :focus {
    border-color: chocolate;
    outline: none;
  }
  &::placeholder {
    text-align: center;
    font-size: 1.5em;
  }
  ::-webkit-resizer {
    /*size does not work*/

    display: block;
    border-top: 5px double black;
    border-left: 5px double black;
  }

  @media (max-width: 768px) {
    ::-webkit-resizer {
      display: block;
      border-top: 5px double transparent;
      border-left: 5px double transparent;
      box-shadow: 0 0 2px 5px black;
    }
  }

  @media (max-width: 480px) {
    min-height: 115px;
    min-width: 118px;

    max-height: 200px;
    max-width: 118px;
  }
`;
