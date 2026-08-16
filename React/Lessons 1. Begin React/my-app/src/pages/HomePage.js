import {useState} from "react";

const HomePage = () => {
    // ми робимо спеціальний state - який зберігає інформацію
    // ми створили змінну count яка зберігає 0
    // setCount - це спіціальна змінна для зміни count
    // якщо ми викликаємо setCount то відбувається рендер компоненту

    const [count, setCount] = useState(0);
    const onHandlePlusClick = () => {
        setCount(count + 1); // юудемо збільшувати значення на +1
    }
    const onHandleMinusClick = () => {
        setCount(count - 1); // юудемо збільшувати значення на +1
    }
   return(
       <>
           <h1 className="text-centre">Привіт команда!</h1>
           <div className="alert alert-success">
               Кількість елементів {count}
           </div>
           <button className="btn btn-success" onClick={onHandlePlusClick}>
               Змініти кількість на +1
           </button>
           <button className="btn btn-danger" onClick={onHandleMinusClick}>
               Змініти кількість на -1
           </button>
    </>
   )
}

export default HomePage;