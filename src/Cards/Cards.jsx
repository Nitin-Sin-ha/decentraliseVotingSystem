import React, { forwardRef } from 'react'
import "./Cards.css"
import {  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue} from "framer-motion/dist/framer-motion";
import Progress_bar from '../components/ProgressBar/ProgressBar';
import { Link } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Cards({giveeVotee,pic,numm}) {
  return (
<>

  
<div  className="wrap">
  <div className="numberr">
    <h1>#{numm}</h1>
  </div>
   <div className="card ">
     <img
       src={pic}
       alt="Person"
       class="card__image"
     />
     <p class="card__name">Lily-Grace Colley</p>
     <div class="grid-container">
       <div class="grid-child-posts">156 Post</div>

       <div class="grid-child-followers">1012 Likes</div>
     </div>
     <ul class="social-icons">
       <li>
         <a href="#section0">
           <i class="fa fa-instagram">C1</i>
         </a>
       </li>
       <li>
         <a href="#section1">
           <i class="fa fa-twitter">C2</i>
         </a>
       </li>
       <li>
         <a href="#section3">
           <i class="fa fa-linkedin">C3</i>
         </a>
       </li>
       <li>
         <a href="#section4">
           <i class="fa fa-codepen">C4</i>
         </a>
       </li>
     </ul>
     <button class="btn draw-border" onClick={giveeVotee}>Vote</button>
     {/* <button class="btn draw-border">Message</button> */}
   </div>

    <div className='rainbow1'>
  
      <div className="rightcardchild">
    

     <a target="_blank" href="https://library.bjp.org/jspui/handle/123456789/2988">

     <BookIcon className="iconss"fontSize='large'/> <span>Go through my manifesto</span>
     </a>
     <a target="_blank" href="https://library.bjp.org/jspui/handle/123456789/2988">

     <InstagramIcon className="iconss"fontSize='large'/> <span>Instagram</span>
     </a>
      </div>
    </div>
 </div>  
</>   
)
}
