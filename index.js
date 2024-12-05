const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// router
const { industriRoute, geoRoute, posisiRoute, topikRoute, mappingRoute } = require("./routers");
app.use("/api/industri", industriRoute);
app.use("/api/geo", geoRoute);
app.use("/api/posisi", posisiRoute);
app.use("/api/topik", topikRoute);
app.use("/api/mapping", mappingRoute);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || "ini error";
  return res.status(statusCode).send({
    isError: true,
    message: statusMessage,
    data: null,
  });
});

app.listen(3000, () => {
  console.log("server sudah berjalan");
});
