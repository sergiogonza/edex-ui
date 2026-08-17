// BRIDGE HUD Dashboard Controller
// Minimal command center layer

window.bridgeDashboard = {
    open:false,
    init(){
        const enter=document.querySelector('.bridge-enter');
        if(enter){
            enter.addEventListener('click',()=>this.enter());
        }
    },
    enter(){
        const boot=document.getElementById('bridge_boot');
        if(boot){
            boot.style.opacity='0';
            setTimeout(()=>boot.remove(),500);
        }
        this.createHUD();
    },
    createHUD(){
        if(this.open)return;
        this.open=true;
        document.body.insertAdjacentHTML('beforeend',`
        <section class="bridge-dashboard">
            <div class="bridge-panel bridge-module">
                <h3>SYSTEM</h3>
                <p>CPU READY</p>
                <p>RAM READY</p>
                <p>STORAGE READY</p>
            </div>
            <div class="bridge-panel bridge-center">
                ◉
            </div>
            <div class="bridge-panel bridge-module">
                <h3>NETWORK</h3>
                <p>NODE ONLINE</p>
                <p>CONNECTIONS READY</p>
            </div>
            <div class="bridge-panel bridge-module">
                TERMINAL
            </div>
            <div class="bridge-panel bridge-module">
                FILES
            </div>
            <div class="bridge-panel bridge-module">
                SECURITY
            </div>
        </section>`);
    }
};

document.addEventListener('DOMContentLoaded',()=>{
    if(window.bridgeDashboard) window.bridgeDashboard.init();
});
