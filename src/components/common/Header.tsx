import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { BiPhoneCall, BiSearch, BiUser } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { FiMail, FiShoppingBag } from 'react-icons/fi';
import logo from 'assets/images/fvaly.png';

const Header = () => {
  return (
    <div className="header__component">
      <div className="top-header py-2 bg-light border border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <BiPhoneCall /> <a href="tel:+8801711111111">+8801711111111</a>
            </li>
            <li>
              <FiMail /> <a href="mail-to:fvaly@mail.com">fvaly@mail.com</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <BsPhone />{' '}
            <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.fvalyshop">
              Save big on our app!
            </a>
          </div>
        </Container>
      </div>
      <div className="middle_header bg-white">
        <Container>
          <div className="d-flex align-items-center justify-content-center gap-5 py-3">
            <img className="logo_img" src={logo} alt="fvaly-logo" />
            <InputGroup className="">
              <FormControl
                className="border border-primary"
                placeholder="Search Here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon_list d-flex list-unstyled gap-3">
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <BiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News Feed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
