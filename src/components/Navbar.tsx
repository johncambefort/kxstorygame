import { Box, Flex, Heading } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <Flex>
      <Box height="4rem">
        <Heading as={Link} to={"/"}>
          <FormattedMessage
            id="MAIN.APP_TITLE"
            defaultMessage="KX Story Game"
          />
        </Heading>
      </Box>
    </Flex>
  );
};
