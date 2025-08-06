const pool = require("../config/db");

exports.getArticles = async () => {
  const result = await pool.query(
    "select * from articles order by published_at desc"
  );
  return result.rows;
};
exports.getArticleById = async (id) => {
  const result = await pool.query("select * from articles where id = $1", [id]);
  return result.rows[0];
};
exports.createArticle = async (title, content) => {
  const result = await pool.query(
    "insert into articles (title, content) values ($1, $2) returning *",
    [title, content]
  );
  return result.rows[0];
};
exports.updateArticle = async (id, title, content) => {
  const result = await pool.query(
    "update articles set title = $1, content=$2 where id = $3 returning *",
    [title, content, id]
  );
  return result.rows[0];
};
exports.deleteArticle = async (id) => {
  const result = await pool.query("delete from articles where id = $1", [id]);
};
