
load('/Users/isa/.rvm/gems/ruby-1.9.2-p0/gems/jspec-4.3.3/lib/jspec.js')
load('/Users/isa/.rvm/gems/ruby-1.9.2-p0/gems/jspec-4.3.3/lib/jspec.xhr.js')
load('lib/rdiagram.js')
load('lib/class-diagram.js')

JSpec
.exec('spec/unit/spec.js')
.exec('spec/unit/spec.class-diagram.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()