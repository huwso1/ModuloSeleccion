
import React,{useState,useEffect} from "react";
import {Await, useNavigate} from "react-router";
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function Asignaciondepruebas({idRequerimiento}){
    const [Message,SetMessage]=useState("");
    const [idperfil,setPerfil]=useState();
    const [idprueba,setPrueba]=useState();
    const [listapruebas,setListapruebas]=useState([]);
    const [fecha,setfecha]=useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Esta peticion envia los datos del requerimiento, incluyendo el codigo del analista cliente
        // que lo solicito y el analista general al que se le asignara el requerimiento.
        //Recordar que al resolverse esta peticion tambien debe crearse un nuevo registro en proceso requerimiento, con la nueva fase en este caso seria la Fase 4
        if(idprueba==null || idperfil==null){
            SetMessage("Debe llenar los campos antes de continuar");
            return;
        }
        try {
          const response = await axios.post("/ProgramarPrueba", {
   
              "idusuario":window.sessionStorage.getItem("idusuario"),
              "idRequerimiento":idRequerimiento,
              "perfil":idperfil,
              "prueba":idprueba,
              "fecha":fecha
              
          }).then((response)=>{
            useNavigate("NavigateBarAG")
            SetMessage(response.data.respuesta);
          })
          
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        const fetchData = async () => {
            try {
                // Esperamos la resolución de la promesa usando await
                
                const data = await peticion();
                setListapruebas(data.listapruebas);
                setPerfil(data.perfil);
                // Una vez que la promesa se resuelve, actualizamos el estado con los datos recibidos
                //Tal vez sea necesario crear una funcion para pasar los datos a objetos Requerimientomap
                
                
    
                console.log(data); // Aquí puedes ver los datos en la consola
            } catch (error) {
                // Manejamos cualquier error que pueda ocurrir
                //Se setea la lista con una lista ejemplo, la idea es que el back envie una lista json con objetos analista general
                // que tendran como atributos, nombre y id
                
                
                console.error('Error al obtener los datos:', error);
            }
            
        };
    
        fetchData();
    }, []);
       //Esta peticion actualizara la lista de requerimientos al cargar la pagina
       var peticion = () => {
        return new Promise((resolve, reject) => {
            SetMessage("");
            axios.post('/PerfilyPruebas', {"idusuario":window.sessionStorage.getItem("idusuario"),"idrequerimiento":idRequerimiento })
                .then((response) => {
                    // Resolvemos la promesa con los datos recibidos, es decir los la lista de pruebas para el perfil del requerimiento, y el perfil del requerimiento
                    
                    resolve(response.data);
                })
                .catch((error) => {
                    // Rechazamos la promesa con el mensaje de error
                    const prueba={
                        id:"ABC",
                        descPrueba:"banana"
                    }
                    setListapruebas([prueba]);
                    setPerfil("guachiman");
                    SetMessage(error.response.data.errors);
                    reject(error);  
        });
                    
                });
        };
   


    return(
    <div className="center-card" style={{overflow:"auto",paddingTop:"1rem",width:"40rem",paddingLeft:"5rem",border:"solid 5px",paddingRight:"5rem",marginLeft:"13rem"}}> 
<h1> Programar prueba </h1>
<Form >
<Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
    <h3 style={{resize:"none",marginBottom:"30px", width:"30rem"}}>Las pruebas disponibles para el perfil {idperfil} son:</h3>
    <Form.Control  as='select' style={{resize:"none",marginBottom:"30px", width:"30rem"}} value={idprueba}   onChange={(e)=>{setPrueba(e.target.value)}}  onClick={(e)=>{setPrueba(e.target.value)}}  >
    {listapruebas.map((prueba)=>{
        return <option value={prueba.id}>{prueba.descPrueba}</option>
    })}    
    </Form.Control>
    <Form.Control  as='input' type="date" style={{resize:"none",marginBottom:"30px", width:"30rem"}} value={fecha}   onChange={(e)=>{setfecha(e.target.value)}}   />
    
    
</Form.Group>
<Form.Group className="mb-5" controlId="exampleForm.ControlDate">

<button type="button" className="btn btn-primary" onClick={handleSubmit}>Programar prueba</button>
<h1>{Message}</h1>
</Form.Group>
</Form>


</div>)
}
export default Asignaciondepruebas;