import React, { useState } from "react";
import styled from "styled-components";
import {
  IsimAspectlerStantlar,
  Stunt,
  Aspect,
  Label,
} from "../styles/inappStyles/leftSide";
import {
  YeteneklerStresKutuları,
  YetenekGrup,
  Yetenekler,
  Yetenek,
  StressKutulari,
  StressGrup,
  StressKutusu,
  SpanStres,
} from "../styles/inappStyles/rightSide";
import { Sonuc, Sonuclar } from "../styles/inappStyles/downSide";
import { GuncelleButton } from "../styles/inappStyles/buttons";
import { DeleteButton } from "../styles/inappStyles/buttons";

const Kagıt = styled.form`
  flex-basis: 48%;
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    "isimAspectlerStantlar yeteneklerStresKutuları"
    "sonuclar sonuclar";
  position: relative;

  @media (max-width: 768px) {
    flex-basis: 70%;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    flex-wrap: none;
    flex-direction: column;
  }
`;

const CharacterSheet = ({ karakterData, sheetUpdate, sheetDelete}) => {
  const [karakter, setKarakter] = useState(karakterData);
  const [isGuncel, setIsGuncel] = useState(false);

  /******************************************************** Can ve Mental Kutu Kaydetme *************************************************/
  const boxHandle = (e, index) => {
    const name = e.target.name;
    const hamArray = karakter[name];
    const array = hamArray.map((boole, i) => (i === index ? !boole : boole));

    setKarakter({ ...karakter, [name]: array });
    setIsGuncel(true);
  };

  /******************************************************** Skill Kaydetme *************************************************************/
  const skillHandle = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const array = karakter[name];
    array[index] = value;
    setKarakter({ ...karakter, [name]: array });
    setIsGuncel(true);
  };

  /******************************************************** Sonuç Kaydetme *************************************************************/
  const sonucHandle = (e, index) => {
    const value = e.target.value;
    const array = karakter.sonuclar;
    array[index].yazi = value;
    setKarakter({ ...karakter, sonuclar: array });
    setIsGuncel(true);
  };

  /******************************************************** Aspectler Kaydetme *************************************************************/
  const aspectHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setKarakter({ ...karakter, [name]: value });
    setIsGuncel(true);
  };

  //-------------------------------------------------------UPDATE CharacterSheet --------------------------------------------------------
  const formGuncelle = (e, id) => {
    e.preventDefault();
    sheetUpdate(karakter, id);
    setIsGuncel(false);
    
  };



  

  return (
    <Kagıt autocomplete="off" className="kagitBorder">
      <GuncelleButton
        type="submit"
        onClick={e => formGuncelle(e, karakter._id)}
        isGuncel={isGuncel}
      >
        {isGuncel ? "Kaydet" : ""}
      </GuncelleButton>
      <DeleteButton onClick={e => sheetDelete(e,karakter._id)}>X</DeleteButton>

      <IsimAspectlerStantlar>
        {
          //Labellerin isimleri aynı olmasın.
          //Ayni olanların birinin üzerine gelince diğerleride yaniyor.
        }
        <Label htmlFor="karakterAdi">
          <Aspect
            isim
            className="inputBackground"
            type="text"
            placeholder="Karakter Adı"
            name="karakterAdi"
            spellCheck="false"
            value={karakter.karakterAdi}
            onChange={aspectHandle}
          ></Aspect>
        </Label>
        <Label htmlFor="highConsept">
          <Aspect
            className="inputBackground"
            type="text"
            placeholder="High Concept"
            name="highConsept"
            spellCheck="false"
            value={karakter.highConsept}
            onChange={aspectHandle}
          ></Aspect>
        </Label>
        <Label htmlFor="trouble">
          <Aspect
            spellCheck="false"
            className="inputBackground"
            type="text"
            placeholder="trouble"
            name="trouble"
            value={karakter.trouble}
            onChange={aspectHandle}
          ></Aspect>
        </Label>
        <Label htmlFor="aspect1">
          <Aspect
            spellCheck="false"
            className="inputBackground"
            type="text"
            placeholder="Aspect 1"
            name="aspect1"
            value={karakter.aspect1}
            onChange={aspectHandle}
          ></Aspect>
        </Label>
        <Label htmlFor="aspect2">
          <Aspect
            spellCheck="false"
            className="inputBackground"
            type="text"
            placeholder="Aspect 2"
            name="aspect2"
            value={karakter.aspect2}
            onChange={aspectHandle}
          ></Aspect>
        </Label>
        <Label htmlFor="aspect3">
          <Aspect
            spellCheck="false"
            className="inputBackground"
            type="text"
            placeholder="aspect 3"
            name="aspect3"
            value={karakter.aspect3}
            onChange={aspectHandle}
          ></Aspect>
        </Label>
        <Label htmlFor="stunts">
          <Stunt
            spellCheck="false"
            className="inputBackground"
            placeholder="stunts"
            name="stunts"
            type="text"
            value={karakter.stunts}
            onChange={aspectHandle}
          ></Stunt>
        </Label>
      </IsimAspectlerStantlar>

      <YeteneklerStresKutuları>
        <YetenekGrup>
          <h3>Süper (+5)</h3>
          <Yetenekler>
            {karakter.super.map((yazi, index) => {
              return (
                <Yetenek
                  key={index}
                  type="text"
                  className="inputBackground"
                  name="super"
                  placeholder="super"
                  spellCheck="false"
                  onChange={(e) => skillHandle(e, index)}
                  value={yazi}
                ></Yetenek>
              );
            })}
          </Yetenekler>
        </YetenekGrup>

        <YetenekGrup>
          <h3>harika (+4)</h3>
          <Yetenekler>
            {karakter.harika.map((yazi, index) => {
              return (
                <Yetenek
                  key={index}
                  type="text"
                  className="inputBackground"
                  name="harika"
                  placeholder="harika"
                  spellCheck="false"
                  onChange={(e) => skillHandle(e, index)}
                  value={yazi}
                ></Yetenek>
              );
            })}
          </Yetenekler>
        </YetenekGrup>

        <YetenekGrup>
          <h3>iyi (+3)</h3>
          <Yetenekler>
            {karakter.iyi.map((yazi, index) => {
              return (
                <Yetenek
                  key={index}
                  type="text"
                  className="inputBackground"
                  name="iyi"
                  placeholder="iyi"
                  spellCheck="false"
                  onChange={(e) => skillHandle(e, index)}
                  value={yazi}
                ></Yetenek>
              );
            })}
          </Yetenekler>
        </YetenekGrup>

        <YetenekGrup>
          <h3>eh (+2)</h3>
          <Yetenekler>
            {karakter.eh.map((yazi, index) => {
              return (
                <Yetenek
                  key={index}
                  type="text"
                  className="inputBackground"
                  name="eh"
                  placeholder="eh"
                  spellCheck="false"
                  onChange={(e) => skillHandle(e, index)}
                  value={yazi}
                ></Yetenek>
              );
            })}
          </Yetenekler>
        </YetenekGrup>

        <YetenekGrup>
          <h3>düz (+1)</h3>
          <Yetenekler>
            {karakter.duz.map((yazi, index) => {
              return (
                <Yetenek
                  key={index}
                  type="text"
                  className="inputBackground"
                  name="düz"
                  placeholder="düz"
                  spellCheck="false"
                  onChange={(e) => skillHandle(e, index)}
                  value={yazi}
                ></Yetenek>
              );
            })}
          </Yetenekler>
        </YetenekGrup>

        <StressKutulari>
          <StressGrup>
            <SpanStres>Can</SpanStres>
            {karakter.can.map((item, index) => {
              return (
                <StressKutusu
                  name="can"
                  type="checkbox"
                  key={index}
                  checked={item}
                  onChange={(e) => boxHandle(e, index)}
                />
              );
            })}
          </StressGrup>
          <StressGrup>
            <SpanStres>Mental</SpanStres>
            {karakter.mental.map((item, index) => {
              return (
                <StressKutusu
                  name="mental"
                  type="checkbox"
                  key={index}
                  checked={item}
                  onChange={(e) => boxHandle(e, index)}
                />
              );
            })}
          </StressGrup>
        </StressKutulari>
      </YeteneklerStresKutuları>

      <Sonuclar>
        {karakter.sonuclar.map((item, index) => {
          return (
            <Sonuc
              key={item.no}
              type="text"
              className="inputBackground"
              name={item.no}
              placeholder={item.no}
              spellCheck="false"
              onChange={(e) => sonucHandle(e, index)}
              value={item.yazi}
            ></Sonuc>
          );
        })}
      </Sonuclar>
    </Kagıt>
  );
};

export default CharacterSheet;
