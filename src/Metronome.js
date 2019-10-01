import React,  {Component} from "react";
import "./Metronome.css";

class Metronome extends Component {
    constructor(props){
        super(props);
            this.state ={
                playing: false,
                count: 0,
                bpm: 100,
                beatsPerMeasure: 4
            }
        }

    handleBpmChange= e =>  {
        const bpm = e.target.value;
        this.setState({bpm})
    }
    render() {
        const {bpm, playing} = this.state;
        // let bpm = 100;
        // let playing = false;
    return (
    <div className="metronome">
        <div className="bpm-slider">
            <div> {bpm}BPM</div>
            <input 
            type="range" 
            min="60" 
            max="240" 
            value={bpm}
            onChange={this.handleBpmChange}    
            >
            </input>
        </div>
        <button> {playing ? "stop" : "start"} </button>
    </div>
    )};
}


export default Metronome;