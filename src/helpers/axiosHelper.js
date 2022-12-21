import axios from "axios";

// Endpoint for movie
const apiEP = "https://www.omdbapi.com/?apikey=4aff2d6a&";

//using fetch
// fetch(apiEP)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// we have to use async/await
// API call is not part of pure js
// it is part of browser api or web api api
// so js has to go through the web workers to call the api
// as soon as api is called, when the data is available, it goes back down to the callback queue and after all the call stack is cleared and
// then this callback Q will go into the call stack and then it is finally executed.

//using axios
export const fetchMovies = async (title) => {
  try {
    const url = apiEP + "t=" + title;

    // if we don't use await here, since the js is synchronous and non-blocking i/o. it will not stop for anyone and
    // will continue to execute the next line of code. so we have to use await here to wait for the response to come back
    // and by that time we do not recieve the data from server
    // so we have to use await here to wait for the response to come back

    // const response = await axios.get(url);
    // this response have all properties but we need only movie data
    // so we have to destructure the response
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
