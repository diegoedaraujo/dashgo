import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";

type SigInFormData = {
  email: string;
  password: string;
};

export default function SigIn() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SigInFormData> = (values) => {
    console.log(values);
  };
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email", {
              required: "Email obrigatório",
            })}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
