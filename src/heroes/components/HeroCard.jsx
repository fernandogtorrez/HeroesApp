import React from 'react'
import { Link } from 'react-router-dom';


export const HeroCard = ({
    id,
    name,
    biography,
    images,
}) => {

  return (
    <>
        <div className="contenedor animate__animated animate__fadeIn">
            <div className="card">
                <figure className="card__thumb">
                    <img src={images.sm} alt={name} className="card__image"/>
                    <figcaption className="card__caption">
                        <h2 className="card__title">{ name }</h2>
                        <p className="card__snippet">{biography.firstAppearance}</p>
                        <Link to={`/hero/${id}`} className="card__button">More info</Link>
                    </figcaption>
                </figure>
            </div>
        </div>
    </>
  )
}