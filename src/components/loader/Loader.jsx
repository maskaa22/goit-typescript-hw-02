import { ThreeDots } from "react-loader-spinner";
import c from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={c.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4b4bb1"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
