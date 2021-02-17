import axios from "axios";

const KEY = "AIzaSyDF-DHW8OV6B8yZ8prnuviNCbWsDJjFNiA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
