import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from './App';
import { Provider } from 'react-redux';
import store from './components/store/store'; // Ensure this path is correct
import AutoLogin from './components/auth/AutoLogin'; 
import { AuthProvider } from './components/auth/AuthContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AutoLogin>
      <AuthProvider>
        <App />
      </AuthProvider>
      </AutoLogin>
    </Provider>
  </React.StrictMode>
);

