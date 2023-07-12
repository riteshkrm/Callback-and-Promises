async function fetchCombinedDataFromAPIs() {
  const todoUrl = "https://jsonplaceholder.typicode.com/todos/1";
  const postUrl = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    const [todoResponse, postResponse] = await Promise.all([
      fetch(todoUrl),
      fetch(postUrl),
    ]);

    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData,
    };

    console.log(combinedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchCombinedDataFromAPIs();
