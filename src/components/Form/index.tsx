import Input from "../Input";
import SubmitButton from "../SubmitButton";
import Text from "../Text";
import QrCode from "../../assets/qr-code.svg";

export default function Form() {
  return (
    <div className="flex p-16 gap-x-16 rounded-2xl shadow-form">
      <form
        className="flex flex-col gap-y-4 flex-1"
        onSubmit={(ev) => ev.preventDefault()}
      >
        <Input label="Nome" />
        <Input label="Telefone" />
        <Input label="Email" />
        <Input label="Mensagem" multiline />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>

      <div className="flex-1 flex flex-col justify-center items-center gap-y-2">
        <img
          src={QrCode}
          alt="QrCode do pix do projeto perola negra"
          className="w-48 h-48"
        />

        <Text size="small" className="text-primary-green-1">
          PIX: lorem@ipsum.dolor
        </Text>
      </div>
    </div>
  );
}
