#!/usr/bin/env rubyruby
result = `sass assets/css/main.sass assets/css/main.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('assets/css/main.css')
puts "Regular compile worked successfully"