import "bootstrap/dist/css/bootstrap.css";
import userService, { User } from "./services/userService";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setError, setUsers } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh", username: "Moshu" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  function updateUser(user: User) {
    const updatedUser = { ...user, name: "-1" };
    const originalUsers = [...users];
    setUsers(
      users.map((u) => (u.id === user.id ? { ...user, name: "-1" } : u))
    );

    userService.update<User>(updatedUser).catch((err) => {
      setError(err);
      setUsers(originalUsers);
    });
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border" role="status"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
