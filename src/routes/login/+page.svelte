<script>
    import {applyAction, enhance} from '$app/forms'
    import {invalidateAll} from '$app/navigation'
    export let form
</script>
<form class="form-container" action="?/login" method="POST" use:enhance={() => {
    return async ({result}) => {
        invalidateAll()
        await applyAction(result)
    }
}}>
    <h1>Login</h1>

    <div>
        <label for="username">Username</label>
        <input type="text" name="username" id="usernameInput" required>
    </div>

    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="passwordInput" required>
    </div>
    {#if form?.invalid}
        <p class="error">Invalid Credentials</p>
    {/if}

 
    <button type="submit">Login</button>
</form>