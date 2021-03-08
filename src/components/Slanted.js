import React from "react";

export default ({ backgroundColor = "#F0F8FF", header, subheader, slant}) => {
  return (
    <section className={slant} style={{backgroundColor}}>
        <div style={{width: "80%", margin: 'auto'}}>
            <div style={{textAlign: 'center', fontSize: '2.5rem', fontFamily: 'Montserrat, sans-serif', fontWeight: '700', letterSpacing: '0px'}}>{header}</div>
            <div style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.8rem', fontFamily: 'Montserrat, sans-serif', fontWeight: '300', letterSpacing: '0px'}}>{subheader}</div>
        </div>
    </section>
  );
};
