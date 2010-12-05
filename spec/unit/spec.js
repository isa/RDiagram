describe 'RDiagram'
    before_each
        rdiagram = new RDiagram('canvas', 100, 100);
        extension = new ClassDiagramExtension();
    end
    
    describe 'constructor'
        it 'should get dom id, width and height'
            id = 'canvas';
            width = 1;
            height = 1;
            
            rd = new RDiagram(id, width, height);
            
            rd.canvas.id.should.be id
            rd.canvas.width.should.be width
            rd.canvas.height.should.be height
        end
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
            var expected_content = 'CONTENT';
            var dsl = 'class-diagram { ' + expected_content + ' }';
            
            var fake_extension = JsMockito.mock(ClassDiagramExtension);
            JsMockito.when(fake_extension).is_valid(JsHamcrest.Matchers.anything()).thenReturn(true);
            
            rdiagram.add_extension(fake_extension);
            rdiagram.draw(dsl);
            
            JsMockito.verify(fake_extension).draw(expected_content);
        end
    end
end