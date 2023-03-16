import { Text, View,TouchableOpacity } from 'react-native'
import React from 'react';
// import Video from 'react-native-video';

export class VideoClass extends React.Component {
    constructor(props){
        super(props);
        this.state={pressPlay:false};
        this.player=React.createRef();
        console.log(this.props.image)
    }
    componentDidMount(){
        this.player.current.focus();
    }
    handlePlay(){
        if(!this.player.current)return;
        if(this.state.pressPlay ===false){
        this.player.current.play();
        this.setState({pressPlay: true});
        }else{
            this.player.current.pause()

            this.setState({pressPlay: false});
        }
        
    }
    
  render() {
    return (
        <TouchableOpacity onPress={()=>this.handlePlay()}
        style={{width:"100%"}}
        >
      <video 
      width={this.props.width}
      height={400}
      type={"video/mp4"}
      poster={this.props.image}
      src={this.props.video_}
      ref={this.player}
      />
      </TouchableOpacity>
    )
  }
}

export default VideoClass