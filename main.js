(() => {
  let type = "WebGL"

  this.setup = () => {
    if(!PIXI.utils.isWebGLSupported()) type = "canvas"
    PIXI.utils.sayHello(type)

    const app = new PIXI.Application({
      height : window.innerHeight,
      width  : window.innerWidth  
    })

    document.body.appendChild(app.view)

    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display  = "block";
    app.renderer.autoResize          = true;

    window.addEventListener('resize', () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    })
  }


})()