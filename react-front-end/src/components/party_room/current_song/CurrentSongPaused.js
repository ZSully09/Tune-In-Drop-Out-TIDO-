import React from 'react';
import classNames from 'classnames';
import { MdPlayArrow, MdSkipNext } from 'react-icons/md';

import './CurrentSong.scss';

export default function CurrentSongPaused(props) {
  const currentSongPaused = classNames('div', {
    playing: props.paused
  });
  return (
    <div className={currentSongPaused}>
      <img
        alt="song-thumbnail"
        src="data:image/jpeg;base64,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"
      ></img>

      <div id="song">Ultrasound</div>
      <div id="artist">Joyner Lucas</div>
      <div id="commands">
        <MdPlayArrow />
        <MdSkipNext />
      </div>
    </div>
  );
}
