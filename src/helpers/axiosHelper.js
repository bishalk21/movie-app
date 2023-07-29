import axios from "axios";
import { MOVIE_API } from "../utils/constant";

export const fetchData = async (title) => {
  try {
    // fetch(MOVIE_API)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     return data;
    //   });

    const url = MOVIE_API + "t=" + title;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    // console.error("Error fetching data:", error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
