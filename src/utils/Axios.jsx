import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2E5ZWVkMTEzZjg2OTU1MzI1ZGIyMjk1YzcwNmJjZSIsIm5iZiI6MTcyNDc2OTI3Ny4wNzc0NjYsInN1YiI6IjY2OWUxN2VhNDNhMzAzMGE0OTQwODk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XsopiQfOrlU69V5HLvaH7bXUlMSxCys1NMZPi0HlH8w',
      },

})

export default instance;