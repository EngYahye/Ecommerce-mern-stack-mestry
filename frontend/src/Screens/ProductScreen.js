import { useParams } from "react-router-dom";

const ProductScreen = () => {
    const prams=useParams();
    const { slug} = prams;
    
    return ( 
        <div>
            <h1>{slug}</h1>
        </div>
  
     );
}
 
export default ProductScreen;