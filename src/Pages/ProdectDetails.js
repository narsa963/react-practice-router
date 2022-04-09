import { useParams } from "react-router-dom";

const ProdectDetails = () =>{
    const params = useParams();
    console.log(params.prodectId)
 return(
    <section>
        <h1>prodect details</h1>
        <div><p>{params.prodectId}</p></div>
    </section>
 )
}
export default ProdectDetails;