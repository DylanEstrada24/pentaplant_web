import Menubar from './Menubar';
import LoginMenubar from './LoginMenubar';
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import '../../css/basic.css';

function Header() {
    return (
        <header className="header">
            <Switch>
                <Route exact path="/login" component={LoginMenubar} />
                <Route path="/" component={Menubar} />
            </Switch>
            {/* <Menubar/> */}
        </header>
    )
}

export default Header;