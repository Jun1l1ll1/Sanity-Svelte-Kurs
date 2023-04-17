<script>
    // START New stuff
    export let data;
    
    let icecreams = data.icecreams;
    // END New stuff
</script>

<div id="header">
    <h1>The Icecream Shop</h1>
</div>
<div id="body_elemts">

    <h2>Your Icecream Options:</h2>
    <div class="grid">
        {#each icecreams as i_cream}
        <div class="grid_element">
            <img src="" alt="">
            <!-- START New stuff -->
            <h3>{i_cream.i_name}</h3>
            <!-- END New stuff -->
        </div>
        {/each}
    </div>

</div>

<style>
    #header {
        padding: 5px;
        padding-left: 30px;
        background-color: lightblue;
    }
    #body_elemts {
        padding: 60px;
    }

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 60px;
    }
    .grid_element {
        display: flex; 
        justify-content: center;
        background-color: lightgoldenrodyellow;
        width: 100%;
        aspect-ratio: 1/1;
        position: relative;
        box-shadow: 20px 20px rgb(60, 101, 129);
    }
    .grid_element img {
        object-fit: cover;
        width: 100%;
    }
    .grid_element h3 {
        margin: 0px;
        padding: 10px;
        width: calc(100% - 20px);
        background-color: lightblue;
        position: absolute;
        bottom: 0px;
        transition: .25s;
    }.grid_element:hover h3 {
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>