import './style.css';

const Banner = ({children}) => {

    return(
      <section id="banner">
        <div id="info">
          {children}
        </div>
      </section>
    )
  }
  

export default Banner;