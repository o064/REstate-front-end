import Grid from '../../ui/Grid';
import Input from '../../ui/Input';
import InputField from '../../ui/InputField';
import Option from '../../ui/Option';
import Select from '../../ui/Select';
import Step from './Step';
const bedroomsOptions = [
  { value: 0, label: 'studio' },
  { value: 1, label: '1 bedrooms' },
  { value: 2, label: '2 bedrooms' },
  { value: 3, label: '3 bedrooms' },
  { value: 4, label: '4 bedrooms' },
  { value: 5, label: '5+ bedrooms' },
];
const bathroomsOptions = [
  { value: 1, label: '1 bathroom' },
  { value: 2, label: '1 bedrooms' },
  { value: 3, label: '3 bedrooms' },
  { value: 4, label: '4+ bedrooms' },
];
const unitSizeOptions = [{ value: 'm', label: 'square meter' }];

function PricePropertyDetailsStep() {
  return (
    <Step title="Price & Property Details">
      {/* price */}
      <InputField id="price" label="price *">
        <Input id="price" type="number" placeholder="enter price" />
      </InputField>
      <Grid className="grid-cols-2 gap-6">
        {/* bedrooms */}
        <InputField id="bedrooms" label="Bedrooms *">
          <Select>
            {bedroomsOptions.map((opt) => (
              <Option label={opt.label} value={opt.value} key={opt.value} />
            ))}
          </Select>
        </InputField>
        {/* Bathrooms */}
        <InputField id="bathrooms" label="Bathrooms *">
          <Select>
            {bathroomsOptions.map((opt) => (
              <Option label={opt.label} value={opt.value} key={opt.value} />
            ))}
          </Select>
        </InputField>
        {/* size */}
        <InputField id="square" label="size *">
          <Input id="square" type="number" placeholder="enter size" />
        </InputField>
        {/* Unit */}
        <InputField id="unit" label="unit *">
          <Select>
            {unitSizeOptions.map((opt) => (
              <Option label={opt.label} value={opt.value} key={opt.value} />
            ))}
          </Select>
        </InputField>
      </Grid>
    </Step>
  );
}

export default PricePropertyDetailsStep;
