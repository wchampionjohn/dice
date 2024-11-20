# config valid for current version and patch releases of Capistrano
lock "~> 3.16.0"

set :rvm_ruby_version, '3.1.2'

set :application, "dice"
set :repo_url, "git@github.com:wchampionjohn/dice.git"

ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
set :pty,             true
# https://makandracards.com/makandra/1180-speed-up-capistrano-deployments-using-a-remote-cached-copy-of-repository
set :deploy_via,      :remote_cache
set :ssh_options,     { forward_agent: true, user: "deployer", keys: %w[~/.ssh/id_rsa] }

set :puma_phased_restart, true

# Default value for :linked_files is []
append :linked_files, "config/database.yml", 'config/master.key', 'config/application.yml', '.env'

# Default value for linked_dirs is []
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", "public/uploads"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
# set :whenever_identifier, ->{ "#{fetch(:application)}_#{fetch(:stage)}" }
