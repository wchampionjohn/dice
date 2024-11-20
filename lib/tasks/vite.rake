namespace :vite do
  desc "Precompile Vite assets"
  task precompile: :environment do
    sh "yarn vite build"
  end
end
