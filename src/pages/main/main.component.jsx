import React,{useState} from 'react';
import Home from '../home/home.component';
import Settings from '../settings/settings.component';

class Main extends  React.Component{

    constructor() {
        super();
       
        this.state = {showHome: true,addvideomodal_opened:false,videos:[
            {
              video_url: "https://www.youtube.com/watch?v=TVT7R6wqlzo",
              subscription_type: 0,
              title: 'Final fantacy 6',
              //   imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1
            },
            {
              video_url: "https://www.youtube.com/watch?v=gv9ugDJ1ynU",
              subscription_type: 0,
              title: 'Final fantacy 6',
              //   imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1
            },
          ]};
        this.addVideo=this.addVideo.bind(this);
        this.flipShowHome=this.flipShowHome.bind(this)
    }

    addVideo(video){
        this.state.videos.push(video)
        this.setState({videos:this.state.videos});
    }
    flipShowHome(){
        this.setState({showHome:!this.state.showHome})
    }

     render() {

        if (this.state.showHome) {
            return <Home videos={this.state.videos} flipShowHome={this.flipShowHome}/>;
          }
          else{
              return <Settings videos={this.state.videos} addVideo={this.addVideo} flipShowHome={this.flipShowHome}/>
          }
     }
};

export default Main;

