// Overlay componenet for HUD so that the hud
      // objects won't clip through test objects
      AFRAME.registerComponent("overlay", {
        dependencies: ['material'],
        init: function () {
          this.el.sceneEl.renderer.sortObjects = true;
          this.el.object3D.renderOrder = 100;
          this.el.components.material.material.depthTest = false;
        }
      });

    
      

      //google maps api conversion to aframe -in progress
      AFRAME.registerComponent("googleMap", {
        schema: { object_id: "" },

        init: function () {
          var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.12085),
            zoom: 5,
          };
          var map = new google.maps.Map(
            document.getElementById("googleMap"),
            mapProp
          );
        },
      });
      
      
      AFRAME.registerComponent('button', {
        schema: {
          color: {default: '#003865'},
          hover: {default: '#005C8A'},
          click: {default: '#951272'},
        },

        // The init function defines component behaviour
        init: function () {
          
          // Cursor enter callback - updates button colour to show it is targeted
          element.addEventListener('mouseenter', function () {
            element.setAttribute('color', data.hover);
          });

          // Cursor leave callback - resets button colour to its default value
          element.addEventListener('mouseleave', function () {
            element.setAttribute('color', data.color);
          });
          
          // Cursor click callback - updates button colour and updates a text label
          element.addEventListener('click', function () {
            element.setAttribute('color', data.click);
            
            }
                                  
        
      });