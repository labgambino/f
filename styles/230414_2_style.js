var size = 0;
var placement = 'point';

var style_230414_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#fbff14";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    
        function rules_230414_2(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_230414_2rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.8 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(97,97,97,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 28.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(97,97,97,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(97,97,97,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 14.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(97,97,97,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            angle: Math.PI/4, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(97,97,97,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_230414_2(feature, value);
        ;

    return style;
};
