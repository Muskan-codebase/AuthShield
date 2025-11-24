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

<h2>🧹 Sanitization & Validation</h2>
<ol>
  <li>xss-clean (prevents XSS)</li>
  <li>validator (sanitizes email & inputs)</li>
  <li>mongoose-sanitize (prevents NoSQL injection)</li>
  <li>Helmet (secure HTTP headers)</li>
</ol>

<h2>🔒 Token & Session Security</h2>
<ol>
  <li>Safe token storage</li>
  <li>User authentication middleware</li>
  <li>Proper error handling for invalid/expired tokens</li>
</ol>

<h1>📝 What I Learned</h1>
<ul>
  <li>Deep understanding of JWT and token-based authentication</li>
  <li>Implementing Google OAuth 2.0 from scratch</li>
  <li>sending mails and verifying OTP using Nodemailer</li>
  <li>Preventing real-world attacks: brute-force, XSS, NoSQL injection</li>
  <li>Cloudinary file uploads & storage</li>
  <li>Writing clean, modular, scalable Node.js code</li>
</ul>

<h1>🛠 Tech Stack</h1>
<b>Frontend</b>: React.js, Tailwind CSS, Daisy UI.
<b>Backend</b>: Node.js, Express, Mongoose, REST API.
<b>Database</b>: MongoDB.
<b>Security</b>: bcrypt, express-rate-limit, xss-clean, validator, helmet.
<b>Libraries</b>: Cloudinary, Nodemailer, Google OAuth Library.
