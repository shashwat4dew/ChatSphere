// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const interests = ['Cricket', 'Coding', 'Science', 'Gaming']; // Example interests

// const InterestSelector = ({ onSelectRoom }) => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleSelectRoom = (room) => {
//     onSelectRoom(room); // Set the selected room
//     navigate('/chat'); // Navigate to the chat room
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Select an Interest</h2>
//       <div style={styles.interestList}>
//         {interests.map((interest) => (
//           <div 
//             key={interest} 
//             style={styles.interestItem} 
//             onClick={() => handleSelectRoom(interest)} // Click handler for interest selection
//           >
//             {interest}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f0f0',
//     fontFamily: 'Arial, sans-serif',
//   },
//   interestList: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   interestItem: {
//     padding: '10px 20px',
//     margin: '5px 0',
//     background: '#007bff',
//     color: '#fff',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     width: '200px',
//     textAlign: 'center',
//   },
// };

// export default InterestSelector;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Interest.css';

const interests = ['Cricket', 'Coding', 'Science', 'Gaming']; // Example interests

const InterestSelector = ({ onSelectRoom }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSelectRoom = (room) => {
    onSelectRoom(room); // Set the selected room
    navigate('/chat'); // Navigate to the chat room
  };

  return (
    <div className="page">
      <h2>SELECT AN INTEREST<span className="animatedDots">...</span></h2>
      <div className="interestList">
        {interests.map((interest) => (
          <div 
            key={interest} 
            className="interestItem" 
            onClick={() => handleSelectRoom(interest)} 
          >
            {interest}
          </div>
        ))}
      </div>
    </div>
  );

};

export default InterestSelector;
