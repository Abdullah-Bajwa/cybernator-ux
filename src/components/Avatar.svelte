<script>
    export let avatar = "Title";
    export let desc = "Description";
    export let img = "/CN-5 compressed.png";

    let defaultAvatarSrc = '/CN-5 compressed.png';
    function handleImageError(event) {
    event.target.src = defaultAvatarSrc; // Set the source to the default image
    }
</script>
<a href="/" class="chart-container outline">
    <div class="image">
        <img src="/{img}" alt="" on:error={handleImageError}>
    </div>
    <div class="name">
        <p>{avatar}</p>
    </div>
    <div class="desc">
       {desc}
    </div>
</a>
<style>
    .image{
        height:50%;
        width: 100%;
        margin:0;
        padding: 0;

    }
    img{
        width: 100%;
        max-height: 100%;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        transform: scale(1.1);
    }
    .outline{
        display: flex; 
        padding: 0; 
        flex-direction:column; 
        justify-content:left; 
        overflow: hidden;
    }
    .desc{
        text-align: center;
        padding: 10px;
        padding-top: 0;
    }
    .name{
        padding: 10px;
        padding-top: 20px;
    }
</style>