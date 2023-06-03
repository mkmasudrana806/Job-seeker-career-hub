/*
1. install react router: npm i react-router-dom
2. create react router using : createBrowserRouter
3. add RouterProvider to pass route props
4. 

things you need to create a route
1. create a link: so that you can go to  this route
2. create component: to add what yoiu will show onoce you go to that route
3. add route so that react router know the component it needs to display while you are visiting to that route 
4. 

what we learn form this module
1. nested route
2. outlet 
3. data load in router
4. dynamic route
5. not found route
6. route parameter and dynamic route based on parameter 
there are three ways to dynamically redirect components
1. use router
2. useNavigate by event handler 

steup another way to setup route..
<Routes>
<Route path:'/', element:{<div>hi </div>}, loader: asynce ()> {
    
}

active the route to indicate which component is active now: this button must NavLink instead of using Link.
*/
