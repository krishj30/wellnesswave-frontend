import React from 'react';
import { Link } from "react-router-dom";

const Game1 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{
        width: '80%', maxWidth: '500px', background: 'white', padding: '20px',
        borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '24px', color: '#333' }}>Breathe Game - Stress Relief</h2>
        
        {/* Embedding the Breathe game using an iframe */}
        <iframe 
          src="https://mindyourmind.ca/apps/Breathe/" 
          width="100%" 
          height="500px" 
          style={{ border: 'none', borderRadius: '10px', marginTop: '10px' }}
          title="Breathe Game"
          allowFullScreen
        ></iframe>

        <p style={{ fontSize: '16px', color: '#555', marginTop: '15px' }}>
          Breathe is an interactive game that helps manage stress and anxiety through guided breathing exercises.
          Play now and experience a moment of relaxation.
        </p>
        
       
         
      </div>
    </div>
  );
}

export default Game1;
