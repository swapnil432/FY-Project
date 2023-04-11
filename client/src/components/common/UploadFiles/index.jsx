import { Box, styled, Button, Stack } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";

const UploadBox = styled(Button)({
  margin: " 1rem 0",
  height: "15rem",
  width: "100%",
  border: " 2px dashed #3859F7",
  textTransform: "capitalize",
});
const UploadFile = ({ text, srcUrl, setState }) => {
  
  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result)
      setState(reader.result);
    };
  };

  return (
    <UploadBox component="label">
      <Stack sx={{ alignItems: "center" }}>
        <CloudUploadIcon sx={{ fontSize: "4rem" }} />
        {text}
      </Stack>
      <input required onChange={handleChange} hidden accept="image/*" multiple type="file" />
      {srcUrl && <Image src={srcUrl} alt="profile Image" fill objectFit="contain" />}
    </UploadBox>
  );
};

export default UploadFile;
{
  /*
      <Button variant="contained" color="primary" component="span">
      {children}
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
      />
    </Button>
  <UploadBox component="label">
        <Stack sx={{ alignItems: "center" }}>
          <CloudUploadIcon sx={{ fontSize: "4rem" }} />
          {children}
        </Stack>
        <input hidden accept="image/*"  type="file" />
      </UploadBox> */
}
