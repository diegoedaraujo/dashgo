import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diego Araújo</Text>
          <Text color="gray.300" fontSize="small">
            diegoedaraujo@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Diego Araújo"
        src="https://github.com/diegoedaraujo.png"
      ></Avatar>
    </Flex>
  );
}
