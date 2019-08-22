import React from "react";
import { buildUrl } from 'react-instafeed'
//import axios from 'axios';

import useAbortableFetch from 'use-abortable-fetch'

const Instagram = () => {

    const options = {
        accessToken: '3160822017.3c79439.0ccbf529e8244b278b62d6a81c38044b',
        clientId: '3c79439c2497472f8d2546afcb9f3bfb',
        get: 'user', // popular, user
        locationId: null,
        resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
        sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
        tagName: null,
        userId: 3160822017 ,
    }

    const { data, loading, error } = useAbortableFetch(buildUrl(options))
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;
   
    console.log('data' , data);
    return (
        <div>
            {// eslint-disable-next-line no-unused-vars
                data.data.map(({ images }, index) => {
                    const image = images[options.resolution]
                    console.log('image' , images);
                    return (
                        <img
                        key={index}
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt=""
                        />
                    )
                })}
        </div>
    )
}

export default Instagram;