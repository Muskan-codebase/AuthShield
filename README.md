<h1>🛡AuthShield — Complete Authentication & Security System</h1>
<b>AuthShield</b> is a full-stack authentication system built with Node.js, Express, React and MongoDB, with a strong emphasis on security and real-world authentication flows.
This project implements <b>JWT authentication</b>, <b>Google OAuth</b>, <b>OTP-verification and password reset using Nodemailer</b>, <b>profile uploads</b>, and 
multiple layers of protection against <b>brute-force attacks</b>, <b>XSS</b>, and <b>NoSQL injection</b>.

<h2>🚀 Features</h2>
<h3>🔑 Authentication</h3>
<ol>
  <li>JWT Authentication (JSON Web Token)</li>
  <li>Secure password hashing (bcrypt)</li>
  <li>Login, Signup, Logout</li>
  <li>Protected routes & middleware</li>
</ol>

<h2>📩 Password Reset (OTP)</h2>
<ol>
  <li>OTP generation & expiry</li>
  <li>Email sending using Nodemailer</li>
  <li>OTP verification & password update</li>
</ol>

<h2>🖼️ Profile Management</h2>
<ol>
  <li>Profile picture upload (Cloudinary)</li>
  <li>Secure image URLs</li>
  <li>Update name, email, password, profile image</li>
</ol>

<h2>🔐 OAuth Integration</h2>
<ol>
  <li>Google OAuth 2.0 implemented using the Google OAuth Library</li>
  <li>Code exchange → Token verification → User creation/login</li>
  <li>Works without Passport.js</li>
</ol>

<h1>🛡️ Security Implementations</h1>
<h2>🚫 Brute-Force Protection</h2>
<ol>
  <li>Rate limiting on login & signup APIs</li>
  <li>Throttling after multiple failed attempts</li>
</ol>

🧹 Sanitization & Validation

xss-clean (prevents XSS)

validator (sanitizes email & inputs)

mongoose-sanitize (prevents NoSQL injection)

Helmet (secure HTTP headers)

🔒 Token & Session Security

Safe token storage

User authentication middleware

Proper error handling for invalid/expired tokens

🧠 What I Learned

Deep understanding of JWT and token-based authentication

Implementing Google OAuth 2.0 from scratch

Designing secure backend architecture

Preventing real-world attacks: brute-force, XSS, NoSQL injection

Cloudinary file uploads & storage

Writing clean, modular, scalable Node.js code
