import git from '../assets/git.png'
import slack from '../assets/slack.png'
import {useRef, useEffect} from "react";

function Links() {
    useEffect(() => {
        const all = document.querySelectorAll('.links');
        const link = document.querySelectorAll('.linktip');
    const tool = document.querySelectorAll('.tooltiptext');
   
    for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mouseover", function(){
      
     tool[i+1].style.visibility= "visible";

       } )
     link[i].addEventListener("mouseout", function(){
      
        tool[i+1].style.visibility= "hidden";
   
          } )
      
       
     };
 
});
   
    
    return(
        <div className="links-container">
              <a href=""  className="links">Twitter Links</a>
            <a href="https://training.zuri.team/" id="btn__zuri" target="_blank" className="links">Zuri Team</a>
            <a href="http://books.zuri.team" id="books" className="links linktip" target="_blank" title='Get Books on Design and Coding from Zuri'>Zuri Books <span className='tooltiptext'>Get Books on Design and Coding from Zuri</span></a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=jolomisan" target="_blank" id="book__python" title='Buy our Python For Beginners" book' className="links linktip">Python Books <span className='tooltiptext'>Buy our Python For Beginners' book</span></a>
            <a href="https://background.zuri.team" id="pitch" target="_blank" title='Our Background Checks Service is bound to fulfil your expectations' className="links linktip">Background Checks for Coders <span className='tooltiptext'>Our Background Checks Service is bound to fulfil your expectations</span></a>
            <a href="https://books.zuri.team/design-rules " id="book__design" target="_blank" className="links linktip" title='Get our Design Books'> Design Books <span className='tooltiptext'>Get our Design Books</span></a>

        <div className="socials">
            <a href=""><img src={slack} alt="" id="slack"/></a>
            <a href="https://github.com/jolomi212/hng-1/"><img src={git} alt="" /></a>

        </div>
        </div>


    );
    
}

export default Links