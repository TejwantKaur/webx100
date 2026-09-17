## react Routes
- npm install react-router-dom; 
- import BrowserRouter, Route, Routes
- 4 routes 
    - /signup
    - /signin
    - /dashboard
    - /send

- flowbite buttons tailwind css;

### tailwind
- npm install tailwindcss @tailwindcss/vite
- vite.config.js
    import tailwindcss from '@tailwindcss/vite'
    plugins: [ react(), tailwindcss(),] 

- App.css @import "tailwindcss";

### Signup
- 4 state variables for input boxes
- npm i axios
  - to make a post request; send all input data from form to axios.post(/signup) route
  - store the token recieved

## Dashboard;
- show all users; make sure donot show yourself;
- { useNavigate } from "" hook to navigate using onClick()
- react router dom; get access to query params;
- { useSearch params } from ""