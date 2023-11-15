import { useState } from 'react';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [selectedContactId, setSelectedContactId] = useState();

  return (
    <div>
      <ContactList setSelectedContactId={setSelectedContactId} />
    </div>
  );
}

export default App;