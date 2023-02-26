import elektricnoSaStrojarnicom from '../../../assets/images/dizalo/elektricnoSaStrojarnicom.png';
import elektricnoBezStrojarnice from '../../../assets/images/dizalo/elektricnoBezStrojarnice.png';
import hidraulicno from '../../../assets/images/dizalo/hidraulicno.png';

import { useDizalo } from '../../../contexts/DizaloProvider';

const SlikaDizala = () => {

    const { vrstaDizala, bezStrojarnice } = useDizalo();

    function fullscreenImage() {

    }

    function pickImage() {
        if (vrstaDizala === 'elektricno') {
            if (bezStrojarnice === false) {
                return elektricnoSaStrojarnicom;
            }
            else if (bezStrojarnice === true) {
                return elektricnoBezStrojarnice;
            }
        }
        else if (vrstaDizala === 'hidraulicno') {
            return hidraulicno;
        }
    }

    return (
        <div>
            <img alt='slika dizala' src={pickImage()} className="img-fluid" onClick={fullscreenImage} />
        </div>

    );
}

export default SlikaDizala;