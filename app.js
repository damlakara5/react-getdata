// app.js dosyası
import getData from './getData.js';

(async () => {
  try {
    const userData = await getData(1);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
})();
