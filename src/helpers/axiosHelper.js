import axios from "axios";

const apiEndPoint = "http://www.omdbapi.com/?apikey=4aff2d6a&";

export const fetchMovieInfo = async (title) => {
  try {
    const url = apiEndPoint + "t=" + title;

    const { data } = await axios.get(url);

    // console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
