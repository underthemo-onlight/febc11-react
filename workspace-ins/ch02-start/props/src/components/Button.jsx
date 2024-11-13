import './Button.css';

<<<<<<< HEAD
<<<<<<< HEAD
export default function Button({ children, type="button", onClick: clickHandler, color }){
  return <button className="rounded-button" style={{ backgroundColor: color }} type={ type } onClick={ clickHandler }>{ children }</button>
=======
export default function Button({ children, type='button', onClick }){
  return <button className="rounded-button" type={ type } onClick={ onClick }>{ children }</button>
>>>>>>> 73ef1c5 (👔)
=======
export default function Button({ children, type="button", onClick: clickHandler, color }){
  return <button className="rounded-button" style={{ backgroundColor: color }} type={ type } onClick={ clickHandler }>{ children }</button>
>>>>>>> c374697 (✨)
}