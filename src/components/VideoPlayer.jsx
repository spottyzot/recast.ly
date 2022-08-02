var VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.current.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.current.snippet.title}</h3>
        <div>{props.current.snippet.description}</div>
      </div>
    </div>
  );
};
//props no defined?

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
  //takes a video prop
//renders an iframe video based on video id
  //if no video is passed in then do nothing

/*
{
    "kind": "youtube#searchResult",
    "etag": "bwdNgV-HSrz_Ep5y0UQTEE9c7f4",
    "id": {
        "kind": "youtube#video",
        "videoId": "dYh6R4Jhxoo"
    },
    "snippet": {
        "publishedAt": "2020-11-24T17:00:10Z",
        "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
        "title": "Kids React To Adult Jokes In Kids&#39; Shows (SpongeBob, Animaniacs, Steven Universe &amp; More!)",
        "description": "Kids React to adult jokes in kids' TV shows (SpongeBob, StevenUniverse, and more!) Check out previous episodes of this series here! https://bit.ly/39a6Zli Join ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "REACT",
        "liveBroadcastContent": "none",
        "publishTime": "2020-11-24T17:00:10Z"
    }
}

*/