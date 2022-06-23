import React from 'react'

const Descarga = () => {
  const boleano = false;
  return (<>
    <div>Area de descarga</div>
    <a
        href="#"
        style={{color: boleano ? "red" : "green"}}
        >Descarga</a>        
    </>)
}

export default Descarga