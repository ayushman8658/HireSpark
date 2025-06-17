import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js"; //  Correct DB connection
import userRoute from "./routes/user.route.js"; //import user route
import companyRoute from "./routes/company.route.js"; //import company route
import jobRoute from "./routes/job.route.js"; //import job route
import applicationRoute from "./routes/application.route.js"; //  Import Application Route

dotenv.config();

//  Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    console.log(" MongoDB Connected Successfully");

    const app = express();

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    const corsOptions = {
      origin: ["http://localhost:5173"], //  Allow frontend origin
      credentials: true,
    };

    app.use(cors(corsOptions));

    const PORT = process.env.PORT || 5001;

    // API Routes
    app.use("/api/user", userRoute);
    app.use("/api/company", companyRoute);
    app.use("/api/job", jobRoute);
    app.use("/api/application", applicationRoute); // Add Application Route

    // Start Server After DB Connection
    app.listen(PORT, () => {
      console.log(` Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(" MongoDB Connection Failed:", error);
    process.exit(1); // Stop server if DB connection fails
  });
