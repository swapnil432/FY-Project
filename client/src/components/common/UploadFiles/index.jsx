import { Box, styled, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadBox = styled(Button)({
  margin: " 1rem 0",
  minHeight: "15rem",
  width: "100%",
  border: " 2px dashed #3859F7",
  textTransform: "capitalize",
});
const UploadFile = ({ text, setState }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleChange = (event) => {
    const files = event.target.files;
    setState(files);
    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
    }
    setSelectedFiles(fileNames);
  };
  return (
    <UploadBox component="label">
      <Stack sx={{ alignItems: "center" }}>
        <CloudUploadIcon sx={{ fontSize: "4rem" }} />
        {text}
        <input
          hidden
          accept="application/pdf"
          multiple
          onChange={handleChange}
          type="file"
        />
        <Stack sx={{ alignItems: "center" }}>
          {selectedFiles.map((f, i) => (
            <div key={i}>{f}</div>
          ))}
        </Stack>
      </Stack>
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
