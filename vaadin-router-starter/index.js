import {Router} from '@vaadin/router';

// import all route Web Components here
import './views/x-home-view.js';
import './views/x-users-view.js';
import './views/x-user-profile-view.js';
import './views/x-not-found-view.js';

// select the DOM node where the route web components are inserted
const outlet = document.getElementById('outlet');

// create a router instance and set the routes config
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'x-home-view'},
  {path: '/users', component: 'x-users-view'},
  {path: '/users/:id', component: 'x-user-profile-view'},
  {path: '(.*)', component: 'x-not-found-view'},
]);
