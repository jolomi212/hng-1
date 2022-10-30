import i4g from '../assets/I4G.svg'
import zuri from '../assets/zuri logo.png'

function  Footer(){
    return(
        <footer className="footer">
            <img src={zuri} alt="" className='zuri-logo'/>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={i4g} alt="" id='i4g'/>
            
        </footer>
    );
}

export default Footer