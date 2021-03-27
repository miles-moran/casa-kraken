import React from "react";

export default ({backgroundColor='#eaeaea', header, subheader}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', backgroundColor, padding: '5%'}}>
      <div style={{width: "80%"}}>
        <div style={{textAlign: 'center', fontSize: '2.5rem', fontFamily: 'Montserrat, sans-serif', fontWeight: '700', letterSpacing: '0px'}}>
          {header}
        </div>
        <div style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0px'}}>
          {subheader}
        </div>
      </div>
    </div>
  );
};

