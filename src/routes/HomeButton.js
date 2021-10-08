import React, { memo } from 'react'
import { useHistory } from 'react-router';


export default function BackButton() {
    const history = useHistory();
  
    function handleClick() {
      history.goBack()
    }
    
    return (
      <button className="button icon-left" type="button" onClick={handleClick}>
        Back
      </button>
    );
  }


