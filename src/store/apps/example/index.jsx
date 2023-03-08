// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { use } from "react-redux";

// ** Employee Service Imports
import { exampleService } from "services";

export const QueryAction = createAsyncThunk("example/query", async (query) => {
  Slice.actions.handleQuery(query);
  return query;
});

export const fetchOneAction = createAsyncThunk(
  "example/fetchOne",
  async (id) => {
    const response = await exampleService.getById(id);
    return response.data;
  }
);

export const fetchAllAction = createAsyncThunk(
  "example/fetchAll",
  async (params) => {
    const { query } = params;
    const response = await exampleService.getAll({ query });
    return response.data;
  }
);

export const addAction = createAsyncThunk("example/add", async (data) => {
  Slice.actions.handleStatus("pending");
  try {
    const response = await exampleService.add(data)(
      fetchAllAction({ query: "" })
    );
    toast.success("Added succesfully!")(Slice.actions.handleStatus("success"));
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message || "Something went wrong!")(
      Slice.actions.handleStatus("error")
    );
    return error.response.data;
  }
});

export const updateAction = createAsyncThunk(
  "example/update",
  async ({ id, data }) => {
    Slice.actions.handleStatus("pending");
    try {
      const response = await exampleService.update(
        id,
        data
      )(fetchAllAction({ query: "" }));
      toast.success("updated succesfully!")(
        Slice.actions.handleStatus("success")
      );
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong!")(
        Slice.actions.handleStatus("error")
      );
      return error.response.data;
    }
  }
);

export const deleteAction = createAsyncThunk("example/delete", async (id) => {
  Slice.actions.handleStatus("pending");
  try {
    const response = await exampleService.delete(id)(
      fetchAllAction({ query: "" })
    );
    toast.success("deleted succesfully!")(
      Slice.actions.handleStatus("success")
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message || "Something went wrong!")(
      Slice.actions.handleStatus("error")
    );
    return error.response.data;
  }
});

// @ts-ignore
export const Slice = createSlice({
  name: "example",
  initialState: {
    entities: [],
    entity: {},
    total: 0,
    params: {},
  },
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },
    handleQuery: (state, action) => {
      state.params.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllAction.fulfilled, (state, action) => {
      const { data } = action.payload;

      state.entities = data.examples || [];
      state.total = data.examples?.length || 0;
      // state.entities = []
      // state.total = 0
    });
    builder.addCase(fetchOneAction.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.entity = data.example || {};
    });
  },
});

export default Slice.reducer;
