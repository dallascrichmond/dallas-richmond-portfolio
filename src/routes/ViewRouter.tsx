/**
 * @summary Router to different views
 * @author Dallas Richmond
 */
import { Routes, Route } from 'react-router-dom';
import { Home } from '../views';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
    </Routes>
  );
}