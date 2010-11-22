
load('./spec/lib/jspec.js')
load('./spec/lib/jspec.xhr.js')
load('lib/rdiagram.js')
load('lib/extensions/class-diagram.js')

JSpec
.exec('spec/unit/spec.js')
.exec('spec/unit/spec.class-diagram.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()