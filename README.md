This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🏗️ Next.js Blog Dashboard  

A full-featured blog management system built with **Next.js**, **Tailwind CSS**, **Ant Design**, and a JSON-based API.  
Users can **login**, **view blogs**, **create, , and delete posts**, and manage their profiles.

## 🚀 Features  
✅ User Authentication (Login & Session Handling)  
✅ Blog CRUD Operations (Create, Read, Update, Delete)  
✅ Dynamic Sidebar with User Data  
✅ API Routes to Manage Blog Data  
✅ Pagination, Filtering, and Sorting  
✅ Responsive UI with Ant Design & Tailwind CSS  

---

## 📂 **Project Structure**
📦 nextjs-blog-dashboard 
├── 📂 src
│ ├── 📂 app 
│ │ ├── 📂 api 
│ │ │ ├── 📂 blogs 
│ │ │ │ ├── 📄 route.ts # API for blogs (GET, POST, DELETE, PUT) 
│ │ │ ├── 📂 auth 
│ │ │ │ ├── 📄 login.ts # Login API (Checks user credentials) 
│ │ ├── 📂 users │ │ │ ├── 📂 [userId] 
│ │ │ │ ├── 📂 posts 
│ │ │ │ │ ├── 📄 page.tsx # User's blog posts 
│ │ │ │ ├── 📄 page.tsx # User profile page 
│ ├── 📂 components 
│ │ ├── 📄 Sidebar.tsx # Sidebar component 
│ │ ├── 📄 Header.tsx # Header with Logout Button 
│ ├── 📂 data 
│ │ ├── 📄 users.json # Sample users data 
│ │ ├── 📄 blogs.json # Sample blogs data 
│ ├── 📂 styles 
│ │ ├── 📄 globals.css # Global styles 
├── 📄 .env.local # Environment variables (API Base URL) 
├── 📄 package.json # Dependencies and scripts └── 📄 README.md # This file

yaml



---

## 🛠️ **Installation & Setup**
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/yourusername/nextjs-blog-dashboard.git
cd nextjs-blog-dashboard
2️⃣ Install Dependencies
bash


npm install
# OR
yarn install
3️⃣ Set Up Environment Variables
Create a .env.local file and add:

env


NEXT_PUBLIC_API_URL=http://localhost:6000/api
4️⃣ Run the Development Server
bash


npm run dev
# OR
yarn dev
Your app will be live at http://localhost:6000 🚀.

🔑 Authentication & Session Handling
Login API: /api/auth/login
User data stored in localStorage
Fetching user session in Sidebar:
tsx


useEffect(() => {
  const user = localStorage.getItem("user");
  if (user) {
    const userData = JSON.parse(user);
    setUserId(userData.id);
  }
}, []);
📡 API Routes
Method	Endpoint	Description
POST	/api/auth/login	Authenticate user login
GET	/api/blogs	Fetch all blogs
GET	/api/blogs/[id]	Fetch a single blog by ID
POST	/api/blogs	Create a new blog
PUT	/api/blogs/[id]	Update a blog
DELETE	/api/blogs/[id]	Delete a blog
🎨 Styling & UI Components
Ant Design for UI elements: npm install antd
Tailwind CSS for layout styling
Layouts:
<Sidebar /> (Navigation)
<Header /> (Logout & Profile)
<Content /> (Dynamic Page Content)
🛑 Troubleshooting
❌ localStorage not saving data?
✅ Ensure you are setting user data only in the browser (use useEffect).

❌ API route returning 404?
✅ Make sure blogs.json exists in /data/ and that the API is correctly defined in /api/blogs/[id].ts.

❌ CSS issues with layout?
✅ Check if Tailwind is properly configured in tailwind.config.js.

🤝 Contributing
Fork the repository
Create a feature branch: git checkout -b feature-branch
Commit changes: git commit -m "Add new feature"
Push & create a PR: git push origin feature-branch
📜 License
This project is open-source and available under the MIT License.

markdown



---

### **📌 Summary of the README File**
- ✅ **Installation & Setup Instructions**  
- ✅ **Project Structure Overview**  
- ✅ **Authentication & Session Handling**  
- ✅ **API Endpoints List**  
- ✅ **UI & Styling Details**  
- ✅ **Troubleshooting Section**  
- ✅ **Contributing Guide**  

This will make it easy for **developers** to set up, use, and contribute to the project! 🚀
## Getting Started

First, run the development server:

```bash
npm run dev --turbopack
 
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:6000](http://localhost:6000) with your browser to see the result.

You can start ing the page by modifying `app/page.tsx`. The page auto-updates as you  the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
