import{ createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import getRepos from '../Helpers/helper'
import 'regenerator-runtime/runtime'
import axios from 'axios'

const initialState = {
    repos: [],
    userDetails:{},
    isLoading: false,
    isSuccess: false,
    userAvatar: null,
}

export const getRepos = createAsyncThunk('repos/getRepos', async(code) => {
try {
        const theData = await axios.post('http://localhost:6020/login', {code})
        return theData.data
} catch (error) {
    console.log(error)
}
})


export const repoSlice = createSlice({
    name: "repos",
    initialState,
    reducers: {
        setAvatar: (state) => {
            state.userAvatar = state.repos[0].owner.avatar_url
        },
        reset: (state) => {
            state.isSuccess = false
            state.repos= []
            state.userDetails = {}
            state.isLoading = false
            state.userAvatar = null
            state.user = {}
        },
    },
    extraReducers: {
        [getRepos.pending]: (state) => {
                state.isLoading = true
        },
        [getRepos.fulfilled]: (state, action) => {
            state.userDetails = action.payload[0]
            state.repos = action.payload[1]
            state.isSuccess = true
            state.isLoading = false
        },
        [getRepos.rejected]: (state) => {
                state.isLoading = false
                state.isSuccess = false
        }
    }
})

export const {setAvatar, reset} = repoSlice.actions
export default repoSlice.reducer 