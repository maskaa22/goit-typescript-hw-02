import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallary from "./components/imageGallery/ImageGallery";
import { fetchImage } from "./assets/galleryApi";

function App() {

  const [gallaryList, setGalleryList] = useState([]);
  // const [searchWord, setSearchWord] = useState('');


  // useEffect(() => {
  //   async function getGallery() {
  //     try {
  //       const data = await fetchImage(searchWord);
      
        
  //       setGalleryList(data.results)
        
  //     } catch (err) {
  //       //console.log(err);
  //     } finally {
  //       //console.log(111);
  //     }
  //   }
  //   getGallery();
  // }, [setGalleryList, searchWord]);

  const onSubmit = async (word) => {
    try {
      const data = await fetchImage(word);
    
      
      setGalleryList(data.results)
      
    } catch (err) {
      //console.log(err);
    } finally {
      //console.log(111);
    }
    //setSearchWord(word)
  }
  return (
    <>
      <SearchBar onSubmit={onSubmit}/>
      {gallaryList.length > 0 && <ImageGallary gallaryList={gallaryList}/> }
    </>
  );
}

export default App;
