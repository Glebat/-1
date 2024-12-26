import React, { useState } from 'react';
import usersData from '../fixtures/users';
import SortUsers from './SortUsers';

const UsersTable = () => {
  const [users, setUsers] = useState(usersData.users);

  return (
    <div id="container" className="container m-3">
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>registration_date</td>
            <td>status</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.registration_date}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SortUsers users={users} setUsers={setUsers} />
    </div>
  );
};

export default UsersTable;

import React, { useState } from 'react';

const SortUsers = ({ users, setUsers }) => {
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortAsc) {
        return b.name.localeCompare(a.name);
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setUsers(sortedUsers);
    setSortAsc(!sortAsc);
  };

  return (
    <button onClick={handleSort}>Sort</button>
  );
};

export default SortUsers;