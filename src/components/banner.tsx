function Banner() {
  return (
    <div
      role='alert'
      className='alert alert-info text-white rounded-none text-center flex justify-center'
    >
      <img
        className='w-5 animate-bounce'
        src='https://img.icons8.com/?size=100&id=77&format=png&color=ffffff'
        alt='Info'
      />
      <span>
        This is a demo application. Do not enter any real banking information or personal details.
      </span>
    </div>
  );
}

export default Banner;
