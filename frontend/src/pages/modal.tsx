import { Styles } from 'react-modal';
import ModalComponent from '../component/modal/index';


const customStyles: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '100%',
    height                : '100%',
    transform             : 'translate(-50%, -50%)'
  }
};

const App = () => {
    return (
      <>
        <ModalComponent modalStyles={customStyles} />
      </>
    )
}

export default App;
