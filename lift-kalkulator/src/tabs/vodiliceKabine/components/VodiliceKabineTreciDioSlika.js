import vodiliceKabineTip1 from '../../../assets/images/vodiliceKabine/tip1.png'
import vodiliceKabineTip2 from '../../../assets/images/vodiliceKabine/tip2.png'
import vodiliceKabineTip3 from '../../../assets/images/vodiliceKabine/tip3.png'

import { useVodiliceKabine } from '../../../contexts/VodiliceKabineProvider'

const VodiliceKabineTreciDioSlika = () => {

    const { vk_vrstaVodilice, vk_tipVodilice, vk_korisnickoDefiniranjeVodilica } = useVodiliceKabine();

    function fullscreenImage() {

    }

    function pickImage() {
        if (vk_korisnickoDefiniranjeVodilica) {
            if (vk_vrstaVodilice === "strojnoObradene") {
                return vodiliceKabineTip3;
            } else {
                return vodiliceKabineTip1;
            }
        }
        else {
            if (vk_tipVodilice === "tip3" || vk_vrstaVodilice === "strojnoObradene") {
                return vodiliceKabineTip3;
            }
            else if (vk_tipVodilice === "tip2") {
                return vodiliceKabineTip2;
            }
            else if (vk_tipVodilice === "tip1") {
                return vodiliceKabineTip1;
            }
        }
    }

    return (
        <div>
            <img alt='slika vodilice kabine' src={pickImage()} className="img-fluid" onClick={fullscreenImage} />
        </div>
    );
}

export default VodiliceKabineTreciDioSlika;