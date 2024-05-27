import React,{useState,useEffect} from "react";
import {Await, useNavigate} from "react-router";
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function Hojadevida({usuario}){
    const [Message,SetMessage]=useState("");
    const [Hojadevida,SetHojadevida]=useState();

    //Este useEffect traera la hoja de vida formateada de la peticion de abajo
useEffect(() => {
    const fetchData = async () => {
        try {
            // Esperamos la resolución de la promesa usando await
            const data = await peticion();
            // Una vez que la promesa se resuelve, actualizamos el estado con los datos recibidos
            //Tal vez sea necesario crear una funcion para pasar los datos a objetos Requerimientomap
            SetHojadevida(data);

            console.log(data); // Aquí puedes ver los datos en la consola
        } catch (error) {
            // Manejamos cualquier error que pueda ocurrir
            //En este caso pongo un ejemplo de una string formateada para una hoja de vida, desde el back debe ser formateada con todos
            //datos de la tabla HV del candidato seleccionado
            
            
            console.error('Error al obtener los datos:', error);
        }
        
    };

    fetchData();
}, []);
   //Esta peticion actualizara la hoja de vida del candidato
   var peticion = () => {
    return new Promise((resolve, reject) => {
        SetMessage("");
        axios.get('http://localhost:3003/candidatos/hv/'+usuario, { })
            .then((response) => {
                // Resolvemos la promesa con los datos recibidos, es decir los requerimientos asignados a ese analista general, identificado por idusuario
                resolve(response.data);
            })
            .catch((error) => {
                // Rechazamos la promesa con el mensaje de error
                SetHojadevida(" Bachillerato en el colegio X Estudio 10/05/2020-19/05/2020 Colegio Pepitas de esperanza Bachillerato \n "+
                "Bachillerato en el colegio X Estudio 10/05/2020-19/05/2020 Colegio Pepitas de esperanza Bachillerato \n");
                SetMessage(error.response.data.errors);
            });
    });
};
    

    return(
<div className="center-card" style={{overflow:"auto",paddingTop:"1rem",width:"40rem",paddingLeft:"5rem",border:"solid 5px",paddingRight:"5rem",marginLeft:"13rem"}}> 
<h3> Hoja de vida de {usuario} </h3>
<Form >
<Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control  as='textarea' style={{resize:"none",marginBottom:"30px", width:"30rem",height:"40rem"}} value={Hojadevida} disabled="true"   />
    
    
</Form.Group>
<Form.Group className="mb-5" controlId="exampleForm.ControlDate">

<h1>{Message}</h1>
</Form.Group>
</Form>


</div>)
}
export default Hojadevida;