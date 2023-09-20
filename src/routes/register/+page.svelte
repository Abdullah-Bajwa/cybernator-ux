<script>
    import {enhance} from '$app/forms'

    export let form
</script>

<form class="form-container" action="?/register" method="POST" use:enhance>
    <h1>
        Register
    </h1>
    
    <div>
        <label for="username">Username</label>
        <input type="text" name="username" id="usernameInput" required>
    </div>

    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="passwordInput" required>
    </div>

    {#if form?.user}
        <p class="error">Username is Taken</p>
    {/if}

    


    <button type="submit">Register</button>
</form>