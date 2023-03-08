// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// ** Icons Imports
import ExportVariant from "mdi-material-ui/ExportVariant";

const TableHeader = (props) => {
  // ** Props
  const { handleFilter, value, toggle } = props;

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{ mr: 4, mb: 2 }}
        color="secondary"
        variant="outlined"
        startIcon={<ExportVariant fontSize="small" />}
      >
        Export
      </Button>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <TextField
          size="small"
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder="Search Category"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </Box>

      <Button sx={{ mr: 4 }} onClick={toggle} variant="contained">
        Add Example
      </Button>
    </Box>
  );
};

export default TableHeader;
