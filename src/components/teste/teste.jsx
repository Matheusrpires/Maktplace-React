// import cx from 'classnames';
import { Component, useState } from "react";

const LikeDislike = () => {
  const [likes, setLikes] = useState(100);
  const [likesClicked, setLikesCliked] = useState(true);

  const [deslike, setDeslike] = useState(25);
  const [deslikeClicked, setDeslikeCliked] = useState(true);

  const changeLikes = () => {
    setLikesCliked(!likesClicked);
    console.log(likesClicked);
    if (likesClicked === true) {
      if (deslikeClicked === false) {
        setDeslike((prevCounter) => prevCounter - 1);
        setDeslikeCliked(!deslikeClicked);
      }
      setLikes((prevCounter) => prevCounter + 1);
    } else {
      setLikes((prevCounter) => prevCounter - 1);
    }
  };

  const changeDeslike = () => {
    setDeslikeCliked(!deslikeClicked);
    if (deslikeClicked === true) {
      if (likesClicked === false) {
        setLikes((prevCounter) => prevCounter - 1);
        setLikesCliked(!likesClicked);
      }
      setDeslike((prevCounter) => prevCounter + 1);
    } else {
      setDeslike((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <>
      <div>
        <h2>Like/Dislike</h2>
        <button onClick={changeLikes}>
          Like |<span> {likes}</span>
        </button>
        <button onClick={changeDeslike}>
          Deslike |<span> {deslike}</span>
        </button>
      </div>
      <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
    </>
  );
};

export default LikeDislike;
