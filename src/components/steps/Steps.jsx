import './steps.css';

const Steps = () => {
  return (
    <>
      <section className='steps'>
        <div className='steps__wrapper'>
          <p className='steps__crumb'>Steps</p>
          <h2 className='steps__title'>How it works</h2>
          <div className='steps__blocks'>
            <div className='steps__block'>
              <p className='steps__block-number'>1</p>
              <div className='steps__text-wrapper'>
                <h3 className='steps__block-title'>Choose a car</h3>
                <p className='steps__block-text'> Explore a wide selection of premium vehicles including luxury sedans, sports cars, SUVs and convertibles</p>
              </div>
            </div>
            <div className='steps__block'>
              <p className='steps__block-number'>2</p>
              <div className='steps__text-wrapper'>
                <h3 className='steps__block-title'>We conclude contracts</h3>
                <p className='steps__block-text'>You pay 30% of the cost of the car. We enter into an agreement with you for the following payments for a period of up to 3 years</p>
              </div>
            </div>
            <div className='steps__block'>
              <p className='steps__block-number'>3</p>
              <div className='steps__text-wrapper'>
                <h3 className='steps__block-title'>Get your car</h3>
                <p className='steps__block-text'>After concluding the contract, you can immediately use the car as your own vehicle. you will only need to make payments on time</p>
              </div>
             
            </div>
            <div className='steps__block blue'>
              <p className='steps__block-number'>4</p>
              <div className='steps__text-wrapper'>
                <h3 className='steps__block-title'>Own your car</h3>
                <p className='steps__block-text'>We renew the contract for you and you become the owner of the car</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Steps