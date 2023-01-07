export default function convertPhoneNumber(phone) {
  return phone.replace(/^8/, '+7').replace(/[\s()-]/g, '');
}
