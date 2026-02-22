process.env.UV_THREADPOOL_SIZE = 10;  // By default, the thread pool size is 4. We can increase it to 10 to allow more concurrent operations.

const crypto = require('node:crypto');

const os = require('node:os');
let start = Date.now();

console.log(os.cpus()) 
console.log(os.cpus().length)  //number of cpu cores 

crypto.pbkdf2('password-1', 'salt', 100000, 512, 'sha512', () => {
  console.log(`Time taken for password-1: ${Date.now() - start} ms`);
});

crypto.pbkdf2('password-2', 'salt', 100000, 512, 'sha512', () => {
  console.log(`Time taken for password-2: ${Date.now() - start} ms`);
});

crypto.pbkdf2('password-3', 'salt', 100000, 512, 'sha512', () => {
  console.log(`Time taken for password-3: ${Date.now() - start} ms`);
});

crypto.pbkdf2('password-4', 'salt', 100000, 512, 'sha512', () => {
  console.log(`Time taken for password-4: ${Date.now() - start} ms`);
}); 

crypto.pbkdf2('password-4', 'salt', 100000, 512, 'sha512', () => {
  console.log(`Time taken for password-4: ${Date.now() - start} ms`);
}); 