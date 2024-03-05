import React from 'react'
import classes from'./Nav_css.module.css'
import { NavLink } from 'react-router-dom'
import Friends from '../../friends/Friends'

export  const Nav= () => {
  return (
    <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to ="/profile" activeClassName={classes.active}>Profile</NavLink>
    </div>
    <div className={classes.item} >
      <NavLink to ="/dialogs" activeClassName={classes.active}>Message</NavLink>
    </div>
    <div className={classes.item} >
      <NavLink to ="/news" activeClassName={classes.active}>News</NavLink>
    </div>
    <div className={classes.item} >
      <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
    </div>
    <div className={classes.item} >
      <NavLink to="/seting" activeClassName={classes.active}>Seting</NavLink>
    </div>
    <Friends/>
  </nav>
  )
}
