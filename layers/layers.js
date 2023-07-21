ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([387127.004180, 4065857.271632, 388317.772595, 4066545.354900]);
var wms_layers = [];

var lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/ortofoto2016",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofotografia_2016_rgb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofografia de Andalucía 2016 Color RGB (0.50m Pixel / 0.25m Pixel)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0, 0]);
var lyr_Catastro_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?SRS%3DEPS%0AG:23029%26bbox%3D511950,4662900,512150,4663100%26width%3D756%26heig%0Aht%3D756%26transparent%3DNo%26layers%3Dcatastro",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_1, 0]);
var lyr_ToponmiadelosNucleosdePoblacin_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ideandalucia.es/wms/dea100_toponimia",
    attributions: ' ',
                              params: {
                                "LAYERS": "Toponimia_nucleos_poblacion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Toponímia  de los Nucleos de Población",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ToponmiadelosNucleosdePoblacin_2, 0]);
var format_cn10m_3 = new ol.format.GeoJSON();
var features_cn10m_3 = format_cn10m_3.readFeatures(json_cn10m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_cn10m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cn10m_3.addFeatures(features_cn10m_3);
var lyr_cn10m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cn10m_3, 
                style: style_cn10m_3,
                interactive: true,
                title: '<img src="styles/legend/cn10m_3.png" /> cn10m'
            });
var format_31PavimentacionVegetacionGIS4entities_4 = new ol.format.GeoJSON();
var features_31PavimentacionVegetacionGIS4entities_4 = format_31PavimentacionVegetacionGIS4entities_4.readFeatures(json_31PavimentacionVegetacionGIS4entities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_31PavimentacionVegetacionGIS4entities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31PavimentacionVegetacionGIS4entities_4.addFeatures(features_31PavimentacionVegetacionGIS4entities_4);
var lyr_31PavimentacionVegetacionGIS4entities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_31PavimentacionVegetacionGIS4entities_4, 
                style: style_31PavimentacionVegetacionGIS4entities_4,
                interactive: true,
                title: '<img src="styles/legend/31PavimentacionVegetacionGIS4entities_4.png" /> 31 Pavimentacion Vegetacion GIS4 entities'
            });

lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0.setVisible(true);lyr_Catastro_1.setVisible(true);lyr_ToponmiadelosNucleosdePoblacin_2.setVisible(true);lyr_cn10m_3.setVisible(true);lyr_31PavimentacionVegetacionGIS4entities_4.setVisible(true);
var layersList = [lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_0,lyr_Catastro_1,lyr_ToponmiadelosNucleosdePoblacin_2,lyr_cn10m_3,lyr_31PavimentacionVegetacionGIS4entities_4];
lyr_cn10m_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEVacione': 'ELEVacione', });
lyr_31PavimentacionVegetacionGIS4entities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_cn10m_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEVacione': 'TextEdit', });
lyr_31PavimentacionVegetacionGIS4entities_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_cn10m_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEVacione': 'no label', });
lyr_31PavimentacionVegetacionGIS4entities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_31PavimentacionVegetacionGIS4entities_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});