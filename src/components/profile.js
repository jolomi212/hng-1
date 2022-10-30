import share from '../assets/share.svg'
import share2 from '../assets/Content.svg'
import pic from '../assets/me.jpg'
function Profile(){
   return (
    <div className="profile">
       
        <div className="share">
        <img src={share} alt=""  />
        <img src={share2} alt=""  />
        <span className="tooltiptext">Share Profile</span>
        </div>
        <img src={pic} alt="" id="profile_img" />
        <h4 id="twitter">Jolomi Afinotan</h4>
        <h4 id="slack" className="hide">Jolomisan</h4>
    </div>




   );
}

export default Profile;