import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "./components/style.css";
import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";



function App() {
 const [searchText,setSearchText]=useState("");
 const [filteredbooks, SetFilteredBooks]=useState(Books);

 function handelSearch(){
console.log("search text",searchText);
 const filterbooks =Books.filter(book =>book.title.toLowerCase() .includes(searchText.toLowerCase()));
 console.log(filteredbooks);
 SetFilteredBooks(filterbooks);  
}


  return (
    <>
    <Home />
    {/* <Header /> */}
    <Outlet />


{/*   
    <div className="search">
      
    <h2>Search Books</h2>

    <div><input type="text"className="search-input" onChange={(e) =>setSearchText(e.target.value)}  />
    <button onClick={handelSearch}>Search</button></div>
    
    </div> */}
   
  {/* <BookList booksData={filteredbooks} /> */}
 
 
  </>
  );  
}

export default App;
