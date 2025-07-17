import { useEffect, useState, useRef } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Button, InputGroup, OverlayToaster, Position, EditableText } from '@blueprintjs/core';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newWebsite, setNewWebsite] = useState("");

  const toasterRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  function addUser() {
    const name = newName.trim();
    const username = newUserName.trim();
    const email = newEmail.trim();
    const website = newWebsite.trim();

    if (name && username && email && website) {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({ name, username, email, website }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then(data => {
          setUsers([...users, data]);

          toasterRef.current?.show({
            message: "User added successfully",
            intent: "success",
            timeout: 3000
          });

          setNewName("");
          setNewUserName("");
          setNewEmail("");
          setNewWebsite("");
        });
    }
  }

  function onChangeHandler(id, key, value) {
    setUsers((users) =>
      users.map((user) => (user.id === id ? { ...user, [key]: value } : user))
    );
  }

  function updateUser(id) {
    const user = users.find((u) => u.id === id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then(() => {
        toasterRef.current?.show({
          message: "User updated successfully",
          intent: "success",
          timeout: 3000
        });
      });
  }

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setUsers((users) => users.filter((user) => user.id !== id));

        toasterRef.current?.show({
          message: "User deleted successfully",
          intent: "success",
          timeout: 3000
        });
      });
  }

  return (
    <div className="App">
      <OverlayToaster position={Position.TOP} ref={toasterRef} />

      <table className="bp4-html-table bp4-html-table-striped bp4-html-table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>
                <EditableText
                  value={user.email}
                  onChange={(value) => onChangeHandler(user.id, 'email', value)}
                />
              </td>
              <td>
                <EditableText
                  value={user.website}
                  onChange={(value) => onChangeHandler(user.id, 'website', value)}
                />
              </td>
              <td>
                <Button intent="primary" onClick={() => updateUser(user.id)} style={{ marginRight: '5px' }}>
                  Edit
                </Button>
                <Button intent="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <InputGroup
                value={newUserName}
                placeholder="Enter username..."
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </td>
            <td>
              <InputGroup
                value={newName}
                placeholder="Enter name..."
                onChange={(e) => setNewName(e.target.value)}
              />
            </td>
            <td>
              <InputGroup
                value={newEmail}
                placeholder="Enter email..."
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </td>
            <td>
              <InputGroup
                value={newWebsite}
                placeholder="Enter website..."
                onChange={(e) => setNewWebsite(e.target.value)}
              />
            </td>
            <td>
              <Button intent="success" onClick={addUser}>
                Add User
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
