<!-- AppFooter.vue -->
<template>
  <footer class="footer-container">
    <div class="footer-grid">
      <!-- Column 1 -->
      <div class="footer-brand">
        <h3>CrazyOvercast</h3>
      </div>

      <!-- Column 2 -->
      <div class="footer-links">
        <!-- <h4>Solutions</h4>
        <ul>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Commerce</a></li>
        </ul> -->
      </div>

      <!-- Column 3 -->
      <div class="footer-links">
        <!-- <h4>Support</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Guides</a></li>
        </ul> -->
      </div>

      <!-- Column 4 -->
      <!--  <div class="footer-links">
       <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div> -->
    </div>
    
    <div class="footer-bottom">
      <span>&copy; 2026 CrazyOvercast. All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
    .footer-container {
        background-color: #1a1a1a;
        color: #e0e0e0;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }

    .footer-brand{
        padding-left: 2vh;
    }

    .footer-grid {
        display: grid;
        /* Default Mobile: 1 single full-width column */
        gap: 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    /* Tablet Layout (2x2 grid) */
    @media (min-width: 640px) {
        .footer-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* Desktop Layout (4 equal columns or custom widths) */
    @media (min-width: 1024px) {
        .footer-grid {
            /* Gives the brand section a bit more room than the link lists */
            grid-template-columns: 0fr 3fr 3fr 1fr; 
            }
    }

    .footer-links ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer-links li {
        margin-bottom: 0rem;
    }

    .footer-links a {
        color: #aaa;
        text-decoration: none;
    }

    .footer-links a:hover {
        color: #fff;
    }

    .footer-bottom {
        border-top: 1px solid #333;
        text-align: center;
        font-size: 0.875rem;
        color: #777;
    }
</style>