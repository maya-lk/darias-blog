import React from "react";
import { buildUrl } from 'react-instafeed'
//import axios from 'axios';

import useAbortableFetch from 'use-abortable-fetch'

const Instagram = () => {

    const options = {
        accessToken: '18829163935.1677ed0.f3b6fdb9235a413b98729648532750f5',
        clientId: '46c9ec7c74014027a278761ba09cf148',
        get: 'user', // popular, user
        locationId: null,
        resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
        sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
        tagName: null,
        userId: 18829163935 ,
    }

    const { data, loading, error } = useAbortableFetch(buildUrl(options)+'&count=3')
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;
   
    return (
        <section className="sectionWrap" id="instaFeedWrap">
            <div className="insideSecWrap d-flex flex-wrap">
                <div className="instaContent">
                    <h2>
                        <span>Find me on</span>
                        Instagram
                    </h2>
                    <h3><span>@</span>dariasfamily</h3>
                </div>
                <div className="instaFeed d-flex flex-wrap justify-content-between">
                    {// eslint-disable-next-line no-unused-vars
                        data.data.map(({ images }, index) => {
                            const image = images[options.resolution]
                            return (
                                <div className="instaImg" key={index}>
                                    <img                                        
                                        src={image.url}
                                        width={image.width}
                                        height={image.height}
                                        alt={images.caption}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Instagram;