import React, { useContext } from "react";
import UserContext from "../contexts/user";
import CustomTable from "./Table/Table";

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
        {console.log([users])}
        <CustomTable tableHead = {['1','2','3']} tableHeaderColor='rose' tableData={[Object.entries(users)]}></CustomTable>
        </div>
      )}

      <p>Teste</p>
    </>
  );
};

export default TabelaUsersComponent;
