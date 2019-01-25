# SpFx ReadMe

The following steps will walk you through setting up the SharePoint framework for new development or running this demo project. 

# Before You Start

  - Download and Install [NodeJs and NPM](https://nodejs.org/en/)
  --For more info on NPM [Read This](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
  - Install a Code Editor we suggest [VS Code](https://code.visualstudio.com/)
  - Install Gulp and Yeomen with NPM using the following commands
  
```
 npm install -g yo gulp
```
        
The -g indicates that you are installing yeomen and gulp globally so yo can use them anywhere on your system. 

-Install the SharePoint framework yeomen package

```
 npm install -g @microsoft/generator-sharepoint
```


After these steps you will be able to develop SpFx webparts and extentions locally by following the rest of the instructions [here.](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part) To develop webparts in a live O365 environment do the steps [here](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant) before trying to attempt development

To run this project continue through the ReadMe

Download the zip file or clone the repository locally. 

Open your command prompt or terminal (VS Code has a built in terminal), navigate to the root folder of the project if you download the zip it will look similar to this

```
C:\\PathToDownloadFolder\sps-spfx-2019-master\sps-spfx-2019-master 
```

In this foler run npm install

```
npm install
```

This isn't strictly necesary but I am using a specific version fo SpFx installed locally in this location and running this here assures you have it. 

After that runs navigate the terminal of command prompt into the QuickLinks Folder and run NPM install again. 

```
cd QuickLinks
npm install
```

This install should take longer as it is installing all the dependencies for development. 

After that finishes running you should get a status message. To run the webpart run the following command

```
gulp serve
```

If you want to make any edits remember to only make them in the src folder. If you have any questison you can follow the Getting started link below or reach out to me on twitter. 

### More Information

For more information on the various technologis, SpFx, and deployment go through the following links or hit me up on twitter. Full disclaimer. I added some CodeAcademy links because they are free and I've used them in the past. I have not used any of these tutorials but they should give you at least a place to start learning these skills for free. 

- [SpFx Getting Started](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Deploying SpFx](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page)
- [React Docs](https://reactjs.org/)
- [Online React Tutorial](https://www.codecademy.com/learn/react-101)
- [TypeScript Docs](http://www.typescriptlang.org/)
- [TypeScript tutorial](https://medium.freecodecamp.org/want-to-learn-typescript-heres-our-free-22-part-course-21cd9bbb5ef5)
- [SCSS Docs](https://sass-lang.com/)
- [SCSS Tutorial](https://www.codecademy.com/learn/learn-sass)


   
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Written with Dillinger: a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.
