describe 'RDiagram'
    describe 'add_extension(extension)'
        it 'should register additional diagrams'
            var rdiagram = new RDiagram();
            var extension = new ClassDiagramExtension();
            rdiagram.add_extension(extension);
            
            rdiagram.extensions.length.should.be 1
        end
    end
end