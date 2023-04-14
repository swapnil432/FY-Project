import React, { useContext, useState } from "react";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import UploadFile from "@/components/common/UploadFiles";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import UploadImages from "@/components/common/UploadImages";
import axios from "axios";
import { Context } from "@/Context";

const PropertyInfo = () => {
  const [pdf, setPdf] = useState([]);
  const [images, setImages] = useState([]);
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const [values, setValues] = useState({
    name: "",
    p_state: "",
    bedroom: "",
    kitchen: "",
    type: "",
    address: "",
    pincode: "",
    area: "",
    bathroom: "",
    price: "",
  });
  const {
    name,
    p_state,
    bedroom,
    kitchen,
    type,
    address,
    pincode,
    area,
    bathroom,
    price,
  } = values;
  const handelchange = (text) => (e) => {
    setValues({ ...values, [text]: e.target.value });
  };
  const submitform = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("state", p_state);
    formData.append("bedroom", bedroom);
    formData.append("kitchen", kitchen);
    formData.append("type", type);
    formData.append("address", address);
    formData.append("pincode", pincode);
    formData.append("area", area);
    formData.append("bathroom", bathroom);
    formData.append("price", price);

    // Object.keys(images).forEach(function (key, index) {
    //   formData.append(`image`, key);
    // });

    Array.from(pdf).forEach((doc, index) => {
      formData.append("documents", doc);
    });
    let p_id = 0;
    const formData2 = new FormData();
    Array.from(images).forEach((image, index) => {
      formData2.append("images", image);
    });
    // formData.append("images", images);
    axios({
      method: "POST",
      url: `/api/uploadPropertyInfo/${user._id}`,
      data: formData,
    })
      .then((response) => {
        p_id = response.data.id;
        console.log(response.data.id);
        axios({
          method: "POST",
          url: `/api/uploadPropertyImages/${response.data.id}`,
          data: formData2,
        })
          .then((response) => {
            console.log(response);
            alert(response.data.message);
          })
          .catch((err) => {
            console.log("documents", err);
            alert("something wrong");
          });
         setValues({
           ...values,
           name: "",
           email: "",
           age: "",
           phone: "",
           gender: "",
           aadhar: "",
           image1: "",
           image2: "",
         });
      })
      .catch((err) => {
        console.log("documents", err);
        setValues({
          ...values,
          name: "",
          email: "",
          age: "",
          phone: "",
          gender: "",
          aadhar: "",
          image1: "",
          image2: "",
        });
        alert("something wrong");
      });

    // console.log(images);
  };
  return (
    <Container sx={{ marginTop: "8rem" }}>
      <h3>Property Details</h3>
      <form onSubmit={submitform} enctype="multipart/form-data">
        <Grid
          container
          sx={{ marginTop: "2rem", width: "100%" }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <TextField
              id="Property Name"
              label="Property Name"
              type="text"
              required
              onChange={handelchange("name")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="State"
              label="State"
              type="text"
              required
              onChange={handelchange("p_state")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Number of Bedroom"
              label="Number of Bedroom"
              type="number"
              required
              onChange={handelchange("bedroom")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Number of Kitchen"
              label="Number of Kitchen"
              type="number"
              required
              onChange={handelchange("kitchen")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Property  type"
              label="Property  type"
              type="type"
              required
              onChange={handelchange("type")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />

            <UploadFile text={"Upload Property Documents"} setState={setPdf} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="Property Address"
              label="Property Address"
              type="text"
              required
              onChange={handelchange("address")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Pin Code"
              label="Pin Code"
              type="number"
              required
              onChange={handelchange("pincode")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Property  Area"
              label="Property  Area"
              type="number"
              required
              onChange={handelchange("area")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Number of Bathroom"
              label="Number of Bathroom"
              type="number"
              required
              onChange={handelchange("bathroom")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              hidden
              id="Property  Price"
              type="number"
              required
              onChange={handelchange("price")}
              label="Property  price"
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />

            {/* <UploadFile text={"Upload Property Images"} /> */}

            <UploadImages
              text={"Upload Property Images"}
              multiple={true}
              setState={setImages}
              // setState2={setImage1}
              // srcUrl={profileImage}
            />
          </Grid>
        </Grid>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default PropertyInfo;
