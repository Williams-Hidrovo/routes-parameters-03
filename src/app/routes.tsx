import { createBrowserRouter, redirect } from "react-router-dom";
import { AppLayout } from "./layouts/appLayout";
import ProductsPage from "../features/products/pages/ProductsPage";

const productsDetail=() => import('../features/products/pages/ProductDetail').then(m => ({Component:m.ProductDetail}))

const routerApp=createBrowserRouter([
    {
        element:<AppLayout/>,
        children:[
            {
                index:true,
                loader:() => redirect('products')
            },
            {
                path:'products',
                element:<ProductsPage/>
            },
            {
                path:'products/:id',
                lazy:productsDetail
            }
        ]
    }
])


export default routerApp