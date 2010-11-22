
require.paths.unshift('spec', './spec/lib', 'lib')
require('jspec')
require('rdiagram')
require('extensions/class-diagram')

JSpec
  .exec('spec/unit/spec.js')
  .exec('spec/unit/spec.class-diagram.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
