const axios = require('axios');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request to the API
axios.get(apiUrl)
  .then((response) => {
    // Handle the successful response
    const posts = response.data;
    console.log('Fetched Posts:');
    posts.forEach((post) => {
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log('---');
    });
  })
  .catch((error) => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
