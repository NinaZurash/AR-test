import './style.css'
AFRAME.registerComponent('smooth-position', {
  init: function () {
    var model = this.el.object3D
    var smoothedPosition = model.position.clone()

    this.el.addEventListener('loaded', function () {
      this.sceneEl.addEventListener('renderstart', function () {
        var delta = this.clock.getDelta()
        smoothedPosition.lerp(model.position, delta * 100) // Adjust the factor as per your requirement
        model.position.copy(smoothedPosition)
      })
    })
  },
})
