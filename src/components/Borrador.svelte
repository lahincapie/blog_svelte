<script>
    import Nav from '../components/Nav.svelte';
    import miMenu from '../utils/miMenu.js'

    export let segment;
</script>
<style>
    .header {
        position: absolute;
        text-align: end;
        inset-inline-end:10px;
        inset-block-start: 10px;
        background: none;
    }




    /* .header {
        height: 80px;
        position: fixed;
        top: 0;
        right: 0;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        max-width: 992px;
        margin: 0 auto;
    }
    .nav__link {
        color: white;
        text-decoration: none;
    } */
    /* JS */
    /* :global(.nav__menu) {
        display: flex;
        margin-right: 40px;
        list-style: none;
    }
    .nav__menu-item {
        font-size: 18px;
        margin: 0 10px;
        line-height: 80px;
        text-transform: uppercase;
        width: max-content;
    }
    .nav__menu-link {
        padding: 8px 12px;
        border-radius: 3px;
    }
    .nav__menu-link:hover,
    .nav__menu-link_active {
        background-color: #034574;
        transition: 0.5s;
    } */
    /* TOGGLE */
    /* JS */
    /* :global(.nav__toggle) {
        color: rgba(255, 255, 255, 0.8);
        background: none;
        border: none;
        font-size: 30px;
        padding: 0 20px;
        line-height: 60px;
        cursor: pointer;
        display: none;
    } */
    /* MOBILE */
    @media (max-width: 768px) {
        /* body {
            padding-top: 70px;
        }
        .header {
            height: 60px;
        } */
        /* JS */
        /* :global(.nav__menu) {
            flex-direction: column;
            align-items: center;
            margin: 0;
            background-color: #2c3e50;
            position: fixed;
            top: 60px;
            width: 100%;
            padding: 20px 0;
            height: calc(100% - 60px);
            overflow-y: auto;
            left: 100%;
            transition: left 0.3s;
        }
        .nav__menu-item {
            line-height: 70px;
        }
        .nav__menu-link:hover,
        .nav__menu-link_active {
            background: none;
            color: #83c5f7;
        } */
        /* JS */
        /* :global(.nav__toggle) {
            display: block;
        }

        :global(.nav__menu_visible) {
            left: 0;
        } */
        /* JS */
        /* :global(.nav__toggle:focus:not(:focus-visible)) {
            outline: none;
        } */
    }
</style>


<div class="Navbar">
    <div class="Navbar__container">
        <div class="Navbar__content">
            <button
                class="nav__toggle"
                aria-label="Abrir menú"
                on:click={miMenu}>
                <span>Menú</span>
                    <i class="fas fa-bars" />
            </button>
            <div class="nav__container">
                <ul class="nav__menu">
                    <li class="nav__menu-item">
                        <a
                            aria-current="{segment === undefined ? 'page' : undefined}"
                            href="."
                            class="nav__menu-link nav__link">
                                Home
                        </a>
                </ul>
            </div>
        </div>
    </div>
</div>


<!-- NAV -->

<script>
	export let segment;
</script>

<style>
	.Nav {
		border-bottom: 1px solid rgba(255, 0, 121, 0.2);
		font-weight: 300;
		background-color: #fafbfc;
		color: #191a22;
	}
	.Nav-container {
		display: grid;
		grid-template-columns: minmax(auto,1024px);
		justify-content: center;
		align-items: center;
	}
	.Nav-content {
		display: flex;
		justify-content: space-between;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 1em 1em 0;
		display: block;
		font-size: 14px;
		font-weight: 300;
		transition: all 0.3s ease-in-out 0s;
		color: rgba(25,26,34,0.7);
	}
	a:hover {
		color: rgba(25,26,34,1);
	}
</style>

<nav class="Nav">
	<div class="Nav-container">
		<div class="Nav-content">
			<div class="Nav-social">
				<ul>
					<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
					<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
					<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a></li>
					<li><a aria-current="{segment === 'general' ? 'page' : undefined}" href="general">general</a></li>
					<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
				</ul>
			</div>
		</div>
	</div>
</nav>