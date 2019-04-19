import './styles/style.scss';
// import './styles/boostrap.cstat-skip';

import { http } from './scripts/http';
import { ui } from './scripts/ui';

// Get posts on DOM load.
const getPosts = (e) => {
  http
    .get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.error(err));
};

// On dom load, get data from API.
document.addEventListener('DOMContentLoaded', getPosts);
