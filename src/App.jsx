import { useState} from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallary from "./components/imageGallery/ImageGallery";
import { fetchImage } from "./assets/galleryApi";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import Loader from './components/loader/Loader';
import ErrorMessage from "./components/errorMessage/ErrorMessage";

function App() {
  const [gallaryList, setGalleryList] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(1);

  const onSubmit = async (word) => {
    try {
      setLoading(true);
      const data = await fetchImage(word, page);
      setGalleryList(prev => [...prev, ...data.results]);
      setSearchWord(word);
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    } finally {
      setPage(prev => prev + 1);
      setLoading(false);
    }
  };
  const loadMore = () => {
    onSubmit(searchWord);   
  }
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage errorMessage={errorMessage}/>}
      {gallaryList.length > 0 && <ImageGallary gallaryList={gallaryList} />}
      {gallaryList.length > 0 && <LoadMoreBtn loadMore={loadMore}/>}
      {loading && <Loader/>}
    </>
  );
}

export default App;
