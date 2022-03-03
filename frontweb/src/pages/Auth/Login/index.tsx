import Button from 'components/Button';
import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form action="">
        <div className="mb-4">
          <input type="text" placeholder="Email" name="username" />
          <div className="invalid-feedback d-block"></div>
        </div>
        <div className="mb-2">
          <input placeholder="Senha" name="password" />
          <div className="invalid-feedback d-block"></div>
        </div>
        <div className='login-submit'>
            <Button text='FAZER LOGIN'/>
        </div>
      </form>
    </div>
  );
};

export default Login;
