import * as productsControllers from '../productsControllers/index.js'

const getAdminHome = async (req,res)=>{
    // const allProductos = await productsControllers.getAllProductsController(/*req,res,mode*/);
    res.render('adminHome', { name: req.user.username/*, allProductos*/ })
}

const getAdminCreate = async(req,res) => {
    try {
        res.render('adminCreate')
    } catch (error) {
        res.render('adminCreate')
    }
}

const getAdminInfo = async(req,res)=>{
    res.render('admin-info-error')
}

const generateInfo = async (req,res)=>{
    res.json({
        info: "desde infoooo",
        argDeEntrada: process.argv,
        sistema: process.env.OS,
        nodeVersion: process.version,
        memoriaReservada: process.memoryUsage().rss,
        pathEjecucion: process.execPath,
        procesoId: process.pid,
        carpetaDelProyecto: process.cwd(),
    })
}

export {
    getAdminHome,
    getAdminCreate,
    getAdminInfo,
    generateInfo,
    // getUserHome
}