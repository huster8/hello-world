import { useState } from "react";


function ExpandingButton() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleButtonClick = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>view preview</button>
      {isImageVisible && (
        <img
          src="https://i.redd.it/as8qzzwv5nka1.png" 
          alt="Expanded Image"
          style={{ display: 'block', maxWidth: '100%' , marginTop: '10px' }}
        />
      )}
    </div>
  );
}

export default ExpandingButton;