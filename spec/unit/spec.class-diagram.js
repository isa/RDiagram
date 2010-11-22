describe 'ClassDiagramExtension'
    describe 'tokens'
        it 'should return list of tokens that extension parses'
            var class_diagram = new ClassDiagramExtension();
            
            class_diagram.tokens.length.should.be 1
            class_diagram.tokens.should.include 'class-diagram'
        end
    end
end