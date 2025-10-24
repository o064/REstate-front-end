import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Step from './Step';

function BasicInfoStep() {
  return (
    <Step title="basic information">
      {/* title */}
      <InputField id="name" label="property name">
        <Input />
      </InputField>
    </Step>
  );
}

export default BasicInfoStep;
