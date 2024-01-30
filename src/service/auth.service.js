import { createAsyncThunk } from "@reduxjs/toolkit";

const signUpUrl = "http://localhost:8000/api/signup";
const loginUrl = "http://localhost:8000/api/login";

export const signUpUser = createAsyncThunk('signUpUser', async(data) => 
{
    const res = await fetch(signUpUrl, {
        method: "post",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(data)
    })
    return await res.json()
})

export const loginUser = createAsyncThunk('loginUser', async(data) => 
{
    const res = await fetch(loginUrl, {
        method: "post",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(data)
    })
    return await res.json()
})