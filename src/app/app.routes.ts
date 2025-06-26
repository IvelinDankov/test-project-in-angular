import { Routes } from '@angular/router';
import { Home } from './home/home.js';
import { Register } from './user/register/register.js';
import { Login } from './user/login/login.js';
import { About } from './about/about.js';
import { Contact } from './contact/contact.js';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'users/register',
    component: Register,
  },
  {
    path: 'users/login',
    component: Login,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contacts',
    component: Contact,
  },
];
