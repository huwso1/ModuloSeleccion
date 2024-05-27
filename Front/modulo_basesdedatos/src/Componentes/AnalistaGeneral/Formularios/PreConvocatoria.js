import React,{useState,useEffect} from "react";
import {Await, useNavigate} from "react-router";
import axios from 'axios';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card  from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';

function PreConvocatoria({idRequerimiento}){
    const [listaPerfiles,SetlistaPerfil]=useState([]);
    const [listaDisciplinas,setListaDisciplinas]=useState([]);
    const [descfuncion,Setdescfuncion]=useState();
    const [Perfil,SetPerfil]=useState();
    const [Disciplina,SetDisciplina]=useState();
    
    const [Message,SetMessage]=useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Esta peticion envia los datos del requerimiento, incluyendo el codigo del analista cliente
        // que lo solicito y el analista general al que se le asignara el requerimiento.
        //Recordar que al resolverse esta peticion tambien debe crearse un nuevo registro en proceso requerimiento, con la nueva fase en este caso seria la fase 3
        if(descfuncion=="" ||Perfil==null){
            SetMessage("Debe llenar los campos antes de continuar");
            return;
        }
        try {
          const response = await axios.post("http://localhost:3003/requerimientos/fase2", {
   
              
              "descfuncion": descfuncion,
              "Perfil":Perfil,
              "Disciplina":Disciplina,
              "idusuario":window.sessionStorage.getItem("idusuario"),
              "idRequerimiento":idRequerimiento
              
          }).then((response)=>{
            window.location.reload();   
            SetMessage(response.data.respuesta);
          })
          
        } catch (error) {
          console.log(error);
        }
      };
      //Hook para traer la lista de perfiles y disciplinas
      useEffect(() => {
        const fetchData = async () => {
            try {
                // Esperamos la resolución de la promesa usando await
                const data = await peticion();
                // Una vez que la promesa se resuelve, actualizamos el estado con los datos recibidos
                //Tal vez sea necesario crear una funcion para pasar los datos a objetos Requerimientomap
                var perfiles=[];
                data.map((perfil)=>{
                    
                    const Perfil={
                        id:perfil.id,
                        desPerfil:perfil.perfil,
                        disciplina:perfil.disciplina
                    }
                    perfiles.push(Perfil);
                })
                SetlistaPerfil(perfiles);
    
                console.log(data); // Aquí puedes ver los datos en la consola
            } catch (error) {
                // Manejamos cualquier error que pueda ocurrir
                //Se setea la lista con una lista ejemplo, la idea es que el back envie una lista json con objetos Perfil y disciplinas, como se ve a continuacion
                const Perfil={
                    id:1,
                    desPerfil:"Ingeniero en computacion"
                }

                SetlistaPerfil([Perfil]);
                const Disciplina={
                    id:1,
                    descDisciplina:"Computacion"
                }
                setListaDisciplinas([Disciplina]);
                
                
                console.error('Error al obtener los datos:', error);
            }
        };
    
        fetchData();
    }, []);
       //Esta peticion actualizara la lista de requerimientos al cargar la pagina
       var peticion = () => {
        return new Promise((resolve, reject) => {
            SetMessage("");
            axios.get('http://localhost:3003/perfiles', {})
                .then((response) => {
                    // Resolvemos la promesa con los datos recibidos, es decir los requerimientos asignados a ese analista general, identificado por idusuario
                    resolve(response.data);
                })
                .catch((error) => {
                    // Rechazamos la promesa con el mensaje de error
                    SetMessage(error.response.data.errors);
                });
        });
    };
   

    

return(<div className="center-card" style={{paddingTop:"1rem",width:"40rem",paddingLeft:"5rem",border:"solid 5px",paddingRight:"5rem",marginLeft:"13rem"}}> 
<h1> {} </h1>
<Form >
<Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{width:"30rem"}}>Descripcion del requerimiento</Form.Label>
    <Form.Control  as='textarea' style={{marginBottom:"30px", width:"30rem",height:"20rem"}} value={descfuncion} placeholder="Describa la funcion que se requiere"  onChange={(e)=>{Setdescfuncion(e.target.value)}} />
    <Form.Label>Elija el perfil requerido</Form.Label>
    <Form.Control as='select' style={{marginBottom:"30px"}} value={Perfil} onChange={(element)=>{SetPerfil(element.target.value)}} onClick={(element)=>{SetPerfil(element.target.value)}}>
        {listaPerfiles.map((perfil)=>{
            return <option value={perfil.id}>{perfil.desPerfil+' '+perfil.disciplina}</option>
        })}
    </Form.Control>
    
</Form.Group>
<Form.Group className="mb-5" controlId="exampleForm.ControlDate">

<button type="button" className="btn btn-primary" onClick={handleSubmit}>Guardar Requerimiento</button>
<h1>{Message}</h1>
</Form.Group>
</Form>


</div>)

}
export default PreConvocatoria;