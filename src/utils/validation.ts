export const emailValidation = {
    required: 'Email is required',
    pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
    },
};
export const passwordValidtion = {
    required: 'A password is required—security first!',
    minLength: {
        value: 6,
        message: 'Make it at least 6 characters—short ',
    },
    validate: (value: string) => {
        const hasLetter = /[a-zA-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        return (
            (hasLetter && hasNumber && hasSpecial) ||
            "Use at least one letter, number, and symbol!"
        );
    },
};
export const phoneValidation = {
    required: 'Phone number is required',
    pattern: {
        value: /^[+]?\d{10,15}$/,
        message: 'Enter a valid phone number (10–15 digits, optional + at start)',
    },
};

export const nameValidation = {
    required: 'Full name is required',
    minLength: {
        value: 3,
        message: 'Name must be at least 3 characters long',
    },
    pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Name should only contain letters and spaces',
    },
};