import React from 'react'
import classes from './Profile_css.module.css'
import { MyPosts } from './myPosts/MyPosts'
export const Profile = () => {
  return (
    <div >
        <div>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt=""
          />
        </div>
        <div>ava + description</div>
       <MyPosts />
      </div>
  )
}
