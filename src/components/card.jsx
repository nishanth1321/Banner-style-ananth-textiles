import React from 'react';
import useScreenType from '../hooks/useScreeenType'; // Import your custom hook
import LgScreen from './lgScreeen'; // Import the large screen component
import SmScreen from './smScreen'; // Import the small screen component

const Card = () => {
  const screenType = useScreenType(); // Use the custom hook to get screen type

  return (
    <div>
      {screenType === 'lg' ? <LgScreen /> : <SmScreen />}
    </div>
  );
};

export default Card;
