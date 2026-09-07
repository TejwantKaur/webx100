admins can sign up; create courses;
users can sign up; view and purchase courses

# admin route
- POST /admin/signup
  => creates new admin account
  => Input body : { username: 'admin', password: 'pass' }
  => Output : { message: 'admin created successfully' }

<!-- {
  "username": "tejwant@gmail.com",
  "password": "123"
} -->

<!-- 1 Define schema; db/index.js -->
<!-- course desc: -->

- POST /admin/courses
  => creates new Course
  Input: Headers: { username: 'user', password: 'pass' },
         Body: {title: 'title', 
                desc: '..', 
                price: '..', 
                img_link: '..'}
  Output: { msge: "Course created", and // courseId: 'new courseId'}

<!-- {
  "title": "full stack dev",
  "description": "100xdevops",
  "imageLink": "https://google.com/cat.png",
  "price": 5999  
} -->

<!-- "price": 5667, trailing comma not allowed while sending -->