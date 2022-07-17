import { useParams } from "react-router-dom";

export default function Pokemon() {
  let { id } = useParams();
  return <div>This is the {id} Page!</div>;
}
