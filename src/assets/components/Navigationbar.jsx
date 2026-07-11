import React from 'react'
import{Link} from 'react-router-dom'
const Navigationbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add registration</Link>
        <Link class="nav-link" to="/Search">Search registration</Link>
        <Link class="nav-link" to="/delete">Delete registration</Link>
        <Link class="nav-link" to="/Viewall">View All resgitered students</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigationbar