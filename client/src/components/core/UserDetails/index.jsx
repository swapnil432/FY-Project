import React, { useContext, useEffect, useState } from "react";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import UploadFile from "@/components/common/UploadFiles";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import { Context } from "@/Context";
import { useRouter } from "next/router";

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
    console.log(name, email, age, phone, gender, aadhar);

    axios({
      method: "POST",
      url: `/api/uploadUserInfo/${user._id}`,
      data: values,
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((err) => {
        console.log("something wrong");
        setValues({
          ...values,
          name: "",
          email: "",
          age: "",
          phone: "",
          gender: "",
          aadhar: "",
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
        <form onSubmit={submitform}>
        <Grid
          container
          sx={{ marginTop: "2rem", width: "100%" }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Name"
              type="text"
              required
              variant="outlined"
              onChange={handelchange("name")}
              sx={{ m: 1, ml: 0, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Age"
              required
              type="number"
              InputProps={{
                inputProps: { 
                    min: 1 
                }
            }}
              onChange={handelchange("age")}
              variant="outlined"
              sx={{ m: 1, ml: 0, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              type="text"
              label="Gender"
              required
              onChange={handelchange("gender")}
              variant="outlined"
              sx={{ m: 1, ml: 0, width: "100%" }}
            />
            <UploadFile
              text={"Upload Aadhar Card"}
              setState={setAdhaarImage}
              srcUrl={adhaarImage}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Email id"
              type="Email"
              required
              onChange={handelchange("email")}
              variant="outlined"
              sx={{ m: 1, ml: 0, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              type="number"
              required
              onChange={handelchange("phone")}
              variant="outlined"
              sx={{ m: 1, ml: 0, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Aadhar Card Number"
              required
              type="number"
              onChange={handelchange("aadhar")}
              variant="outlined"
              sx={{ m: 1, ml: 0, width: "100%" }}
            />
            <UploadFile
              text={"Upload your Photo"}
              setState={setProfileImage}
              srcUrl={profileImage}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Submit
        </Button>
        </form>
        {/* <BtnButton color={"primary"}>Submit</BtnButton> */}
      </Container>
    </Box>
  );
};

export default UserDetail;
