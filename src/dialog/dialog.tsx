import ReactDOM from "react-dom";
import { DialogView } from "./index";

export const showDialog = () => {
  const root = document.getElementById('root')
  if (!root) return
  const container  = document.createElement('div')
  root.appendChild(container)
  ReactDOM.render(<DialogView/>, container)
}


