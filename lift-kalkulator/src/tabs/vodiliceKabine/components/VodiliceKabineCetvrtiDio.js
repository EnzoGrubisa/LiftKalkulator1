import { useEffect, useState } from "react";

import TitledInput from "../../../components/TitledInput";

import { useVodiliceKabine, useVodiliceKabineUpdate } from '../../../contexts/VodiliceKabineProvider'

import useSaveProject from "../../../projectData/saveData";

const VodiliceKabineCetvrtiDio = () => {
    
    const {
        vk_korisnickoDefiniranjeVodilica,

        vk_b1,
        vk_h1,
        vk_h,
        vk_k,
        vk_n,
        vk_c,
        vk_p,
        vk_g,
        vk_f,
        vk_e,
        vk_rs,
        vk_m1,
        vk_m2,
        vk_t1,
        vk_t2,
        vk_l,
        vk_d,
        vk_d1,
        vk_b3,
        vk_l2,
        vk_l3
    } = useVodiliceKabine();
    const {
        setVk_b1,
        setVk_h1,
        setVk_h,
        setVk_k,
        setVk_n,
        setVk_c,
        setVk_p,
        setVk_g,
        setVk_f,
        setVk_e,
        setVk_rs,
        setVk_m1,
        setVk_m2,
        setVk_t1,
        setVk_t2,
        setVk_l,
        setVk_d,
        setVk_d1,
        setVk_b3,
        setVk_l2,
        setVk_l3
    } = useVodiliceKabineUpdate();

    // AUTOSAVE
    const { autosaveInLocalStorage } = useSaveProject();
    useEffect(() => { autosaveInLocalStorage(); }, [autosaveInLocalStorage, vk_korisnickoDefiniranjeVodilica,

        vk_b1,
        vk_h1,
        vk_h,
        vk_k,
        vk_n,
        vk_c,
        vk_p,
        vk_g,
        vk_f,
        vk_e,
        vk_rs,
        vk_m1,
        vk_m2,
        vk_t1,
        vk_t2,
        vk_l,
        vk_d,
        vk_d1,
        vk_b3,
        vk_l2,
        vk_l3]);

    /* b1 */
    const [validVk_b1, setValidVk_b1] = useState(true);

    const vk_b1Changed = (e) => {
        setVk_b1(e.target.value);
    };

    useEffect(() => {
        const num = +vk_b1;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_b1(false);
        }
        else {
            setValidVk_b1(true);
        }
    }, [vk_b1]);

    function vk_b1OnBlur(e) {
        if (validVk_b1) {
            setVk_b1(+(e.target.value));
        }
        else {
            setVk_b1(0);
        }
    }
    
    /* h1 */
    const [validVk_h1, setValidVk_h1] = useState(true);

    const vk_h1Changed = (e) => {
        setVk_h1(e.target.value);
    };

    useEffect(() => {
        const num = +vk_h1;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_h1(false);
        }
        else {
            setValidVk_h1(true);
        }
    }, [vk_h1]);

    function vk_h1OnBlur(e) {
        if (validVk_h1) {
            setVk_h1(+(e.target.value));
        }
        else {
            setVk_h1(0);
        }
    }
    
    /* h */
    const [validVk_h, setValidVk_h] = useState(true);

    const vk_hChanged = (e) => {
        setVk_h(e.target.value);
    };

    useEffect(() => {
        const num = +vk_h;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_h(false);
        }
        else {
            setValidVk_h(true);
        }
    }, [vk_h]);

    function vk_hOnBlur(e) {
        if (validVk_h) {
            setVk_h(+(e.target.value));
        }
        else {
            setVk_h(0);
        }
    }
    
    /* k */
    const [validVk_k, setValidVk_k] = useState(true);

    const vk_kChanged = (e) => {
        setVk_k(e.target.value);
    };

    useEffect(() => {
        const num = +vk_k;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_k(false);
        }
        else {
            setValidVk_k(true);
        }
    }, [vk_k]);

    function vk_kOnBlur(e) {
        if (validVk_k) {
            setVk_k(+(e.target.value));
        }
        else {
            setVk_k(0);
        }
    }
    
    /* n */
    const [validVk_n, setValidVk_n] = useState(true);

    const vk_nChanged = (e) => {
        setVk_n(e.target.value);
    };

    useEffect(() => {
        const num = +vk_n;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_n(false);
        }
        else {
            setValidVk_n(true);
        }
    }, [vk_n]);

    function vk_nOnBlur(e) {
        if (validVk_n) {
            setVk_n(+(e.target.value));
        }
        else {
            setVk_n(0);
        }
    }
    
    /* c */
    const [validVk_c, setValidVk_c] = useState(true);

    const vk_cChanged = (e) => {
        setVk_c(e.target.value);
    };

    useEffect(() => {
        const num = +vk_c;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_c(false);
        }
        else {
            setValidVk_c(true);
        }
    }, [vk_c]);

    function vk_cOnBlur(e) {
        if (validVk_c) {
            setVk_c(+(e.target.value));
        }
        else {
            setVk_c(0);
        }
    }
    
    /* p */
    const [validVk_p, setValidVk_p] = useState(true);

    const vk_pChanged = (e) => {
        setVk_p(e.target.value);
    };

    useEffect(() => {
        const num = +vk_p;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_p(false);
        }
        else {
            setValidVk_p(true);
        }
    }, [vk_p]);

    function vk_pOnBlur(e) {
        if (validVk_p) {
            setVk_p(+(e.target.value));
        }
        else {
            setVk_p(0);
        }
    }
    
    /* g */
    const [validVk_g, setValidVk_g] = useState(true);

    const vk_gChanged = (e) => {
        setVk_g(e.target.value);
    };

    useEffect(() => {
        const num = +vk_g;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_g(false);
        }
        else {
            setValidVk_g(true);
        }
    }, [vk_g]);

    function vk_gOnBlur(e) {
        if (validVk_g) {
            setVk_g(+(e.target.value));
        }
        else {
            setVk_g(0);
        }
    }
    
    /* f */
    const [validVk_f, setValidVk_f] = useState(true);

    const vk_fChanged = (e) => {
        setVk_f(e.target.value);
    };

    useEffect(() => {
        const num = +vk_f;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_f(false);
        }
        else {
            setValidVk_f(true);
        }
    }, [vk_f]);

    function vk_fOnBlur(e) {
        if (validVk_f) {
            setVk_f(+(e.target.value));
        }
        else {
            setVk_f(0);
        }
    }
    
    /* e */
    const [validVk_e, setValidVk_e] = useState(true);

    const vk_eChanged = (e) => {
        setVk_e(e.target.value);
    };

    useEffect(() => {
        const num = +vk_e;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) {
            setValidVk_e(false);
        }
        else {
            setValidVk_e(true);
        }
    }, [vk_e]);

    function vk_eOnBlur(e) {
        if (validVk_e) {
            setVk_e(+(e.target.value));
        }
        else {
            setVk_e(0);
        }
    }
    
    /* rs */
    const [validVk_rs, setValidVk_rs] = useState(true);

    const vk_rsChanged = (e) => {
        setVk_rs(e.target.value);
    };

    useEffect(() => {
        const num = +vk_rs;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_rs(false);
        }
        else {
            setValidVk_rs(true);
        }
    }, [vk_rs]);

    function vk_rsOnBlur(e) {
        if (validVk_rs) {
            setVk_rs(+(e.target.value));
        }
        else {
            setVk_rs(0);
        }
    }
    
    /* m1 */
    const [validVk_m1, setValidVk_m1] = useState(true);

    const vk_m1Changed = (e) => {
        setVk_m1(e.target.value);
    };

    useEffect(() => {
        const num = +vk_m1;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_m1(false);
        }
        else {
            setValidVk_m1(true);
        }
    }, [vk_m1]);

    function vk_m1OnBlur(e) {
        if (validVk_m1) {
            setVk_m1(+(e.target.value));
        }
        else {
            setVk_m1(0);
        }
    }
    
    /* m2 */
    const [validVk_m2, setValidVk_m2] = useState(true);

    const vk_m2Changed = (e) => {
        setVk_m2(e.target.value);
    };

    useEffect(() => {
        const num = +vk_m2;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_m2(false);
        }
        else {
            setValidVk_m2(true);
        }
    }, [vk_m2]);

    function vk_m2OnBlur(e) {
        if (validVk_m2) {
            setVk_m2(+(e.target.value));
        }
        else {
            setVk_m2(0);
        }
    }
    
    /* t1 */
    const [validVk_t1, setValidVk_t1] = useState(true);

    const vk_t1Changed = (e) => {
        setVk_t1(e.target.value);
    };

    useEffect(() => {
        const num = +vk_t1;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_t1(false);
        }
        else {
            setValidVk_t1(true);
        }
    }, [vk_t1]);

    function vk_t1OnBlur(e) {
        if (validVk_t1) {
            setVk_t1(+(e.target.value));
        }
        else {
            setVk_t1(0);
        }
    }
    
    /* t2 */
    const [validVk_t2, setValidVk_t2] = useState(true);

    const vk_t2Changed = (e) => {
        setVk_t2(e.target.value);
    };

    useEffect(() => {
        const num = +vk_t2;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_t2(false);
        }
        else {
            setValidVk_t2(true);
        }
    }, [vk_t2]);

    function vk_t2OnBlur(e) {
        if (validVk_t2) {
            setVk_t2(+(e.target.value));
        }
        else {
            setVk_t2(0);
        }
    }
    
    /* l */
    const [validVk_l, setValidVk_l] = useState(true);

    const vk_lChanged = (e) => {
        setVk_l(e.target.value);
    };

    useEffect(() => {
        const num = +vk_l;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_l(false);
        }
        else {
            setValidVk_l(true);
        }
    }, [vk_l]);

    function vk_lOnBlur(e) {
        if (validVk_l) {
            setVk_l(+(e.target.value));
        }
        else {
            setVk_l(0);
        }
    }
    
    /* d */
    const [validVk_d, setValidVk_d] = useState(true);

    const vk_dChanged = (e) => {
        setVk_d(e.target.value);
    };

    useEffect(() => {
        const num = +vk_d;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_d(false);
        }
        else {
            setValidVk_d(true);
        }
    }, [vk_d]);

    function vk_dOnBlur(e) {
        if (validVk_d) {
            setVk_d(+(e.target.value));
        }
        else {
            setVk_d(0);
        }
    }
    
    /* d1 */
    const [validVk_d1, setValidVk_d1] = useState(true);

    const vk_d1Changed = (e) => {
        setVk_d1(e.target.value);
    };

    useEffect(() => {
        const num = +vk_d1;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_d1(false);
        }
        else {
            setValidVk_d1(true);
        }
    }, [vk_d1]);

    function vk_d1OnBlur(e) {
        if (validVk_d1) {
            setVk_d1(+(e.target.value));
        }
        else {
            setVk_d1(0);
        }
    }
    
    /* b3 */
    const [validVk_b3, setValidVk_b3] = useState(true);

    const vk_b3Changed = (e) => {
        setVk_b3(e.target.value);
    };

    useEffect(() => {
        const num = +vk_b3;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_b3(false);
        }
        else {
            setValidVk_b3(true);
        }
    }, [vk_b3]);

    function vk_b3OnBlur(e) {
        if (validVk_b3) {
            setVk_b3(+(e.target.value));
        }
        else {
            setVk_b3(0);
        }
    }
    
    /* l2 */
    const [validVk_l2, setValidVk_l2] = useState(true);

    const vk_l2Changed = (e) => {
        setVk_l2(e.target.value);
    };

    useEffect(() => {
        const num = +vk_l2;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_l2(false);
        }
        else {
            setValidVk_l2(true);
        }
    }, [vk_l2]);

    function vk_l2OnBlur(e) {
        if (validVk_l2) {
            setVk_l2(+(e.target.value));
        }
        else {
            setVk_l2(0);
        }
    }
    
    /* l3 */
    const [validVk_l3, setValidVk_l3] = useState(true);

    const vk_l3Changed = (e) => {
        setVk_l3(e.target.value);
    };

    useEffect(() => {
        const num = +vk_l3;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_l3(false);
        }
        else {
            setValidVk_l3(true);
        }
    }, [vk_l3]);

    function vk_l3OnBlur(e) {
        if (validVk_l3) {
            setVk_l3(+(e.target.value));
        }
        else {
            setVk_l3(0);
        }
    }
    
    

    return (
        <div>
            {/* b1 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="b1" sDesna="mm" 
            value={vk_b1} valid={validVk_b1}
            onChange={vk_b1Changed} onBlur={vk_b1OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* h1 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="h1" sDesna="mm" 
            value={vk_h1} valid={validVk_h1}
            onChange={vk_h1Changed} onBlur={vk_h1OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* h */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="h" sDesna="mm" 
            value={vk_h} valid={validVk_h}
            onChange={vk_hChanged} onBlur={vk_hOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* k */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="k" sDesna="mm" 
            value={vk_k} valid={validVk_k}
            onChange={vk_kChanged} onBlur={vk_kOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* n */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="n" sDesna="mm" 
            value={vk_n} valid={validVk_n}
            onChange={vk_nChanged} onBlur={vk_nOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* c */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="c" sDesna="mm" 
            value={vk_c} valid={validVk_c}
            onChange={vk_cChanged} onBlur={vk_cOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* p */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="p" sDesna="mm" 
            value={vk_p} valid={validVk_p}
            onChange={vk_pChanged} onBlur={vk_pOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* g */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="g" sDesna="mm" 
            value={vk_g} valid={validVk_g}
            onChange={vk_gChanged} onBlur={vk_gOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* f */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="f" sDesna="mm" 
            value={vk_f} valid={validVk_f}
            onChange={vk_fChanged} onBlur={vk_fOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* e */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="e" sDesna="mm" 
            value={vk_e} valid={validVk_e}
            onChange={vk_eChanged} onBlur={vk_eOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* rs */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="rs" sDesna="mm" 
            value={vk_rs} valid={validVk_rs}
            onChange={vk_rsChanged} onBlur={vk_rsOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* m1 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="m1" sDesna="mm" 
            value={vk_m1} valid={validVk_m1}
            onChange={vk_m1Changed} onBlur={vk_m1OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* m2 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="m2" sDesna="mm" 
            value={vk_m2} valid={validVk_m2}
            onChange={vk_m2Changed} onBlur={vk_m2OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* t1 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="t1" sDesna="mm" 
            value={vk_t1} valid={validVk_t1}
            onChange={vk_t1Changed} onBlur={vk_t1OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* t2 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="t2" sDesna="mm" 
            value={vk_t2} valid={validVk_t2}
            onChange={vk_t2Changed} onBlur={vk_t2OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* l */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="l" sDesna="mm" 
            value={vk_l} valid={validVk_l}
            onChange={vk_lChanged} onBlur={vk_lOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* d */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="d" sDesna="mm" 
            value={vk_d} valid={validVk_d}
            onChange={vk_dChanged} onBlur={vk_dOnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* d1 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="d1" sDesna="mm" 
            value={vk_d1} valid={validVk_d1}
            onChange={vk_d1Changed} onBlur={vk_d1OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* b3 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="b3" sDesna="mm" 
            value={vk_b3} valid={validVk_b3}
            onChange={vk_b3Changed} onBlur={vk_b3OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* l2 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="l2" sDesna="mm" 
            value={vk_l2} valid={validVk_l2}
            onChange={vk_l2Changed} onBlur={vk_l2OnBlur}
            tooltip="0 - 1000000000000" />
            
            {/* l3 */}
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="100px" inputWidth="80px" 
            title="l3" sDesna="mm" 
            value={vk_l3} valid={validVk_l3}
            onChange={vk_l3Changed} onBlur={vk_l3OnBlur}
            tooltip="0 - 1000000000000" />
            
        </div>
    );
}
    
export default VodiliceKabineCetvrtiDio;