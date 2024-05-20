import React, { useState } from "react";
import "../../css/Popup.css";
import Form from 'react-bootstrap/Form';
import PreConvocatoria from './Formularios/PreConvocatoria.js';
import Convocatoria from './Formularios/Convocatoria.js';
function Popup({ codigo,fase,onClose }) {

    function formulariodefase(){
        if(fase==1){
            return( <PreConvocatoria idRequerimiento={codigo} />)
        }
        if(fase==2){
            return( <Convocatoria idRequerimiento={codigo} />)
        }
    }
  return (
    <div className="popup-container">
      <div className="popup">
        <h1 style={{color:"red"}}>This is the content</h1>
        {formulariodefase()}

        <Form.Control as="input" type="button" value="cerrar" style={{bottom:"0",right:"5rem", width:"20%"}} onClick={onClose}/>
      </div>
    </div>
  );
};

export default Popup;