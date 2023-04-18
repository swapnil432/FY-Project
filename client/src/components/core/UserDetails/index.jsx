import React, { useContext, useEffect, useState } from "react";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import UploadFile from "@/components/common/UploadFiles";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import { Context } from "@/Context";
import { useRouter } from "next/router";
import UploadImages from "@/components/common/UploadImages";

const UserDetail = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    aadhar: "",
  });
  const { name, email, age, phone, gender, aadhar } = values;
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const [disabled, setDisabled] = useState(true);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  useEffect(() => {
    if (
      name === "" ||
      email === "" ||
      age === "" ||
      phone === "" ||
      gender === "" ||
      aadhar === "" ||
      image1 === "" ||
      image2 === ""
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, email, age, phone, gender, aadhar, image1, image2]);
  const [userId, setUserId] = useState("");

  const [profileImage, setProfileImage] = useState("");
  const [adhaarImage, setAdhaarImage] = useState("");
  // const { user } = user;
  const handelchange = (text) => (e) => {
    setValues({ ...values, [text]: e.target.value });
  };
  // useEffect(() => {
  //   if (user === null) {
  //     router.push("/");
  //   }
  //   // else if (user !== null && user.is_complete === true) {
  //   //   router.push("/");
  //   // }
  // }, [user]);

  const submitform = (e) => {
    e.preventDefault();

    // setValues({ ...values, id: user._id });
    console.log(image1, image2);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("aadhar", aadhar);
    formData.append("image1", image1);
    formData.append("image2", image2);

    axios({
      method: "POST",
      url: `/api/uploadUserInfo/${user._id}`,
      data: formData,
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        window.localStorage.removeItem("user");
        // window.localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: "LOGIN",
          payload: JSON.stringify(response.data.user),
        });
        setValues({
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
        console.log("something wrong");
        setValues({
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
  };
  const onSelectFile = (e) => {
    console.log(e.target);
  };

  return (
    <Box>
      <Container sx={{ marginTop: "8rem" }}>
        <h3>User Details</h3>
        <form onSubmit={submitform} encType="multipart/form-data">
          <Grid
            container
            sx={{ marginTop: "2rem", width: "100%" }}
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                id="Name"
                label="Name"
                type="text"
                required
                variant="outlined"
                onChange={handelchange("name")}
                sx={{ m: 1, ml: 0, width: "100%" }}
              />
              <TextField
                id="Age"
                label="Age"
                required
                type="number"
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
                onChange={handelchange("age")}
                variant="outlined"
                sx={{ m: 1, ml: 0, width: "100%" }}
              />
              <TextField
                id="Gender"
                type="text"
                label="Gender"
                required
                onChange={handelchange("gender")}
                variant="outlined"
                sx={{ m: 1, ml: 0, width: "100%" }}
              />
              <UploadImages
                text={"Upload your Photo"}
                multiple={false}
                setState={setProfileImage}
                setState2={setImage1}
                srcUrl={profileImage}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="Email"
                label="Email id"
                type="Email"
                required
                onChange={handelchange("email")}
                variant="outlined"
                sx={{ m: 1, ml: 0, width: "100%" }}
              />
              <TextField
                id="Phone"
                label="Phone"
                type="number"
                required
                onChange={handelchange("phone")}
                variant="outlined"
                sx={{ m: 1, ml: 0, width: "100%" }}
              />
              <TextField
                id="Aadhar Card Number"
                label="Aadhar Card Number"
                required
                type="number"
                onChange={handelchange("aadhar")}
                variant="outlined"
                sx={{ m: 1, ml: 0, width: "100%" }}
              />
              <UploadImages
                text={"Upload Aadhar Card"}
                multiple={false}
                setState={setAdhaarImage}
                setState2={setImage2}
                srcUrl={adhaarImage}
              />
            </Grid>
          </Grid>
          <Button variant="contained" disabled={disabled} type="submit">
            Submit
          </Button>
        </form>
        {/* <BtnButton color={"primary"}>Submit</BtnButton> */}
      </Container>
    </Box>
  );
};

export default UserDetail;
