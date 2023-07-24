import { Input, Button, HStack } from "@chakra-ui/react";
import { PropsWithChildren, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { SENTENCE_MAX_CHARACTER_LENGTH } from "../config";
import { useCustomToast } from "../utils/useCustomToasts";

interface Props {
  setStory: (userInput: string) => void;
}

interface UserFormData {
  userInput: string;
}

export const UserInput: React.FC<PropsWithChildren<Props>> = ({ setStory }) => {
  const intl = useIntl();
  const { successToast } = useCustomToast();
  const { register, handleSubmit, watch } = useForm<UserFormData>();
  const formValue = watch().userInput ?? "";

  const onSubmit = (data: UserFormData) => {
    setStory(data.userInput); // TODO update story in context, don't use setter via prop
    successToast(
      "Your line was added to the story!",
      "STORYWRITER.ADD_LINE_SUCCESS"
    );
  };

  const userInputText = intl.formatMessage({
    id: "STORYWRITER.USERINPUT.PLACEHOLDER",
    defaultMessage: "Add a line to the story!",
  });
  const charsLimitText = intl.formatMessage({
    id: "STORYWRITER.USERINPUT.CHARS_LIMIT",
    defaultMessage: "(160 chars max)",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <Input
          type="text"
          size="sm"
          aria-label={userInputText}
          placeholder={`${userInputText} ${charsLimitText}`}
          maxLength={SENTENCE_MAX_CHARACTER_LENGTH}
          {...register("userInput")}
        />
        <Button type="submit" isDisabled={formValue.length === 0}>
          Submit
        </Button>
      </HStack>
    </form>
  );
};
