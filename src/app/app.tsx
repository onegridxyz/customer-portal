// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';
import About from 'src/pages/about/About';
import Home from 'src/pages/home/Home';
import styles from './app.module.scss';

export function App() {
  return (
    <div>
      <div>
        <span>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </span>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
