import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    //state for the video player to use videoList as ref and current vid as first in collection
    this.state = {
      current: exampleVideoData[0],
      videoList: exampleVideoData,
      value: ''
    };
  }

  getVideoCollection(props) { //props = search input, should return event value
    this.setState({
      input: this.props.value,
      collection: collection
    });

  //method should be able to take input from the results of search
  //and send it to the videolist to add on video items
  }

  onVideoClick(video) {
    return () => {
      this.setState({
        current: video,
        videoList: videoList
      //need to flesh out set state of what to return to videoPlayer

      });
    };
    //do something to the video player to have it play clicked video
  }

  handleQueryChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render(props) {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search value={this.state.value} onChange={this.handleQueryChange.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer current={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}

//props here is undefined
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
  //import all components to this file
    //figure out how to handle the data from the example data
      //pass that data into videolist component
        //render each component into the correct div
      //


//maybe everything should be in apps? and flow downwards?

//every re-initialization we do must traverse back up and down OR
//we can simply have it stem from the top app and flow downwards with all methods being provided by the app.