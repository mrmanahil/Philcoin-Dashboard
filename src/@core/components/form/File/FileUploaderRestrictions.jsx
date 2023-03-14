// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** libs
import axios from "axios";

// ** MUI Imports
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// ** form handling lib
import { useController, UseControllerProps } from "react-hook-form";

// ** Icons Imports
import Close from "mdi-material-ui/Close";
import FileDocumentOutline from "mdi-material-ui/FileDocumentOutline";

// ** Third Party Components
import toast from "react-hot-toast";
import { useDropzone, DropzoneOptions } from "react-dropzone";

// Styled component for the upload image inside the dropzone area
const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(10),
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    width: 250,
  },
}));

// Styled component for the heading inside the dropzone area
const HeadingTypography =
  styled(Typography) <
  (({ theme }) => ({
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
  }));

const FileUploaderRestrictions = ({
  maxFiles = 1,
  maxSize = 2000000,
  accept = { "image/*": [".png", ".jpg", ".jpeg", ".gif"] },
  control,
  ...props
}) => {
  // ** Hooks
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    ...props,
    control,
  });

  // ** State
  const [files, setFiles] = useState([]);
  const [status, setStatus] =
    (useState < "idle") | "pending" | "succes" | ("error" > "idle");

  useEffect(() => {
    return () => {
      setFiles([]);
    };
  }, []);

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles,
    maxSize,
    accept,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
    },
    onDropRejected: () => {
      toast.error(
        `You can only upload ${maxFiles} files & maximum size of ${maxSize} MB.`,
        {
          duration: 2000,
        }
      );
    },
  });

  const renderFilePreview = (file) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          width={38}
          height={38}
          alt={file?.name}
          src={URL.createObjectURL(file)}
        />
      );
    } else {
      return <FileDocumentOutline />;
    }
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };

  const fileList = files.map((file) => (
    <ListItem key={file.name}>
      <div classNameName="file-details">
        <div classNameName="file-preview">{renderFilePreview(file)}</div>
        <div>
          <Typography className="file-name">{file.name}</Typography>
          <Typography className="file-size" variant="body2">
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Close fontSize="small" />
      </IconButton>
    </ListItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  // useEffect(
  //   () => () => {
  //     Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  const handleUpload = () => {
    setStatus("pending");
    const uploadURL =
      "https://api.cloudinary.com/v1_1/https-www-kharreedlo-com/auto/upload";
    const uploadPreset = "mfcn3oqs";

    if (files) {
      files.forEach((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);
        axios({
          url: uploadURL,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: formData,
        })
          .then((res) => {
            if (maxFiles === 1) {
              onChange(`${res.data.secure_url}`);
            } else {
              onChange([...value, `${res.data.secure_url}`]);
            }
            toast.success("uploaded!");
          })
          .catch((err) => toast.error("upload field!"))
          .finally(() => setStatus("idle"));
      });
    }
  };

  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
          }}
        >
          <Img width={300} alt="Upload img" src="/images/misc/upload.png" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: ["center", "center", "inherit"],
            }}
          >
            <HeadingTypography variant="h5">
              Drop files here or click to upload.
            </HeadingTypography>
            <Typography color="textSecondary">
              Allowed{" "}
              {accept[Object.keys(accept)[0]].map((acc) => "*" + acc + ", ")}
            </Typography>
            <Typography color="textSecondary">
              Max {maxFiles} files and max size of {maxSize} MB
            </Typography>
          </Box>
        </Box>
      </div>
      {files.length ? (
        <Fragment>
          <List>{fileList}</List>
          <div classNameName="buttons">
            <Button
              color="error"
              variant="outlined"
              onClick={handleRemoveAllFiles}
            >
              Remove All
            </Button>
            <LoadingButton
              loading={status === "pending"}
              disabled={status === "pending"}
              loadingPosition="end"
              size="large"
              variant="contained"
              type="button"
              onClick={handleUpload}
            >
              Upload Files
            </LoadingButton>
          </div>
        </Fragment>
      ) : null}
    </>
  );
};

export default FileUploaderRestrictions;
