import { format } from 'date-fns';

import { UpdateCardDto } from '@shared/models';
import { formatAccountNumber } from '@utils/utils';

function CardItem({ card, bankName }: { card: UpdateCardDto; bankName: string }) {
  return (
    <div className='shadow-lg rounded-lg bg-white p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
      <div>
        <div className='text-gray-500 text-sm mb-1'>Bank Name</div>
        <div className='text-gray-800'>{bankName}</div>
      </div>
      <div>
        <div className='text-gray-500 text-sm mb-1'>Card Number</div>
        <div className='text-gray-800'>{formatAccountNumber(card.CardNumber)}</div>
      </div>
      <div>
        <div className='text-gray-500 text-sm mb-1'>Expires</div>
        <div className='text-gray-800'>{format(new Date(card.ExpirationDate), 'MM/yy')}</div>
      </div>
    </div>
  );
}

export default CardItem;
