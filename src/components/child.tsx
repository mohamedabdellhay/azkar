import { Counter } from "./counter"
import "./child.css"



type ReactChild = React.ReactElement | string


export const Child = ({children, numberOfIterations} : {children: ReactChild | string, numberOfIterations: number})=>{
    
    return (
        <div className="parent">
            <div className="content">{children}</div>
            <div className="counter"><Counter num={numberOfIterations} /></div>
        </div>
    )
}