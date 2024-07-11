import { Application } from "express";
import homeRoutes from "./home.routes";
import tutorialRoutes from "./tutorial.routes";
import SignInRoutes from "../routes/admin/signin.routes";
import HotelsRoutes from "../routes/admin/hotels.routes"
import ViewAdminRoutes  from "./admin/view_admin.routes"

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/tutorials", tutorialRoutes);
    app.use("/api/adminsign", SignInRoutes);
    app.use("/api/adminsign/view-admins", ViewAdminRoutes);
    app.use("/api/addhotel", HotelsRoutes);

  }
}
