 var map, maplayer, vectorlayer, moving;
		
            function main(){
                map = new OpenLayers.Map('map');
				
				maplayer = new OpenLayers.Layer.OSM();
				
			    vectorlayer = new OpenLayers.Layer.Vector();
				
                map.addLayers([maplayer, vectorlayer]); 
                map.addControl(new OpenLayers.Control.EditingToolbar(vectorlayer)); // �������� ������ ��������� � ������� ������ ����
				moving = { move: new OpenLayers.Control.DragFeature(vectorlayer)}; //��������� ������������ ���������� ������
		
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