ClassDiagramExtension = function() { this.tokens = ['class-diagram']; };

ClassDiagramExtension.prototype.is_valid = function(token) {
    for (var index in this.tokens) {
        if (this.tokens[index] == token) return true;        
    }
    
    return false;
};

ClassDiagramExtension.prototype.draw = function(dsl) {};