import './App.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Header} from './components/header/Header'
import { HomePages } from './home/HomePages'
import {Footer} from './components/footer/Footer'







function App(){return(<>
<Router>
  <Header />
  <Switch>
    <Route exact path = '/' component = {HomePages}/>
    
    
    </Switch>
    
    <Footer/>
    
    
    </Router>
    </>

)
}
export default App
