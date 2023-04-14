import { Box, styled, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";

const UploadBox = styled(Button)({
  margin: " 1rem 0",
  height: "15rem",
  width: "100%",
  border: " 2px dashed #3859F7",
  textTransform: "capitalize",
});
const UploadImages = ({ text, srcUrl, setState, setState2, multiple }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleChange = (event) => {
    if (multiple === true) {
      const files = event.target.files;
      //   console.log(event.target.files);
      setState(files);
      const fileNames = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          fileNames.push(reader.result);
        };
      }
      console.log(fileNames);
      setSelectedFiles(fileNames);
    } else {
      const file = event.target.files[0];
      setState2(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        setState(reader.result);
      };
    }
  };

  return (
    <>
      <UploadBox component="label">
        <Stack sx={{ alignItems: "center" }}>
          <CloudUploadIcon sx={{ fontSize: "4rem" }} />
          {text}
        </Stack>
        {multiple ? (
          <input
            required
            onChange={handleChange}
            hidden
            multiple
            accept="image/*"
            type="file"
          />
        ) : (
          <input
            required
            onChange={handleChange}
            hidden
            accept="image/*"
            type="file"
          />
        )}

        {srcUrl && (
          <Image src={srcUrl} alt="profile Image" fill objectFit="contain" />
        )}
      </UploadBox>
      {/* {multiple === true ? (
        selectedFiles.map((f, i) => (
          <Image
            style={{ marginTop: "20rem" }}
            src={f}
            key={i}
            fill
            objectFit="contain"
            alt="profile Image"
          />
        ))
      ) : (
        <></>
      )} */}
    </>
  );
};

export default UploadImages;
