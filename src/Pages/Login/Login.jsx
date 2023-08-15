import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [val, setNicNumber] = React.useState('');
  const [getNic, setNicLocal] = React.useState();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const nicNumber = e.target.elements.nicNumber.value;

   

    console.log(`Submitted NIC Number: ${nicNumber}`);

    
    onLogin();
  };

  const requestToVote = (e, vals) => {
    console.log('val', vals);
    localStorage.setItem('nicnumber', vals);
    let nic = localStorage.getItem('nicnumber');
    setNicLocal(nic);
  };

  React.useEffect(() => {
    getNic !== undefined && navigate('/VoteScreen');
  }, [getNic]);

  return (
    <div className="Login">
      <div className="login-container">
        <form className="login-form" onSubmit={submitForm}>
          <input
            type="text"
            id="nicNumber"
            placeholder="Enter NIC number"
            value={val}
            onChange={(e) => setNicNumber(e.target.value)}
            required
          />
          <button type="submit" onClick={(e) => requestToVote(e, val)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

