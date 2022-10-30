import git from '../assets/git.png'
import slack from '../assets/slack.png'

function Links() {
    return(
        <div className="links-container">
              <a href=""  className="links">Twitter Links</a>
            <a href="" id="btn__zuri" className="links">Zuri Team</a>
            <a href="" id="books" className="links">Zuri Books</a>
            <a href="" id="book__python" className="links">Python Books</a>
            <a href="" id="pitch" className="links">Background Checks for Coders</a>
            <a href="" id="book__design" className="links"> Design Books</a>

        <div className="socials">
            <a href=""><img src={slack} alt="" id="slack"/></a>
            <a href=""><img src={git} alt="" /></a>

        </div>
        </div>


    );
    
}

export default Links