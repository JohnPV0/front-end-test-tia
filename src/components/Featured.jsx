import '../assets/css/Featured.css';
import FeaturedCard from './FeaturedCard';
import { useEffect, useState } from 'react';
import { getDogs } from '../services/dog';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Featured() {

  const [dogs, setDogs] = useState([])
  const [dogsFiltered, setDogsFiltered] = useState(null)
  const [filters, setFilters] = useState([
    {
      breed: 'principal',
      className: 'active'
    }
  ])

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await getDogs()
      if (response.error) {
        console.log(response.error)
      } else {
        setDogs(response.data.data.dogs)
        const breedsSet = new Set();
        response.data.data.dogs.forEach(dog => {
          breedsSet.add(dog.breed);
        });
        const uniqueBreedsArrayObjects = Array.from(breedsSet).map(breed => {
          return { breed: breed, className: '' }
        });
        setFilters([...filters, ...uniqueBreedsArrayObjects])
      }
    }
    fetchDogs()
  }, [])

  const handleFilter = (breed) => {
    const newFilters = filters.map(filter => {
      if (filter.breed === breed) {
        filter.className = 'active'
      } else {
        filter.className = ''
      }
      return filter
    })
    setFilters(newFilters)
  }

  return (
    <div className='featured-container'>
      <div className='featured-title'>Mascotas destacadas</div>
      <div className='featured-filters'>
        {
          filters.map((filter, index) => {
            return <button className={filter.className}  key={index} onClick={() => {
              if (index == 0) {
                handleFilter('principal')
                setDogsFiltered(null)
              } else {
                handleFilter(filter.breed)
                setDogsFiltered(dogs.filter(dog => dog.breed === filter.breed))
              }
            }}>{filter.breed}</button>
          })
        }
      </div>
        {dogs ? (
          dogsFiltered ? (
            <TransitionGroup className='featured-content'>
              {dogsFiltered.map((item, index) => (
                <CSSTransition key={index} classNames='fade' timeout={300}>
                  <FeaturedCard key={index} image={item.image} name={item.name} stars={item.stars} description={item.description} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : (
            <TransitionGroup className='featured-content' >
              {
                dogs.slice(0, 6).map((dog, index) => (
                  <CSSTransition key={index} classNames='fade' timeout={300}>
                    <FeaturedCard key={index} image={dog.image} name={dog.name} stars={dog.stars} description={dog.description} />
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
          )
        ) : (
          <p>Cargando...</p>
        )}
    </div>
  )
}
