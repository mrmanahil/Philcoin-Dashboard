// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { use } from "react-redux";

// ** Employee Service Imports
import { invitationService } from "services";

export const QueryAction = createAsyncThunk(
  "invitation/query",
  async (query) => {
    Slice.actions.handleQuery(query);
    return query;
  }
);

export const fetchOneAction = createAsyncThunk(
  "invitation/fetchOne",
  async (id) => {
    const response = await invitationService.getById(id);
    return response.data;
  }
);

export const fetchAllAction = createAsyncThunk(
  "invitation/fetchAll",
  async () => {
    const response = await invitationService.getAll();
    return response.data;
  }
);

export const addAction = createAsyncThunk(
  "invitation/add",
  async (data, state) => {
    Slice.actions.handleStatus("pending");
    try {
      const response = await invitationService.add(data);
      state.dispatch(fetchAllAction({ query: "" }));
      toast.success("Added succesfully!");
      Slice.actions.handleStatus("success");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong!")(
        Slice.actions.handleStatus("error")
      );
      return error.response.data;
    }
  }
);

export const updateAction = createAsyncThunk(
  "invitation/update",
  async ({ id, data }) => {
    Slice.actions.handleStatus("pending");
    try {
      const response = await invitationService.update(
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

export const deleteAction = createAsyncThunk(
  "invitation/delete",
  async (id) => {
    Slice.actions.handleStatus("pending");
    try {
      const response = await invitationService.delete(id)(
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
  }
);

// @ts-ignore
export const Slice = createSlice({
  name: "invitation",
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

      state.entities = data.invitation || [];
      state.total = data.invitation?.length || 0;
      // state.entities = []
      // state.total = 0
    });
    builder.addCase(fetchOneAction.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.entity = data.invitation || {};
    });
  },
});

export default Slice.reducer;
