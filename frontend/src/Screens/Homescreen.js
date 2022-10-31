import { Link } from "react-router-dom";
import axios from "axios";

// import data from "../data";
import { useEffect,useReducer, useState} from "react";

const reducer=(state, action)=>{
  switch (action.type){
    case "FETCH_REQUEST":
      return{...state, loading: true};
    case "FETCH_success":
      return{...state, loading: false, products: action.payload};
    case "FETCH_ERROR":
      return{...state, loading: false, error: action.payload};
    default:
      return state;



  }

}


const HomeScreen = () => {
  // const [products, setProducts] = useState([])
  const [{loading, error, products}, dispatch] = useReducer(reducer,{
    products:[],
    error:'',
    loading:true
    
    

  });

 
 useEffect(()=>{
  const fetchData =async ()=>{
    dispatch({type: 'FETCH_REQUEST'});
    try{
      const result = await axios.get('/api/products')
      // setProducts(result.data)
      
      dispatch({type: 'FETCH_SUCCESS',payload : result.data})


    }
    catch(err){
      dispatch({type: 'FETCH_ERROR',payload : err.message});
    }

  
    // setProducts(result.data)

  }
  fetchData()

  },[])



  return <div> <h1>Product features</h1>
  <div className="products">
    {products.map((product) => (
      <div className="product" key={product.slug}>
        <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
        </Link >
        <div className='product-info'>
        <Link  to={`/product/${product.slug}`}>
          <p> {product.name}</p>
          </Link >
          <p><strong>${product.price}
          </strong></p>
          <button>Add cart</button>
        </div>
      </div>
    ))}
  </div></div>;
};

export default HomeScreen;
