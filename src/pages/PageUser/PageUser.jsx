import React from 'react'
import { useParams } from 'react-router-dom'
import User from '../../components/User/User'
import "./pagesUser.scss"
import { useSelector } from 'react-redux'
import { getCards } from '../../store/selectors'
import Header from '../../components/Header/Header'

const PagesUser = (props) => {

    const params = useParams()
    const {userId} = params
    const cards = useSelector(getCards)
    const result = cards.filter(x => x.name===userId)
    const {toggleAdded, toggleFavorite, toggleIsOpenModal} = props
    return (      
        <div >
            <Header/>
            {
                result
                .map(el => <User
                userId={userId}
                 key={el._id}
                 name={el.name}             
                 _id={el._id}        
                 age={el.age}
                 country={el.country}
                 city={el.city}
                 lifeСredo={el.LifeСredo}
                 added={el.added}
                 toggleAdded={toggleAdded}
                 toggleFavorite={toggleFavorite}
                 url={el.url}
                 url2={el.url2}
                 url3={el.url3}
                 url4={el.url4}
                 url5={el.url5}
                 url6={el.url6}
                 url7={el.url7}
                 url8={el.url8}
                 url9={el.url9}
                 url10={el.url10}

                 urllike={el.urllike}
                 url2like={el.url2like}
                 url3like={el.url3like}
                 url4like={el.url4like}
                 url5like={el.url5like}
                 url6like={el.url6like}
                 url7like={el.url7like}
                 url8like={el.url8like}
                 url9like={el.url9like}
                 url10like={el.url10like}

                 urlcoment={el.urlcoment}
                 url2coment={el.url2coment}
                 url3coment={el.url3coment}
                 url4coment={el.url4coment}
                 url5coment={el.url5coment}
                 url6coment={el.url6coment}
                 url7coment={el.url7coment}
                 url8coment={el.url8coment}
                 url9coment={el.url9coment}
                 url10coment={el.url10coment}

                 isOpenModal={el.isOpenModal}
                 toggleIsOpenModal={toggleIsOpenModal}
                >                   
                </User>                   
                    )
            }        
        </div>
    )
}

export default PagesUser;