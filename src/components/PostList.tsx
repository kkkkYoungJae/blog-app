import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";
const PostList = ({ hasNavigation = true }: Props) => {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab == "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab == "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}

      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">패스트캠퍼스</div>
                <div className="post__date">2023.07.08 토요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut earum distinctio,
                ratione, sit ex aperiam explicabo reprehenderit voluptates porro quibusdam veniam
                nobis! A, eligendi? Dolorem ullam distinctio error sunt voluptate. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Quos possimus animi aliquid tempora
                natus, expedita omnis perferendis dicta eveniet quas, distinctio numquam fuga sed,
                temporibus neque? Suscipit sequi consequuntur dicta!
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
