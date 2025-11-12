import { Building2, Loader, Mail, Phone, User } from 'lucide-react';
import InputField from '../ui/InputField';
import Input from '../ui/Input';
import PasswordInput from '../components/auth/PasswordInput';
import AuthActions from '../components/auth/AuthActions';
import { Link, useNavigate } from 'react-router';
import FormHeader from '../components/auth/FormHeader';
import { useForm } from 'react-hook-form';
import {
  agencyNameValidation,
  emailValidation,
  experienceYearsValidation,
  nameValidation,
  passwordValidtion,
  phoneValidation,
  taxIdentificationNumberValidation,
} from '../utils/validation';
import type { RegitserForm } from '../types/User';
import { ControlledSelector } from '../ui/ControllerSelector';
import ErrorMessage from '../ui/ErrorMessage';
import Container from '../ui/Continer';
import Grid from '../ui/Grid';
import { useRegister } from '../hooks/useAuth';

function Signup() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegitserForm>({
    defaultValues: {
      email: '',
      password: '',
      userName: '',
      phone: '',
      roleDiscriminator: 1,
      agencyName: '',
      taxIdentificationNumber: 0,
      experienceYears: 0,
    },
    mode: 'onSubmit',
  });
  const { mutate: registerUser, error, isError, isPending } = useRegister();
  const navigate = useNavigate();
  const role = watch('roleDiscriminator');
  async function onSubmit(formData: RegitserForm) {
    console.log(formData);
    registerUser(formData, {
      onSuccess: () => {
        navigate('/');
      },
    });
  }
  // useHomePageRedirect();
  if (isPending) return <Loader />;
  if (isError) return <p>Error : {error.message}</p>;
  return (
    <Container className="flex items-center justify-center bg-blue-100 text-black p-6 ">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        {/* Header */}
        <FormHeader
          Hcolor={'gray-900'}
          Pcolor={'gray-600'}
          Hchildren={'First Estate'}
          Pchildren={'Welcome back! Sign in to continue.'}
          icon={<Building2 className="h-8 w-8" />}
        />
        {/* Sign in Form */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* select Type */}
          <ControlledSelector
            name="roleDiscriminator"
            control={control}
            rules={{ required: 'Please select a user type' }}
            title="I am signing up as a:"
            className="border-b border-gray-300"
            options={[
              { value: 1, label: 'agent', icon: <Building2 /> },
              // { value: 2, label: 'broker', icon: <Building2 /> },
              { value: 3, label: 'customer', icon: <User /> },
            ]}
          />
          {/* email */}
          <InputField id="email" label="Email address" icon={<Mail />}>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10"
              {...register('email', emailValidation)}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </InputField>
          {/* password */}
          <InputField id="password" label="Password">
            <PasswordInput id="password" {...register('password', passwordValidtion)} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputField>
          {/* full Name */}
          <InputField id="name" label="Full Name">
            <Input
              type="text"
              id="name"
              placeholder="Your Full Name"
              {...register('userName', nameValidation)}
            />

            {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
          </InputField>
          {/* phone number */}
          <InputField id="phone" label="Phone Number" icon={<Phone />}>
            <Input
              type="tel"
              id="phone"
              placeholder="(555) 555 - 555"
              className="pl-10"
              {...register('phone', phoneValidation)}
            />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </InputField>

          {/* AgencyName */}
          {role == 1 && (
            <>
              <InputField id="agencyName" label="agencyName">
                <Input
                  type="text"
                  id="agencyName"
                  placeholder="Your Agency Name"
                  {...register('agencyName', agencyNameValidation)}
                />
                {errors.agencyName && <ErrorMessage>{errors.agencyName.message}</ErrorMessage>}
              </InputField>
              {/* Experience Information */}
              <Grid className="grid grid-cols-2 gap-4">
                {/* Tax Identification Number */}
                <InputField id="taxIdentificationNumber" label="Tax Identification Number">
                  <Input
                    type="text"
                    id="taxIdentificationNumber"
                    placeholder="Enter your tax identification number"
                    {...register('taxIdentificationNumber', taxIdentificationNumberValidation)}
                  />
                  {errors.taxIdentificationNumber && (
                    <ErrorMessage>{errors.taxIdentificationNumber.message}</ErrorMessage>
                  )}
                </InputField>
                {/* Experience Years */}
                <InputField id="experienceYears" label="Years of Experience">
                  <Input
                    type="number"
                    id="experienceYears"
                    placeholder="Enter total years of experience"
                    {...register('experienceYears', experienceYearsValidation)}
                  />
                  {errors.experienceYears && (
                    <ErrorMessage>{errors.experienceYears.message}</ErrorMessage>
                  )}
                </InputField>
              </Grid>
            </>
          )}

          {/* actions  */}
          <AuthActions actionFor="create account" />
        </form>
        {/* footer */}
        <p className="text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default Signup;
