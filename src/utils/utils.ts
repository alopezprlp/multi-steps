import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validatePhoneNumber = (phoneNumber: string) => {
  const res = /^(\+1)?[- ]?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return res.test(String(phoneNumber).toLowerCase());
};

export const capitalize = (text: string) =>
  text
    .split(' ')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
