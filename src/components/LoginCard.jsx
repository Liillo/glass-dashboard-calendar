export default function LoginCard() {
  return (
    <div className="login-card glass">
      <div className="login-toprow">
        <div className="brand-icon">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
        <span className="signup-link">Sign up</span>
      </div>

      <div className="login-heading">Log in</div>

      <div className="pinterest-row">
        <button className="pinterest-btn">
          Continue with Google
        </button>
      </div>

      <div className="field">
        <input type="email" placeholder="e-mail address" />
      </div>

      <div className="field">
        <input type="password" placeholder="password" />
        <span className="forgot">I forgot</span>
      </div>

      <p className="body-text">
        Not everyone enjoys crowds — some people find comfort in solitude, sharing their stories only with those they truly trust.
      </p>

      <div className="cta-row">
        <span className="more-info">Click here for more info.</span>
        <button className="arrow-circle">
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}