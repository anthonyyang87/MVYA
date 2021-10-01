import BrowseByCategoryAndFilters from "../components/browseByCategory";
import Footer from "../components/footer";
import SearchBar from "../components/search";
import CreateReview from "../components/createReview";
function HomePage(){
    return(
        <div className="App">
            <header className="App-header">
            <p>Type in something to get started</p>
            <div className="App-container"><SearchBar /></div>
            <BrowseByCategoryAndFilters />
            <div>Or</div>
            <CreateReview />
            </header>
            
        </div>
    ); 
}
export default HomePage; 