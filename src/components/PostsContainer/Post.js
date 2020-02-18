// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.propsPassed.likes)
  return (
    <div className="post-border">
      <PostHeader
        username={props.propsPassed.username}
        thumbnailUrl={
          props.propsPassed.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsPassed.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.propsPassed.imageUrl}
        comments={props.propsPassed.comments}
      />
    </div>
  );
};

export default Post;