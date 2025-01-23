import { Link } from 'react-router-dom';

import { formatAccountNumber } from '@utils/utils';
import { UpdateCardDto } from '@shared/models';

function CardItem({
  card,
  fullName,
  bankName,
}: {
  card: UpdateCardDto;
  fullName: string;
  bankName: string;
}) {
  return (
    <div className='shadow-lg rounded-lg bg-white p-4 flex flex-col lg:flex-row gap-4 lg:gap-16 lg:items-center'>
      <div className='grow'>
        <div className='text-gray-500 text-sm mb-1'>Bank Name</div>
        <div className='text-gray-800'>{bankName}</div>
      </div>
      <div className='grow'>
        <div className='text-gray-500 text-sm mb-1'>Card Number</div>
        <div className='text-gray-800'>{formatAccountNumber(card.CardNumber)}</div>
      </div>
      <div className='grow'>
        <div className='text-gray-500 text-sm mb-1'>Card Holder</div>
        <div className='text-gray-800'>{fullName}</div>
      </div>
      <Link to={'details'} className='text-primary grow'>
        View Details
        <img
          className='inline-block w-8 pl-2'
          src='https://img.icons8.com/?size=100&id=355&format=png&color=491eff'
          alt='link new account'
        />
      </Link>
    </div>
  );
}

export default CardItem;
