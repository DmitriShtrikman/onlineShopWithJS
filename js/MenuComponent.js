Vue.component('menuup', {
    template: `
    <nav class="menu-button">
    <input type="checkbox" id="on-click">
        <label for="on-click">
            <figure class="navigation-panel-transform">
            <svg width="32" height="23" viewBox="0 0 32 23"  xmlns="http://www.w3.org/2000/svg">
                <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" />
                </svg>
            </figure>
        </label>

    <div class="pop-up-menu">
        <ul class="pop-up-menu-general-items-decoration">
            <li class="pop-up-menu-close">
                <input id="on-click" type="checkbox">
                <label for="on-click">
                    <div class="pop-up-menu-close-button_1">
                    </div>
                    <div class="pop-up-menu-close-button_2">
                    </div>
                </label>    
            </li>
            <li class="pop-up-menu-menu">
                <a href="#" class="pop-up-menu-menu-link">menu</a>
            </li>
            <li class="pop-up-menu-general-name">
                <a href="#" class="pop-up-menu-general-name-link">man</a>
            </li>
            <li class="pop-up-menu-general-items">
                <ul class="pop-up-menu-general-items-decoration">
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Accesories</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Bags</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Denim</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">T-Shirts</a>
                    </li>
                </ul>
            </li>
            <li class="pop-up-menu-general-name">
                <a href="#" class="pop-up-menu-general-name-link">woman</a>
            </li>
            <li class="pop-up-menu-general-items">
                <ul  class="pop-up-menu-general-items-decoration">
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Accesories</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Jackets & Coats</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Polos</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">T-Shirts</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Shirts</a>
                    </li>
                </ul>
            </li>
            <li class="pop-up-menu-general-name">
                <a href="#" class="pop-up-menu-general-name-link">kids</a>
            </li>
            <li class="pop-up-menu-general-items">
                <ul class="pop-up-menu-general-items-decoration">
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Accessories</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Jackets & Coats</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Polos</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">T-Shirts</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Shirts</a>
                    </li>
                    <li class="pop-up-menu-item">
                        <a href="#" class="pop-up-menu-item-link">Bags</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>    
    </nav>
    `
});
