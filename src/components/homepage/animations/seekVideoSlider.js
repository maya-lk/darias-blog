import React, { Component } from 'react';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { Handle, Track } from './seekvideocomponents'; // example render components
import { isMobile } from "react-device-detect";

const sliderStyle = {
    position: 'relative',
    width: '91%',
    margin: '0 5%'
};

const railStyle = {
    position: 'absolute',
    width: `${ (isMobile )? '100%' : '524px' }`,
    height: '100px',
    borderRadius: '60px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '2px solid #000',
    color: '#000',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: `${ (isMobile )? '1.3rem' : '1.6rem' }`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

class VideoSlider extends Component {
    render() {
        const { domain, values, onChange, onUpdate, onSlideStart , onSlideEnd } = this.props;

        return (
            <Slider
                mode={1}
                step={1}
                domain={domain}
                rootStyle={sliderStyle}
                onUpdate={onUpdate}
                onChange={onChange}
                onSlideStart={onSlideStart}
                onSlideEnd={onSlideEnd}
                values={values}
            >
                <Rail>
                    {({ getRailProps }) => <div style={railStyle} {...getRailProps()} ><span
                        style={{
                            marginLeft: '100px'    
                        }}
                    >Slide to go crazy</span></div>}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div>
                            {handles.map(handle => (
                                <Handle
                                key={handle.id}
                                handle={handle}
                                domain={domain}
                                getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                </Handles>
                <Tracks right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div
                            style={{
                                position: 'relative',
                                width: '524px',
                            }}
                        >
                            {                
                                tracks.map(({ id, source, target }) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ))
                            }
                        </div>
                    )}
                </Tracks>
            </Slider>
        );
    }
}

export default VideoSlider;