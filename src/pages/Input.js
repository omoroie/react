import React, {useState} from 'react';

const Input = () => {
    const [textValue, setTextValue] = useState("");
    
    const change = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={change}/>
            <br />
            <p>{textValue}</p>
        </div>
    );
};

export default Input;