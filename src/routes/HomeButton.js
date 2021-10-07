import React, { memo } from 'react'
import { useHistory } from 'react-router';


export default function HomeButton() {
    const history = useHistory();
  
    function handleClick() {
      history.push("/about");
    }
    return (
      <button type="button" onClick={handleClick}>
        Home
      </button>
    );
  }


