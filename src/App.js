
import './App.css';
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className="app-videos">
        <Video 
          likes={100}
          comments={200}
          shares={300}
          name="Wesley"
          description="gato goleiro"
          music="musica qualquer"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
          />

        <Video 
          likes={100}
          comments={200}
          shares={300}
          name="Wesley"
          description="gato goleiro"
          music="musica qualquer"
          url="https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/bird.mp4?alt=media&token=c683dc6f-f027-43e1-a9ba-43be147e4843"
        />

      </div>
    </div>
  );
}

export default App;
