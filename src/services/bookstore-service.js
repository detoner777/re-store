export default class BookstoreService {
  
  data = [
    
    { id: 1, 
      title: 'DarkElph',
      author: 'Robert S',
      price: 19.99,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51pKVdnAKTL._SX327_BO1,204,203,200_.jpg"},
    
    { id: 2, 
      title: 'Lorf of the rings',
      author: 'J.R. Tolkien',
      price: 21.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51bJhsl5VmL.jpg'
       }
 ];
  
  getBooks() {
        return new Promise((resolve, reject) => {
          setTimeout(() =>{
          resolve(this.data)
            reject(new Error('Something bad happened'));
          } ,700);
        });
    }
}