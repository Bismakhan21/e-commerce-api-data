import { Card, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProductDetails(res.data))
      .catch((error) => console.log(error));
  }, [])

  const {image, title,description, price } = productDetails;

  return(
    <>
    <Card sx={{margin:'20px', padding:'20px', border:'1px solid #eee', minHeight:'300px'}}>
    <center> <img src={image} width={'400px'} height={'300px'} /></center>
    <Typography sx={{textAlign:'center', fontVariant:'all-petite-caps',fontWeight:'600',fontSize:'40px'}}>{title}</Typography>
    <Typography sx={{}}>{description}</Typography>
    <Typography sx={{textAlign:'center', fontWeight:'500', fontSize:'20px' }}>Price: {price}</Typography>

    <Button variant="contained" onClick={() => navigate(`/dashboard`)}>Back</Button>
    </Card>
    </>
  )
};


export default ProductDetails