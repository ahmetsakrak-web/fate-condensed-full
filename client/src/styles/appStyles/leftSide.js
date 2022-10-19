import styled from "styled-components";

export const IsimAspectlerStantlar = styled.div`
  grid-area: isimAspectlerStantlar;
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;


  @media (max-width: 480px) {
    width: 242px;
  }
`;

export const Stunt = styled.textarea`
  -webkit-appearance: none;
  appearance: none;
  overflow: hidden;
  max-width: 320px;
  min-width: 320px;
  max-height: 300px;
  min-height: 200px;
  font-weight: 700;
  color: rgb(37, 168, 217);
  margin-top: 20px;
  padding: 16px 12px;
  letter-spacing: 0.5px;
  line-height: 1.8;
  border: 3px solid black;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: chocolate;
  }

  ::-webkit-resizer {
    /*size does not work*/

    display: block;
    border-top: 5px double black;
    border-left: 5px double black;
  }

  @media (max-width: 768px) {
    max-width: 350px;
    ::-webkit-resizer {
      display: block;
      border-top: 5px double transparent;
      border-left: 5px double transparent;
      box-shadow: 0 0 2px 5px black;
    }
  }
  @media (max-width: 480px) {
    max-width: 240px;
    min-width: 240px;
  }
`;

export const Label = styled.label`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 400px;
  border-radius: 3px;
  overflow: hidden;
`;

export const Aspect = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 300px;
  height: 50px;
  text-align: left;
  font-weight: 400;
  color: rgb(37, 168, 217);
  padding: 16px 12px 0px;
  letter-spacing: 0.3px;
  border: 0px;
  text-align: ${(props) => (props.isim ? "center" : "left")};
  &:hover {
    box-shadow: inset 0 -1px 0 rgb(37, 168, 217);
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 -2px 0 rgb(37, 168, 217);
  }
`;
