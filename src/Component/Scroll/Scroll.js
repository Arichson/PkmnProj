import styles from "./Scroll.module.css"
import {useState, useEffect} from "react"

export default function Scroll () {
    const [theMid, setTheMid] = useState(document.body.scrollHeight/2)
    console.log(theMid)
    useEffect(()=>{
        setTheMid(document.body.scrollHeight/2);
    },[])
    return (
        <div>
            <div className={styles.theWholeRight}>
                <div className={styles.topDiv} onClick={() => {
                    setTheMid(document.body.scrollHeight/2);
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })
                }}>
                    <h2>↑</h2>
                </div>
                <div className={styles.midDiv} onClick={() => {
                    setTheMid(document.body.scrollHeight/2);
                    window.scrollTo({
                        top: theMid,
                        left: 0,
                        behavior: 'smooth'
                    })
                }}>
                </div>
                <div className={styles.botDiv} onClick={() => {
                    setTheMid(document.body.scrollHeight/2);
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        left: 0,
                        behavior: 'smooth'
                      })
                }}>
                    <h2>↓</h2>
                </div>
            </div>
            <div className={styles.theWholeLeft}>
                <div className={styles.topDiv} onClick={() => {
                    setTheMid(document.body.scrollHeight/2);
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })
                }}>
                    <h2>↑</h2>
                </div>
                <div className={styles.midDiv} onClick={() => {
                    setTheMid(document.body.scrollHeight/2);
                    window.scrollTo({
                        top: theMid,
                        left: 0,
                        behavior: 'smooth'
                    })
                }}>
                </div>
                <div className={styles.botDiv} onClick={() => {
                    setTheMid(document.body.scrollHeight/2);
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        left: 0,
                        behavior: 'smooth'
                      })
                }}>
                    <h2>↓</h2>
                </div>
            </div>
        </div>
    )
}
