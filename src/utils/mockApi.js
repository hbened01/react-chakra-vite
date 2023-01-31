export const userLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'humbertobenedito@gmail.com' && password === '1234') {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
};