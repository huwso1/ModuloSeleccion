import React,{useState,useEffect} from "react";
import {Await, useNavigate} from "react-router";
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function CreacionRequerimiento(){
    const [listaAnalistaGeneral,SetlistaAnalistaGeneral]=useState([]);
    const [SalarioMax,SetSalario]=useState(0);
    const [SalarioMin,SetSalarioMin]=useState(0);
    const [descfuncion,Setdescfuncion]=useState();
    const [descCarreras,SetCarreras]=useState();
    const [Message,SetMessage]=useState("");
    const [codanalistag,Setcodanalista]=useState();
    const [numVacantes,setVacantes]=useState(1);
 
    
    
    const handleSubmit = async (e) => {
     e.preventDefault();
     //Esta peticion envia los datos del requerimiento, incluyendo el codigo del analista cliente
     // que lo solicito y el analista general al que se le asignara el requerimiento.
     try {
       const response = await axios.post("/banana", {

           "salariomax": SalarioMax,
           "salariomin": SalarioMin,
           "descfuncion": descfuncion,
           "descCarreras": descCarreras,
           "numVacantes":numVacantes,
           "codEmpleado":window.sessionStorage.getItem("idusuario"),
           "analistaG":codanalistag,
       }).then((response)=>{
         SetMessage(response.data.respuesta);
       })
       
     } catch (error) {
       console.log(error);
     }
   };
   //Este useEffect manda una peticion para recuperar la lista de analistas generales del sistema al cargar la pagina
   useEffect(() => {
    const fetchData = async () => {
        try {
            // Esperamos la resolución de la promesa usando await
            const data = await peticion();
            // Una vez que la promesa se resuelve, actualizamos el estado con los datos recibidos
            
            SetlistaAnalistaGeneral(data);

            console.log(data); // Aquí puedes ver los datos en la consola
        } catch (error) {
            // Manejamos cualquier error que pueda ocurrir
            //Se setea la lista con una lista ejemplo, la idea es que el back envie una lista json con objetos analista general
            // que tendran como atributos, nombre y id
            const analistageneralejemplo={
                id:"1",
                nombre:"Jhonson",
                }
                const analistageneralejemplo2={
                    id:"2",
                    nombre:"Carlos",
                    }
            SetlistaAnalistaGeneral([analistageneralejemplo,analistageneralejemplo2]);
            console.error('Error al obtener los datos:', error);
        }
    };

    fetchData();
}, []);
   //Esta peticion actualizara la lista de analistas generales al cargar la pagina
   var peticion = () => {
    return new Promise((resolve, reject) => {
        setMessage("");
        Axios.post('/Analistas generales', {"idusuario":window.sessionStorage.getItem("idusuario") })
            .then((response) => {
                // Resolvemos la promesa con los datos recibidos
                resolve(response.data);
            })
            .catch((error) => {
                // Rechazamos la promesa con el mensaje de error
                setMessage(error.response.data.errors);
            });
    });
};
 
     
   
     return ( 
     <div className="center-card" style={{width:"40rem",paddingLeft:"5rem",border:"solid 5px",paddingRight:"5rem",marginLeft:"13rem"}}> 
     <h1> Creacion de nuevo Requerimiento </h1>
     <Form styles={{width:"20rem"}}>
     <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Descripcion de la funcion</Form.Label>
         <Form.Control as='textarea' style={{marginBottom:"30px"}} placeholder="Describa la funcion que se requiere" value={descfuncion} onChange={(e)=>{Setdescfuncion(e.target.value)}} />
         <Form.Label>Descripcion de los estudios</Form.Label>
         <Form.Control as='textarea' style={{marginBottom:"30px"}} placeholder="Describa los estudios requeridos" value={descCarreras} onChange={(e)=>{SetCarreras(e.target.value)}} />
         <div style={{display:"flex", marginBottom:"30px"}}>
         <Form.Label>Salario Maximo</Form.Label>
         <Form.Control as='input' type="number" min="0" placeholder="Salario maximo" value={SalarioMax} onChange={(e)=>{SetSalario(e.target.value)}} />
         <Form.Label>Salario Minimo</Form.Label>
         <Form.Control as='input' type="number" max={SalarioMax} placeholder="Salario minimo" min="0" value={SalarioMin} onChange={(e)=>{SetSalarioMin(e.target.value)}} />
         </div>
         <Form.Label>Numero de vacantes</Form.Label>
         <Form.Control as='input' style={{marginBottom:"30px"}} type="number" max="10000" min="0" placeholder="Numero de vacantes" value={numVacantes} onChange={(e)=>{setVacantes(e.target.valueAsNumber)}} />
         <Form.Label>Analista General Designado para tomar el requerimiento</Form.Label>
         <Form.Control as='select' style={{marginBottom:"30px"}}   placeholder="Analista General"  onChange={(e)=>{Setcodanalista(e.target.value)}} >
            {listaAnalistaGeneral.map((analista)=>{
                return <option value={analista.id}>{analista.nombre}</option>
            })}

         </Form.Control>
     </Form.Group>
   <Form.Group className="mb-5" controlId="exampleForm.ControlDate">

     <button type="button" className="btn btn-primary" onClick={handleSubmit}>Crear Empleado</button>
   </Form.Group>
   </Form>
   
   <h1>{Message}</h1>
   </div>
 )}

export default CreacionRequerimiento;