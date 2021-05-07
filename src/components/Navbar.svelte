<script>
    import Nav from '../components/Nav.svelte';
</script>

<style>
    .Navbar {
        position: absolute;
        top: 10px;
        right: 10px;
        height: auto;
        width: max-content;
        background: none;
    }
    .Navbar__content button {
        height: 30px;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--fourth__color);
    }
    .Navbar__content span {
        display: none;
        margin: 5px;
        text-transform: uppercase;
        font-family: var(--primary__font);
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 3rem;
        letter-spacing: 0.1rem;
    }
    .Navbar__content i {
        font-size: 1.8rem;
        line-height: 3rem;
    }


    .modal-contenido{
        background-color:aqua;
        width:300px;
        padding: 10px 20px;
        margin: 20% auto;
        position: relative;
    }
    .modal{
        background-color: rgba(0,0,0,.8);
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        opacity:0;
        pointer-events:none;
        transition: all 1s;
    }
    #miModal:target{
        opacity:1;
        pointer-events:auto;
    }

    .nav__toggle {}

    @media (min-width: 480px) {
        .Navbar__content span {
            display: initial;
        }
    }
</style>

<div class="Navbar">
    <div class="Navbar__content">
        <button
                class="nav__toggle"
                aria-label="Abrir menú"
                on:click={miMenu}>
                <span>Menú</span>
                    <i class="fas fa-bars" />
            </button>
    </div>
</div>


<div class="modal">
    <div class="modal-contenido">
        <a href="#">X</a>
        <h2>Mi primer Modal</h2>
        <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
    </div>
</div>





        
        
        
        
        
        
        <Nav class="Nav"/>