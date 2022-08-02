import VideoListEntry from "./VideoListEntry.js";

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video, index) =>
      <VideoListEntry key={index} video={video} onClick={props.onClick}/>
    )}
  </div>
);
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
//  <div className="video-list">
/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
<div><h5><em>videoListEntry</em> view goes here</h5></div>
</div> */

//Access the data prop that was passed in from app.js
  //for every video entry, render a video list entry component
