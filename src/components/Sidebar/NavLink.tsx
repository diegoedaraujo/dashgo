import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; //usado quando é enviado a referência do componente
  children: string;
  href: string;
}
export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  //passHref: passa a propriedade para o filho quando não tem ancora
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignContent="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
