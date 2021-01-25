import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Screen = ({ SW, popState }) => {
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    if(!popState){
      setTimeout(() => {
        setDelay(true);
      }, 1200)
    }
    else {
      setDelay(false);
    }
  }, [popState])

  return (
    <>
    {
      SW > 768 ?
      <ReactPlayer
        url={"https://www.youtube.com/embed/hvh7VYctIqo"}
        playing={delay}
        controls={true}
        width={SW / 1.5}
        height={(SW * 9) / (16 * 1.5)}
      />
      :
      <ReactPlayer
        url={"https://www.youtube.com/embed/hvh7VYctIqo"}
        playing={delay}
        controls={true}
        width={SW - 10}
        height={(SW - 10) * 9 / 16}
      />
    }
    </>
  )
}
export default Screen;