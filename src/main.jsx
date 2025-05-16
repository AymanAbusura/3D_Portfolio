import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Loading from './components/Loading';

import "./i18n.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)


// import React, { Suspense, useState, useEffect } from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Loading from './components/Loading.jsx'
// import './index.css'
// import "./i18n.js"

// const Root = () => {
//   const [showApp, setShowApp] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowApp(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Suspense fallback={<Loading />}>
//       {showApp ? <App /> : <Loading />}
//     </Suspense>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );