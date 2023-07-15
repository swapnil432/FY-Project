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
  const { state: curr_state, dispatch } = useContext(Context);
  const { user } = curr_state;

  const [values, setValues] = useState({
    surveyNumber: "",
    name: "",
    state: "",
    city: "",
    district: "",
    bedroom: "",
    type: "",
    address: "",
    pincode: "",
    area: "",
    bathroom: "",
    price: "",
    carpetArea: "",
    maintenanceCharges: "",
    noOfParking: "",
    description: "",
    ageOfBuilding: "",
  });
  const {
    surveyNumber,
    name,
    state,
    city,
    district,
    bedroom,
    type,
    address,
    pincode,
    area,
    bathroom,
    price,
    carpetArea,
    maintenanceCharges,
    noOfParking,
    description,
    ageOfBuilding,
  } = values;
  const handelchange = (text) => (e) => {
    setValues({ ...values, [text]: e.target.value });
  };
  const submitform = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("surveyNumber", surveyNumber);
    formData.append("name", name);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("district", district);
    formData.append("bedroom", bedroom);
    formData.append("type", type);
    formData.append("address", address);
    formData.append("pincode", pincode);
    formData.append("area", area);
    formData.append("bathroom", bathroom);
    formData.append("price", price);
    formData.append("carpetArea", carpetArea);
    formData.append("maintenanceCharges", maintenanceCharges);
    formData.append("noOfParking", noOfParking);
    formData.append("description", description);
    formData.append("ageOfBuilding", ageOfBuilding);

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
      url: `/api/uploadPropertyInfo/${user.public_key}`,
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
            console.log(err);
            alert("something wrong");
          });
        setValues({
          ...values,
          surveyNumber: "",
          name: "",
          state: "",
          city: "",
          district: "",
          bedroom: "",
          type: "",
          address: "",
          pincode: "",
          area: "",
          bathroom: "",
          price: "",
          carpetArea: "",
          maintenanceCharges: "",
          noOfParking: "",
          description: "",
          ageOfBuilding: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setValues({
          ...values,
          surveyNumber: "",
          name: "",
          state: "",
          city: "",
          district: "",
          bedroom: "",
          type: "",
          address: "",
          pincode: "",
          area: "",
          bathroom: "",
          price: "",
          carpetArea: "",
          maintenanceCharges: "",
          noOfParking: "",
          description: "",
          ageOfBuilding: "",
        });
        alert("something wrong");
      });

    // console.log(images);
  };
  // name,

  return (
    <Container sx={{ marginTop: "8rem" }}>
      <h3>Property Details</h3>
      <form onSubmit={submitform} encType="multipart/form-data">
        <Grid
          container
          sx={{ marginTop: "2rem", width: "100%" }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <TextField
              id="Property Name"
              value={values.name}
              label="Property Name"
              type="text"
              required
              onChange={handelchange("name")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Property Survey Number"
              value={values.surveyNumber}
              label="Property Survey Number"
              type="number"
              required
              onChange={handelchange("surveyNumber")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              hidden
              id="Property  Price"
              value={values.price}
              type="number"
              required
              onChange={handelchange("price")}
              label="Property  price"
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />

            <TextField
              id="Maitenance Charges"
              value={values.maintenanceCharges}
              label="Maintenance Charges"
              type="number"
              required
              onChange={handelchange("maintenanceCharges")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />

            <TextField
              id="Number of Bedroom"
              value={values.bedroom}
              label="Number of Bedroom"
              type="number"
              required
              onChange={handelchange("bedroom")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Number of Bathroom"
              value={values.bathroom}
              label="Number of Bathroom"
              type="number"
              required
              onChange={handelchange("bathroom")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />

            <TextField
              id="No of Parking"
              value={values.noOfParking}
              label="No Of Parking"
              type="number"
              required
              onChange={handelchange("noOfParking")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Property  type"
              value={values.type}
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
              value={values.address}
              label="Property Address"
              type="text"
              required
              onChange={handelchange("address")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Pin Code"
              value={values.pincode}
              label="Pin Code"
              type="number"
              required
              onChange={handelchange("pincode")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="City"
              value={values.city}
              label="City"
              type="text"
              required
              onChange={handelchange("city")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />

            <TextField
              id="District"
              value={values.district}
              label="District"
              type="text"
              required
              onChange={handelchange("district")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="State"
              value={values.state}
              label="State"
              type="text"
              required
              onChange={handelchange("state")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Super Built Up Area"
              value={values.area}
              label="Super Built Up Area"
              type="number"
              required
              onChange={handelchange("area")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Carpet Area"
              value={values.carpetArea}
              label="Carpet Area"
              type="number"
              required
              onChange={handelchange("carpetArea")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="Age of Building"
              value={values.ageOfBuilding}
              label="Age Of Building"
              type="number"
              required
              onChange={handelchange("ageOfBuilding")}
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
          <Grid item xs = {12}>
          <TextField
          multiline
          rows={6}
              id="Description"
              value={values.description}
              label="Description"
              type="text"
              required
              onChange={handelchange("description")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
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
