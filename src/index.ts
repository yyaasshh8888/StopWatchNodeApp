import * as Express from "express";
import stopwatch from "./stopwatch";

(() => {
  const app = Express();

  app.get("/", (_, res) => {
    res.send("ok");
  });
  app.get("/time", (_, res) => {
    res.send(`Time : ${stopwatch.getElapsedTime()}`);
  });
  app.get("/start", (_, res) => {
    stopwatch.start();
    res.send(`Started : ${stopwatch.getElapsedTime()}`);
  });
  app.get("/stop", (_, res) => {
    stopwatch.stop();
    res.send(`${stopwatch.getElapsedTime()}`);
  });
  app.get("/reset", (_, res) => {
    stopwatch.reset();
    res.send(`${stopwatch.getElapsedTime()}`);
  });

  app.listen(3000, () => {
    console.log(`App listening on PORT ${3000}`);
  });
})();
