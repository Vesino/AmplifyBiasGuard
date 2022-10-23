import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// pages
import Documents from './pages/Documents.jsx';
import Editor from './pages/Editor.jsx';
import './index.css';


function App({ signOut, user }) {
  return (
    <div className="bg-brandDark-500 text-gray-200 text-xs">
      <Router>
        <Routes>
          <Route element={<Documents />} path="/" />
          <Route element={<Editor />} path="/editor/:id" />
          <Route element={<Editor />} path="/editor/" />
        </Routes>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
