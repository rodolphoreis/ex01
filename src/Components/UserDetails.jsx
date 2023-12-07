/* eslint-disable react/prop-types */
const UserDetails = ({ name, age, profession }) => {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        <li>Idade: {age}</li>
        <li>Profissão: {profession}</li>
      </ul>
      {age >= 18 ? (
        <p>Pessoa ode tirar a carta de condução!</p>
      ) : (
        <p>Ainda não tem idade!</p>
      )}
    </>
  );
};
export default UserDetails;
