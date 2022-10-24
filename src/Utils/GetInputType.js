import TextInput from "../elements/TextInput";
import TextArea from "../elements/TextArea";
import SelectInput from "../elements/SelectInput";
import DateInput from "../elements/DateInput";
import RadioButton from "../elements/RadioButton";

export const GetInputType = (data) => {
  let Component = <></>;
  let question = data.question
  switch (data.type) {
    case "text":
      Component = <TextInput name={data.name} value={data.value}/>;
      break;
    case "textarea":
      Component = <TextArea name={data.name} value={data.value}/>;
      break;
    case "select":
      Component = <SelectInput name={data.name} options={data.options} value={data.value}/>;
      break;
    case "date":
      Component = <DateInput name={data.name} value={data.value}/>;
      break;

    case "radio":
      Component = <RadioButton name={data.name} options={data.options} value={data.value}/>;
      break;
  }
  return Component;
};
