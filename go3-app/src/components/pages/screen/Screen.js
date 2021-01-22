import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Screen = ({ WW, popState }) => {
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
      WW > 768 ?
      <ReactPlayer
        url={"https://www.youtube.com/embed/hvh7VYctIqo"}
        playing={delay}
        controls={true}
        width={WW / 1.5}
        height={(WW * 9) / (16 * 1.5)}
      />
      :
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=hvh7VYctIqo&list=PLWJ_fiNEu_syjcE32i4HOKx03uA85C2AI&index=1"}
        playing={delay}
        controls={true}
        width={WW - 10}
        height={(WW - 10) * 9 / 16}
      />
    }
    </>
  )
}
export default Screen;