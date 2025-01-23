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
    <div className='shadow-lg rounded-lg bg-white p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center'>
      <div>
        <div className='text-gray-500 text-sm mb-1'>Bank Name</div>
        <div className='text-gray-800'>{bankName}</div>
      </div>
      <div>
        <div className='text-gray-500 text-sm mb-1'>Card Number</div>
        <div className='text-gray-800'>{formatAccountNumber(card.CardNumber)}</div>
      </div>
      <div>
        <div className='text-gray-500 text-sm mb-1'>Card Holder</div>
        <div className='text-gray-800'>{fullName}</div>
      </div>
      <Link to={'details'} className='text-primary'>
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
