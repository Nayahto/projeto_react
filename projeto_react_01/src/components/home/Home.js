/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import './Home.css';
import AnnotationList from '../AnnotationList/AnnotationList';

function Home() {
  return (
    <>
      <h2 id="personalizarH2">pagina inicial</h2>
      <div className="home">
        <AnnotationList />
      </div>
    </>
  );
}
export default Home;
