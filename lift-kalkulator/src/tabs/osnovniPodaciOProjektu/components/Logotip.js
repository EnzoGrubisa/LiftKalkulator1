
import noImage from '../../../assets/images/noImage.jpg'

const Logotip = () => {
    return(
        <>
            <h5>Logotip: </h5>
            <img alt='logotip' src={noImage} className="img-fluid"/>
            <button>Odaberi...</button>
        </>
    );
}

export default Logotip;