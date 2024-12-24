import BookList from "./BookList";
import Header from "./Header";

function Home(props){
    return (
    <>
    <h1>home</h1>
    <Header />
    <div className="search">
      
    <h2>Search Books</h2>

    <div><input type="text"className="search-input" onChange={(e) =>setSearchText(e.target.value)}  />
    <button onClick={handelSearch}>Search</button></div>
    
    </div>
    <BookList />
    </>)
}
export default Home;