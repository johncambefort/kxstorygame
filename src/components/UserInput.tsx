import { Input, Button, HStack } from "@chakra-ui/react";
import { PropsWithChildren, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";

interface Props {
  setStory: (userInput: string) => void;
}

interface UserFormData {
  userInput: string;
}

export const UserInput: React.FC<PropsWithChildren<Props>> = ({ setStory }) => {
  const intl = useIntl();
  const { register, handleSubmit, watch } = useForm<UserFormData>();
  const formValue = watch().userInput ?? "";
  const onSubmit = (data: UserFormData) => {
    setStory(data.userInput);
  };

  const userInputPlaceholder = useMemo(() => {
    const userInputText = intl.formatMessage({
      id: "STORYWRITER.USERINPUT.PLACEHOLDER",
      defaultMessage: "Add a line to the story!",
    });
    const charsLimitText = intl.formatMessage({
      id: "STORYWRITER.USERINPUT.CHARS_LIMIT",
      defaultMessage: "(160 chars max)",
    });
    return `${userInputText} ${charsLimitText}`;
  }, [intl]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <Input
          aria-label="Add a line to the story!"
          placeholder={userInputPlaceholder}
          {...register("userInput")}
        />
        <Button type="submit" isDisabled={formValue.length === 0}>
          Submit
        </Button>
      </HStack>
    </form>
  );
};
