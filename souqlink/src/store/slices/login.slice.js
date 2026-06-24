import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authenticate = createAsyncThunk(
    async (_, thunkApi) => {
        try {
            const res = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "emilys",
                    password: "emilyspass"
                }),
                credentials: "include"
            })
                .then(res => res.json())
                .then(console.log(res));
            const data = await res.json();
            return data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState: false,
    reducers: {
        discredit: (state) => {
            console.log("logout");
            return false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authenticate.pending, (state) => {
            state.loading = true;
        })
            .addCase(authenticate.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(authenticate.rejected, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
            });
    }
});

export const { discredit } = authSlice.actions;
export default authSlice.reducer;