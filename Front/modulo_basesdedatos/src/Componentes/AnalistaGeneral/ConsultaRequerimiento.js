import {useState, useEffect} from 'react';
import React from 'react';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import '../../css/Unidad.css';
import {useNavigate} from 'react-router-dom';
import Requerimientomap from './Mapeos/Requerimientomap.js';
import ListaCandidatos from './Candidatos/ListaCandidatos.js';
import ListaRequerimientos from './ListaRequerimientos.js';
import Candidato from './Mapeos/Candidato.js';
 import Axios from 'axios';

function ConsultaRequerimiento(){
const [Requerimientos,setRequerimientos]=useState([]);
const [isSelect,setSelect]=useState(false);
const [Candidatos,setCandidatos]=useState([]);
const [message,Setmessage]=useState("");
const navigate=useNavigate();
var idr;
var phase;

const handlerFase4=(idrequerimiento,fase)=>{
    idr=idrequerimiento;
    phase=fase;
    const fetchCandidatos=async()=>{
        try{
            const data=await peticionCandidatos();
            setCandidatos(data);
        }catch(error){
            setSelect(true);
        }
        
    }
    fetchCandidatos();
    
    
}


//Este useEffect manda una peticion para recuperar la lista de requerimientos del analista general del sistema al cargar la pagina
useEffect(() => {
    const fetchData = async () => {
        try {
            // Esperamos la resolución de la promesa usando await
            const data = await peticion();
            // Una vez que la promesa se resuelve, actualizamos el estado con los datos recibidos
            //Tal vez sea necesario crear una funcion para pasar los datos a objetos Requerimientomap
            setRequerimientos(data);

            console.log(data); // Aquí puedes ver los datos en la consola
        } catch (error) {
            // Manejamos cualquier error que pueda ocurrir
            //Se setea la lista con una lista ejemplo, la idea es que el back envie una lista json con objetos analista general
            // que tendran como atributos, nombre y id
            
            setRequerimientos([new Requerimientomap('1','Garcia Berry','19-05-2024',null,5),new Requerimientomap('2','Martha Berry','19-05-2024',null,2)]);
            console.error('Error al obtener los datos:', error);
        }
        
    };

    fetchData();
}, []);
   //Esta peticion actualizara la lista de requerimientos al cargar la pagina
   var peticion = () => {
    return new Promise((resolve, reject) => {
        Setmessage("");
        Axios.post('/Requerimientos', {"idusuario":window.sessionStorage.getItem("idusuario") })
            .then((response) => {
                // Resolvemos la promesa con los datos recibidos, es decir los requerimientos asignados a ese analista general, identificado por idusuario
                resolve(response.data);
            })
            .catch((error) => {
                // Rechazamos la promesa con el mensaje de error
                setRequerimientos([new Requerimientomap('1','Garcia Berry','19-05-2024',null,3),new Requerimientomap('2','Martha Berry','19-05-2024',null,2)]);
                Setmessage(error.response.data.errors);
            });
    });
};

    //Esta peticion actualizara la lista de candidatos registrados en el aplicativo
    var peticionCandidatos= () => {
        return new Promise((resolve, reject) => {
            
            Axios.post('/Candidatos', {"idusuario":window.sessionStorage.getItem("idusuario") })
                .then((response) => {
                    // Resolvemos la promesa con los datos recibidos, es decir los candidatos con la disciplina que pide el requerimiento
                    resolve(response.data);
                })
                .catch((error) => {
                    // Rechazamos la promesa con el mensaje de error
                    setCandidatos([new Candidato("huwso","Juan","Gomez","2015-05-02","194546321","CC")]); 
                    Setmessage(error.response.data.errors);
                    reject(error);
                });
        });
    };

if(isSelect){
return(

<div style={{display:'flex',height:'100em'}} >
    
   <Card style={{ minHeight:'100%', backgroundColor:'#D6F2F5', width:'20%', paddingTop:'4rem',height:'100%',alignItems:'center' }}>

</Card>
<Card style={{width:'80%'}}>
    <ListaCandidatos Candidatos={Candidatos} />   
    <p>Debug: {message}</p>
</Card>


</div>)
}
    return(<div style={{display:'flex',height:'100em'}} >
    
    <Card style={{ minHeight:'100%', backgroundColor:'#D6F2F5', width:'20%', paddingTop:'4rem',height:'100%',alignItems:'center' }}>
 
 </Card>
 <Card style={{width:'80%'}}>
     <ListaRequerimientos Requerimientos={Requerimientos} handler={handlerFase4} />   
     <p>Debug: {message}</p>
 </Card>
 
 
 </div>)
    
    


 
 
 
}

export default ConsultaRequerimiento;