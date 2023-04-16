import React from 'react';
import img from '../341018362_6828627127164427_6079535255511716103_n.jpg'

function ProfilePhoto() {
  return (
    <div>
      <img src= {img} alt="profile" style={{width:'400px', borderRadius:'15px'}} />
    </div>
  );
}

export default ProfilePhoto;
