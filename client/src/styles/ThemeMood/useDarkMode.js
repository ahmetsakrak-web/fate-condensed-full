import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [tema, setTema] = useState("light");
  const [temaEklendi, setTemaEklendi] = useState(false);
  const setMod = (mod) => {
    window.localStorage.setItem("tema", mod);
    setTema(mod);
  };

  const temaDegistir = () => {
    tema === "light" ? setMod("dark") : setMod("light");
  };

  useEffect(() => {
    const localTema = window.localStorage.getItem("tema");
    localTema ? setTema(localTema) : setMod("dark");
    setTemaEklendi(true);
  }, []);

  return [tema, temaDegistir, temaEklendi];
};
