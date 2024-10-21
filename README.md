# Joke Generator

This is an angular cli builder which generates a joke. Please follow the below steps to install and use it for your application.

## Installation
To install this make sure you have the latest versions of node, angular and git.
First, clone the repository:
```
git clone https://github.com/atharva-musale/joke-generator-builder.git
```

Then install the dependencies:
```
npm install
```

Once the installation is done, we need to build the code to generate the dist folder, for that run the following command:
```
npm run build
```

## Generating link for the builder
To use the builder in your angular project, you first need to publish the builder. To do so locally, run the following command:
```
npm link
```

To check if the link has been created properly you can run the following command:
```
npm ls -g --depth=0 --link=true
```

Please note that to remove the link, you can run the following command (not to be done while using the builder):
```
npm rm --global @builders/joke-generator
```

## Using the link in your application
Now that the link has been created, we need to link our project to the builder.
To do so, we first need to add the builder in the `angular.json` of your angular project.
It will look something like this:
```
"generate-jokes": {
  "builder": "@builders/joke-generator:generate",
  "options": {
    "knockKnock": true,
    "general": false
  }
}
```
Now you can link the builder, by using the following command:
```
npm link @builders/joke-generator
```

Please note that the link is removed if `npm install` is done in your project again.

Now, to run the builder, run the following command in the root of the project:
```
ng run <your-project-name>:generate
```