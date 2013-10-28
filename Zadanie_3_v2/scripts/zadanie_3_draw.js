 var map, maplayer, vectorlayer, moving;
		
            function main(){
                map = new OpenLayers.Map('map');
				
				maplayer = new OpenLayers.Layer.OSM();
				
			    vectorlayer = new OpenLayers.Layer.Vector();
				
                map.addLayers([maplayer, vectorlayer]); 
                map.addControl(new OpenLayers.Control.EditingToolbar(vectorlayer)); // Включаем панель рисования в верхнем правом углу
				moving = { move: new OpenLayers.Control.DragFeature(vectorlayer)}; //Позволяем пользователю перемещать вектор
		
		 var options = {
                hover: true,
                onSelect: serialize
            };
            var select = new OpenLayers.Control.SelectFeature(vectorlayer, options);
            map.addControl(select);
            select.activate();
            
            updateFormats();
		
         		map.setCenter(new OpenLayers.LonLat(0, 0), 3);
  				
			}
			
			    function toggleMove(element) {
                for(key in moving) {
				    map.addControl(moving[key]);
                    var control = moving[key];
                    if(element.value == key && element.checked) {
                        control.activate();
                    } else {
                        control.deactivate();
                    }
                }
            }
			

	