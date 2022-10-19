import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{

    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 13px;
   
   
}
.error{
  color:red;
 font-size: 12px;
  display: block;
  margin-bottom: 5px;
}
.ok{
   color:green;
 font-size: 12px;
  display: block;
  margin-bottom: 5px;
}
.none{
  display:none;
}
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
   transition: all .5s ease-in;
   position: relative;
}
.kagitBorder{
  border: ${({ theme }) => theme.border};
  transition: all .1s ease-in;
  border-radius:10px;
}
.inputBackground{
   background: ${({ theme }) => theme.body};
    transition: all .3s ease-in;
    overflow-wrap: break-word;
    
}


input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  
  -webkit-text-fill-color:  #25a8d9;
  -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.body} inset;
   
 
}
`;

export const aydinlikTema = {
  body: "#E5E7E9",
  color: "#383e56",
  border: "3px solid #383e56",
 
};

export const karanlikTema = {
  body: "#0E6655",
  color: "#d1d1d1",
  border: "3px solid black",
};
