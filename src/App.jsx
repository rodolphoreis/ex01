import "./App.css";
import UserDetails from "./Components/UserDetails";
function App() {
  const users = [
    { id: 1, name: "Diego", age: 13, profession: "Estudante" },
    { id: 2, name: "Breno", age: 49, profession: "Pedreiro" },
    { id: 3, name: "Ricardo", age: 18, profession: "Estudante" },
    { id: 4, name: "Pedro", age: 17, profession: "Estudante" },
    { id: 5, name: "Nuno", age: 21, profession: "Pintor" },
    { id: 6, name: "Rafael", age: 28, profession: "Engenheiro" },
    { id: 7, name: "Bruno", age: 33, profession: "Vendedor" },
  ];

  return (
    <>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          profession={user.profession}
        />
      ))}
      <UserDetails />
    </>
  );
}

export default App;
