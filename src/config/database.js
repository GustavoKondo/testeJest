module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "9896123",
  database: process.env.NODE_ENV === "test" ? "syscondom_test" : "syscondom",
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
  },
};
