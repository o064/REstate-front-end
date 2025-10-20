import { Mail } from 'lucide-react';
import FormHeader from '../ui/FormHeader';
import InputField from '../ui/InputField';
import Input from '../ui/Input';
import PasswordInput from '../ui/PasswordInput';
import AuthActions from '../ui/AuthActions';

function Login() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-blue-100 text-black p-6 ">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        {/* Header */}
        <FormHeader />
        {/* Sign in Form */}
        <form className="space-y-5">
          {/* email */}
          <InputField id="email" label="Email address" icon={<Mail />}>
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
          {/* actions  */}
          <AuthActions actionFor="Sign In" />
        </form>
        {/* footer */}
        <p className="text-gray-600 text-sm mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}

export default Login;
