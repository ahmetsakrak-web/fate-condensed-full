const Modal = ({ css, message }) => {
  
  return (
    
    <>
      {message.map((x, i) => {
        return (
          <div key={i}>
            <small className={css}>{x}</small>
          </div>
        );
      })}
    </>
  );
};

export default Modal;
