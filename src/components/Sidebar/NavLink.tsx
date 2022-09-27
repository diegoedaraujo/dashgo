import {
  Text,
  Link,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; //usado quando é enviado a referência do componente
  children: string;
}
export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
