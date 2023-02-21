import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      id: 1,
      title: 'Post 1',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is first post "
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is second post "
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is third post "
    },
    {
      id: 4,
      title: 'Post 4',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is four post "
    },
    {
      id: 5,
      title: 'Post 5',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is five post "
    },
  ],
  postForView: null,
  freshPosts: null
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {

    setPosts: (state, action) => {
      state.list = action.payload
    },
    editPost: (state) => {
      
    },
    getPost: (state, action) => {
      state.postForView = state.list.find((item)=>item.id===action.payload)
    },
    addPost: (state,action) => {

    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3)
    }
  },
})


export const { setPosts, editPost, getPost, addPost, getFreshPosts } = postsSlice.actions

export default postsSlice.reducer