<style>
    .Greeting {
        width: 100%;
        height: 380px;
        background-image: linear-gradient(rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.9)), url("greeting-background.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-inline: 30px;
        padding-block: 20px;
    }
    .Greeting__content {
        height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    .Greeting__content figure {
        width: 100px;
        margin-inline: auto;
    }
    .Greeting__content img {
        width: 100%;
    }
    .Greeting__content h1 {
        font-size: 2rem;
        line-height: 3.4rem;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
    }
    .Greeting__content h1 span {
        color: var(--fourth__color);
    }
</style>

<div class="Greeting">
    <div class="Greeting__content">
        <figure>
            <img src="ah-leter-black.svg" alt="Alejandra Hincapie">
        </figure>
        <h1>Hola, <span>Soy Alejandra</span>, una front developer en formación y crecimiento constante lista para implementar diseños fabulosos.</h1>
    </div>
</div>