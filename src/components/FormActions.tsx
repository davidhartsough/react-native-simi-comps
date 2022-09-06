import React from "react";

import TextButton from "./TextButton";
import View from "./View";

export default function FormActions({
  cancel,
  submit,
  submitText,
  submitDisabled = false,
}: {
  cancel: () => void;
  submit: () => void;
  submitText: string;
  submitDisabled?: boolean;
}) {
  return (
    <View row separate marginVertical={8}>
      <TextButton onPress={cancel} text="Cancel" marginRight={4} />
      <TextButton
        type="primary"
        onPress={submit}
        text={submitText}
        disabled={submitDisabled}
        marginLeft={4}
      />
    </View>
  );
}
