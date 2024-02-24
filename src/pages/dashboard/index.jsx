import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaCard from "../../components/card";
import { Navbar_Component } from "../../components/navbar_component";

function Dashboard() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Stack>
        <Navbar_Component />
      </Stack>

      <Stack
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={"30px"}
        m={"auto"}
        padding={"10px"}
      >
        {product.map((object, index) => {
          return (
            <MediaCard
              key={index}
              title={object.title}
              image={object.image}
              //   des={object.description}
              price={object.price}
              id={object.id}
              onClick={() => navigate(`/product/${object.id}`)}
            />
          );
        })}
      </Stack>
    </>
  );
}

export default Dashboard;
