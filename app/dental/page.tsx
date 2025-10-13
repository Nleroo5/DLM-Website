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

  const openHeroVideo = () => {
    setActiveModal('hero');
    document.body.style.overflow = 'hidden';
  };

  const closeHeroVideo = () => {
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
          <div className="video-container">
            <h2 className="video-intro-text">Watch This Short Video While You Enjoy Your Cookies</h2>
            <button className="floating-play" onClick={openHeroVideo}>
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>

          <div className="hero-ctas">
            <a href="https://www.driveleadmedia.com/contact" className="btn-primary">See How It Works for My Practice</a>
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
      <section className="examples section">
        <div className="container">
          <h2 className="section-title fade-in-up">See the Ads We Build for Your Practice</h2>

          <div className="examples-grid">
            <div className="example-card card fade-in-up stagger-1">
              <div className="example-content">
                <div className="video-thumbnail" onClick={openVideoModal}></div>
                <h3 className="example-title">Actor Videos</h3>
                <p className="example-desc">Professional actors, your office branding</p>
              </div>
            </div>

            <div className="example-card card fade-in-up stagger-2">
              <div className="example-content">
                <div className="animated-thumbnail" onClick={openAnimatedModal}></div>
                <h3 className="example-title">Animated Videos</h3>
                <p className="example-desc">Motion graphics that engage and educate</p>
              </div>
            </div>

            <div className="example-card card fade-in-up stagger-3">
              <div className="example-content">
                <div className="image-thumbnail" onClick={openImageModal}></div>
                <h3 className="example-title">Image Ads</h3>
                <p className="example-desc">Polished, professional static campaigns</p>
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
              <img className="testimonial-photo" src="https://www.driveleadmedia.com/s/Untitled-design-60.png" alt="Dr. Austin Dupont" />
              <p className="testimonial-quote">
                Drive Lead Media transformed our practice. The actor-led videos look incredibly professional - patients actually think we filmed them in our office. We've seen a 40% increase in new patient bookings, and I didn't have to lift a finger. They truly handle everything while we focus on what we do best.
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
            <h2 className="urgency-headline">Zero Setup Costs — For a Limited Time</h2>
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
      <section className="contact section">
        <div className="container">
          <h2 className="section-title fade-in-up">Your Account Executives</h2>

          <div className="contact-cards">
            <div className="contact-card card fade-in-left stagger-1">
              <div className="contact-photo">
                <img src="https://www.driveleadmedia.com/s/Untitled-design-61.png" alt="Brenna Skalski Kirillov" className="contact-image" />
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

            <div className="contact-card card fade-in-right stagger-2">
              <div className="contact-photo">
                <img src="https://www.driveleadmedia.com/s/Untitled-design-62.png" alt="Nikita Kirillov" className="contact-image" />
              </div>
              <div className="contact-info">
                <h3 className="contact-name">Nikita Kirillov</h3>
                <p className="contact-title">Account Executive</p>
                <div className="contact-details">
                  <a href="tel:404-556-0267" className="contact-phone">404-556-0267</a>
                  <a href="mailto:Nikita@driveleadmedia.com" className="contact-email">Nikita@driveleadmedia.com</a>
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
            <img src="https://www.driveleadmedia.com/s/Actor-3-Sample-Ad.png" alt="Sample dental image ad" />
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

      {/* Fullscreen Hero Video Overlay */}
      {activeModal === 'hero' && (
        <div className="video-overlay" onClick={(e) => e.target === e.currentTarget && closeHeroVideo()}>
          <div className="video-container-fullscreen">
            <button className="close-btn" onClick={closeHeroVideo}>×</button>
            <video controls autoPlay>
              <source src="https://www.driveleadmedia.com/s/QR-Code-Video-Final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
