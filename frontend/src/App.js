import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import DataPatient from './components/DataPatient';

function App() {
  return (
    <div >
      <Header/>
       <main className='py-5'>
         <Container>
         <DataPatient/>
         </Container>
       </main>
      <Footer/>
    </div>
  );
}

export default App;
