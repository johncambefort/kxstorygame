import { Box, Flex, Heading } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export const Navbar: React.FC = () => {
  return (
    <Flex>
      <Box height="4rem">
        <Heading>
          <FormattedMessage
            id="MAIN.APP_TITLE"
            defaultMessage="KX Story Game"
          />
        </Heading>
      </Box>
    </Flex>
  );
};
