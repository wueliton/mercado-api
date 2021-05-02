const mysql = require("mysql");

const bdConnect = () => {
  return mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
  });
};

module.exports = {
  findAll(req, res) {
    const connection = bdConnect();
    connection.query("select * from users", function (error, results, fields) {
      if (error) {
        return res.status(404).send({
          error: { msg: "Erro ao tentar recuperar os usuários" },
        });
      }
      return res.send(results);
    });
  },

  findById(req, res) {
    const connection = bdConnect();
    const id = req.params.id;

    connection.query(
      "select * from users where id='" + id + "'",
      function (error, results) {
        if (error) {
          return res.status(404).send({
            error: { msg: "Erro ao tentar pesquisar usuário" },
            error,
          });
        }
        return res.send(results);
      }
    );
  },

  findOne(req, res) {},

  insert(req, res) {
    const connection = bdConnect();

    fields = [null, req.body.name, req.body.last_name, req.body.phone, "now()"];

    if (!req.body.name || req.body.name === null || req.body.name === undefined)
      return res
        .status(404)
        .send({ error: { msg: "O campo nome é inválido" } });
    else if (
      !req.body.last_name ||
      req.body.last_name === null ||
      req.body.last_name === undefined
    )
      return res
        .status(404)
        .send({ error: { msg: "O campo de sobrenome é inválido" } });
    else if (
      !req.body.phone ||
      req.body.phone === null ||
      req.body.phone === undefined
    )
      return res
        .status(404)
        .send({ error: { msg: "O campo de telefone é inválido" } });
    else {
      connection.query(
        "insert into users values (?, ?, ?, ?, ?)",
        fields,
        function (error, results) {
          if (error) {
            return res.status(404).send({
              error: {
                msg: "Erro ao tentar inserir os dados no banco de dados",
                error,
              },
            });
          }
          return res.send(results);
        }
      );
    }
  },
  
};
