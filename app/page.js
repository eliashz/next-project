const fetchUsers = async url => {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const users = await fetchUsers("https://reqres.in/api/users");
  return (
    <ul className="">
      {users.map(user => (
        <li key={user.id}>
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>email: {user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
