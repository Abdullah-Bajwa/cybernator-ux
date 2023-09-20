<script>
  import { page } from '$app/stores';
  import { light_mode } from '../stores/theme.js';

  // Function to toggle the light_mode store
  function toggleLightMode() {
    console.log("toggle")
    light_mode.update((currentValue) => !currentValue);
    
  }
  /*
  {#if $light_mode}
                  <i class="fa-solid fa-lightbulb"></i> <!-- Light bulb on icon -->
                {:else}
                  <i class="fa-regular fa-lightbulb"></i> <!-- Light bulb off icon -->
                {/if}
  */
</script>

<style>
  /* Import the CSS file you created */
  @import '../styles/style.css';
  main{
    width: 100%;
    height: 100%;
  }
</style>

<div class="super-container {$light_mode ? 'light-mode' : ''}">
  <header>
    <!-- Navbar with logo and links -->
    <nav>
      <a href="/"><img class="nav-logo centered" src="/CN-5 compressed.png" alt=""></a>
      
        <ul>
          <li>
            <button class="toggle-button" on:click={() => toggleLightMode()}>
             
              <i class="{$light_mode ? 'fa-solid' : 'fa-regular'} fa-lightbulb"></i> <!-- Light bulb on icon -->
            </button>
          </li>
          {#if $page.data.user}      
          <li><a href="/">Home</a></li>
          <li><a href="/">Settings</a></li>
          <li><a href="/">Notifications</a></li>
          <li><form action="/logout" method="POST"><button class="logout-button" type="submit"><i class="fa-solid fa-arrow-right-from-bracket"></i></button></form></li>
          {/if}
        </ul>
      
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <p>&copy; 2023 CyberNator</p>
  </footer>
</div>
