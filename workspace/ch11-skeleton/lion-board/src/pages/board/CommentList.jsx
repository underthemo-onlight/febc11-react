import CommentListItem from "@pages/board/CommentListItem";
import CommentListNew from "@pages/board/CommentListNew";

export default function CommentList() {
  return (
    <>
      <section className="mb-8">
        <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

        <CommentListItem />
        <CommentListNew />
      </section>
    </>
  );
}
