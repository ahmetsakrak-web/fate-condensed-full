import { useEffect, useState } from "react";
import axious from "axios";
import {
  Menu,
  Container,
  Sil,
} from "./styles/inappStyles/upSide";


import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./styles/ThemeMood/useDarkMode";
import { ButonDegistir,LogOutButton,OlusturButonu } from "./styles/ThemeMood/ThemeButtons";
import { GlobalStyles, aydinlikTema, karanlikTema } from "./styles/ThemeMood/globalStyles";

import setToken from "./services/login";


import {RegisterForm, LoginForm} from "./components/AccessControl";
import CharacterSheets from "./components/SheetGroup";


function App() {
  const [user, setUser] = useState(null);
  const [karakterData, setKarekterData] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const [errorMessage, setErrorMessage] = useState({
    message: [],
    css: "",
  });

 
  const [isKayitVisible, setIsKayitVisible] = useState(false);





  //--------------------------------------------------- Kullanıcı Ekleme ----------------------------------------------
  const kullaniciEkle = async (e) => {
    e.preventDefault();
    try {
      await axious.post("/api/users", { username, password });
      setErrorMessage({ message: ["Kayıt Başarılı"], css: "ok" });
      setUsername("");
      setPassword("");
      setTimeout(() => {
        setErrorMessage({ css: "none", message: [""] });
      }, 5000);
    } catch (err) {
      setErrorMessage({ message: err.response.data.error, css: "error" });

      setTimeout(() => {
        setErrorMessage({ css: "none", message: [""] });
      }, 5000);
    }
  };

  //--------------------------------------------------- Kullanıcı Silme ----------------------------------------------
  const hesapSil = (e) => {
    e.preventDefault();
    const config = setToken(user.token);
    if (window.confirm("Silmek istediğine emin misin?")) {
      axious.delete(`/api/users`,config).then((res) => {
        window.localStorage.removeItem("loggedFateappUser");

        setUser(null);
      });
    }
  };











  //--------------------------------------------------- Login ve Localstoge'a Ekleme ----------------------------------------------

  const kullaniciGiris = async (event) => {
    event.preventDefault();

    try {
      const response = await axious.post("/api/login", { username, password });
     
      window.localStorage.setItem(
        "loggedFateappUser",
        JSON.stringify(response.data)
      );
        
      setUser(response.data);
      setUsername("");
      setPassword("");
    } catch (err) {
      setErrorMessage({ message: [err.response.data.error], css: "error" });

      setTimeout(() => {
        setErrorMessage({ css: "none", message: [""] });
      }, 5000);
    }
  };

 //---------------------------------------------------  Logout ve Localstorage Silme ---------------------------------------------
 const logout = (e) => {
  e.preventDefault();
  window.localStorage.removeItem("loggedFateappUser");
  setUser(null);
};






  //---------------------------------------------------  Localstorage kullanarak Backend'den User Alma ----------------------------------------------------------
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedFateappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

 

  //---------------------------------------------------  Localstorage kullanarak Backend'den Character Sheet Alma -----------------------------------------------
  useEffect(() =>{
    const getCharacterSheet = async() =>{

    const res = await  axious.get("/api/sheets")

      const userLocalStore = window.localStorage.getItem("loggedFateappUser");
      
      if (userLocalStore) {
        const parsedUser = JSON.parse(userLocalStore);
        const goster = res.data.filter((x) => x.user?.username === parsedUser.user);
        setKarekterData(goster);
      }
    }
    getCharacterSheet();

  }, [user]);










  //------------------------------------------------------- Character Sheet DELETE -----------------------------------------------------
  const sheetDelete = async (e, id) => {
    e.preventDefault();
    
    try {
      const config = setToken(user.token);
      await axious.delete(`/api/sheets/${id}`, config);
      const newData = karakterData.filter((karakter) => karakter._id !== id);
      setKarekterData(newData);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  //------------------------------------------------------- Character Sheet  POST ------------------------------------------------------
  const sheetAdd = (e) => {
    e.preventDefault();
    const karakterim = {
      karakterAdi: "",
      highConsept: "",
      trouble: "",
      aspect1: "",
      aspect2: "",
      aspect3: "",
      super: [""],
      harika: ["", ""],
      iyi: ["", "", ""],
      eh: ["", "", "", ""],
      duz: ["", "", "", "", ""],
      can: [false, false, false, false, false, false],
      mental: [false, false, false, false, false, false],
      stunts: "",
      sonuclar: [
        {
          no: 2,
          yazi: "",
        },
        {
          no: 4,
          yazi: "",
        },
        {
          no: 6,
          yazi: "",
        },
      ],
    };

    const config = setToken(user.token);

    axious.post(`/api/sheets`, karakterim, config).then((newperson) => {
      setKarekterData((prev) => {
        return [...prev, newperson.data];
      });
    });
  };

  //------------------------------------------------------- Character Sheet  PUT --------------------------------------------------------
  const sheetUpdate = (karakter, id) => {
    const config = setToken(user.token);
    return axious.put(`/api/sheets/${id}`, karakter, config);
  };



  //---------------------------------------------------- Karanlık Mod ------------------------------------------------
  const [tema, temaDegistir] = useDarkMode();
  const temaModu = tema === "light" ? karanlikTema : aydinlikTema;
 




  

  return (
    <ThemeProvider theme={temaModu}>
      <Container>
        <GlobalStyles />
        {
        user === null 
              ? (
                <ButonDegistir tema={tema} temaDegistir={temaDegistir} />
            ) : (
                    <Menu>
                      <div>
                        <h3>{user.user}</h3>
                        <Sil onClick={hesapSil}>Hesabı Sil</Sil>
                      </div>
                      {<ButonDegistir tema={tema} temaDegistir={temaDegistir} />}{" "}
                      {<LogOutButton onClick={logout}>Log out</LogOutButton>}{" "}
                    </Menu>
                )
        }

        {
        user === null 
            ? (
                <>
                  <div style={{ display: isKayitVisible ? "none" : "block" }}>
                    {LoginForm(kullaniciGiris,  setUsername, setPassword, setIsKayitVisible, username, password, errorMessage)}
                  </div>
                  <div style={{ display: isKayitVisible ? "block" : "none" }}>
                    {RegisterForm(kullaniciEkle, setUsername, setPassword, setIsKayitVisible, username, password, errorMessage)}
                  </div>
                </>
          ) : (
                CharacterSheets(karakterData, sheetUpdate, sheetDelete)
              )
          }

        {user && (<OlusturButonu onClick={sheetAdd}><h3>+</h3></OlusturButonu>)}
      </Container>
    </ThemeProvider>
  );
}

export default App;
