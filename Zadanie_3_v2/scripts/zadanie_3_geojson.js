 var formats;
 function updateFormats() {
            var in_options = {
                'internalProjection': map.baseLayer.projection,
                'externalProjection': new OpenLayers.Projection(OpenLayers.Util.getElement("inproj").value)
            };   
            var out_options = {
                'internalProjection': map.baseLayer.projection,
                'externalProjection': new OpenLayers.Projection(OpenLayers.Util.getElement("outproj").value)
            };
            formats = {
              'in': {
    			geojson: new OpenLayers.Format.GeoJSON(in_options),
              },
              'out': {
                geojson: new OpenLayers.Format.GeoJSON(out_options),
              }
            };
        }


        function serialize(feature) {
            var type = document.getElementById("formatType").value;

        }

        function deserialize() {
		
           var element = document.getElementById('textgeometry');
		   var type = document.getElementById("formatType").value;
            var vector = formats['in'][type].read(element.value);
            var bounds;
          
            if(vector) {
                if(vector.constructor != Array) {
                    vector = [vector];
                }
                for(var i=0; i<vector.length; ++i) {
                    if (!bounds) {
                        bounds = vector[i].geometry.getBounds();
                    } else {
                        bounds.extend(vector[i].geometry.getBounds());
                    }

                }
				
			
				vectorlayer.addFeatures(vector);
				map.zoomToExtent(bounds);
                var plural = (vector.length > 1) ? 's' : '';
                element.value = 'Добавлено векторов:' + vector.length + plural;
            } else {
                element.value = 'Ошибка ввода. Проверьте правильность вводимых данных';
            }
        }