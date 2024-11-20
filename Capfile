# Load DSL and set up stages
require "capistrano/setup"

# Include default deployment tasks
require "capistrano/deploy"

# Load the SCM plugin appropriate to your project:
#
# require "capistrano/scm/hg"
# install_plugin Capistrano::SCM::Hg
# or
# require "capistrano/scm/svn"
# install_plugin Capistrano::SCM::Svn
# or
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

# Include tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
#
#   https://github.com/capistrano/rvm
#   https://github.com/capistrano/rbenv
#   https://github.com/capistrano/chruby
#   https://github.com/capistrano/bundler
#   https://github.com/capistrano/rails
#   https://github.com/capistrano/passenger
#
require "capistrano/rvm"
require "capistrano/rails" # bundler, assets, migrations
require "capistrano/puma"
require "capistrano/rails/console"
require "capistrano/upload-config"
# require "whenever/capistrano"

# install_plugin Capistrano::Sidekiq
# install_plugin Capistrano::Sidekiq::Systemd
install_plugin Capistrano::Puma
# install_plugin Capistrano::Puma::Daemon
install_plugin Capistrano::Puma::Systemd
install_plugin Capistrano::Puma, load_hooks: false
install_plugin Capistrano::Puma::Monit, load_hooks: false  # Monit tasks without hooks

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }

