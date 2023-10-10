import Users from "@/component/Users";

const fetchUsers = async url => {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const users = await fetchUsers("https://reqres.in/api/users");

  return <Users users={users} />;
};

export default HomePage;
 