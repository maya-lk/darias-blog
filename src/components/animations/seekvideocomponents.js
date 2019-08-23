import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// *******************************************************
// HANDLE COMPONENT
// *******************************************************

export const Handle = ({
    domain: [min, max],
    handle: { id, value, percent },
    getHandleProps
}) => (
    <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
            left: `${percent}%`,
            position: 'absolute',
            zIndex: 2,
            width: '89px',
            height: '89px',
            cursor: 'pointer',
            borderRadius: '100%',
            backgroundColor: '#fff',
            marginLeft: '7px',
            marginTop: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000',
            fontSize: '25px',
            border: '1px solid #eee'
        }}
        {...getHandleProps(id)}
    ><FontAwesomeIcon icon={faArrowRight} /></div>
);

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export const Track = ({ source, target, getTrackProps }) => (
    <div
        style={{
            position: 'absolute',
            height: '100px',
            zIndex: 1,
            backgroundColor: `${ (target.percent - source.percent === 100 )? '#000' : 'transparent' }`,
            borderRadius: '60px',
            cursor: 'pointer',
            left: `${source.percent}%`,
            width: `${target.percent - source.percent}%`,
            transition: '0.5s background-color ease'
        }}
        {...getTrackProps()}
    />
);
