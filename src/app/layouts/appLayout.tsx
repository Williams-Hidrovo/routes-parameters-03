import { NavLink, Outlet } from "react-router-dom"
import '../../index.css'


export const AppLayout = () => {
  return (
    <section className="applayout">
      <header>
        <nav className="nav-menu">
          <NavLink to={'/'}><h1>PX</h1></NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet/>
      </main>
      <footer>todos los derechos reservados</footer>
    </section>
  )
}
