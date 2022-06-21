import { register, test2 } from "../controllers/userController";

const userRoute = (app) => {
  app.route("/").get(test2);
  app.route("/api/register").post(register);
};

export default userRoute;
