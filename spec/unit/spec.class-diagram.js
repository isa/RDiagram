describe 'ClassDiagramExtension'
    before_each
        class_diagram = new ClassDiagramExtension();
    end
    describe 'tokens'
        it 'should return list of tokens that extension parses'            
            class_diagram.tokens.length.should.be 1
            class_diagram.tokens.should.include 'class-diagram'
        end
    end
    
    describe 'is_valid'
        it 'should return true when given token is in the token list'
            var token = 'class-diagram'
            class_diagram.is_valid(token).should.be true
        end
        
        it 'should return false when given token is not in the token list'
            var invalid_token = 'invalid'
            class_diagram.is_valid(invalid_token).should.be false
        end
    end
end