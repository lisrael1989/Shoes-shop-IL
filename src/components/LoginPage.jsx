// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function LoginPage({ onLogin }) {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//   });
//   const [error, setError] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     if (isSignUp) {
//       const userExists = storedUsers.find((u) => u.email === formData.email);
//       if (userExists) {
//         setError('User already exists. Please log in.');
//         return;
//       }

//       const newUser = {
//         id: Date.now(),
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         isAdmin: false,
//       };
//       const updatedUsers = [...storedUsers, newUser];
//       localStorage.setItem('users', JSON.stringify(updatedUsers));
//       onLogin(newUser);
//       navigate('/shoes');
//     } else {
//       const user = storedUsers.find(
//         (u) => u.email === formData.email && u.password === formData.password
//       );
//       if (user) {
//         onLogin(user);
//         navigate('/shoes');
//       } else {
//         setError('Invalid email or password');
//       }
//     }
//   };

//   return (
//     <section className="login-page">
//       <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
//       <form onSubmit={handleSubmit}>
//         {isSignUp && (
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         )}
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       <p>
//         {isSignUp ? (
//           <>
//             Already have an account?{' '}
//             <button onClick={() => setIsSignUp(false)}>Log in</button>
//           </>
//         ) : (
//           <>
//             Don&apos;t have an account?{' '}
//             <button onClick={() => setIsSignUp(true)}>Sign up</button>
//           </>
//         )}
//       </p>
//     </section>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { handleLogin } = useAuth();
  const navigate = useNavigate(); // Use navigate here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (isSignUp) {
      const userExists = storedUsers.find((u) => u.email === formData.email);
      if (userExists) {
        setError('User already exists. Please log in.');
        return;
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        isAdmin: false,
      };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      handleLogin(newUser, navigate); // Pass navigate explicitly
    } else {
      const user = storedUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        handleLogin(user, navigate); // Pass navigate explicitly
      } else {
        setError('Invalid email or password');
      }
    }
  };

  return (
    <section className="login-page">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <button onClick={() => setIsSignUp(false)}>Log in</button>
          </>
        ) : (
          <>
            Don&apos;t have an account?{' '}
            <button onClick={() => setIsSignUp(true)}>Sign up</button>
          </>
        )}
      </p>
    </section>
  );
}
