
import { useNavigate } from "react-router-dom"

export const DashBoard=()=>{
  const navigate=useNavigate()
    return(
        <div className="dashboard">
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href= "# ">Market Place</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto"  >
                <li className="nav-item"><a className="nav-link" href="# " onClick={()=>{navigate("/")}} >Logout</a></li>
            </ul>
            </div>
        </nav>
            <main role="main" class="container mt-5">
                <div class="container">
                    <div class="text-center mt-5">
                        <h3>Dashboard page</h3>
                        <p class="text-bold " >Hi User</p>  
                    </div>       
               </div>
            </main>
      </div>
    )
    
}