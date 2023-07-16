import { useToast } from "@chakra-ui/react";
import { useIntl } from "react-intl";

export const useCustomToast = () => {
  const toast = useToast();
  const intl = useIntl();

  const successToast = (defaultMessage: string, id: string) =>
    toast({
      title: intl.formatMessage({ id, defaultMessage }),
      status: "success",
      variant: "top-accent",
      position: "top-right",
      isClosable: true,
      duration: 3000,
    });

  const errorToast = (defaultMessage: string, id: string) =>
    toast({
      title: intl.formatMessage({ id, defaultMessage }),
      status: "error",
      variant: "top-accent",
      position: "top-right",
      isClosable: true,
      duration: 3000,
    });

  return { successToast, errorToast };
};
