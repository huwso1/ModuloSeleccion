import React, { useState } from "react";
import "../../css/Popup.css";
import Form from 'react-bootstrap/Form';
import PreConvocatoria from './Formularios/PreConvocatoria.js';
import Convocatoria from './Formularios/Convocatoria.js';
import Hojadevida from './Formularios/Hojadevida.js';
import Invitacion from './Formularios/invitacion.js';
import Asignaciondepruebas  from './Formularios/Asignaciondepruebas.js';
function Popup({ codigo,fase,onClose,utilitary }) {

    function formulariodefase(){
        console.log(fase);
        if(fase==1){
            return( <PreConvocatoria idRequerimiento={codigo} />)
        }
        if(fase==2){
            return( <Convocatoria idRequerimiento={codigo} />)
        }
        if(fase==3){
            return( <Hojadevida usuario={codigo} />)
        }
        if(fase==="invitacion"){
            return( <Invitacion listacandidatos={codigo} idRequerimiento={utilitary}  />)
        }
        if(fase===5){
            return( <Asignaciondepruebas  idRequerimiento={utilitary}  />)
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