const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// router
const { industriRoute, geoRoute, posisiRoute, topikRoute } = require("./routers");
app.use("/industri", industriRoute);
app.use("/geo", geoRoute);
app.use("/posisi", posisiRoute);
app.use("/topik", topikRoute);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || "ini error";
  return res.status(statusCode).send({
    isError: true,
    message: statusMessage,
    data: null,
  });
});

app.listen(80, () => {
  console.log("server sudah berjalan");
});
