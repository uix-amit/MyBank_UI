import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AtmCard from '@components/atm-card';
import CardItem from '@components/card-item';
import { CardList } from '@shared/models/card-list.dto';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';

function Card() {
  const dispatch = useDispatch<AppDispatch>();
  const [cardlistResponse, setCardListResponse] = useState<CardList>();

  useEffect(() => {
    dispatch(setTitle('Cards'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('cards')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => setCardListResponse(response))
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Frequently Used</h2>
      <div className='flex flex-col lg:flex-row gap-4 w-full'>
        {cardlistResponse?.Accounts?.map((account) =>
          account.Cards.map((card) => (
            <div key={card.CardID} className='w-full md:1/2 lg:w-1/3 min-w-80'>
              <AtmCard
                card={card}
                fullName={`${cardlistResponse.FirstName} ${cardlistResponse.LastName}`}
                accountNumber={account.AccountNumber}
              />
            </div>
          ))
        )}
      </div>
      <h2 className='text-xl font-bold my-4'>All Cards</h2>
      <div className='flex flex-col gap-2 w-full'>
        {cardlistResponse?.Accounts?.map((account) =>
          account.Cards.map((card) => (
            <CardItem
              key={card.CardID}
              card={card}
              fullName={`${cardlistResponse.FirstName} ${cardlistResponse.LastName}`}
              bankName={account.Bank.BankName}
            />
          ))
        )}
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
