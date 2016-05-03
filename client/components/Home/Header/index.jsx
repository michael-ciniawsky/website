
import css from './style.css'

const Header = (props, ctx) => {
  return (
    <header className={css.header}>{props.header}</header>
  )
}

export default Header
