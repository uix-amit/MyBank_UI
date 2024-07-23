import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { cards } from '@assets/stubs/fake-data';
import AtmCard from '@components/atm-card';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import CardItem from '@components/card-item';
import { Link } from 'react-router-dom';

function Card() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Cards'));
  }, [dispatch]);
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Frequently Used</h2>
      <div className='flex flex-col lg:flex-row gap-4 w-full'>
        {cards.map((card) => (
          <div className='w-full md:1/2 lg:w-1/3 min-w-80'>
            <AtmCard key={card.cardID} card={card} />
          </div>
        ))}
      </div>
      <h2 className='text-xl font-bold my-4'>All Cards</h2>
      <div className='flex flex-col gap-2 w-full'>
        {cards.map((card) => (
          <CardItem key={card.cardID} card={card} />
        ))}
      </div>
      <div className='text-primary p-4 flex justify-end'>
        <Link to={'create'} className='w-fit'>
          Link new card
          <img
            className='inline-block w-8 pl-2'
            src='https://img.icons8.com/?size=100&id=355&format=png&color=491eff'
            alt='link new card'
          />
        </Link>
      </div>
    </>
  );
}

export default Card;
