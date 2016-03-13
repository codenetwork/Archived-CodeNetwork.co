# BeastCollectorMin
It's like BeastCollector, but without the crap.

## Getting Started
To get this app on stage, we need to install a few things first.

#### Requirements to get started
  - Ruby 2.3.0

### Step 1: Installing Ruby
You will first need to install Ruby. On ****nix machines, you may use your favourite package managers to install the latest version of ruby, or preferably, use RVM (ruby version manager). On Windows, you will need to use the ruby installer... On windows you are pretty much screwed aye.
  - [Ruby Official](https://www.ruby-lang.org/en/downloads/)
  - [RVM](https://rvm.io/)

#### Step 1.1: Installing Gems
You will now need to collect Gems. To become a jeweler, let's use gems. You will need to install this if using an old version of Ruby. Since we are using 2.3.0, please don't actually use these instructions...
  - [Gems](http://guides.rubygems.org/)

### Step 2: Installing Bundler
Bundler is our package manager. You will need to 'install' this for every version of Ruby in RVM.
```
gem install bundler
```
  - [Bundler](http://bundler.io/#getting-started)

### Step 3: Go to the location of the project
Bundler will automatically read the Gemfile and install the relevant gems. Running these commands should give you a nicer outcome than that silly NPM.
```
cd /your/path/here/BeastCollectorMin
bundler install
```
### Step 4: Allow Sinatra to take the stage
Now that we've got our environment ready, let's get the app up and running in our development environment.
```
cd /your/path/here/BeastCollectorMin
ruby app.rb
```

### Step 5: How to Docker
Information on docker here one day, I promise.
