import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';


import Home from '../routes/Home';
import Detail from '../routes/Detail';
function App(){
    return <Router>
        <div>123123123</div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail" element={<Detail/>}/>
        </Routes>
    </Router>
}
export default App;