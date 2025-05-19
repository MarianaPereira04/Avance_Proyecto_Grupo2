
export function useLayout(pathname: string){
    const routes = [{
        path:'/',
        name:'Home'
    },{
        path:'/category',
        name:'Category'
    },{
        path:'/address',
        name:'Address'
    },
    {
        path:'/inventory',
        name:'Inventory'
    },
    {
        path:'/notification',
        name:'Notification'
    },
    {
        path:'/order',
        name:'Order'
    },
    {
        path:'/order-item',
        name:'Order Item'
    },
    {
        path:'/product',
        name:'Product'
    },
    {
        path:'/user',
        name:'User'
    }
        
    ];

    const title = pathname === "/"
        ? "Welcome"
        : pathname === "/category"
        ? "Category"
        : pathname === "/address"
        ? "Address"
        : pathname === "/inventory"
        ? "Inventory"
        : pathname === "/notification"
        ? "Notification"
        : pathname === "/order"
        ? "Order"
        : pathname === "/order-item"
        ? "Order Item"
        : pathname === "/product"
        ? "Product"
        : "User";
        return{
           title, routes
        }
}