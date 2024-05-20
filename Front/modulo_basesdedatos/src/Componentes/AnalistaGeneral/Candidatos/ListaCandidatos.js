
import {useState, useEffect} from 'react';
import React from 'react';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import '../../../css/Unidad.css';
import Popup from '../Popup.js';
import Candidato from './Candidato.js';

function ListaCandidatos({Candidatos,phase}){
    const [popupfase,setPopup]=useState(false);
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
    
    
    return(
        <div>
            
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
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
                <CardBody >
                    <p>¿Invitar?</p>
                </CardBody>
            </Card>
            
        </CardGroup>
        
        
        { Candidatos?.map((Candidatox,index)=>{
            //Cambiar la comparacion por el id de la unidad en lugar del nombre
            
            return <Candidato key={index} Candidato={Candidatox} handlerinvitacion={handleinvitacion} handler={handlerRequerimiento}/>;
        })}
        {PopupPhase()}
        <p>{candidatosseleccionados}</p>
        </div>
    )
    }
    
    export default ListaCandidatos;