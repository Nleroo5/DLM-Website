'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './dental-intro.css';

export default function DentalIntroPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    // Scroll animations
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openVideoModal = () => {
    setActiveModal('video');
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const openAnimatedModal = () => {
    setActiveModal('animated');
    document.body.style.overflow = 'hidden';
  };

  const closeAnimatedModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const openImageModal = () => {
    setActiveModal('image');
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>

        <div className="hero-content">
          <a
            href="https://youtube.com/shorts/U9AH3eAnd8M?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="video-container"
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            <h2 className="video-intro-text">Watch This Short Video While You Enjoy Your Cookies</h2>
            <div className="floating-play">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>

          <div className="hero-ctas">
            <a href="#examples" className="btn-primary">See Example Ads for My Practice</a>
            <a href="#contact" className="btn-secondary">Call Brenna to Get Started</a>
          </div>

          <div className="hero-trust">
            <p className="trust-text">Professional Meta ad systems that deliver results</p>
            <div className="trust-badges">
              <div className="trust-badge">Actor-Led Videos</div>
              <div className="trust-badge">No Filming Required</div>
              <div className="trust-badge">14-Day Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="examples section" id="examples">
        <div className="container">
          <h2 className="section-title fade-in-up">See the Ads We Build for Your Practice</h2>

          <div className="examples-grid">
            {/* Actor-Led Video - Opens YouTube in fullscreen */}
            <a
              href="https://youtube.com/shorts/1firvNqcNMs?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="example-card card fade-in-up stagger-1"
            >
              <div className="example-content">
                <div className="video-thumbnail-wrapper">
                  <img
                    src="https://img.youtube.com/vi/1firvNqcNMs/maxresdefault.jpg"
                    alt="Actor-led dental video ad example"
                    className="video-thumbnail-preview"
                    onError={(e) => {
                      e.currentTarget.src = "https://img.youtube.com/vi/1firvNqcNMs/hqdefault.jpg";
                    }}
                  />
                  <div className="play-overlay">
                    <svg viewBox="0 0 24 24" className="play-icon">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="example-title">Actor Videos</h3>
                <p className="example-desc">Professional actors explain your services</p>
              </div>
            </a>

            {/* Motion Graphic Video - Opens YouTube in fullscreen */}
            <a
              href="https://youtube.com/shorts/RKXOgiYhH-s?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="example-card card fade-in-up stagger-2"
            >
              <div className="example-content">
                <div className="video-thumbnail-wrapper">
                  <img
                    src="https://img.youtube.com/vi/RKXOgiYhH-s/maxresdefault.jpg"
                    alt="Motion graphic dental video ad example"
                    className="video-thumbnail-preview"
                    onError={(e) => {
                      e.currentTarget.src = "https://img.youtube.com/vi/RKXOgiYhH-s/hqdefault.jpg";
                    }}
                  />
                  <div className="play-overlay">
                    <svg viewBox="0 0 24 24" className="play-icon">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="example-title">Motion Graphics</h3>
                <p className="example-desc">Animated videos that engage and educate</p>
              </div>
            </a>

            {/* Static Image - Opens modal */}
            <div className="example-card card fade-in-up stagger-3" onClick={openImageModal}>
              <div className="example-content">
                <div className="image-thumbnail-wrapper">
                  <img src="/images/static.png" alt="Static dental image ad example" className="image-thumbnail-preview" />
                  <div className="play-overlay">
                    <svg viewBox="0 0 24 24" className="play-icon" style={{width: '30px', height: '30px'}}>
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="example-title">Image Ads</h3>
                <p className="example-desc">High-converting static campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="authority section">
        <div className="authority-content">
          <div className="container">
            <h2 className="authority-title section-title fade-in-up">We Handle Everything — So You Don't Have To</h2>
            <p className="authority-copy fade-in-up stagger-1">From ad targeting to video production, every piece is done for you. You don't have to film, train staff, or add more to your plate. Your practice looks professional, your patients see you at your best, and you stay focused on dentistry.</p>
            <div className="fade-in-up stagger-2">
              <a href="https://www.driveleadmedia.com/contact" className="btn-secondary">See How It Works for My Practice</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial section">
        <div className="container">
          <h2 className="section-title fade-in-up">What Our Clients Say</h2>

          <div className="testimonial-container">
            <div className="testimonial-card scale-in">
              <img className="testimonial-photo" src="/images/austin.png" alt="Dr. Austin Dupont" />
              <p className="testimonial-quote">
                Working with Drive Lead Media has been a game changer for Village Pediatrics. They completely transformed our outdated website into something modern and professional. The Meta ad campaigns they've been running have brought in a 40% increase in new patient bookings, and honestly, the best part is that I haven't had to manage any of it. Nic and Tommy handle everything from strategy to execution while I focus on caring for my patients.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-name">Dr. Austin Dupont</div>
                <div className="testimonial-practice">Village Pediatrics of St. Augustine</div>
                <div className="testimonial-location">St. Augustine, Florida</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="urgency fade-in-up">
        <div className="urgency-container">
          <div className="container">
            <h2 className="urgency-headline">Zero Setup Costs</h2>
            <p className="urgency-copy stagger-1">Most agencies charge $2,500+ upfront just to get started. We're waiving all setup costs to make it simple for you to launch now.</p>
            <div className="stagger-2">
              <a href="https://www.driveleadmedia.com/contact" className="btn-navy">Claim My No-Cost Setup</a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section" id="process">
        <div className="container">
          <h2 className="section-title fade-in-up">How It Works</h2>

          <div className="process-timeline">
            <div className="process-step fade-in-left stagger-1">
              <div className="step-number">1</div>
              <h3 className="step-title">Quick Call</h3>
              <p className="step-desc">We learn about your goals</p>
            </div>

            <div className="process-step fade-in-up stagger-2">
              <div className="step-number">2</div>
              <h3 className="step-title">Custom Ads</h3>
              <p className="step-desc">Actor-led + branded creatives ready in days</p>
            </div>

            <div className="process-step fade-in-right stagger-3">
              <div className="step-number">3</div>
              <h3 className="step-title">Go Live</h3>
              <p className="step-desc">Campaigns running in as little as 14 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta" id="final">
        <div className="final-content">
          <div className="container">
            <h2 className="final-headline fade-in-up">Ready for More of the Right Patients?</h2>
            <p className="final-subhead fade-in-up stagger-1">Smart ads. Professional creative. No filming required.</p>
            <div className="fade-in-up stagger-2">
              <a href="https://www.driveleadmedia.com/contact" className="btn-secondary">Book a Quick Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <h2 className="section-title fade-in-up">Your Account Executive</h2>

          <div className="contact-cards">
            <div className="contact-card card fade-in-left stagger-1">
              <div className="contact-photo">
                <img src="/images/brenna.png" alt="Brenna Skalski Kirillov" className="contact-image" />
              </div>
              <div className="contact-info">
                <h3 className="contact-name">Brenna Skalski Kirillov</h3>
                <p className="contact-title">Account Executive</p>
                <div className="contact-details">
                  <a href="tel:404-862-1975" className="contact-phone">404-862-1975</a>
                  <a href="mailto:Brenna@driveleadmedia.com" className="contact-email">Brenna@driveleadmedia.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeModal === 'video' && (
        <div className="video-modal active" onClick={(e) => e.target === e.currentTarget && closeVideoModal()}>
          <div className="video-modal-content">
            <span className="video-modal-close" onClick={closeVideoModal}>&times;</span>
            <video controls autoPlay>
              <source src="https://www.driveleadmedia.com/s/Untitled-design-40.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {activeModal === 'image' && (
        <div className="image-modal active" onClick={(e) => e.target === e.currentTarget && closeImageModal()}>
          <div className="image-modal-content">
            <span className="image-modal-close" onClick={closeImageModal}>&times;</span>
            <img src="/images/static.png" alt="Static dental image ad example" />
          </div>
        </div>
      )}

      {/* Animated Video Modal */}
      {activeModal === 'animated' && (
        <div className="animated-modal active" onClick={(e) => e.target === e.currentTarget && closeAnimatedModal()}>
          <div className="animated-modal-content">
            <span className="animated-modal-close" onClick={closeAnimatedModal}>&times;</span>
            <video controls autoPlay>
              <source src="https://www.driveleadmedia.com/s/Sample-Motion-Graphic-gjme.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
