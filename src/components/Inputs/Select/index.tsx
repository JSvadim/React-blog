// local imports
import { OptionI, SelectComponentI } from "./type";
import style from "./style.module.scss";
import classNames from "classnames";


const Option: React.FC<OptionI> = (props) => {
    return (
        <option value={props.value}>
            {props.text}
        </option>
    )
}


export const Select: React.FC<SelectComponentI> = (props) => {
    const selectClass = classNames([style.select, style[`select--theme-${props.theme}`]]);
    const wrapperClass = classNames([style["select-wrapper"], style[`select-wrapper--theme-${props.theme}`]]);
    
    const options = props.options.map(option => {
        return <Option value={option.value} text={option.text} key={option.text}/>
    })

    return (
        <div className={wrapperClass}>
            <select 
            {...props.register(props.registerName, props.validation)}
            className={selectClass}>
                {options}
            </select>
        </div>
    )
}