
import {BirinciButton,IkinciButton} from "../styles/ThemeMood/ThemeButtons";
import {Login} from "../styles/appStyles/LoginStyle";
import Modal from "./Modal";

 //------------------------------------------------------------Kayıt Sayfası-------------------------------------------
const RegisterForm = (kullaniciEkle, setUsername,setPassword,setIsKayitVisible, username,password, errorMessage) => {
    return (
      <Login className="kagitBorder" onSubmit={kullaniciEkle}>
        <h1>Kayıt Ol</h1>
        <Modal {...errorMessage} />

        <div>
          <h3>Grup Adı</h3>
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <IkinciButton onClick={(e) => setIsKayitVisible(false)}>
            Giriş Yap
          </IkinciButton>
          <h3>Şifre</h3>
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <BirinciButton type="submit">Kayıt Ol</BirinciButton>
      </Login>
    );
  };







const LoginForm = (kullaniciGiris,  setUsername, setPassword, setIsKayitVisible, username, password, errorMessage) => (
    
 <Login className="kagitBorder" onSubmit={kullaniciGiris}>
      <h1>Giriş</h1>
      <Modal {...errorMessage} />
      <div>
        <h3>Grup Adı</h3>
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        <h3>Şifre</h3>
        <IkinciButton onClick={(e) => setIsKayitVisible(true)}>
          Kayıt Ol
        </IkinciButton>
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <BirinciButton type="submit">Giriş Yap</BirinciButton>
    </Login>
  );


  export  {LoginForm, RegisterForm};