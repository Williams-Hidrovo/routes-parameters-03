import { createBrowserRouter, redirect } from "react-router-dom";
import { AppLayout } from "./layouts/appLayout";
import { ProductsPage } from "../features/products/pages/ProductsPage";
import { ProductDetail } from "../features/products/pages/ProductDetail";


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
                element:<ProductDetail/>
            }
        ]
    }
])


export default routerApp