import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallary from "./components/imageGallery/ImageGallery";
import { fetchImage } from "./assets/galleryApi";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import ImageModal from "./components/imageModal/ImageModal";
import { Image, ImageCardForModal } from "./types";

const initialValue = {
  alt: "",
  url: "",
  likes: 0,
  username: "",
};

function App() {
  const [gallaryList, setGalleryList] = useState<Image[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorSearchFlag, setSearchFlag] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorSearchMessage, setErrorSearchMessage] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [dataForModal, setDataForModal] =
    useState<ImageCardForModal>(initialValue);

  const onSubmit = (word: string) => {
    setSearchWord(word);
    setPage(1);
    setGalleryList([]);
  };
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!searchWord) return;
    const fetchQuery = async (): Promise<void> => {
      try {
        setLoading(true);
        const data: { results: Image[] } = await fetchImage(searchWord, page);
        setGalleryList((prev) => [...prev, ...data.results]);
      } catch (err: unknown) {
        setError(true);
        if (err instanceof Error) {
          setErrorMessage(err.message);
        }
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
      <SearchBar
        onSubmit={onSubmit}
        err={setErrorSearchMessage}
        flag={setSearchFlag}
      />
      {error ||
        (errorSearchFlag && (
          <ErrorMessage
            errorMessage={
              errorSearchMessage !== "" ? errorSearchMessage : errorMessage
            }
          />
        ))}
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
