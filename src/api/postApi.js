import axios from './axiosInstance'

export const fetchPosts = async (boardType, page) => {
  try {
    const response = await axios.get(`/posts/${boardType}`, {
      params: { page }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}