describe 'RDiagram'
    before_each
        rdiagram = new RDiagram();
        extension = new ClassDiagramExtension();
    end
    
    describe 'add_extension(extension)'
        it 'should register additional diagrams'
            rdiagram.add_extension(extension);
            
            // for (prop in this) { print("obj[" + prop + "] = " + this[prop]); };
            rdiagram.extensions.length.should.be 1
        end
    end
    
    describe 'draw(dsl)'
        it 'should call right extension to parse the dsl'
            var dsl = 'class-diagram { CONTENT }';
            var expected_content = 'CONTENT';
            
            function FakeExtension() {
                this.is_valid = function(token) { return true; },
                this.draw = function(dsl) { this.content = dsl; }
            }
            
            var fake_extension = new FakeExtension();
            rdiagram.add_extension(fake_extension);
            rdiagram.draw(dsl);
            
            fake_extension.content.should.be expected_content
        end
    end
end