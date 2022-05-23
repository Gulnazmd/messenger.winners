import button from '../../components/button/button';
import input from '../../components/input/input';
import './login.css';
import '../../pages/main.css'

const content = `

        <form action="" method="post" class="form">
            <div class="title">Sign In</div>
                ${input({label: 'Login', name: 'login', value: '{{login}}', maxlength: '90', type: 'text'})}
                ${input({ label: 'Password', name: 'password', value: '{{password}}', maxlength: '90', type: 'password' })}
                    <div class="authButton">
                        ${button('Sign In')}
                    </div>
                    <small>You don't have an account??</small>
                    <a class="link link__hover" href="../auth/auth.html">
                    Register
                    </a>
        </form>
`;
export default content;