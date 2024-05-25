import { useParams } from "react-router-dom";

export default function TagPosts() {
  const { tagId } = useParams();

  return <div>TagPosts - ID: {tagId}</div>;
}
