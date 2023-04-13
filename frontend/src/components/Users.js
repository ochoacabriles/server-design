import useUsers from "../hooks/useUsers";

const Users = () => {
  const { users, isLoading, error } = useUsers();
  return (
    <div>
      {isLoading
        ? <h1>Loading...</h1>
        : error
          ? <h1>{error}</h1>
          : <div style={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
              <table>
                <thead style={{ backgroundColor: '#f2f2f2' }}>
                  <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nickname</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Code</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.nickname}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.randomCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      }
    </div>
  );
};

export default Users;
