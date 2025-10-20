import { Building2, Mail, Phone } from 'lucide-react';
import InputField from '../ui/InputField';
import Input from '../ui/Input';
import PasswordInput from '../ui/PasswordInput';
import AuthActions from '../ui/AuthActions';
import { useState } from 'react';
import UserTypeSelector from '../ui/UserTypeSelector';
import type { UserType } from '../types/UserType';
import { Link } from 'react-router';
import Header from '../ui/Header';

function SignUp() {
  const [userType, setUserType] = useState<UserType>('buyer');
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-blue-100 text-black p-6 ">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        {/* Header */}
        <Header Hcolor={'gray-900'} Pcolor={'gray-600'} Hchildren={'First Estate'} Pchildren={'Welcome back! Sign in to continue.'} icon={<Building2 className="h-8 w-8"/> }/>
        {/* Sign in Form */}
        <form className="space-y-5">
          {/* select Type */}
          <UserTypeSelector value={userType} onChange={setUserType} />
          {/* email */}
          <InputField id="email" label="Email address" icon={<Mail className='absolute left-3 top-4' />}>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="pl-10"
            />
          </InputField>
          {/* password */}
          <InputField id="password" label="Password">
            <PasswordInput id="password" name="password" />
          </InputField>
          {/* full Name */}
          <InputField id="name" label="Full Name">
            <Input type="text" id="name" name="name" placeholder="Your Full Name" />
          </InputField>
          {/* phone number */}
          <InputField id="phone" label="Phone Number" icon={<Phone />}>
            <Input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(555) 555 - 555"
              className="pl-10"
            />
          </InputField>
          {/* actions  */}
          <AuthActions />
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

export default SignUp;
