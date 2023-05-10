var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NorskeNettaviser_200521DVI_1 = new ol.format.GeoJSON();
var features_NorskeNettaviser_200521DVI_1 = format_NorskeNettaviser_200521DVI_1.readFeatures(json_NorskeNettaviser_200521DVI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorskeNettaviser_200521DVI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorskeNettaviser_200521DVI_1.addFeatures(features_NorskeNettaviser_200521DVI_1);
var lyr_NorskeNettaviser_200521DVI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NorskeNettaviser_200521DVI_1, 
                style: style_NorskeNettaviser_200521DVI_1,
                interactive: true,
                title: '<img src="styles/legend/NorskeNettaviser_200521DVI_1.png" /> NorskeNettaviser_2005-21 DVI'
            });

lyr_OSMStandard_0.setVisible(true);lyr_NorskeNettaviser_200521DVI_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_NorskeNettaviser_200521DVI_1];
lyr_NorskeNettaviser_200521DVI_1.set('fieldAliases', {'entityName': 'entityName', 'urlOriginal': 'Historisk URL', 'urlArkiv': 'Søk i Nettarkivet', 'utgivelsessted': 'utgivelsessted', 'fylke': 'fylke', 'geoLat(x)': 'geoLat(x)', 'geoLong(y)': 'geoLong(y)', 'nedslag': 'nedslag', 'Description': 'Description', 'year_start': 'year_start', 'date_end': 'date_end', 'url2': 'url2', 'url3': 'url3', 'url4': 'url4', 'nisje': 'nisje', 'field_16': 'field_16', });
lyr_NorskeNettaviser_200521DVI_1.set('fieldImages', {'entityName': 'TextEdit', 'urlOriginal': 'Hidden', 'urlArkiv': 'TextEdit', 'utgivelsessted': 'Hidden', 'fylke': 'Hidden', 'geoLat(x)': 'Hidden', 'geoLong(y)': 'Hidden', 'nedslag': 'Hidden', 'Description': 'Hidden', 'year_start': 'Hidden', 'date_end': 'Hidden', 'url2': 'Hidden', 'url3': 'Hidden', 'url4': 'Hidden', 'nisje': 'Hidden', 'field_16': 'Hidden', });
lyr_NorskeNettaviser_200521DVI_1.set('fieldLabels', {'entityName': 'no label', 'urlArkiv': 'no label', });
lyr_NorskeNettaviser_200521DVI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});