import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { VolumeUp, VolumeOff } from '@material-ui/icons';


const PlayerVolume = () => {
  const [value, setValue] = useState(100);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMute = () => {
    if (value !== 0) {
      setValue(0)
    } else if (value === 0) {
      setValue(100)
    }
  }

  const Icon = value === 0 ? VolumeOff : VolumeUp;

  return (
    <section className='player__volume'>
      <section className='player__volume--control'>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <button className='mute' onClick={() => handleMute(value)}>
              <Icon />
            </button>
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />      
          </Grid>
        </Grid>
      </section> 
    </section>
  )
}

export default PlayerVolume;
