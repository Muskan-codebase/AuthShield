<h2>🛡AuthShield — Complete Authentication & Security System</h2>
<p>
  <b>AuthShield</b> is a production-ready full-stack authentication system built with
  <b>Node.js</b>, <b>Express</b>, <b>React</b>, and <b>MongoDB</b>, designed with a strong focus on
  security, reliability, and modern authentication practices.
</p>
<p>
  It includes secure <b>JWT-based authentication</b>, seamless <b>Google OAuth 2.0</b>
  integration, <b>OTP-driven password reset</b> using Nodemailer, and
  <b>Cloudinary-powered profile uploads</b>, providing a complete and scalable user
  management system.
</p>
<p>
  AuthShield is reinforced with multiple layers of protection such as
  <b>rate limiting</b>, <b>input sanitization</b>, <b>XSS prevention</b>,
  <b>NoSQL injection protection</b>, and <b>brute-force attack mitigation</b>,
  making it suitable for real-world applications and secure production deployments.
</p>

<h2>🚀 Features</h2>
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
