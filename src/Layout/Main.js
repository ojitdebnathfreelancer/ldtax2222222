import React from "react";
import Footer from "../Componets/Footer/Footer";
import Nabar from "../Componets/Navbar/Nabar";
import Document from "../Pages/Document/Document";

const Main = () => {
   return (
      <div className="min-w-[700px] overflow-x-auto mx-auto">
         <Nabar />
         <Document />
         <Footer />
      </div>
   );
};

export default Main;
