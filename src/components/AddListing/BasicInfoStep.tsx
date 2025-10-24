import { useState } from 'react';
import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Step from './Step';
import OptionSelector from '../../ui/OptionSelector';
import Select from '../../ui/Select';
import Option from '../../ui/Option';
import { PropertyPurposeOptions, PropertyTypeOptions } from '../../constants/options';

function BasicInfoStep() {
  const [listType, setListingType] = useState('sale');
  return (
    <Step title="basic information">
      {/* property name */}
      <InputField id="name" label="Property Name *">
        <Input />
      </InputField>
      {/*  Listing Type */}
      <OptionSelector
        onChange={setListingType}
        value={listType}
        options={PropertyTypeOptions}
        title="Listing Type *"
      />
      {/* Property purpose  */}
      <InputField id="purpose" label="Property Purpose *">
        <Select>
          {PropertyPurposeOptions.map((opt) => (
            <Option label={opt.label} value={opt.value} key={opt.value} />
          ))}
        </Select>
      </InputField>
    </Step>
  );
}

export default BasicInfoStep;
