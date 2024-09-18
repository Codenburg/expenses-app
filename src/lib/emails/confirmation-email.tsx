import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ConfirmationEmailProps {
  firstName?: string;
  lastName?: string;
  userEmail?: string;
  token?: string;
}

const ConfirmationEmail = ({
  firstName = "Tomas",
  lastName = "Oldenburg",
  userEmail = "user@example.com",
  token = "123456",
}: ConfirmationEmailProps) => (
  <Html>
    <Tailwind>
      <Head />
      <Preview>Confirma tu cuenta en Expenses App</Preview>
      <Body className="bg-gray-100 font-sans">
        <Container className="bg-white border border-gray-200 rounded-lg p-8 mx-auto my-8 max-w-2xl">
          <Img
            src={`https://img.logoipsum.com/297.svg`}
            width="50"
            height="50"
            alt="Logo de Expenses App"
            className="mx-auto mb-4"
          />
          <Heading className="text-2xl font-bold text-center text-gray-800 mb-4">
            Confirma tu cuenta en Expenses App ✅
          </Heading>
          <Text className="text-gray-700 mb-4">
            Hola {firstName} {lastName},
          </Text>
          <Text className="text-gray-700 mb-4">
            Gracias por registrarte en Expenses App. Para comenzar a gestionar
            tus gastos, por favor confirma tu correo electrónico haciendo clic
            en el siguiente botón:
          </Text>
          <Section className="text-center mb-8">
            <Button
              className="bg-[#0ba31f] px-5 py-3 rounded text-white font-semibold no-underline"
              href={`https://expenses-app/confirm-email?token=${token}`}
            >
              Confirmar Cuenta
            </Button>
          </Section>
          <Text className="text-gray-700 mb-4 text-center">
            Si el botón no funciona, copia y pega el siguiente enlace en tu
            navegador:
          </Text>
          <Text className="text-gray-700 mb-4 text-center">
            {`https://expenses-app/confirm-email?token=${token}`}
          </Text>
          <Hr className="border-gray-300 my-4" />
          <Text className="text-sm text-gray-600 text-center">
            Has recibido este correo porque te registraste en Expenses App con
            el correo {userEmail}. Si no has creado esta cuenta, puedes ignorar
            este mensaje.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ConfirmationEmail;
