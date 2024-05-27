
import {useState, useEffect} from 'react';
import React from 'react';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import '../../../css/Unidad.css';
import Popup from '../Popup.js';
import Candidato from './Candidato.js';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function ListaCandidatos({Candidatos,phase,idrequerimiento}){
    const [popupfase,setPopup]=useState(false);
    const [PopupInvitacion,setPopupI]=useState(false);
    const [usuario,setusuario]=useState();
    const [fase,setfase]=useState(phase);
    const [candidatosseleccionados,Setcandidatos]=useState([]);
    const [debug,Setdebug]=useState();
    
    
    const handlerRequerimiento=(usuario)=>{
        setPopup(true);
        setfase(phase);
        setusuario(usuario);
    }
    const handleinvitacion=(usuario,ischecked)=>{
        console.log(ischecked)
        if(ischecked){
           var aux= candidatosseleccionados.slice(0);
            aux.push(usuario);
            Setcandidatos(aux);
            
            
        }else{
            var aux= candidatosseleccionados.slice(0);
            aux.splice(aux.indexOf(usuario),1);
            Setcandidatos(aux); 
            
        }
        console.log(candidatosseleccionados);
        
    }
    function PopupPhase(){
        if(popupfase){
            return <Popup codigo={usuario} fase={fase} onClose={()=>{setPopup(false)}}/>;
        }
    }
    function PopupInvitar(){
        if(PopupInvitacion){
            return <Popup codigo={candidatosseleccionados} fase={"invitacion"} utilitary={idrequerimiento} onClose={()=>{setPopupI(false)}}/>;
        }
    }
    function preseleccioneinvitacion(){
        if(phase==3){
            return(<div>
                <Card style={{alignItems:"center",backgroundColor:"#5DE2E7",cursor:"pointer"}} onClick={()=>{ setPopupI(true)}} >
                    <CardBody >
                        Redactar invitacion
                    </CardBody>
                </Card>
            </div>);
        }
        if(phase==4){
            return(<div>
                <Card style={{alignItems:"center",backgroundColor:"#5DE2E7",cursor:"pointer"}} onClick={()=>{Preseleccionar()}} >
                    <CardBody >
                        Preseleccionar candidatos seleccionados
                    </CardBody>
                </Card>
            </div>);
        }
    }
    function Invitationfield(){
        if(phase<6){
            return (<Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
            <CardBody >
                <p>¿Invitar?</p>
            </CardBody>
        </Card>)
        }
    }
    function Preseleccionar()  {
        
        //Esta peticion envia la lista de candidatos a los que se les ha seleccionado en el proceso de preseleccion
        // ademas, envia el id del requerimiento asociado a la convocatoria 
        //Recordar que al resolverse esta peticion tambien debe crearse un nuevo registro en proceso requerimiento, con la nueva fase en este caso seria la Fase 6
        if(candidatosseleccionados.length==0){
            Setdebug(" hace falta seleccionar al menos un candidato");
            return;
        }
        try {
           axios.post("http://localhost:3003/requerimientos/fase5", {
   
              
              "listacandidatos":candidatosseleccionados ,
              "idusuario":window.sessionStorage.getItem("idusuario"),
              "idRequerimiento":idrequerimiento
              
              
          }).then((response)=>{
            useNavigate("NavigateBarAG")
            window.location.reload();
            Setdebug(response.data.respuesta);
          }).catch((error)=>{
            console.log(error);
          })
          
        } catch (error) {
          console.log(error);
        }
      };
    
    
    return(
        <div>
            <div>
                {preseleccioneinvitacion()}
                
            </div>
             <CardGroup>
             
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}} >
                <CardBody >
                    <p>Usuario</p>
                    
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
                <CardBody >
                    <p>Nombre Completo</p>
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
                <CardBody >
                    <p>fecha de nacimiento</p>
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
                <CardBody >
                    <p>Numero de Documento</p>
                </CardBody>
            </Card>
            {Invitationfield()}
            
        </CardGroup>
        
        
        { Candidatos?.map((Candidatox,index)=>{
            //Cambiar la comparacion por el id de la unidad en lugar del nombre
            
            return <Candidato key={index} Candidato={Candidatox} handlerinvitacion={handleinvitacion} handler={handlerRequerimiento} fase={phase}/>;
        })}
        {PopupPhase()}
        {PopupInvitar()}
        <p>{debug}</p>
        </div>
    )
    }
    
    export default ListaCandidatos;