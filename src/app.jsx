import React from 'react';
import {
  Card, CardImg,
  Nav, NavItem, NavLink,
  Media
} from 'reactstrap';

import Header from './components/header';
import {Divider, Centered} from './components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

class App extends React.Component {
  render() {
    const imgStyle={
      marginRight: '8px',
      width: '120px'
    }
    return (
      <div>
        <Header />

        <Divider />

        <Centered>
          <Nav className="nav-fill" style={{ width: '100%' }}>
            <NavItem><NavLink href="">  Portfolio  </NavLink></NavItem>
            <NavItem><NavLink href="">  About Me  </NavLink></NavItem>
            <NavItem><NavLink href="">  Resume  </NavLink></NavItem>
            <NavItem><NavLink href="">  Contact  </NavLink></NavItem>
          </Nav>
        </Centered>

        <Divider />

        <Centered>
          <Card>
            <CardImg top width="100%" src="images/cover_image.jpg" alt="Card image cap" />
          </Card>
        </Centered>

        <Divider />

        <Centered>
          <div>
            <Media className="mt-1 media-summary">
              <Media left middle href="#">
                <Media object style={imgStyle} src="images/unt_256.jpg" alt="img" />
              </Media>
              <Media body>
                <Media heading>
                  Education 
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media>

            <Media className="mt-1 media-summary">
              <Media left middle href="#">
                <Media object style={imgStyle} src="images/climbing_256.jpg" alt="img" />
              </Media>
              <Media body>
                <Media heading>
                  Hobbies 
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
            </Media>

            <Media className="mt-1 media-summary">
              <Media left middle href="#">
                <Media object style={imgStyle} src="images/cat_256.jpg" alt="img" />
              </Media>
              <Media body>
                <Media heading>
                  Cat 
                </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Media>
          </div>
        </Centered>

      </div>
    )
  }
}
export default App;
