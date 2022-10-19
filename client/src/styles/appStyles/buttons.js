import styled from "styled-components";
export const DeleteButton = styled.button`
  border: none;
  position: absolute;
  left: 0;
  text-align: center;
  border-radius: 4px 0 0 0;
  border: solid 2px black;
  border-radius: 50%;
  font-weight: 600;
  height: 30px;
  width: 30px;
  color: #fff;
  background: #380000;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    background: chocolate;
  }
`;


export const GuncelleButton = styled.button`
  border: none;
  position: absolute;
  left: 45%;

  width: ${({ isGuncel }) => (isGuncel ? "70px" : "0px")};
  visibility: ${({ isGuncel }) => (isGuncel ? "visible" : "hidden")};
  height: ${({ isGuncel }) => (isGuncel ? "30px" : "0px")};
  pointer-events: ${({ isGuncel }) => (isGuncel ? "visible" : "none")};
  text-align: center;
  border-radius: 4px;
  border: solid 3px black;
  border-top: none;
  font-weight: 600;
  color: #fff;
  background: #25a8d9;
  z-index: 1;
  transition: all 0.05s ease-in;

  &:hover {
    background: chocolate;
  }
`;