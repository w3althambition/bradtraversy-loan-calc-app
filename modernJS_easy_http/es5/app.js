/* eslint-disable func-names, no-undef */

// Instantiate our lib.
const http = new EasyHTTP();

// Sample data.
const data = {
  title: 'Custom Post',
  body: 'This is a custom post',
};

/*
// Get Posts from a server
*/

// http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

/*
// Get single post
*/

// http.get('https://jsonplaceholder.typicode.com/posts/1', (err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

/*
// Update a post on the a server.
*/

// http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, post) => {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

/*
// Push post to a server.
*/

http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, posts) => {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
