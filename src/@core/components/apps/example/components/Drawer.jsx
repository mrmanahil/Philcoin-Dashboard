import { useEffect } from "react";
import * as React from "react";

// ** MUI Imports
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import { useSelector } from "react-redux";

// ** Third Party Imports
import { useExample } from "@core/hooks/apps/useExample";

// ** import form support components
import { InputField, Select, DateTimePicker } from "@core/components/form";

// ** Icons Imports
import Close from "mdi-material-ui/Close";

// ** Types Imports
import { Grid, TextField } from "@mui/material";

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 4),
  justifyContent: "space-between",
  // backgroundColor: theme.palette.background.default
}));

const Footer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 4),
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
}));

const ExampleDrawer = (props) => {
  // ** Props
  const { open, toggle, serviceId } = props;

  // ** Hooks
  const {
    form: {
      control,
      reset,
      handleSubmit,
      formState: { errors },
      setValue,
    },
    addUser,
    updateUser,
    store,
  } = useExample(serviceId);

  const onSubmit = async (data) => {
    if (serviceId) {
      await updateUser(serviceId, data);
    } else {
      await addUser(data);
    }
  };

  const handleClose = () => {
    reset();
    toggle();
  };

  return (
    <Drawer
      open={open}
      anchor="right"
      variant="temporary"
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ "& .MuiDrawer-paper": { width: 700 } }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <Typography variant="h6">
            {!serviceId ? "Add Example" : "Update Example"}
          </Typography>
          <Close
            fontSize="small"
            onClick={handleClose}
            sx={{ cursor: "pointer" }}
          />
        </Header>
        <Box sx={{ p: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="first_name"
                label="First Name"
                placeholder="First Name"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="last_name"
                label="Last Name"
                placeholder="Last Name"
                control={control}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputField
                name="email"
                label="email"
                placeholder="Enter Time"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="password"
                label="Enter Password"
                placeholder="Enter Password"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="phone"
                label="Enter Phone"
                placeholder="Enter Phone"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                name="gender"
                label="Gender"
                placeholder="Select Gender"
                control={control}
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Box>
        <Footer>
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <LoadingButton
            sx={{ mr: 3 }}
            loading={store?.status === "pending"}
            disabled={store?.status === "pending"}
            loadingPosition="end"
            size="large"
            variant="contained"
            type="submit"
          >
            Submit
          </LoadingButton>
        </Footer>
      </form>
    </Drawer>
  );
};

export default ExampleDrawer;
