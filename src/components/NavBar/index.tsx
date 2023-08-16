import Icon from "../../assets/icon.png";
import NavBarButton from "../NavBarButton";

export default function NavBar() {
  return (
    <div className="h-20 flex items-center p-4">
      <div className="w-full mx-auto flex justify-between items-center h-full">
        <img className="h-full w-auto" src={Icon} alt="Icone do perola negra" />
        <nav className="flex gap-x-2">
          <NavBarButton href="#inicio" variant="secondary">
            Início
          </NavBarButton>
          <NavBarButton href="#sobre" variant="secondary">
            Sobre
          </NavBarButton>
          <NavBarButton href="#blog" variant="secondary">
            Blog
          </NavBarButton>
          <NavBarButton href="#saiba-como-apoiar" variant="primary">
            Saiba como Apoiar
          </NavBarButton>
        </nav>
      </div>
    </div>
  );
}
