import React from "react";
import {Outlet} from 'react-router-dom';
import CreacionRequerimiento from "./AnalistaCliente/CreacionRequerimiento";

function Dashboard() {
    return(
        <div>
      <CreacionRequerimiento></CreacionRequerimiento>
      <Outlet/>
      </div>
    );
}
export default Dashboard;