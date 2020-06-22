export function formatApiErrors(errors) {
  let formattedErrors = [];
  for (const [key, value] of Object.entries(errors)) {
    var errorMessages = value.map(item => key + " " + item);
    formattedErrors.push(...errorMessages);
  }
  return formattedErrors;
}
