import { UpdateCardDto } from '@shared/models';
import { formatAccountNumber } from '@utils/utils';

function AtmCard({ card }: { card: UpdateCardDto }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Account Holder</div>
          <div className='text-primary text-xl'>Alexander Day</div>
        </div>
        <img
          className='w-12'
          src='https://img.icons8.com/?size=100&id=30435&format=png&color=000000'
          alt='Bank Logo'
        />
      </div>
      <div className='mb-4'>
        <div className='text-gray-500 text-sm mb-1'>Card Number</div>
        <div className='text-gray-800 text-xl'>{formatAccountNumber(card.cardNumber)}</div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <div className='text-gray-500 text-sm mb-1'>Expires</div>
          <div className='text-gray-800 font-bold'>12/24</div>
        </div>
        <div>
          <div className='text-gray-500 text-sm mb-1'>CVV</div>
          <div className='font-bold text-secondary'>{card.CVV}</div>
        </div>
      </div>
    </div>
  );
}

export default AtmCard;
