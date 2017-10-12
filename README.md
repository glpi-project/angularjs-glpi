# ngGLPI

![Flyve MDM banner](https://user-images.githubusercontent.com/663460/26935464-54267e9c-4c6c-11e7-86df-8cfa6658133e.png)

[![Greenkeeper badge](https://badges.greenkeeper.io/flyve-mdm/angularjs-glpi.svg)](https://greenkeeper.io/)
[![License](https://img.shields.io/github/license/flyve-mdm/flyve-mdm-android-inventory-agent.svg?&label=License)](https://github.com/flyve-mdm/angularjs-glpi/blob/master/LICENSE.md)
[![Follow twitter](https://img.shields.io/twitter/follow/FlyveMDM.svg?style=social&label=Twitter&style=flat-square)](https://twitter.com/FlyveMDM)
[![Telegram Group](https://img.shields.io/badge/Telegram-Group-blue.svg)](https://t.me/flyvemdm)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Flyve MDM is a mobile device management software that enables you to secure and manage all the mobile devices of your business via a unique web-based console (MDM).

To get started, check out [Flyve MDM website](https://flyve-mdm.com/)!

## Table of Contents

* [Synopsis](#synopsis)
* [Build Status](#build-status)
* [Installation](#installation)
* [Documentation](#documentation)
* [Versioning](#versioning)
* [Contact](#contact)
* [Contribute](#contribute)
* [Copying](#copying)

## Synopsis

Bower component and NPM module for using AngularJS with GLPI API REST

This project is a **work in progress**. The information here provided could change at any given time.

### List of functions

* GLPI.initsession()
* GLPI.killsession()
* GLPI.getMyProfiles()
* GLPI.getActiveProfile()
* GLPI.changeActiveProfile()
* GLPI.getMyEntities()
* GLPI.getActiveEntities()
* GLPI.changeActiveEntities()
* GLPI.getFullSession()
* GLPI.getAnTtem()
* GLPI.getAllUtems()
* GLPI.getSubItems()
* GLPI.getMultipleItems()
* GLPI.listSearchOptions()
* GLPI.searchItems()
* GLPI.addItems()
* GLPI.updateItems()
* GLPI.deleteItems()

### List itemtypes

* Alert
* AuthLDAP
* Computer
* Config
* ConsumableItem
* Contact
* Contract
* CronTask
* CronTaskLog
* DBConnection
* DisplayPreference
* Document
* AuthLdapReplicate
* Event
* KnowbaseItem
* Link
* Log
* MailCollector
* Monitor
* NetworkEquipment
* Notification
* NotificationEvent
* NotificationMailSetting
* AuthMail
* NotificationTemplate
* NotImportedEmail
* Peripheral
* Phone
* Plugin
* Printer
* Profile
* Project
* QueuedMail
* Reminder
* Bookmark
* RSSFeed
* Rule
* RuleCollection
* SLA
* SlaLevel_Ticket
* Software
* SoftwareLicense
* Supplier
* TicketFollowup
* TicketSatisfaction
* CartridgeItem
* Transfer
* User
* CommonDBConnexity
* CommonDropdown
* CommonITILObject
* CommonITILTask
* AutoUpdateSystem
* Blacklist
* CartridgeItemType
* Item_DeviceSoundCard
* Item_Problem
* Item_Project
* Item_Ticket
* ITILCategory
* KnowbaseItem_Profile
* KnowbaseItem_User
* KnowbaseItemCategory
* KnowbaseItemTranslation
* Link_Itemtype
* Change
* Location
* Manufacturer
* MonitorModel
* MonitorType
* Netpoint
* Network
* NetworkAlias
* NetworkEquipmentFirmware
* NetworkEquipmentModel
* NetworkEquipmentType
* Change_Group
* NetworkInterface
* NetworkName
* NetworkPort
* NetworkPort_NetworkPort
* NetworkPort_Vlan
* NetworkPortAggregate
* NetworkPortAlias
* NetworkPortDialup
* NetworkPortEthernet
* NetworkPortInstantiation
* Change_Item
* NetworkPortLocal
* NetworkPortMigration
* NetworkPortWifi
* Notepad
* NotificationTarget
* NotificationTargetCartridgeItem
* NotificationTargetChange
* NotificationTargetCommonITILObject
* NotificationTargetConsumableItem
* NotificationTargetContract
* Change_Problem
* NotificationTargetCrontask
* NotificationTargetDBConnection
* NotificationTargetFieldUnicity
* NotificationTargetInfocom
* NotificationTargetMailCollector
* NotificationTargetPlanningRecall
* NotificationTargetProblem
* NotificationTargetProject
* NotificationTargetProjectTask
* NotificationTargetReservation
* Change_Project
* NotificationTargetSoftwareLicense
* NotificationTargetTicket
* NotificationTargetUser
* NotificationTemplateTranslation
* OperatingSystem
* OperatingSystemServicePack
* OperatingSystemVersion
* PeripheralModel
* PeripheralType
* PhoneModel
* Change_Supplier
* PhonePowerSupply
* PhoneType
* PlanningRecall
* PrinterModel
* PrinterType
* Problem
* Problem_Supplier
* Problem_Ticket
* Problem_User
* ProblemCost
* Change_Ticket
* ProblemTask
* Profile_Reminder
* Profile_RSSFeed
* Profile_User
* ProfileRight
* ProjectCost
* ProjectState
* ProjectTask
* ProjectTask_Ticket
* ProjectTaskTeam
* Change_User
* ProjectTaskType
* ProjectTeam
* ProjectType
* RegisteredID
* Reminder_User
* RequestType
* Reservation
* ReservationItem
* RSSFeed_User
* RuleAction
* ChangeCost
* RuleCriteria
* RuleDictionnaryComputerModel
* RuleDictionnaryComputerModelCollection
* RuleDictionnaryComputerType
* RuleDictionnaryComputerTypeCollection
* RuleDictionnaryDropdown
* RuleDictionnaryDropdownCollection
* RuleDictionnaryManufacturer
* RuleDictionnaryManufacturerCollection
* RuleDictionnaryMonitorModel
* BlacklistedMailContent
* ChangeTask
* RuleDictionnaryMonitorModelCollection
* RuleDictionnaryMonitorType
* RuleDictionnaryMonitorTypeCollection
* RuleDictionnaryNetworkEquipmentModel
* RuleDictionnaryNetworkEquipmentModelCollection
* RuleDictionnaryNetworkEquipmentType
* RuleDictionnaryNetworkEquipmentTypeCollection
* RuleDictionnaryOperatingSystem
* RuleDictionnaryOperatingSystemCollection
* RuleDictionnaryOperatingSystemServicePack
* ChangeValidation
* RuleDictionnaryOperatingSystemServicePackCollection
* RuleDictionnaryOperatingSystemVersion
* RuleDictionnaryOperatingSystemVersionCollection
* RuleDictionnaryPeripheralModel
* RuleDictionnaryPeripheralModelCollection
* RuleDictionnaryPeripheralType
* RuleDictionnaryPeripheralTypeCollection
* RuleDictionnaryPhoneModel
* RuleDictionnaryPhoneModelCollection
* RuleDictionnaryPhoneType
* CommonDBChild
* RuleDictionnaryPhoneTypeCollection
* RuleDictionnaryPrinter
* RuleDictionnaryPrinterCollection
* RuleDictionnaryPrinterModel
* RuleDictionnaryPrinterModelCollection
* RuleDictionnaryPrinterType
* RuleDictionnaryPrinterTypeCollection
* RuleDictionnarySoftware
* RuleDictionnarySoftwareCollection
* RuleImportComputer
* CommonDBRelation
* RuleImportComputerCollection
* RuleImportEntity
* RuleImportEntityCollection
* RuleMailCollector
* RuleMailCollectorCollection
* RuleRight
* RuleRightCollection
* RuleRightParameter
* RuleSoftwareCategory
* RuleSoftwareCategoryCollection
* CommonDevice
* RuleTicket
* RuleTicketCollection
* SlaLevel
* SlaLevelAction
* SlaLevelCriteria
* SoftwareCategory
* SoftwareLicenseType
* SoftwareVersion
* SolutionTemplate
* SolutionType
* CommonImplicitTreeDropdown
* SsoVariable
* State
* Supplier_Ticket
* SupplierType
* TaskCategory
* Ticket
* Ticket_Ticket
* Ticket_User
* TicketCost
* TicketRecurrent
* CommonITILActor
* TicketTask
* TicketTemplate
* TicketTemplateHiddenField
* TicketTemplateMandatoryField
* TicketTemplatePredefinedField
* TicketValidation
* UserCategory
* UserEmail
* UserTitle
* VirtualMachineState
* CommonITILCost
* VirtualMachineSystem
* VirtualMachineType
* Vlan
* WifiNetwork
* CommonITILValidation
* CommonTreeDropdown
* Bookmark_User
* Computer_Item
* Computer_SoftwareLicense
* Computer_SoftwareVersion
* ComputerDisk
* ComputerModel
* ComputerType
* ComputerVirtualMachine
* Consumable
* ConsumableItemType
* Contact_Supplier
* Budget
* ContactType
* Contract_Item
* Contract_Supplier
* ContractCost
* ContractType
* DeviceCase
* DeviceCaseType
* DeviceControl
* DeviceDrive
* DeviceGraphicCard
* Calendar
* DeviceHardDrive
* DeviceMemory
* DeviceMemoryType
* DeviceMotherboard
* DeviceNetworkCard
* DevicePci
* DevicePowerSupply
* DeviceProcessor
* DeviceSoundCard
* Document_Item
* Calendar_Holiday
* DocumentCategory
* DocumentType
* Domain
* DropdownTranslation
* Entity
* Entity_KnowbaseItem
* Entity_Reminder
* Entity_RSSFeed
* Fieldblacklist
* FieldUnicity
* CalendarSegment
* Filesystem
* FQDN
* FQDNLabel
* Group
* Group_KnowbaseItem
* Group_Problem
* Group_Reminder
* Group_RSSFeed
* Group_Ticket
* Group_User
* Cartridge
* Holiday
* Infocom
* InterfaceType
* IPAddress
* IPAddress_IPNetwork
* IPNetmask
* IPNetwork
* IPNetwork_Vlan
* Item_DeviceCase
* Item_DeviceControl
* CartridgeItem_PrinterModel
* Item_DeviceDrive
* Item_DeviceGraphicCard
* Item_DeviceHardDrive
* Item_DeviceMemory
* Item_DeviceMotherboard
* Item_DeviceNetworkCard
* Item_DevicePci
* Item_DevicePowerSupply
* Item_DeviceProcessor
* Item_Devices


## Build Status

|**Release channel**|Beta Channel|
|:---:|:---:|
|||

## Installation

1. `bower install angularjs-glpi`.
1. Include the `service.js` script, and this script's dependencies are included in your app.
1. Add `ngGLPI` as a module dependency to your app.

## Documentation

We maintain a detailed documentation of the project in the [project's website](http://flyve.org/angularjs-glpi/).

## Versioning

In order to provide transparency on our release cycle and to maintain backward compatibility, Flyve MDM is maintained under [the Semantic Versioning guidelines](http://semver.org/). We are committed to following and complying with the rules, the best we can.

See [the tags section of our GitHub project](https://github.com/flyve-mdm/angularjs-glpi/tags) for changelogs for each release version of Flyve MDM. Release announcement posts on [the official Teclib' blog](http://www.teclib-edition.com/en/communities/blog-posts/) contain summaries of the most noteworthy changes made in each release.

## Contact

For notices about major changes and general discussion of Flyve MDM development, subscribe to the [/r/FlyveMDM](http://www.reddit.com/r/FlyveMDM) subreddit.
You can also chat with us via IRC in [#flyve-mdm on freenode](http://webchat.freenode.net/?channels=flyve-mdm]) or [@flyvemdmdev on Telegram](https://t.me/flyvemdmdev).

## Contribute

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our
guidelines for [contributing](./CONTRIBUTING.md) and then check out one of our issues in the [Issues Dashboard](https://github.com/flyve-mdm/angularjs-glpi/issues).

## Copying

* **Name**: [Flyve MDM](https://flyve-mdm.com/) is a registered trademark of [Teclib'](http://www.teclib-edition.com/en/).
* **Code**: you can redistribute it and/or modify
    it under the terms of the GNU General Public License ([GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)).
* **Documentation**: released under Attribution 4.0 International ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).
