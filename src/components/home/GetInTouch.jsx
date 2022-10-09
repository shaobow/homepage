import React from "react";

const GetInTouch = ({ heading,message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
          I'm currently looking for <span style={{fontWeight: 'bold'}}>Robotics Engineer</span> and <span style={{fontWeight: 'bold'}}>Controls Design Engineer</span> positions.&nbsp;
        {message} <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
