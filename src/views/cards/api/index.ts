export const fetchCards = () => {
  return fetch('/api/payment-method')
    .then((res) => res.json());
}

export const createCard = (name: string) => {
  return fetch('/api/payment-method', {
    method: 'POST',
    headers: {
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
    }),
  }).then(res => res.json())
};
