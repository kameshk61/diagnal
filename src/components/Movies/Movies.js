import React , {useEffect , useState} from 'react'
import Image from "../Image/Image";
import ErrorBoundary from "../ErrorBoundary";
import {connect} from 'react-redux';
import { getMovies } from '../../actions/actions';

const Movies = ({getMovies,movies,title}) => {

    const [totalPages , setTotalPages] = useState(3);
    const [showSearch , setShowSearch] = useState(false);
    const [searchQuery , setSearchQuery] = useState("");
    const [showTitle , setShowTitle] = useState(true);
    const [pageNum , setPageNum] = useState(1);


    const loadMore = () => { 
      if (pageNum < totalPages) {
          setPageNum(pageNum + 1) 
          getMovies(pageNum);     
      }
    };
    

    useEffect(()=>{
      if (pageNum < totalPages){
        getMovies(pageNum);
      }
        
         window.addEventListener("scroll", loadMore);
    },[getMovies,pageNum])

  
  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const goBackHandler = () => {
    setShowSearch(false);
    setShowTitle(true);
    setSearchQuery("")
  };


  const displaySearch = () => {
    setShowSearch(!showSearch);
    setShowTitle(!showTitle);
  };
    

    return (
        <div onScroll={loadMore}>
      <div className="fixed w-full">
          <div className="flex w-full justify-around">
            <div
              className=" w-5 h-5 ml-3 mt-5 z-20 cursor-pointer"
              onClick={goBackHandler}
            >
              <img alt="" src={require("../../slices/Back.png")} className=" h-4" />
            </div>
            <div className="w-70 sm:text-left lg:text-center mt-4 ml-5 z-20">
              <h3>{showTitle ? title : null}</h3>
            </div>
            {showSearch ? (
              <input
                type="text"
                name="searchQuery"
                onChange={searchHandler}
                className=" w-full lg:h-8 mr-3  rounded color-black mt-3 z-20 pl-2 outline-none"
              />
            ) : null}
            {!showSearch ? (
              <div
                className="w-5 float-right ml-5 mt-5 mr-4 z-20 cursor-pointer"
                onClick={displaySearch}
              >
                <img
                alt=""
                  src={require("../../slices/search.png")}
                  className=" h-4"
                />
              </div>
            ) : (
              "X"
            )}
          </div>
          <img
            src={require("../../slices/nav_bar.png")}
            className="absolute top-0 w-full h-24"
          />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-2 pr-2 pl-2">
            {movies
              .filter((text) =>
                text.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((image, index) => (
                <ErrorBoundary key={index}>
                    <Image source={image["poster-image"]} name={image.name} />
                </ErrorBoundary>  
              ))}
          </div>
        </div>
      
            
        </div>
    )
}

  const mapStateToProps = (state) => ({
    movies: state.reducer.movies,
    title: state.reducer.title
  });


  
  export default connect(mapStateToProps,{getMovies})(Movies);
  
