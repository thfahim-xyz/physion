---
title: Physion
---

<style>
  body {
    /* 1. FIXED: Changed opacity from 0 to 0.5 to actually darken the background image */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("{{ '/assets/images/foundations.jpg' | relative_url }}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .sidebar {
    display: none !important; 
  }

  .layout {
    display: flex !important; /* Changed to flex to help center the inner contents vertically/horizontally */
    justify-content: center;
    align-items: center;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100vh;
  }

  .content {
    display: flex;
    justify-content: center;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto !important;
    padding: 20px !important; /* Added a little padding so it doesn't touch screen edges on mobile */
  }

  .hero {
    text-align: center;
    padding: 50px 40px;
    border-radius: 7px; /* Increased for a better modern glass aesthetic */
    
    /* 2. FIXED: Control the width here so it doesn't span all the way left-to-right */
    width: 100%;
    max-width: 650px; /* Adjust this value (e.g., 600px to 800px) depending on how wide you want the card */
    
    min-height: auto; /* Removed strict height constraints to let content dictate the height naturally */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Frosted glass styles */
    background: rgba(255, 255, 255, 0.1); 
    backdrop-filter: blur(15px); 
    -webkit-backdrop-filter: blur(15px); 
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }

  /* Target your text elements inside the hero card */
  .hero h1 {
    display: inline-block;
    border: none;
    background: none;
    font-size: 3.3rem;
    color: #ffffff; /* Ensures text contrasts beautifully against the dark background overlay */
    margin-bottom: 15px;
  }

  .hero-text {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9); /* Slightly soft white for secondary text readability */
  }

  .wordmark {
    margin: 0;
    padding: 0;
  }

/* Target screens smaller than 768px (tablets and mobile phones) */
@media (max-width: 768px) {
  .content {
    padding: 0 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
  }

  .hero {
    /* Forces the card to shrink away from the left/right screen edges */
    width: 88% !important; 
    
    /* Overrides the large minimum viewport height height constraints */
    min-height: auto !important; 
    max-height: none !important;
    height: auto !important;
    
    /* Adds a bit of breathing room above and below the card */
    margin: 20px auto !important; 
    
    /* Slightly reduces internal padding so your text has more room inside the box */
    padding: 30px 20px !important; 
  }

  /* Optional: Scales down the text size so it doesn't look giant on small screens */
  .hero h1 {
    font-size: 2.2rem !important; 
  }
  
  .hero-text {
    font-size: 1rem !important;
  }
}

</style>


<section class="hero">
    <h1 class="wordmark"><a href="{{ '/index' | relative_url }}">Physion</a></h1>

    <p class="hero-text">A concise guide to physics</p>

    <a href="{{ '/library' | relative_url }}" class="btn-primary">Explore</a>
</section>