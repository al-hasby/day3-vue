<script setup>
</script>

<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="about-hero__bg"></div>
      <div class="about-hero__content">
        <h1>ABOUT HYBE</h1>
        <p>We Believe In Music </p>
      </div>
    </section>

    <!-- Company Info -->
    <section class="company-info">
      <div class="company-info__container">
        <div class="company-info__text">
          <h2>Company Information</h2>
          <p class="company-desc">
            HYBE innovates the music industry with a focus on artist development, content creation, and fan engagement. 
            Our mission is to inspire and connect people worldwide through music and entertainment.
          </p>
        </div>
        <div class="company-info__details">
          <div class="info-item">
            <span class="info-label">Company Name</span>
            <span class="info-value">HYBE Co., Ltd.</span>
          </div>
          <div class="info-item">
            <span class="info-label">CEO</span>
            <span class="info-value">Bang Si-Hyuk</span>
          </div>
          <div class="info-item">
            <span class="info-label">Founded</span>
            <span class="info-value">2005</span>
          </div>
          <div class="info-item">
            <span class="info-label">Business Areas</span>
            <span class="info-value">Entertainment, Music Production, Artist Management, IP Business</span>
          </div>
          <div class="info-item">
            <span class="info-label">Location</span>
            <span class="info-value">Seoul, South Korea</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision">
      <div class="vision__container">
        <div class="vision__card">
          <h3>VISION</h3>
          <p>To become the world's leading music-based entertainment lifestyle platform company.</p>
        </div>
        <div class="vision__card">
          <h3>MISSION</h3>
          <p>To provide the best music and entertainment experience to fans worldwide through innovation and creativity.</p>
        </div>
        <div class="vision__card">
          <h3>VALUES</h3>
          <p>Passion, Innovation, Collaboration, and Respect for music and artists.</p>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="stats__container">
        <div class="stat-item">
          <span class="stat-number">20+</span>
          <span class="stat-label">Years of History</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">50+</span>
          <span class="stat-label">Artists & Creators</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">100M+</span>
          <span class="stat-label">Global Fans</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">10+</span>
          <span class="stat-label">Labels & Companies</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  background: #000;
}

/* Hero Section */
.about-hero {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.about-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
}

.about-hero__bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80') center/cover;
  opacity: 0.2;
}

.about-hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.about-hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: 6px;
  margin-bottom: 16px;
}

.about-hero p {
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 4px;
  opacity: 0.7;
}

/* Company Info */
.company-info {
  padding: 100px 40px;
  background: #000;
}

.company-info__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.company-info__text h2 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 30px;
}

.company-desc {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
}

.company-info__details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
}

.info-value {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

/* Vision Section */
.vision {
  padding: 100px 40px;
  background: #0a0a0a;
}

.vision__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.vision__card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 50px 40px;
  transition: all 0.3s ease;
}

.vision__card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.vision__card h3 {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.5);
}

.vision__card p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
}

/* Stats Section */
.stats {
  padding: 100px 40px;
  background: #000;
}

.stats__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-number {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 2px;
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .company-info__container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .company-info, .vision, .stats {
    padding: 60px 20px;
  }
}
</style>
