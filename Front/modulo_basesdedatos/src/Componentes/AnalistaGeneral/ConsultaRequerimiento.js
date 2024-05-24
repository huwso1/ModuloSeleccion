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
const [idr,SetIdr]=useState();
const [phase,setPhase]=useState();

const handlerFase4=(idrequerimiento,fase)=>{
    SetIdr(idrequerimiento);
    setPhase(fase);
    var fetchCandidatos=()=>{};
    if(fase==3){
    fetchCandidatos=async()=>{
        try{
            const data=await peticionCandidatos();
            setCandidatos(data);
            setSelect(true);
        }catch(error){
            setSelect(true);
        }
        
    }
    }
    if(fase==4){
        fetchCandidatos=async()=>{
            try{
                const data=await peticionCandidatosqueaceptaron();
                setCandidatos(data);
                setSelect(true);
            }catch(error){
                setSelect(true);
            }
            
        }
    }
    if(fase==6){
        fetchCandidatos=async()=>{
            try{
                const data=await peticionCandidatosquetienen40enpruebas();
                setCandidatos(data);
                setSelect(true);
            }catch(error){
                setSelect(true);
            }
            
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
                setRequerimientos([new Requerimientomap('1','Garcia Berry','19-05-2024',null,1),new Requerimientomap('2','Martha Berry','19-05-2024',null,2),
            new Requerimientomap('3','Martha Berry','19-05-2024',null,3),new Requerimientomap('4','Martha Berry','19-05-2024',null,4),new Requerimientomap('5','Martha Berry','19-05-2024',null,5),
            new Requerimientomap('6','Martha Berry','19-05-2024',null,6),new Requerimientomap('7','Martha Berry','19-05-2024',null,7),new Requerimientomap('8','Martha Berry','19-05-2024',null,8)
            ]);
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
    var peticionCandidatosqueaceptaron= () => {
        return new Promise((resolve, reject) => {
            
            Axios.post('/Candidatosqueaceptaron', {"idusuario":window.sessionStorage.getItem("idusuario"),"idRequerimiento":idr})
                .then((response) => {
                    // Resolvemos la promesa con los datos recibidos, es decir los candidatos que aceptaron la convocatoria o la invitacion a la convocatoria
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
    var peticionCandidatosquetienen40enpruebas= () => {
        return new Promise((resolve, reject) => {
            
            Axios.post('/Candidatosqueaceptaron', {"idusuario":window.sessionStorage.getItem("idusuario"),"idRequerimiento":idr})
                .then((response) => {
                    // Resolvemos la promesa con los datos recibidos, es decir los candidatos que sacaron mas de 40% en las pruebas asignadas para el perfil
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
    <ListaCandidatos Candidatos={Candidatos} phase={phase} />   
    <p>Debug: {message}</p>
</Card>


</div>)
}
    return(<div style={{display:'flex',height:'100em'}} >
    
    <Card style={{ minHeight:'100%', backgroundColor:'#D6F2F5', width:'20%', paddingTop:'4rem',height:'100%',alignItems:'center' }}>
 
 </Card>
 <Card style={{width:'80%'}}>
     <ListaRequerimientos Requerimientos={Requerimientos} handler={handlerFase4} idrequerimiento={idr} />   
     <p>Debug: {message}</p>
 </Card>
 
 
 </div>)
    
    


 
 
 
}

export default ConsultaRequerimiento;