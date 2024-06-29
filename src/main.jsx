import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import Profile from './components/Profile/Profile.jsx'
import FriendList from './components/FriendList/FriendList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile />
    <FriendList />
  </React.StrictMode>
);
