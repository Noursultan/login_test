import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    load: false,
    login: '',
    password: '',
    dataCame: false
};

export const LoginUser = createAsyncThunk('LoginUser', async function (params, { rejectWithValue }) {
    try {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: params.login,
                password: params.password
            })
        });

        if (res.ok) {
            return res.json().then(data => {
                return data; 
            });
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const loginUserSlice = createSlice({
    name: "loginUserSlice",
    initialState: initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.load = true;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.data = action.payload;
                state.load = false;
                state.dataCame = true
            })
            .addCase(LoginUser.rejected, (state) => {
                state.load = false;
            });
    }
})

export default loginUserSlice.reducer
export const { setLogin, setPassword } = loginUserSlice.actions