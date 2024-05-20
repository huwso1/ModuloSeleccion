
import {useState, useEffect} from 'react';
import React from 'react';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import '../../css/Unidad.css';
import Requerimiento from './Requerimiento.js';
import Popup from './Popup.js';

function ListaRequerimientos({Requerimientos,handler}){
    const [popupfase,setPopup]=useState(false);
    const [codigo,setcodigo]=useState();
    const [fase,setfase]=useState();

    const handlerphase4=(idrequerimiento,fase)=>{
        handler(idrequerimiento,fase);
    }
    const handlerRequerimiento=(codigo,fase)=>{
        ;
        setcodigo(codigo);
        setfase(fase);
        handlerphase4(codigo,fase);
        if(fase<3){
        setPopup(true);
        }
    }
    function PopupPhase(){
        if(popupfase){
            return <Popup codigo={codigo} fase={fase} onClose={()=>{setPopup(false)}}/>;
        }
    }
    
    
    return(
        <div>
            
             <CardGroup>
             
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}} >
                <CardBody >
                    <p>Codigo del Requerimiento</p>
                    
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
                <CardBody >
                    <p>Nombre del Analista Responsable</p>
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
                <CardBody >
                    <p>Fecha</p>
                </CardBody>
            </Card>
            <Card style={{backgroundColor:'#129EF2',alignItems:'center'}}>
                <CardBody >
                    <p>Fase</p>
                </CardBody>
            </Card>
        </CardGroup>
        
        { Requerimientos?.map((requerimiento,index)=>{
            //Cambiar la comparacion por el id de la unidad en lugar del nombre
            console.log(requerimiento);
            return <Requerimiento key={index}  Requerimiento={requerimiento} handler={handlerRequerimiento} ></Requerimiento>;
        })}
        {PopupPhase()}
        </div>
    )
    }
    
    export default ListaRequerimientos;