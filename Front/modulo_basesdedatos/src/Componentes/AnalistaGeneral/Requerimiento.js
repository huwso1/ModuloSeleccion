import {useState, useEffect} from 'react';
import React from 'react';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../css/Unidad.css';
import Popup from './Popup.js';

function Requerimiento({Requerimiento,handler}){
    
const [debug,setdebug]=useState();

const handlerRequerimiento=()=>{
    handler(Requerimiento.codigo,Requerimiento.fase);
}


return(
    
    <CardGroup>
        <Card onClick={()=>{handlerRequerimiento()}} style={{cursor:"pointer"}}>
            <CardBody>
                <p>{Requerimiento.codigo}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Requerimiento.responsable}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Requerimiento.descripcion}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Requerimiento.vacantes}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Requerimiento.fechai.substring(0,10)}</p>
            <p>{Requerimiento.fechaF}</p>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
            <p>{Requerimiento.fase}</p>
            </CardBody>
        </Card>
    </CardGroup>
    
)

}
export default Requerimiento;