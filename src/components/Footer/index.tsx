import Logo from "../../assets/icon.png";
import FooterLink from "../FooterLink";
import Text from "../Text";

export default function Footer() {
  return (
    <div
      className="px-4 py-8 flex gap-x-4 items-stretch rounded-2xl
        bg-primary-green-3"
    >
      <div className="flex items-center">
        <img src={Logo} alt="Logo Perola Negra" className="h-24" />
      </div>

      <div className="flex flex-col gap-y-2">
        <FooterLink href="#inicio">Início</FooterLink>
        <FooterLink href="#sobre">Sobre</FooterLink>
        <FooterLink href="#blog">Blog</FooterLink>
        <FooterLink href="#saiba-como-apoiar">Saiba como Apoiar</FooterLink>
      </div>

      <div className="flex flex-col gap-y-2">
        <FooterLink
          target="_blank"
          href="https://www.instagram.com/projeto_perola/"
          leadingIcon="FaInstagram"
        >
          Instagram
        </FooterLink>
        <FooterLink
          target="_blank"
          href="https://www.facebook.com/ProjetoPerolaNegraBotucatu"
          leadingIcon="FaSquareFacebook"
        >
          Facebook
        </FooterLink>
        <FooterLink
          target="_blank"
          href="mailto:pprojetoperolanegra@gmail.com"
          leadingIcon="FaEnvelope"
        >
          Email
        </FooterLink>
        <FooterLink
          target="_blank"
          href="tel:5514997235340"
          leadingIcon="FaPhone"
        >
          Telefone
        </FooterLink>
      </div>

      <div className="flex flex-col flex-1 items-end justify-end">
        <Text size="2xs" className="text-end">
          <a href="tel:551438146800" target="_blank">
            14 3814-6800
          </a>{" "}
          -{" "}
          <a href="tel:5514997235340" target="_blank">
            14 99723-5340
          </a>
        </Text>
        <Text size="2xs" className="text-end">
          <a href="mailto:pprojetoperolanegra@gmail.com" target="_blank">
            pprojetoperolanegra@gmail.com
          </a>
        </Text>
        <Text size="2xs" className="text-end">
          {" "}
          <a
            href="mailto:social.assistente.perolanegra@gmail.com"
            target="_blank"
          >
            social.assistente.perolanegra@gmail.com
          </a>
        </Text>
        <Text size="2xs" className="text-end">
          {" "}
          <a href="https://goo.gl/maps/syfczMvyPEwv5x2u8" target="_blank">
            R. Francisco Witzler Filho nº 965 Pq. Marajoara - Botucatu/SP CEP
            18606-370
          </a>
        </Text>
      </div>
    </div>
  );
}
