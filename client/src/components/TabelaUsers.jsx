import React, { useContext } from "react";
import UserContext from "../contexts/user";

const TabelaUsersComponent = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      {!users ? (
        <>
          <p>Carregando..</p>
        </>
      ) : (
        <div>
          {users.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      )}

      <p>Teste</p>
    </>
  );
};

export default TabelaUsersComponent;
