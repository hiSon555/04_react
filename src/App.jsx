// jsx 파일은 대표적으로 화면에 출력하기 위해
// 실행하는 function의 이름과 파일명을 일치하는게 관례
// => 그래야 알아보기 쉬우니까

import {useState} from "react";

function App() {

    const [count, setCount] = useState(0)

    return (
        <div>
            현재 Count : {count}
             <button onClick={() => setCount(count + 1)}>+</button>
             <button onClick={() => setCount(count - 1)}>-</button>

        </div>
    );

}

export default App;