import express from 'express';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';
import UserRoutes from "./routes/UserRoutes.js";
import CommentRoutes from "./routes/CommentRoutes.js";
import VotingRoutes from "./routes/VotingRoutes.js";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert {type: "json"};


const secret = 'secret123';
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/vote", VotingRoutes);
app.use("/user", UserRoutes);
app.use("/comment", CommentRoutes);

await mongoose.connect('mongodb+srv://victory:6uzyWvxvi3ilOeSI@redditdb.xaeix.mongodb.net/reddit_db?retryWrites=true&w=majority', {useNewUrlParser:true,useUnifiedTopology:true,});
const db = mongoose.connection;
db.on('error', console.log);

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(4000);