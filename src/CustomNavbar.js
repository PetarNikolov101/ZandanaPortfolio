import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function CustomNavbar() {
  const { t, i18n } = useTranslation("global")
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);  
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="navbar">
      <Navbar.Brand href="#">
        <img className="logo" src="zandana_bejzh.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#About">{t("top_menu.about")}</Nav.Link>
          <Nav.Link href="#Events">{t("top_menu.events")}</Nav.Link>
          <Nav.Link href="#Games">{t("top_menu.games")}</Nav.Link>
          <Nav.Link href="#Contact">{t("top_menu.contact")}</Nav.Link>
        </Nav>
        <Button className="btn btn-secondary lang-btn" onClick={() => handleChangeLanguage("mk")}>MK</Button>
        <Button className="btn btn-secondary lang-btn" onClick={() => handleChangeLanguage("en")}>EN</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}