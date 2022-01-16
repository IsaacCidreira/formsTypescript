export default function formatPhone(phoneNumber: string) {
  return phoneNumber.replace(/(\d{5})(\d{4})/, '$1-$2');
}

export function formatDDD(phoneNumber: string) {
  return phoneNumber.replace(/^(\d{2})/, '($1) ');
}
export function formatArea(phoneNumber: string) {
  return phoneNumber.replace(/^(\d{2})/, '+ $1 ');
}
