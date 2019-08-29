import React, { Component } from "react";
import { convert, toSeconds } from './utils';
import VideoSlider from './seekVideoSlider';

class SeekVideoElement extends Component {

    video = React.createRef();

    constructor(){
        super()
        this.state = {
            domain: null,
            values: null,
            isPlaying: false,
            isSeeking: false
        }
    }

    componentDidMount() {
        this.video.current.addEventListener('loadedmetadata', this.onVideoLoad);
        this.video.current.addEventListener('timeupdate', this.onVideoTimeUpdate);
    }

    onPressPlay = () => {
        this.setState(prevState => {
            if (prevState.isPlaying === false) {
                this.video.current.play();
                return { isPlaying: true };
            }
            return null;
        });
    };

    onPressPause = () => {
        this.setState(prevState => {
            if (prevState.isPlaying === true) {
                this.video.current.pause();
                return { isPlaying: false };
            }

            return null;
        });
    };

    onVideoTimeUpdate = event => {
        const video = this.video.current;
        const time = convert(video.currentTime);

        this.setState(prevState => {
            if (!prevState.isSeeking) {
                return { values: [time] };
            }

            return null;
        });
    };

    onVideoLoad = event => {
        const video = this.video.current;

        if (video) {
            this.setState(() => ({
                domain: [0, convert(video.duration)],
                values: [convert(video.currentTime)]
            }));
        }
    };

    onSlideStart = () => {
        this.setState({ isSeeking: true }, () => {
            this.video.current.pause();
        });
    };

    onSlideEnd = (values) => {
        this.setState({ isSeeking: false }, () => {
            if( values[0] !== convert(this.video.current.duration) ){
                this.video.current.currentTime = 0;
                this.video.current.src = this.props.seekVideoSmall;
                this.video.current.pause();
            }else{
                this.video.current.src = this.props.seekVideoFull;
                this.video.current.play();
                console.log(this.video.current.src);
            }
        });
    };

    onChange = values => {
        this.setState(prevState => {
            this.video.current.currentTime = toSeconds(values[0]);

            if (prevState.isPlaying === true) {
                this.video.current.play();
            }

            return { isSeeking: false, values };
        });
    };

    onUpdate = values => {
        this.setState({ values }, () => {
            this.video.current.currentTime = toSeconds(values[0]);
        });
    };


    render() {
        const { domain, values } = this.state;
        return (
            <div className="seekVideoWrap">
                <video
                    style={{ width: '100%' }}
                    src={this.props.seekVideoSmall}
                    ref={this.video}
                />
                    {domain && values ? (
                    <React.Fragment>
                        <div className="videoSeekerWrap">
                            <VideoSlider
                                domain={domain}
                                values={values}
                                onChange={this.onChange}
                                onUpdate={this.onUpdate}
                                onSlideStart={this.onSlideStart}
                                onSlideEnd={this.onSlideEnd}
                            />
                        </div>
                    </React.Fragment>
                    ) : null}
            </div>
        )
    }

}

export default SeekVideoElement;