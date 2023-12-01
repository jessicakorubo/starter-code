window.customElements.define(
    "header-tag",
    class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <div>
                <div class="navbar">
    <div class="icon">
        <img src="assets/shared/logo.svg" alt="">
    </div>
    <div class="nav">
        <div class="hr">
            <hr>
        </div>
        <div class="nav-right">
            <ol>
                <li><a href="index.html">00 Home</a></li>
                <li><a href="destination-moon.html">01 Destination</a></li>
                <li><a href="crew-specialist.html">02 Crew</a></li>
                <li><a href="technology-vehicle.html">03 Technology</a></li>
            </ol>
        </div>
    </div>
</div>
</div>
            `;
        }
    }
);
