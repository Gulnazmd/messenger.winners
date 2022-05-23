import Handlebars from 'Handlebars';

import authTmpl from './login.tmpl';

const contentHTML = Handlebars.compile(authTmpl)({'login': 'gulnazmd', 'password': 'qwerty'});
const contentElement = document.getElementById('content');
contentElement.innerHTML = contentHTML;