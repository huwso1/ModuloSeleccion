import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router";
import axios from 'axios';

function Login() {
    const [usuario,setUsuario]=useState('');
    const [contraseña,setContraseña]=useState('');
    const [message,setMessage]=useState('');

    const navigate = useNavigate();

    function peticion(){
        axios.post("http://localhost:3003/empleados/iniciar-sesion",{"usuario":usuario}).then((response)=>{
            
            window.sessionStorage.setItem("idusuario",response.data.id);
            window.sessionStorage.setItem("Datos",response.data.nombre+' '+response.data.apellido);
            window.sessionStorage.setItem("rol",response.data.idtipocargo);
            if(response.data.idtipocargo=='1'){
                navigate('/NavigateBar');
            }
            if(response.data.idtipocargo=='2'){
                navigate('/NavigateBarAG');
            }
        }).catch((response)=>{
          
            
            setMessage("Usuario o contraseña incorrectos");
        }
        )

    }
    useEffect(()=>{
        window.sessionStorage.removeItem("idusuario");
            window.sessionStorage.removeItem("Datos");
            window.sessionStorage.removeItem("rol");
    })

    return (
        <div className="d-flex justify-content-center align-items-center" >
            <figure className="figure text-center">
                <img src={require("../Imagenes/Escudo1.png")}/>
                <h1 class = "probar">Usuario</h1>
                <div className="form-group">
                    <input type="text" name="Usuario" placeholder="banana98" onChange={(element)=>{ setUsuario(element.target.value)}}/>
                </div>
                <div className="form-group" class = "probar">
                    <button type="button" className="btn btn-primary" onClick={() => peticion()}>Ingresar
                    </button> 
                    <button type="button" className="btn btn-primary" onClick={()=>{
                        navigate('/Registrarse');
                    }}>Registrarse</button>
                </div>
                <p></p>
            </figure>
        </div>
    );
}

export default Login;