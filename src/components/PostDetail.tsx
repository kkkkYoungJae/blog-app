import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Lorem ipsum dolor sit amet consectetur adipisicin</div>
        </div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">패스트캠퍼스</div>
          <div className="post__date">2023.07.08 토요일</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">
            <Link to={`/posts/edit/1`}>수정</Link>
          </div>
        </div>
        <div className="post__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut earum distinctio, ratione,
          sit ex aperiam explicabo reprehenderit voluptates porro quibusdam veniam nobis! A,
          eligendi? Dolorem ullam distinctio error sunt voluptate. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quos possimus animi aliquid tempora natus, expedita omnis
          perferendis dicta eveniet quas, distinctio numquam fuga sed, temporibus neque? Suscipit
          sequi consequuntur dicta!
        </div>
      </div>
    </>
  );
};

export default PostDetail;
