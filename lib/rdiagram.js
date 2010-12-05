RDiagram = function(id, width, height) {
    this.extensions = [];
    this.canvas = {
        'id': id,
        'width': width,
        'height': height
    }
};

RDiagram.prototype.add_extension = function(extension) {
    this.extensions.push(extension);
};

RDiagram.prototype.draw = function(dsl) {
    var regex = /(.+)\{([\s\S]+?)\}/gim;
    var matches = regex.exec(dsl);
    
    while (matches != null) {
        var diagram_type = matches[1];
        var diagram_dsl = matches[2].replace(/^\s+|\s+$/g, '');

        for (var i in this.extensions) {
            var extension = this.extensions[i];
            if (extension.is_valid(diagram_type)) {
                this.extensions[i].draw(diagram_dsl);
            }
        }        
        
        matches = regex.exec(dsl);
    }
};