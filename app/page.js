const fetchUsers = async url => {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const users = await fetchUsers("https://reqres.in/api/users");
  return (
    <ul>
      {users.map(user => (
        <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md flex text-black justify-between">
          <div>
            <h5 className="font-bold">
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p className="text-slate-100">email: {user.email}</p>
          </div>
          <img src={user.avatar} alt="" className="rounded-full w-20" />
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
