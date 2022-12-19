import express from 'express'
import {v1RouterProductos, v1RouterCarritos, v1RouterAuth, v1RouterAdminHome, v1RouterUserHome, v1RouterRandomsNumbers} from './src/v1/index.js';
import {sessionHandler} from './src/middlewares/session.js'
import {passportMiddleware, passportSessionHandler} from './src/middlewares/passport.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

// passport
app.use(sessionHandler)
app.use(passportMiddleware)
app.use(passportSessionHandler)

// ejs
app.set('view engine', 'ejs')
app.set("views", "/views");

app.use('/api/v1/products', v1RouterProductos)
app.use('/api/v1/carts', v1RouterCarritos)

// login and register
app.use('/api/v1/auth', v1RouterAuth)

// home ADMIN
app.use('/api/v1/admin', v1RouterAdminHome)

// home USER
app.use('/api/v1/user', v1RouterUserHome)

// randoms numbers
app.use('/api/v1/randoms', v1RouterRandomsNumbers)

// auth
// app.use('/api/v1/home', v1Router)

// app.all('*', (req, res) => {
//     res.redirect('/api/v1/not-found')
// });

app.all('*', (req, res) => {
    // res.json({ error: `404 Not Found`, desc: `No encontamos la página que buscas.` });
    res.redirect('/api/v1/auth/login');
});

export {app}