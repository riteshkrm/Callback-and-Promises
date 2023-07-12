function fetchDataFromAPI() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchDataFromAPI();
