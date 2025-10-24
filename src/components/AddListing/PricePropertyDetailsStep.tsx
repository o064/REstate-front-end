import { useFormContext } from 'react-hook-form';
import { bathroomsOptions, bedroomsOptions } from '../../constants/options';
import Grid from '../../ui/Grid';
import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Option from '../../ui/Option';
import Select from '../../ui/Select';
import Step from './Step';
import { priceValidation, sizeValidation } from '../../utils/validation';

function PricePropertyDetailsStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Step title="Price & Property Details">
      {/* price */}
      <InputField id="price" label="price *">
        <Input
          id="price"
          type="number"
          placeholder="enter price"
          {...register('price', priceValidation)}
        />
      </InputField>
      <Grid className="grid-cols-2 gap-6">
        {/* bedrooms */}
        <InputField id="bedrooms" label="Bedrooms *">
          <Select {...register('bedrooms', { required: 'Please select number of bedrooms' })}>
            {bedroomsOptions.map((opt) => (
              <Option label={opt.label} value={opt.value} key={opt.value} />
            ))}
          </Select>
        </InputField>
        {/* Bathrooms */}
        <InputField id="bathrooms" label="Bathrooms *">
          <Select {...register('bathrooms', { required: 'Please select number of bathrooms' })}>
            {bathroomsOptions.map((opt) => (
              <Option label={opt.label} value={opt.value} key={opt.value} />
            ))}
          </Select>
        </InputField>
      </Grid>
      {/* size */}
      <InputField id="square" label="size *">
        <Input
          id="square"
          type="number"
          placeholder="enter size"
          {...register('square', sizeValidation)}
        />
      </InputField>
    </Step>
  );
}

export default PricePropertyDetailsStep;
