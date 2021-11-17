import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './comentBox.scss'
 
const ComentBox = (props) => {
  const {_id} = props
    const [generalComent, setGeneralComent] = useState([])
   
    useEffect(() => {
      fetch(`https://backend-for-instagram.herokuapp.com/users/${_id}`)
      .then((res) => res.json())
      .then((result) => {
         
          setGeneralComent(result.urlcoment);
      })
    },[_id]);

      useEffect(() => {
        const polzun = document.getElementById('coment');
        polzun.scrollTop = polzun.scrollHeight;
      });

        return (
            <ul className="coment-box" id="coment">
              {generalComent.map((item) => (
                <li  key={item.message} className="coment-container" >
                  <div className="coment-boxName" >
                    <Link
                      to={item.autor}

                      className="iconcoment-cont"
                    >
                      <img
                        src={item.urlUser}
                        alt={item.autor}
                        className="iconcoment-c"
                      />
                      <h2 className="coment-user">{item.autor}</h2>
                    </Link>
                  </div>
                  <div>
                    <p className="textcoment-c">{item.message}</p>
                  </div>
                </li>
              ))}
            </ul>
        )
    
}
export default ComentBox;