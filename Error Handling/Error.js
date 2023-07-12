fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Process the retrieved data here
  })
  .catch(error => {
    console.error(error);
    // Display the error message on the webpage
    document.getElementById('error-message').textContent = 'An error occurred: ' + error.message;
  });
