// Overlay componenet for HUD so that the hud
      // objects won't clip through test objects
      AFRAME.registerComponent("overlay", {
        dependencies: ["material"],
        init: function () {
          this.el.sceneEl.renderer.sortObjects = true;
          this.el.object3D.renderOrder = 100;
          this.el.components.material.material.depthTest = false;
        },
      });

        /*
         * Tick gets called every frame update. We want to create the effect of the clear
         * button fading-in to become visible only as the user 'looks down' towards it.
         */
        tick: function () {
          var element = this.el;

          // We need the camera to determine where the user is looking
          var camera = this.el.sceneEl.camera.el;
          var rotation = camera.getAttribute("rotation");

          // Calculate opacity based on downward tilt (rotation around x-axis), with a maximum of 50%
          var opacity = 50;

          // Set background opacity - note opacity needs to be converted from % to [0.0, 1.0]
          element
            .querySelector("#clear-button-bg")
            .setAttribute("opacity", opacity * 0.01);

          // Set text opacity - use different scale so it"s brighter, for better readability
          element
            .querySelector("#clear-button-fg")
            .setAttribute("opacity", opacity * 0.02);
        },
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
        }
      });