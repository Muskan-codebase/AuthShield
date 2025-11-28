<h2>🛡AuthShield — User Authentication & Security System</h2>

## Table of Contents
1. [Introduction](#introduction)
2. [Images](#images)
3. [Features](#🚀Features)
4. [Security Implementations](#security-implementations)
5. [Tech Stack](#tech-stack)
6. [Installation](#installation)
7. [API Endpoints](#api-endpoints)
8. [Folder Structure](#folder-structure)
9. [What I Learned](#what-i-learned)
10. [Future Enhancements](#future-enhancements)
11. [License](#license)


### Introduction
<p><b>AuthShield</b> is a full-stack User Authentication System built with <b>Node.js</b>, <b>Express.js</b>, <b>React.js</b>, and <b>MongoDB</b>, designed with a strong focus on security, reliability, and modern authentication practices.</p>

<p>It includes secure <b>JWT-based authentication</b>, <b>Google OAuth 2.0 integration</b>, <b>OTP-driven password reset using Nodemailer</b>, and <b>Cloudinary-powered profile uploads</b>, providing a complete and scalable user management system.</p>

<p>AuthShield is reinforced with multiple layers of protection such as <b>rate limiting</b>, <b>input sanitization</b>, <b>XSS prevention</b>, <b>brute-force attack mitigation</b>, and <b>secure OTP-based password reset flows</b> making it suitable for real-world applications.</p>

<hr>

## Images

<h3>Home Page</h3>

![home page](https://github.com/Muskan-codebase/AuthShield/blob/498d4ffc16c6f99185559b8a1161595f5fee32e1/frontend/src/assets/home.png)

<h3>Signup Page</h3>

![signup page](https://github.com/Muskan-codebase/AuthShield/blob/6a9aeac4aa278582f2d7bcdaef5ebeeb1872ecc8/frontend/src/assets/signup.png)

<h3>Login Page</h3>

![login page](https://github.com/Muskan-codebase/AuthShield/blob/7a45bb30e5135cb278490796df05c96db0c62f13/frontend/src/assets/login.png)

## 🚀 Features
<h3>🔑 Authentication</h3>
<ol>
  <li>User Signup and Login implemented with JWT (JSON Web Token) authentication.</li>
  <li>Passwords securely hashed using bcrypt before storing in the database.</li>
  <li>Protected routes enforced through authentication middleware for secure access.</li>
</ol>

<h3>📩 Password Reset (OTP)</h3>
<ol>
  <li>OTP emails sent securely using Nodemailer.</li>
  <li>Time-bound OTP generation with strict expiry validation.</li>
  <li>OTP verification required before allowing password reset.</li>
</ol>

<h3>🖼️ Profile Management</h3>
<ol>
  <li>Profile picture upload handled via Cloudinary storage.</li>
  <li>Secure, optimized image URLs stored and served from the cloud.</li>
  <li>Update user details including name and profile picture with validation.</li>
</ol>

<h3>🔐 OAuth Integration</h3>
<ol>
   <li>Google OAuth 2.0 implemented using the official Google OAuth Client Library for a secure and reliable authentication flow.</li>
  <li>Frontend sends an authorization code → Backend exchanges it for tokens → Verifies ID token → Creates or logs in the user.</li>
  <li>Fully custom OAuth flow implemented without Passport.js, providing complete control over user handling and token management.</li>
</ol>

## 🛡️ Security Implementations
<ol>
  <li><b>🔐 JWT Authentication & Authorization</b> – Ensures only verified users can access protected routes and sensitive operations.</li>
  <li><b>🧹 Input Sanitization</b> – Uses <code>sanitize-html</code> to prevent XSS, script injections, and malicious HTML payloads.</li>
  <li><b>⚡ Helmet</b> – Adds secure HTTP headers to protect against common web vulnerabilities and enforce safer browser behavior.</li>
  <li><b>🛑 Rate Limiting</b> – Applied across critical APIs (Signup, Login etc.) to prevent brute-force attacks, spam registrations, multiple failed login attemtps and API abuse.</li>
  <li><b>🔒 Password Hashing</b> – All user passwords are securely hashed using <code>bcrypt</code> before being stored in the database.</li>
  <li><b>🔑 Crypto-Based Token Generation & Expiry Validation</b> – Uses <code>crypto</code> module to generate tokens for OTP verification and password resets.</li>
</ol>

## 🛠 Tech Stack
<ul>
  <li><b>Frontend</b>: React.js, Tailwind CSS, Daisy UI.</li>
  <li><b>Backend</b>: Node.js, Express.js.</li>
  <li><b>Database</b>: MongoDB.</li>
  <li><b>Security</b>: bcrypt, express-rate-limit, sanitize-html, helmet.</li>
  <li><b>Other</b>: Cloudinary, Nodemailer, Google OAuth 2.0</li>
</ul>

<hr>

## API Endpoints
<h3>User Authentication</h3>

<h4>1. Signup</h4>
<p><b>Method</b>: POST</p>
<p><b>URL</b>: localhost:3000/api/signup</p>
<p><b>Request body</b></p>
<pre>
{
    "name": "John Doe",
    "email": "dummyuserjd1995@gmail.com",
    "password": "john12345",
    "confirmPassword": "john12345"
}
</pre>
<br>
<p><b>Response body:</b></p>
<pre>
{
    "message": "User signed up successfully",
    "newUser": {
        "name": "John Doe",
        "email": "dummyuserjd1995@gmail.com",
        "createdAt": "2025-11-27T07:07:32.058Z",
        "_id": "692808b78c95e4e069f4a1b9",
        "__v": 0
    },
    "token": generated_token
}</pre>

<h4>2. Login</h4>
<p><b>Method</b>: POST</p>
<p><b>URL</b>: localhost:3000/api/login</p>
<p><b>Request body</b></p>
<pre>
{
    "email": "dummyuserjd1995@gmail.com",
    "password": "john12345"
}
</pre>
<br>
<p><b>Response body:</b></p>
<pre>
{
    "message": "User logged in successfully",
    "user": {
        "_id": "692808b78c95e4e069f4a1b9",
        "name": "John Doe",
        "email": "dummyuserjd1995@gmail.com",
        "createdAt": "2025-11-27T07:07:32.058Z",
        "__v": 0
    },
    "token": generated_token
}
</pre>

<h4>3. Forgot Password (Send OTP via Email)</h4>
<p><b>Method</b>: POST</p>
<p><b>URL</b>: localhost:3000/api/forgotPassword</p>
<p><b>Request body</b></p>
<pre>
{
    "email": "dummyuserjd1995@gmail.com"
}
</pre>
<br>
<p><b>Response body:</b></p>
<pre>
{
    "message": "OTP sent. Check your email"
}
</pre>

<h4>4. Verify OTP</h4>
<p><b>Method</b>: POST</p>
<p><b>URL</b>: localhost:3000/api/verifyOTP</p>
<p><b>Request body</b></p>
<pre>
{
    "email": "dummyuserjd1995@gmail.com",
    "otp": "967385"
}
</pre>
<br>
<p><b>Response body:</b></p>
<pre>
{
    "message": "OTP Verified successfully!"
}
</pre>

<h4>4. Reset Password</h4>
<p><b>Method</b>: POST</p>
<p><b>URL</b>: localhost:3000/api/resetPassword</p>
<p><b>Request body</b></p>
<pre>
{
    "email": "dummyuserjd1995@gmail.com",
    "resetToken": < reset_Token >,
    "newPassword": "john@12345678910",
    "confirmNewPassword": "john@12345678910"
}
</pre>
<br>
<p><b>Response body:</b></p>
<pre>
{
    "message": "Password reset successfully",
    "user": {
        "_id": "69289cfc28067b1f6a56ac0b",
        "name": "John Doe",
        "email": "dummyuserjd1995@gmail.com",
        "createdAt": "2025-11-27T17:17:56.922Z",
        "__v": 0
    }
}
</pre>

<hr>
<h3>User Profile Management</h3>

<h4>1. User Profile</h4>
<p><b>Method</b>: GET</p>
<p><b>URL</b>: localhost:3000/api/getUserProfile</p>
<p><b>Authorization</b>: Bearer < generated_token ></p>
<p><b>Response body:</b></p>
<pre>
{
    "user": {
        "_id": "69289cfc28067b1f6a56ac0b",
        "name": "John Doe",
        "email": "dummyuserjd1995@gmail.com",
        "createdAt": "2025-11-27T17:17:56.922Z",
        "__v": 0
    }
}
</pre>

<h4>2. Profile Photo Upload</h4>
<p><b>Method</b>: PUT</p>
<p><b>URL</b>: localhost:3000/api/uploadImage</p>
<p><b>Authorization</b>: Bearer < generated_token ></p>
<p><b>Request body:</b></p>
<h4><b>form-data:</b></h4>
<p><b>key</b>: profilePicture [File] | <b>value</b>: img.jpg </p>
<p><b>Response body:</b></p>
<pre>
{
    "message": "Image uploaded successfully",
    "user": {
        "_id": "69289cfc28067b1f6a56ac0b",
        "name": "John Doe",
        "email": "dummyuserjd1995@gmail.com",
        "createdAt": "2025-11-27T17:17:56.922Z",
        "__v": 0,
        "profilePic": < cloudinary_image >
    }
}
</pre>

<h4>2. Remove Photo</h4>
<p><b>Method</b>: DELETE</p>
<p><b>URL</b>: localhost:3000/api/removeProfilePic</p>
<p><b>Authorization</b>: Bearer < generated_token ></p>
<p><b>Response body:</b></p>
<pre>
{
    "message": "Photo removed",
}
</pre>


<h4>2. Delete Account</h4>
<p><b>Method</b>: DELETE</p>
<p><b>URL</b>: localhost:3000/api/deleteAccount</p>
<p><b>Authorization</b>: Bearer < generated_token ></p>
<p><b>Response body:</b></p>
<pre>
{
    "message": "Account deleted successfully",
    "user": {
        "_id": "69289cfc28067b1f6a56ac0b",
        "name": "John Doe",
        "email": "dummyuserjd1995@gmail.com",
        "createdAt": "2025-11-27T17:17:56.922Z",
        "__v": 0,
        "profilePic": "< cloudinary_image >"
    }
}
</pre>

<hr>

## 📁Folder Structure

<h3>Backend</h3>
<pre>
┣ 📂controllers
┃ ┣ 📜google.OAuth.controller.js
┃ ┗ 📜users.controller.js
┣ 📂middleware
┃ ┣ 📜generateToken.js
┃ ┣ 📜upload.js
┃ ┗ 📜verifyJwtToken.js
┣ 📂models
┃ ┗ 📜users.model.js
┣ 📂rate-limiter
┃ ┗ 📜rateLimiter.js
┣ 📂routes
┃ ┣ 📜google.OAuth.route.js
┃ ┗ 📜user.routes.js
┣ 📂utils
┃ ┣ 📜cloudinary.js
┃ ┣ 📜generateOTP.js
┃ ┣ 📜generateResetToken.js
┃ ┗ 📜sendEmail.js
┣ 📜.gitignore
┣ 📜config.js
┣ 📜db.connection.js
┣ 📜index.js
┗ 📜package.json
</pre>

<h3>Frontend</h3>
<pre>
┣ 📂public
┃ ┗ 📜vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📜blue-bg.avif
┃ ┃ ┣ 📜blue-bg.jpg
┃ ┃ ┣ 📜orange-bg.jpg
┃ ┃ ┣ 📜profile-icon.webp
┃ ┃ ┣ 📜react.svg
┃ ┃ ┗ 📜shield.png
┃ ┣ 📂custom-hooks
┃ ┃ ┣ 📜useDeleteAccount.js
┃ ┃ ┣ 📜useEditProfile.js
┃ ┃ ┣ 📜useFetchUserProfile.js
┃ ┃ ┣ 📜useForgotPassword.js
┃ ┃ ┣ 📜useLogin.js
┃ ┃ ┣ 📜useRemoveProfilePic.js
┃ ┃ ┣ 📜useResetPassword.js
┃ ┃ ┣ 📜useSignup.js
┃ ┃ ┗ 📜useVerifyOTP.js
┃ ┣ 📂layout
┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┗ 📜Header.jsx
┃ ┣ 📂popup-modals
┃ ┃ ┣ 📜DialogModal1.jsx
┃ ┃ ┣ 📜DialogModal2.jsx
┃ ┃ ┗ 📜DialogModal3.jsx
┃ ┣ 📂protected-route
┃ ┃ ┗ 📜ProtectedRoute.jsx
┃ ┣ 📜App.css
┃ ┣ 📜App.jsx
┃ ┣ 📜EditProfile.jsx
┃ ┣ 📜Email.jsx
┃ ┣ 📜Home.jsx
┃ ┣ 📜index.css
┃ ┣ 📜Login.jsx
┃ ┣ 📜main.jsx
┃ ┣ 📜Profile.jsx
┃ ┣ 📜ResetPassword.jsx
┃ ┣ 📜Signup.jsx
┃ ┗ 📜VerifyOTP.jsx
┣ 📜.gitignore
┣ 📜eslint.config.js
┣ 📜index.html
┣ 📜package.json
┣ 📜README.md
┗ 📜vite.config.js
</pre>

<hr>

## 📝 What I Learned
<ul>
  <li>Deep understanding of JWT and token-based authentication</li>
  <li>Implementing Google OAuth 2.0 from scratch</li>
  <li>sending mails and verifying OTP using Nodemailer</li>
  <li>Preventing real-world attacks: brute-force attacks, XSS, Input Sanitization from malicious code/scripts</li>
  <li>generating crypto-based tokens with expiry validation for secure OTP verification for password resets ensuring only authorized users can update the password</li>
  <li>implementation of Profile image uploads using Cloudinary storage</li>
  <li>Writing clean, modular, scalable Node.js code</li>
</ul>

## 🚀 Future Enhancements
<ol>
  <li><b>🍪 HttpOnly Cookie Implementation</b> – Store authentication tokens in HttpOnly cookies to enhance security and prevent tokens being accessed through javaScript.</li>
  <li><b>🛡️ Role-Based Authorization</b> – Implement roles (e.g., admin, user) to restrict access to certain routes and operations based on role permissions.</li>
  <li><b>🔐 CSRF Protection</b> – Add Cross-Site Request Forgery protection to secure forms and API endpoints against unauthorized requests from malicious sites.</li>
</ol>







