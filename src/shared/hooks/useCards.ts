import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardList } from '@shared/models/card-list.dto';
import { getCards, loadCards } from '@shared/store/cards.slice';
import axiosInstance from '@utils/axiosInstance';

const useCards = () => {
  const cardlistResponse: CardList = useSelector(getCards);
  const dispatch = useDispatch();

  const fetchCardList = () =>
    axiosInstance
      .get('/cards')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => dispatch(loadCards(response)))
      .catch(console.error);

  useEffect(() => {
    !cardlistResponse.Accounts.length && fetchCardList();
  }, []);
};

export default useCards;
