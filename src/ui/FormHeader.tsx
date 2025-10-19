import { Building2 } from 'lucide-react';

function FormHeader() {
  return (
    <div className="mb-8">
      <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
        <Building2 className="h-8 w-8" />
      </div>
      <h1 className="text-3xl font-extrabold text-gray-900">First Estate</h1>
      <p className="text-gray-600 mt-2 text-base">Welcome back! Sign in to continue.</p>
    </div>
  );
}

export default FormHeader;
