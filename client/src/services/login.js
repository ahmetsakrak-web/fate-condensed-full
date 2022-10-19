const setToken=(newToken)=>{

 return {
    headers: { Authorization: `Bearer ${newToken}` },
  };
  
};

export default setToken