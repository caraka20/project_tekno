module.exports = {
  apiKey: (req, res, next) => {
    const { apikey } = req.headers;

    if (!apikey) return res.send("api key not found");
    if (apikey !== "tekno123") return res.send("api key eroor!");

    next();
  },
};
