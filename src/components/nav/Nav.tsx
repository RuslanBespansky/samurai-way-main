import React from 'react'
import classes from'./Nav_css.module.css'

export  const Nav= () => {
  return (
    <nav className={classes.nav}>
    <div className={classes.item}>
      <a href="/profile">Profile</a>
    </div>
    <div className={classes.item} >
      <a href="/dialogs">Message</a>
    </div>
    <div className={classes.item} >
      <a href="">News</a>
    </div>
    <div className={classes.item} >
      <a href="">Music</a>
    </div>
    <div className={classes.item} >
      <a href="">Seting</a>
    </div>
  </nav>
  )
}
