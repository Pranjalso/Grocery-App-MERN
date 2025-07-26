import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoutes.js';
import sellerRouter from './routes/sellerRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/OrderRoutes.js';
import { stripeWenhooks } from './controllers/orderController.js';

const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()


//Allow multiple origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://grocery-app-mern-frontend.vercel.app"
];


app.post('/stripe', express.raw({type: 'application/json'}), stripeWenhooks)

//Middleware configuration
app.use(cors({
  origin: "https://grocery-app-mern-frontend.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());




app.get('/', (req, res) => res.send("API is Working"));
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter )
app.use('/api/cart', cartRouter )
app.use('/api/address', addressRouter )
app.use('/api/order', orderRouter)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
