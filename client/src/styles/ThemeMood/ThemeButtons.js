import React from "react";
import styled from "styled-components";

const Degistir = styled.button`
  padding: 10px;
  height: 50px;
  margin: 20px 0;
  margin-right: 25px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.color};
  border: 5px solid ${({ theme }) => theme.color};
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.body};
    border: 5px solid ${({ theme }) => theme.border};
  }
  :focus {
    outline: none;
  }
`;


const BirinciButton = styled.button`
  margin-top: 15px;
  padding: 5px 20px;

  border-radius: 5px;
  width: 50%;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};

  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.body};
    border: 5px solid ${({ theme }) => theme.border};
    cursor: pointer;
    transition: all 0.222s ease-in;
  }
`;



const IkinciButton = styled.p`
  top: 0;
  right: 0;
  padding: 5px;
  border: none;
  border-radius:5px;
  cursor: pointer;
  position: absolute;
  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.body};
    border: 5px solid ${({ theme }) => theme.border};
    transition: all 0.222s ease-in;
  }
  :focus {
    outline: none;
  }
`;





const LogOutButton = styled.p`
  font-size: 16px;
  display: inline;
  cursor: pointer;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.color};
  border: 3px solid ${({ theme }) => theme.color};

  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  margin-right: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.body};
    border: 5px solid ${({ theme }) => theme.border};
  }
`;





 const OlusturButonu = styled.button`
  border: none;
  border-radius: 10px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.color};
  border: 3px solid ${({ theme }) => theme.color};
  text-align: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 50px 0;
  font-weight: bold;
  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.body};
    border: 5px solid ${({ theme }) => theme.border};
    transition: all 0.222s ease-in;
  }
  :focus {
    outline: none;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
`;



 const ButonDegistir = ({ tema, temaDegistir }) => {
  return <Degistir onClick={temaDegistir}>TEMA</Degistir>;
};

export  {ButonDegistir,IkinciButton,BirinciButton,LogOutButton,OlusturButonu};
