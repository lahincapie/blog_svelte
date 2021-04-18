<style>
    .Greeting {
        width: 100%;
        height: 380px;
        display: flex;
        justify-content: center;
        align-items:flex-end;
        background-image: linear-gradient(rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.9)), url("greeting-background.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .Greeting__content {
        padding-inline: 30px;
        padding-block-end: 40px;
        text-align: center;
    }
    .Greeting__content figure {
        width: 100px;
        margin: auto
    }
    .Greeting__content img {
        width: 100%;
    }
    .Greeting__content h1 {
        margin-block-start: 20px;
        font-size: 2.4rem;
        line-height: 3rem;
        color: rgba(255, 255, 255, 0.8)
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
