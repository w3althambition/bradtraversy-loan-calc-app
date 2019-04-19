import './styles/style.scss';
// import './styles/boostrap.cstat-skip';

import { http } from './scripts/http';
import { ui } from './scripts/ui';

// Get posts on DOM load.
const getPosts = () => {
  http
    .get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
};

const submitPost = () => {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body,
  };

  // Create Post
  http
    .post('http://localhost:3000/posts', data)
    .then(() => {
      getPosts();
      ui.showAlert('Post added.', 'alert alert-success');
      ui.clearFields();
    })
    .catch(err => console.log(err));
};

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// On dom load, get data from API.
document.addEventListener('DOMContentLoaded', getPosts);
