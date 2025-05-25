// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts as fetchPostsApi, fetchPost as fetchPostApi, createPost as createPostApi } from '../../api/postApi';

const initialState = {
  posts: [],
  currentPost: null,
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ boardType, page }, thunkAPI) => {
  const response = await fetchPostsApi(boardType, page);
  return response;
});

export const fetchPost = createAsyncThunk('posts/fetchPost', async ({ boardType, postId }, thunkAPI) => {
  const response = await fetchPostApi(boardType, postId);
  return response;
});

export const createPost = createAsyncThunk('posts/createPost', async ({ boardType, postData }, thunkAPI) => {
  const response = await createPostApi(boardType, postData);
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentPost = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  }
});

export default postsSlice.reducer;
