import React from "react";

const CommentComponent = (props) => {
  const { dataHref, width } = props;

  return (
    <div style={{ margin: "-10px -12px 0", width: "100%" }}>
      <div
        className="fb-comments"
        data-href={dataHref}
        data-width="100%" // Đặt chiều rộng là 100% để chiếm hết không gian có sẵn
        data-numposts="5"
        style={{ maxWidth: width }} // Giới hạn maxWidth nếu cần thiết
      ></div>
    </div>
  );
};

export default CommentComponent;
