var fs = require('fs');
var input = __dirname+'/../public';




exports.sweden = function(req, res){

    var filearray = new Array();
    filearray = fs.readdirSync(input+'/Sweden', ['**.JPG']);

    res.render('sweden', {title:"::::: SWEDEN :::::", headline:"Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains. Its principal cities, eastern capital Stockholm and southwestern Gothenburg and Malmö, are all coastal. Stockholm is built on 14 islands. It has more than 50 bridges, as well as the medieval old town, Gamla Stan, royal palaces and museums such as open-air Skansen.", country:"sweden", filearr:filearray})
    
}

exports.amsterdam= function(req, res){
    var filearray = new Array();
    filearray = fs.readdirSync(input+'/Amsterdam', ['**.JPG']);
    res.render('amsterdam', {title:"::::: Amsterdam :::::", headline:"Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths.", country:"amsterdam", filearr:filearray});


};

exports.paris= function(req, res){

     var filearray = new Array();
    filearray = fs.readdirSync(input+'/Paris', ['**.JPG']);
    res.render('paris', {title:"::::: Paris :::::", headline:"Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.", country:"paris", filearr:filearray});


}