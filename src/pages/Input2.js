import React, {useState} from 'react';

const Input2 = () => {  // useState 훅을 사용하여 상태 관리
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const {name, email, phone} = inputs; // 비구조화 할당

    const onChange = (e) => {   // 이벤트 발생 시 실행되는 함수
        const {id, value} = e.target;
        setInputs({
            ...inputs,
            [id]: value
        })
    }

    return (    // JSX 문법을 사용하여 UI 구성
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>

            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>

            <div>
                <label>전화번호</label>
                <input type="phone" id="phone" value={phone} onChange={onChange}/>
            </div>

            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {phone}</p>
        </div>
    );
};

export default Input2;