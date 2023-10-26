import { useNavigate } from "react-router-dom"

export default function ErrorPage(){
    const navigate = useNavigate()
    return(
        <><h1> Your Not Register Yet Kindly Register </h1><button onClick={() => navigate('/register')}> Kindly register </button></>
    )
}