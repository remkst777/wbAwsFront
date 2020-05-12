import { SHOW_TOAST, REMOVE_TOAST } from './constants';

export function showToast({ message, toastType, key }) {
  return {
    type: SHOW_TOAST,
    message,
    toastType,
    key,
  };
}

export function removeToast(key) {
  return {
    type: REMOVE_TOAST,
    key,
  };
}
