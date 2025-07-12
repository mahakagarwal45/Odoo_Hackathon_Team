import './JoinRoom.css';
import { Link } from 'react-router-dom';
import joinRoomImage from '../assets/joinroom.jpg'; // ✅ Importing the image from assets

function JoinRoom() {
  return (
    <div className="container">
      <div className="left">
        <h1>StackIt – A Minimal Q&A Forum Platform</h1>
        <img
  src={joinRoomImage}
  alt="mockup"
  className="mockup"
/>

      </div>

      <div className="right">
        <h2>Ready to join the room?</h2>
        <p>You have been invited by <strong>odoo-rd</strong></p>

        <input
          type="text"
          placeholder="Enter your name"
          className="input-box"
        />

        <Link to="/home">
          <button className="join-button">Join Room</button>
        </Link>

        <p className="note">
          Join room with <span>read-only</span> rights
        </p>

        <p style={{ marginTop: '20px' }}>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default JoinRoom;
