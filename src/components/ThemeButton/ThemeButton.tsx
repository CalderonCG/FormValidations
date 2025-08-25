import { useTheme } from '../../context/ThemeContext'
import './ThemeButton.scss'


function ThemeButton() {
   const {theme, toggleTheme} = useTheme()
  return (
    <button onClick={()=>toggleTheme()}>ThemeButton</button>
  )
}

export default ThemeButton