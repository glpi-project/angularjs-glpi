# GLPI API Client Library for AngularJS

![GLPI banner](https://user-images.githubusercontent.com/29282308/31666160-8ad74b1a-b34b-11e7-839b-043255af4f58.png)
[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![Greenkeeper badge](https://badges.greenkeeper.io/glpi-project/angularjs-glpi.svg)](https://greenkeeper.io/)
[![License](https://img.shields.io/github/license/glpi-project/angularjs-glpi.svg?&label=License)](https://github.com/glpi-project/angularjs-glpi/blob/master/LICENSE.md)
[![Follow twitter](https://img.shields.io/twitter/follow/glpi_project.svg?style=social&label=Twitter&style=flat-square)](https://twitter.com/glpi_project)
[![Telegram Group](https://img.shields.io/badge/Telegram-Group-blue.svg)](https://t.me/glpien)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Easily access GLPI APIs from AngularJS.

**GLPI** stands for Gestionnaire Libre de Parc Informatique is a Free Asset and IT Management Software package, that provides ITIL Service Desk features, licenses tracking and software auditing.

## Table of Contents

* [Synopsis](#synopsis)
* [Build Status](#build-status)
* [Compatibility Matrix](#matrix)
* [Installation](#installation)
* [Documentation](#documentation)
* [Versioning](#versioning)
* [Contact](#contact)
* [Contribute](#contribute)
* [Copying](#copying)

## Synopsis

This library is specifically designed for using AngularJS with GLPI, features several functionalities common to all GLPI APIs, for example:

* HTTP transport to APIs.
* Error handling
* Authentication
* JSON parsing
* Custom Item Types
* Media download/upload
* Batching.

You will be able to call to all the methods that belong to the [GLPI REST API](https://github.com/glpi-project/glpi/blob/master/apirest.md), for more information such as the list of the main functions and item types of the project visit the [project's website](https://glpi-project.github.io/angularjs-glpi/).

## Build Status

|**Release channel**|**Beta Channel**|
|:---:|:---:|
|[![Travis build](https://api.travis-ci.org/glpi-project/angularjs-glpi.svg?branch=master)](https://travis-ci.org/glpi-project/angularjs-glpi)|[![Travis build](https://api.travis-ci.org/glpi-project/angularjs-glpi.svg?branch=develop)](https://travis-ci.org/glpi-project/angularjs-glpi)|

## Matrix

|**GLPI Version**|9.1.1|9.1.2|9.1.3|9.1.5|9.1.6|9.2.0|
|:----|----|----|----|---|---|---|
|**GLPI API Client**|||||||

## Installation

1. `bower install angularjs-glpi`.
1. Include the `service.js` script, and this script's dependencies are included in your app.
1. Add `ngGLPI` as a module dependency to your app.

## Documentation

We maintain a detailed documentation of the project on the [website](https://glpi-project.github.io/angularjs-glpi/).

## Versioning

In order to provide transparency on our release cycle and to maintain backward compatibility, GLPI is maintained under [the Semantic Versioning guidelines](http://semver.org/). We are committed to following and complying with the rules, the best we can.

See [the tags section of our GitHub project](https://github.com/glpi-project/angularjs-glpi/tags) for changelogs for each release version of the GLPI API Client. Release announcement posts on [the official Teclib' blog](http://www.teclib-edition.com/en/communities/blog-posts/) contain summaries of the most noteworthy changes made in each release.

## Contact

Chat with us via IRC in [#glpi on freenode](http://webchat.freenode.net/?channels=glpi]) or [@glpien on Telegram](https://t.me/glpien).

## Contribute

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our
guidelines for [contributing](./CONTRIBUTING.md) and then check out one of our issues in the [Issues Dashboard](https://github.com/glpi-project/angularjs-glpi/issues).

## Copying

* **Name**: [GLPI](http://glpi-project.org/) is a registered trademark of [Teclib'](http://www.teclib-edition.com/en/).
* **Code**: you can redistribute it and/or modify
    it under the terms of the GNU General Public License ([GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)).
* **Documentation**: released under Attribution 4.0 International ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).