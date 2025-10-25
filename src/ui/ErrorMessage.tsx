import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type ErrorType = string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;

function ErrorMessage({ children }: { children: ErrorType }) {
  if (!children) return null;

  let message: string | undefined;

  if (typeof children === 'string') {
    message = children;
  } else if (typeof children === 'object' && 'message' in children) {
    message = children.message as string | undefined;
  }

  return message ? <p className="text-red-500 text-sm mt-1 font-medium">{message}</p> : null;
}

export default ErrorMessage;
