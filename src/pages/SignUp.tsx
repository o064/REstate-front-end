import { Building2, Mail, Phone } from 'lucide-react';
import InputField from '../components/Form/InputField';
import Input from '../ui/Input';
import PasswordInput from '../components/Form/PasswordInput';
import AuthActions from '../components/Form/AuthActions';
import UserTypeSelector from '../components/Form/UserTypeSelector';
import type { UserType } from '../types/UserType';
import { Link } from 'react-router';
import FormHeader from '../components/Form/FormHeader';
import { Controller, useForm } from 'react-hook-form';
import {
  emailValidation,
  nameValidation,
  passwordValidtion,
  phoneValidation,
} from '../utils/validation';

type signUpInputs = {
  email: string;
  password: string;
  name: string;
  phone: string;
  type: UserType;
};
function Signup() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signUpInputs>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      phone: '',
      type: 'buyer',
    },
    mode: 'onSubmit',
  });

  function onSubmit(data: signUpInputs) {
    console.log(data);
    // addUserToDatabase(data);
    // showSuccessMessage();
    // redirectToHomePage();
  }
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-blue-100 text-black p-6 ">
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
          <Controller
            name="type"
            control={control}
            rules={{ required: 'Please select a user type' }}
            render={({ field }) => (
              <UserTypeSelector value={field.value} onChange={field.onChange} />
            )}
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 font-medium">{errors.email.message}</p>
            )}
          </InputField>
          {/* password */}
          <InputField id="password" label="Password">
            <PasswordInput id="password" {...register('password', passwordValidtion)} />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 font-medium">{errors.password.message}</p>
            )}
          </InputField>
          {/* full Name */}
          <InputField id="name" label="Full Name">
            <Input
              type="text"
              id="name"
              placeholder="Your Full Name"
              {...register('name', nameValidation)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 font-medium">{errors.name.message}</p>
            )}
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
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 font-medium">{errors.phone.message}</p>
            )}
          </InputField>
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
    </main>
  );
}

export default Signup;
