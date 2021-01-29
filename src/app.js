import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productsRoutes from "./routes/products.routes";

const app = express();



//guardamos en una variable la informacion de pkg
app.set('pkg',pkg);

app.use(morgan('dev'));

//tener cuidado con el orden de los parametros
app.get('/',(req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})

app.use('/products',productsRoutes);

export default app;

