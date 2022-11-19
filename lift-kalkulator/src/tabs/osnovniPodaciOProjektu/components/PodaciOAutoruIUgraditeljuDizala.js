import TitledInput from '../../../components/TitledInput';

const PodaciOAutoruIUgraditeljuDizala = () => {
    
    const labelsWidth = "100px";

    return (
        //className='container'
        <div >
            <h3>Podaci o autoru i ugraditelju dizala</h3>
            <TitledInput valid labelWidth={labelsWidth} title="Autor"/>
            <TitledInput valid labelWidth={labelsWidth} title="Adresa, Grad"/>
            <TitledInput valid labelWidth={labelsWidth} title="Izradio"/>
            <TitledInput valid labelWidth={labelsWidth} title="Suradnik"/>
            {/* <TitledDatePicker title="Datum"/><br/> */}
            <TitledInput valid labelWidth={labelsWidth} title="Ugraditelj"/>
            <TitledInput valid labelWidth={labelsWidth} title="Adresa, Grad"/>
        </div>
      
    );
}
  
export default PodaciOAutoruIUgraditeljuDizala;