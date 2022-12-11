import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    document.addEventListener('keydown', (event) => playSound(event.key.toUpperCase()) 

    )
  }, [])
  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      name: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      name: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      name: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      name: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      name: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      name: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      name: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];


  function playSound(id){
    const audio = document.getElementById(id)
    audio.play()
    // console.log(audio)
    setActiveKey(()=> {
      console.log(id)
      switch(id){
        case "Q":
          return "Heater-1";
        case "W":
          return "Heater-2";
        case "E":
          return "Heater-3" 
        case "A":
          return "Heater-4"
        case "S":
          return "Clap"
        case "D":
          return "Open-HH"
        case "Z":
          return "Kick-n'-Hat"
        case "X":
          return "Kick"
        case "C":
          return "Closed-HH"        
        default:
          return "damn";
      }

    })

  }

  function drumPadsComponent(){
    return (
      drumPads.map(drumPad => (
        <div key={drumPad.text} onClick={() => playSound(drumPad.text)} className="drum-pad" id={drumPad.name}>{drumPad.text}
          <audio className="clip" id={drumPad.text} src={drumPad.src}></audio>
        </div>
        
      ))
    )
  }

  return (
    <div className="App">
    <div className="title">
    <h1 className='title'>Drum Machine</h1>
      
    </div>
      <div id="drum-machine">
        <div div id="display">
        <h1>{activeKey}</h1> 
          <div className="drum-pads">
            {drumPadsComponent()}

          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;
