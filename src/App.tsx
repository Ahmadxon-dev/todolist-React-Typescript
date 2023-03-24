import styles from "./home.module.css"
import {ChangeEvent, useState} from "react";
import {IData} from "./interfaces";
import {data} from "./constants";

function App(): JSX.Element {

    const [title, setTitle] = useState<string>("");
    const [arr, setArr] = useState<IData[]>(data)

    // const changeHandler = (event: ChangeEvent<HTMLInputElement>):void =>{
    //     setTitle(event.target.value)
    // }

    const handleSubmit = ():void=>{
        if (!title?.length) return
        const newData = {
            title:title,
            id:new Date().getTime(),
            description:"description"
        }
        console.log(newData)
        setArr([...arr, newData])
        setTitle("")
    }

    const deleteItem = (id:number):void => {
        const newData = arr.filter(item=> item.id!==id)
        setArr(newData)
    }
    return (
        <div className={styles.todo}>
            <h1 className={styles.title}>APP Todo</h1>
            <input type="text" value={title} onChange={e=> setTitle(e.target.value)} placeholder={`Enter todo`} className={styles.input}/>
            <button onClick={handleSubmit} className={styles.button}>Add Todo</button>
            <div className={styles.item}>
                {
                    arr.map(item=>{
                        return (
                            <div key={item.id} className={styles.itemCard}>
                                <p>{item.title}</p>
                                <div className={styles.delBtn}>
                                    <button onClick={()=>deleteItem(item.id)} >Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
