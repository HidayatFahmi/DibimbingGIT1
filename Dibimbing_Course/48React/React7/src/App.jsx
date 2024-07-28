// // Hands On 1

// import LoginCard from "./ReactContext/HandsOn1/LoginCard"
// import UserProvider from "./ReactContext/HandsOn1/UserContext"
// import Profile from "./ReactContext/HandsOn1/Profile"

// export default function App() {

//   return (
//     <>
//       <UserProvider>
//           <LoginCard/>
//           <Profile/>
//       </UserProvider>
//     </>
//   )
// }


// // Hands On 2
// import TheProvider from "./ReactContext/HandsOn2/Context";
// import Login from "./ReactContext/HandsOn2/Login";
// import TheProduct from "./ReactContext/HandsOn2/ProductCard";


// export default function App(){

//   return(
//     <>
//       <TheProvider>
//         <Login/>
//         <TheProduct/>
//       </TheProvider>
//     </>
//   )
// }

// // React Router 
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from "./ReactRouter/Home"
// import About from "./ReactRouter/About"
// import ProductGeneral from './ReactRouter/Product'
// import Navigation from './ReactRouter/Navigation'

// export default function App(){

//   return(
//     <BrowserRouter>
//       <Navigation/>
//       <Routes>
//         <Route path="/" element={<Home/> }/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/product/:sepatu" element={<ProductGeneral/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }


// React Router Excercise
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navigation from './ReactRouterExcercise/Navigation'
import Home from './ReactRouterExcercise/Home'
import Shop from './ReactRouterExcercise/Shop'
import Product from './ReactRouterExcercise/Product'


export default function App(){

  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/:any" element={<Product/>}/>
        {/* <Route path="/shop/:baju" element={<Baju/>}/>
        <Route path="/shop/:tas" element={<Tas/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}