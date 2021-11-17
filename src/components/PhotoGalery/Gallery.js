import React, { useState } from "react";
import './gallery.scss';
import CloseIcon from '@material-ui/icons/Close'

import img1 from '../../usersImages/gallery/01_gallery.jpg';
import img2 from '../../usersImages/gallery/02_gallery.jpg';
import img3 from '../../usersImages/gallery/03_gallery.jpg';
import img4 from '../../usersImages/gallery/04_gallery.jpg';
import img5 from '../../usersImages/gallery/05_gallery.jpg';
import img6 from '../../usersImages/gallery/06_gallery.jpg';
import img7 from '../../usersImages/gallery/07_gallery.jpg';
import img8 from '../../usersImages/gallery/08_gallery.jpg';
import img9 from '../../usersImages/gallery/09_gallery.jpg';
import img10 from '../../usersImages/gallery/10_gallery.jpg';
import img11 from '../../usersImages/gallery/11_gallery.jpg';
import img12 from '../../usersImages/gallery/12_gallery.jpg';
import img13 from '../../usersImages/gallery/13_gallery.jpg';
import img14 from '../../usersImages/gallery/14_gallery.jpg';
import img15 from '../../usersImages/gallery/15_gallery.jpg';
import img16 from '../../usersImages/gallery/16_gallery.jpg';
import img17 from '../../usersImages/gallery/17_gallery.jpg';
import img18 from '../../usersImages/gallery/18_gallery.jpg';
import img19 from '../../usersImages/gallery/19_gallery.jpg';
import img20 from '../../usersImages/gallery/20_gallery.jpg';
import img21 from '../../usersImages/gallery/21_gallery.jpg';
import img22 from '../../usersImages/gallery/22_gallery.jpg';
import img23 from '../../usersImages/gallery/23_gallery.jpg';
import img24 from '../../usersImages/gallery/24_gallery.jpg';
import img25 from '../../usersImages/gallery/25_gallery.jpg';
import img26 from '../../usersImages/gallery/26_gallery.jpg';
import img27 from '../../usersImages/gallery/27_gallery.jpg';
import img28 from '../../usersImages/gallery/28_gallery.jpg';
import img29 from '../../usersImages/gallery/29_gallery.jpg';
import img30 from '../../usersImages/gallery/30_gallery.jpg';



const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 19,
            imgSrc: img19,
        },
        {
            id: 20,
            imgSrc: img20,
        },
        {
            id: 21,
            imgSrc: img21,
        },
        {
            id: 22,
            imgSrc: img22,
        },
        {
            id: 23,
            imgSrc: img23,
        },
        {
            id: 24,
            imgSrc: img24,
        },
        {
            id: 25,
            imgSrc: img25,
        },
        {
            id: 26,
            imgSrc: img26,
        },
        {
            id: 27,
            imgSrc: img27,
        },
        {
            id: 28,
            imgSrc: img28,
        },
        {
            id: 29,
            imgSrc: img29,
        },
        {
            id: 30,
            imgSrc: img30,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true)

    }


    return(
        <>
        <div className={model? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="img"/>
        <CloseIcon onClick={() => setModel(false)}/>
        </div>
        <ul className="gallery">
        {data.map((item, index) =>{
            
            return (
                <li className="pics" key={index} onClick={() =>getImg(item.imgSrc)}>
                   <img src={item.imgSrc} alt={item.id} style={{width: '100%'}}/>

                </li>
            )
        })} 
        </ul>
        </>
    )
}

export default Gallery