/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, signUpUser } from '../../service/auth.service';

const user = 
{
	firstname : -1,
	surname : 'Grace',
	email : '',
	phone : '',
	password : '',
}
const initialState = {
	user: user,
	errMsg: '',
	token: '',
	successMsg: '',
	loading: '',
}

export const authSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		saveUsers : (state, action) =>
        {
			state.user = action.payload
		},
	}, 
	extraReducers: {
		//SignUp
		[signUpUser.pending]: (state, action) =>
		{
			state.loading = true
		},
		[signUpUser.fulfilled]: (state, action) => 
		{
			state.loading = false;
			// if(errMsg)
			// { 
			// 	state.errMsg = "errMsg"; 
			// } else {
				
			// }
			state.user = action.payload;
			state.successMsg = "Registration Successful";			
			console.log(state.successMsg)
			console.log(state.user)
		},
		[signUpUser.rejected]: (state, action) => 
		{
			state.loading = true;
		},
		//Login		
		[loginUser.pending]: (state, action) =>
		{
			state.loading = true
		},
		[loginUser.fulfilled]: (state, { payload: { errMsg, successMsg, token, user }}) => 
		{
			state.loading = false;
			if(errMsg)
			{ 
				state.errMsg = errMsg; 
			} else {
				state.successMsg = successMsg;
				state.token = token;
				state.user = user;

				localStorge.setItem('successMsg', successMsg);
				localStorge.setItem('user', JSON.stringify(user));
				localStorge.setItem('token', token);
			}
			state.successMsg = "Registration Successful";
		},
		[loginUser.rejected]: (state, action) => 
		{
			state.loading = true;
		}
	}

})

export const { updateUsername } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;