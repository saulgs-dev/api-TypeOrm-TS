import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() =>
    app.listen(3000, () => {
      console.log("Database is connectd");
      console.log(`App is running on https://localhost:${PORT}`);
    })
  )
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
