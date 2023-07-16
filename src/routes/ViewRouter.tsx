/**
 * @summary Router to different views
 * @author  Dallas Richmond
 */
import { Routes, Route } from 'react-router-dom';
import { 
  Home,
  About,
  Resume,
  Projects,
  Contact,
 } from '../views';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/About' Component={About} />
      <Route path='/Resume' Component={Resume} />
      <Route path='/Projects' Component={Projects} />
      <Route path='Contact' Component={Contact} />
    </Routes>
  );
}