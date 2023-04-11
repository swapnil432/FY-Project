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
              variant="outlined"
              onChange={handelchange("name")}
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Age"
              onChange={handelchange("age")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Gender"
              onChange={handelchange("gender")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <input
              accept="image/*"
              onChange={(e) => {
                console.log(e.target.files[0]);
              }}
              type="file"
            />
            <UploadFile
              onChange={(e) => {
                console.log(e.target.files[0]);
              }}
            >
              Upload Aadhar Card
            </UploadFile>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Email id"
              onChange={handelchange("email")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              onChange={handelchange("phone")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Aadhar Card Number"
              onChange={handelchange("aadhar")}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <UploadFile onChange={onSelectFile}>Upload your Photo</UploadFile>
          </Grid>
        </Grid>
        <Button variant="contained" onClick={submitform}>
          Submit
        </Button>
        {/* <BtnButton color={"primary"}>Submit</BtnButton> */}
      </Container>
    </Box>
  );
};

export default UserDetail;
