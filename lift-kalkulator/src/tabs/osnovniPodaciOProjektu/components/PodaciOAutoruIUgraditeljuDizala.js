import TitledInput from '../../../components/TitledInput';

const PodaciOAutoruIUgraditeljuDizala = () => {
    
    return (
        <div className='container' style={{backgroundColor: "#CCCCCC"}}>
            <h3>Podaci o autoru i ugraditelju dizala</h3>
            <TitledInput title="Autor"/><br/>
            <TitledInput title="Adresa, Grad"/><br/>
            <TitledInput title="Izradio"/><br/>
            <TitledInput title="Suradnik"/><br/>
            {/* <TitledDatePicker title="Datum"/><br/> */}
            <TitledInput title="Ugraditelj"/><br/>
            <TitledInput title="Adresa, Grad"/><br/>
        </div>
      
    );
}
  
export default PodaciOAutoruIUgraditeljuDizala;