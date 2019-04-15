/* eslint-disable func-names, no-undef */

const http = new EasyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
