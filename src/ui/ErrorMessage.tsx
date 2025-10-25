// ErrorMessage.tsx
import { useFormContext } from 'react-hook-form';

export default function ErrorMessage({ name }: { name: string }) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return error ? <p className="text-red-500 text-sm mt-1">{error}</p> : null;
}
