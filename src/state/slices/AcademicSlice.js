import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id : 1,
	username : 'Grace',
	email : 'gracefromabove@almight.com'
}

export const academicSlice = createSlice({
	name: 'academicx',
	initialState,
	reducers: {
		updateUsername : (state, action) =>
        {
			state.username = action.payload
		},
	}
})

export const { updateUsername } = academicSlice.actions;
export const academicSliceReducer = academicSlice.reducer;