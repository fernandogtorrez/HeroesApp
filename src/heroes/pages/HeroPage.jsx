import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useHeroes } from '../../hooks/useHeroes';

export const HeroPage = () => {

  const { heroId } = useParams();
  const {isLoading, getHeroById} = useHeroes()
  const hero = getHeroById(parseInt(heroId))

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }
    
  return (
    <>
    {!isLoading && (
      <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img 
            src={hero.images.lg}
            alt={hero.name}
            className='img-thumbnail'
          />
        </div>
        <div className="col-8">
          <h3>
            {hero.name}
          </h3>
          <ul>
            <div>
              Intelligence: {hero.powerstats.intelligence}%
            </div>
          </ul>
          <ul>
            <div>
              Strength: {hero.powerstats.strength}%
            </div>
          </ul>
          <ul>
            <div>
              Speed: {hero.powerstats.speed}%
            </div>
          </ul>
          <ul>
            <div>
              durability: {hero.powerstats.durability}%
            </div>
          </ul>
          <ul>
            <div>
              power: {hero.powerstats.power}%
            </div>
          </ul>
          <ul>
            <div>
              combat: {hero.powerstats.combat}%
            </div>
          </ul>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
                <b>Alter ego: </b>
                {hero.biography.alterEgos}
            </li>
            <li className='list-group-item'>
                <b>Publisher: </b>
                {hero.biography.publisher}
            </li>
            <li className='list-group-item'>
                <b>First Appearance ego: </b>
                {hero.biography.firstAppearance}
            </li>
          </ul>
          <p>{ hero.characters }</p>

          <button
            className='btn btn-outline-primary'
            onClick={onNavigateBack}
          >
            Back...
          </button>
        </div>
      </div>
      )
    }
    </>
  )
}