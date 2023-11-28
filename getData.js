// getData.js dosyası
import axios from 'axios';

async function getData(userId) {
  try {
    // Kullanıcı bilgilerini çekme
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = userResponse.data;
    
    // Kullanıcı post'larını çekme
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: { userId: userId }
    });
    const posts = postsResponse.data;
    
    // Kullanıcı bilgileri ile post'ları birleştirme
    const combinedData = {
      ...user,
      posts: posts
    };

    return combinedData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// Fonksiyonu default olarak dışa aktarma
export default getData;
