<h2>🛡AuthShield — Complete Authentication & Security System</h2>
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

<h3>📩 Password Reset (OTP)</h3>
<ol>
  <li>OTP generation & expiry</li>
  <li>Email sending using Nodemailer</li>
  <li>OTP verification & password update</li>
</ol>

<h3>🖼️ Profile Management</h3>
<ol>
  <li>Profile picture upload (Cloudinary)</li>
  <li>Secure image URLs</li>
  <li>Update name, email, password, profile image</li>
</ol>

<h3>🔐 OAuth Integration</h3>
<ol>
  <li>Google OAuth 2.0 implemented using the Google OAuth Library</li>
  <li>Code exchange → Token verification → User creation/login</li>
  <li>Works without Passport.js</li>
</ol>

<h2>🛡️ Security Implementations</h2>
<ol>
  <li><b>🔐 JWT Authentication & Authorization </b> – Ensures only authenticated users access protected routes</li>
  <li><b>🧹 Input Sanitization</b> - Implemented sanitize-html library to sanitize user inputs to protect against XSS attacks.</li>
  <li><b>⚡ Helmet</b> – Sets secure HTTP headers</li>
  <li><b>🛑 Rate Limiting</b> – Implemented Rate Limiting on APIs particularly Signup & Login APIs to prevent spam registration, brute force login attempts, and API abuse</li>
  <li><b>🔒 Password Hashing</b> - Implemented bcrypt library for secure user passwords in the database</li>
</ol>

<h2>🛠 Tech Stack</h2>
<ul>
  <li><b>Frontend</b>: React.js, Tailwind CSS, Daisy UI.</li>
  <li><b>Backend</b>: Node.js, Express.js.</li>
  <li><b>Database</b>: MongoDB.</li>
  <li><b>Security Libraries</b>: bcrypt, express-rate-limit, express-mongo-sanitize, helmet.</li>
  <li><b>Third-Party Integration</b>: Cloudinary, Nodemailer, Google OAuth 2.0</li>
</ul>

<h2>📝 What I Learned</h2>
<ul>
  <li>Deep understanding of JWT and token-based authentication</li>
  <li>Implementing Google OAuth 2.0 from scratch</li>
  <li>sending mails and verifying OTP using Nodemailer</li>
  <li>Preventing real-world attacks: brute-force, XSS, NoSQL injection</li>
  <li>Cloudinary file uploads & storage</li>
  <li>Writing clean, modular, scalable Node.js code</li>
</ul>
