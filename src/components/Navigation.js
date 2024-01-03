import logo from '../logo.svg';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink} from "react-router-dom";
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  if (window, scrollY > 0) {
    navbar.classList.add('navbgOnScroll');
  }else{
    navbar.classList.remove('navbgOnScroll');
  }
});
function Navigation() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo}  alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/">Home</NavLink>
            <NavDropdown title="Features" id="features-dropdown">
              <NavDropdown.Item href="./Sales">Sales</NavDropdown.Item>
              <NavDropdown.Item href="./Purchases">Purchases</NavDropdown.Item>
              <NavDropdown.Item href="./Accounting">Accounting</NavDropdown.Item>
              <NavDropdown.Item href="./Inventory">Inventory</NavDropdown.Item>
              <NavDropdown.Item href="./Manufacturing">Manufacturing</NavDropdown.Item>
              <NavDropdown.Item href="./POS">POS</NavDropdown.Item>
              <NavDropdown.Item href="./Reporting">Reporting</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Business Types" id="BusinessTypes">
              <NavDropdown.Item href="./Retail">Retail Store</NavDropdown.Item>
              <NavDropdown.Item href="./Book">Book Store</NavDropdown.Item>
              <NavDropdown.Item href="./Shoe">Shoe Store</NavDropdown.Item>
              <NavDropdown.Item href="./DistributionWholesale">Distribution & Wholesale</NavDropdown.Item>
              <NavDropdown.Item href="./RestaurantsBakers">Restaurants Bakers</NavDropdown.Item>
              <NavDropdown.Item href="./GarmentsFashion">Garments Fashion</NavDropdown.Item>
              <NavDropdown.Item href="./ElectronicsAppliances">Electronics Appliances</NavDropdown.Item>
              <NavDropdown.Item href="./ComputerAccessories">Computer Accessories</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/Pricing">Pricing</NavLink>
            <NavLink to="/Clients">Clients</NavLink>
            <NavLink to="/HelpCenter">Help  Center</NavLink>
            <NavLink to="/FreeDemo" className="btn btn-warning">Free Demo Trial</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;