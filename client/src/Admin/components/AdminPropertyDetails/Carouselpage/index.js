import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Itempage from "../Itempage";
import slider from "../slider/slider.json";
import axios from "axios";

const Carouselpage = (props) => {
  const id = props.propId;

  const [slider1, setSlider] = useState([]);
  const getproperty = () => {
    axios({
      method: "GET",
      url: `/api/getpropertyimages/${id}`,
    })
      .then((response) => {
        console.log("images", response.data);
        setSlider(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
  useEffect(() => {
    getproperty();
  }, []);
  return (
    <Carousel>
      {slider1.map((item, index) => (
        <img
          src={item.path}
          style={{ width: "100%", height: "35rem", objectFit: "cover" }}
        />
      ))}
    </Carousel>
  );
};
export default Carouselpage;
