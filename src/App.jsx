import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallary from "./components/imageGallery/ImageGallery";
import { fetchImage } from "./assets/galleryApi";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import ImageModal from "./components/imageModal/ImageModal";

function App() {
  const [gallaryList, setGalleryList] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSearchMessage, setErrorSearchMessage] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});

  const onSubmit = (word) => {
    setSearchWord(word);
    setPage(1);
    setGalleryList([]);
  };
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!searchWord) return;
    const fetchQuery = async () => {
      try {
        setLoading(true);
        const data = await fetchImage(searchWord, page);
        setGalleryList((prev) => [...prev, ...data.results]);
      } catch (err) {     
        setError(true);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuery();
  }, [searchWord, page]);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} err={setErrorSearchMessage} />
      {error && <ErrorMessage errorMessage={errorMessage} />}
      {errorSearchMessage !== "" && <ErrorMessage errorMessage={errorSearchMessage} />}
      {gallaryList.length > 0 && (
        <ImageGallary
          gallaryList={gallaryList}
          openModal={openModal}
          setDataForModal={setDataForModal}
        />
      )}
      {gallaryList.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
      {loading && <Loader />}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        data={dataForModal}
      />
    </>
  );
}

export default App;
