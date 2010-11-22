
require.paths.unshift('spec', '/Users/isa/.rvm/gems/ruby-1.9.2-p0/gems/jspec-4.3.3/lib', 'lib')
require('jspec')
require('rdiagram')
require('class-diagram')

JSpec
  .exec('spec/unit/spec.js')
  .exec('spec/unit/spec.class-diagram.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
