# Shoes Shop IL 🥿👟

Shoes Shop IL is a React-based e-commerce web application for showcasing, managing, and shopping for shoes. It includes features such as user authentication, role-based access (admin and user), shoe listing, adding new shoes, and detailed shoe descriptions.

## Features 🌟

- **User Authentication**: Sign up, log in, and log out functionality with role-based access.
- **Admin Features**:
  - Add new shoes.
  - Remove existing shoes.
- **Shoe Listing**:
  - Browse all available shoes with their details.
  - Mark shoes on sale.
- **Detailed Descriptions**: View detailed information for each shoe.
- **Responsive Design**: Fully responsive layout for desktop and mobile.
- **Persistent Data**: Shoes and users are stored locally or through MockAPI for backend simulation.

## Technologies Used 🛠️

- **Frontend**:
  - React.js
  - React Router
  - CSS Modules for styling
- **Backend**:
  - MockAPI for simulating backend operations
- **State Management**:
  - Context API
  - Custom Hooks (`useAuth`, `useShoes`)
- **Local Storage**:
  - User authentication and shoe data are persisted in `localStorage`.

## Installation 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shoes-shop-il.git
   cd shoes-shop-il
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage 🧑‍💻

### For Users:

1. **Sign Up or Log In**: Create an account or log in with existing credentials.
2. **Browse Shoes**: View all the available shoes and their details.
3. **Admin Access**:
   - If logged in as an admin, you can add new shoes or remove existing ones.

### For Admin:

1. Add new shoes using the "Add Shoes" button.
2. Remove shoes directly from the listing.

## Project Structure 📂

```
src/
├── components/
│   ├── AppHeader.jsx
│   ├── ShoesList.jsx
│   ├── ShoePreview.jsx
│   ├── LoginPage.jsx
│   ├── AddShoe.jsx
│   └── ShoesDescription.jsx
├── Context/
│   ├── ShoesContext.jsx
├── hooks/
│   ├── useAuth.js
├── assets/
│   ├── main.css
│   └── logo.png
└── App.jsx
```

## API Endpoints 🌐

### MockAPI

- **Base URL**: `https://673dae2e0118dbfe8608492a.mockapi.io/shoes`
- **Endpoints**:
  - `GET /shoes`: Fetch all shoes.
  - `POST /shoes`: Add a new shoe.
  - `DELETE /shoes/:id`: Remove a shoe.

## Future Enhancements ✨

- Add search and filter functionality.
- Integrate real backend services (e.g., Firebase, Node.js).
- Implement payment gateway for purchases.
- Add user profiles with order history.

## Contributors 🙌

- **[Your Name](https://github.com/your-username)** - Developer

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Screenshots 📸

### Home Page

![Home Page](https://res.cloudinary.com/dpixrsdwh/image/upload/v1732460381/1_pndosa.png)

### Shoes List

![Shoes List](https://res.cloudinary.com/dpixrsdwh/image/upload/v1732460380/2_wsdrwg.png)

### shoe info

![Shoe info](https://res.cloudinary.com/dpixrsdwh/image/upload/v1732460380/3_fcduyh.png)

---

Enjoy using **Shoes Shop IL**! 🎉
