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

### List Itemtypes

<table>
    <tr>
        <td> 
            <ol>
                <li>Alert</li>
                <li>AuthLDAP</li>
                <li>Computer</li>
                <li>Config</li>
                <li>ConsumableItem</li>
                <li>Contact</li>
                <li>Contract</li>
                <li>CronTask</li>
                <li>CronTaskLog</li>
                <li>DBConnection</li>
                <li>DisplayPreference</li>
                <li>Document</li>
                <li>AuthLdapReplicate</li>
                <li>Event</li>
                <li>KnowbaseItem</li>
                <li>Link</li>
                <li>Log</li>
                <li>MailCollector</li>
                <li>Monitor</li>
                <li>NetworkEquipment</li>
                <li>Notification</li>
                <li>NotificationEvent</li>
                <li>NotificationMailSetting</li>
                <li>AuthMail</li>
                <li>NotificationTemplate</li>
                <li>NotImportedEmail</li>
                <li>Peripheral</li>
                <li>Phone</li>
                <li>Plugin</li>
                <li>Printer</li>
                <li>Profile</li>
                <li>Project</li>
                <li>QueuedMail</li>
                <li>Reminder</li>
                <li>Bookmark</li>
                <li>RSSFeed</li>
                <li>Rule</li>
                <li>RuleCollection</li>
                <li>SLA</li>
                <li>SlaLevel_Ticket</li>
                <li>Software</li>
                <li>SoftwareLicense</li>
                <li>Supplier</li>
                <li>TicketFollowup</li>
                <li>TicketSatisfaction</li>
                <li>CartridgeItem</li>
                <li>Transfer</li>
                <li>User</li>
                <li>CommonDBConnexity</li>
                <li>CommonDropdown</li>
                <li>CommonITILObject</li>
                <li>CommonITILTask</li>
                <li>AutoUpdateSystem</li>
                <li>Blacklist</li>
                <li>CartridgeItemType</li>
                <li>Item_DeviceSoundCard</li>
                <li>Item_Problem</li>
                <li>Item_Project</li>
                <li>Item_Ticket</li>
                <li>ITILCategory</li>
                <li>AutoUpdateSystem</li>
                <li>Blacklist</li>
                <li>CartridgeItemType</li>
                <li>Item_DeviceSoundCard</li>
                <li>Item_Problem</li>
                <li>Item_Project</li>
                <li>Item_Ticket</li>
                <li>ITILCategory</li>
                <li>KnowbaseItem_Profile</li>
                <li>KnowbaseItem_User</li>
                <li>KnowbaseItemCategory</li>
                <li>KnowbaseItemTranslation</li>
                <li>Link_Itemtype</li>
                <li>Change</li>
                <li>Location</li>
                <li>Manufacturer</li>
                <li>MonitorModel</li>
                <li>MonitorType</li>
                <li>Netpoint</li>
                <li>Network</li>
                <li>NetworkAlias</li>
                <li>NetworkEquipmentFirmware</li>
                <li>NetworkEquipmentModel</li>
                <li>NetworkEquipmentType</li>
                <li>Change_Group</li>
            </ol>
        </td>
        <td> 
            <ol start="86">
                <li>NetworkInterface</li>
                <li>NetworkName</li>
                <li>NetworkPort</li>
                <li>NetworkPort_NetworkPort</li>
                <li>NetworkPort_Vlan</li>
                <li>NetworkPortAggregate</li>
                <li>NetworkPortAlias</li>
                <li>NetworkPortDialup</li>
                <li>NetworkPortEthernet</li>
                <li>NetworkPortInstantiation</li>
                <li>Change_Item</li>
                <li>NetworkPortLocal</li>
                <li>NetworkPortMigration</li>
                <li>NetworkPortWifi</li>
                <li>Notepad</li>
                <li>NotificationTarget</li>
                <li>NotificationTargetCartridgeItem</li>
                <li>NotificationTargetChange</li>
                <li>NotificationTargetCommonITILObject</li>
                <li>NotificationTargetConsumableItem</li>
                <li>NotificationTargetContract</li>
                <li>Change_Problem</li>
                <li>NotificationTargetCrontask</li>
                <li>NotificationTargetDBConnection</li>
                <li>NotificationTargetFieldUnicity</li>
                <li>NotificationTargetInfocom</li>
                <li>NotificationTargetMailCollector</li>
                <li>NotificationTargetPlanningRecall</li>
                <li>NotificationTargetProblem</li>
                <li>NotificationTargetProject</li>
                <li>NotificationTargetProjectTask</li>
                <li>NotificationTargetReservation</li>
                <li>Change_Project</li>
                <li>NotificationTargetSoftwareLicense</li>
                <li>NotificationTargetTicket</li>
                <li>NotificationTargetUser</li>
                <li>NotificationTemplateTranslation</li>
                <li>OperatingSystem</li>
                <li>OperatingSystemServicePack</li>
                <li>OperatingSystemVersion</li>
                <li>PeripheralModel</li>
                <li>PeripheralType</li>
                <li>PhoneModel</li>
                <li>Change_Supplier</li>
                <li>PhonePowerSupply</li>
                <li>PhoneType</li>
                <li>PlanningRecall</li>
                <li>PrinterModel</li>
                <li>PrinterType</li>
                <li>Problem</li>
                <li>Problem_Supplier</li>
                <li>Problem_Ticket</li>
                <li>Problem_User</li>
                <li>ProblemCost</li>
                <li>Change_Ticket</li>
                <li>ProblemTask</li>
                <li>Profile_Reminder</li>
                <li>Profile_RSSFeed</li>
                <li>Profile_User</li>
                <li>ProfileRight</li>
                <li>ProjectCost</li>
                <li>ProjectState</li>
                <li>ProjectTask</li>
                <li>ProjectTask_Ticket</li>
                <li>ProjectTaskTeam</li>
                <li>Change_User</li>
                <li>ProjectTaskType</li>
                <li>ProjectTeam</li>
                <li>ProjectType</li>
                <li>RegisteredID</li>
                <li>Reminder_User</li>
                <li>RequestType</li>
                <li>Reservation</li>
                <li>ReservationItem</li>
                <li>RSSFeed_User</li>
                <li>RuleAction</li>
                <li>ChangeCost</li>
                <li>RuleCriteria</li>
                <li>RuleDictionnaryComputerModel</li>
                <li>RuleDictionnaryComputerModelCollection</li>
                <li>RuleDictionnaryComputerType</li>
                <li>RuleDictionnaryComputerTypeCollection</li>
                <li>RuleDictionnaryDropdown</li>
                <li>RuleDictionnaryDropdownCollection</li>
                <li>RuleDictionnaryManufacturer</li>
            </ol>
        </td>
        <td> 
            <ol start="171">
                <li>RuleDictionnaryManufacturerCollection</li>
                <li>RuleDictionnaryMonitorModel</li>
                <li>BlacklistedMailContent</li>
                <li>ChangeTask</li>
                <li>RuleDictionnaryMonitorModelCollection</li>
                <li>RuleDictionnaryMonitorType</li>
                <li>RuleDictionnaryMonitorTypeCollection</li>
                <li>RuleDictionnaryNetworkEquipmentModel</li>
                <li>RuleDictionnaryNetworkEquipmentModelCollection</li>
                <li>RuleDictionnaryMonitorModelCollection</li>
                <li>RuleDictionnaryMonitorType</li>
                <li>RuleDictionnaryMonitorTypeCollection</li>
                <li>RuleDictionnaryNetworkEquipmentModel</li>
                <li>RuleDictionnaryNetworkEquipmentModelCollection</li>
                <li>RuleDictionnaryNetworkEquipmentType</li>
                <li>RuleDictionnaryNetworkEquipmentTypeCollection</li>
                <li>RuleDictionnaryOperatingSystem</li>
                <li>RuleDictionnaryOperatingSystemCollection</li>
                <li>RuleDictionnaryOperatingSystemServicePack</li>
                <li>ChangeValidation</li>
                <li>RuleDictionnaryOperatingSystemServicePackCollection</li>
                <li>RuleDictionnaryOperatingSystemVersion</li>
                <li>RuleDictionnaryOperatingSystemVersionCollection</li>
                <li>RuleDictionnaryPeripheralModel</li>
                <li>RuleDictionnaryPeripheralModelCollection</li>
                <li>RuleDictionnaryPeripheralType</li>
                <li>RuleDictionnaryPeripheralTypeCollection</li>
                <li>RuleDictionnaryPhoneModel</li>
                <li>RuleDictionnaryPhoneModelCollection</li>
                <li>RuleDictionnaryPhoneType</li>
                <li>CommonDBChild</li>
                <li>RuleDictionnaryPhoneTypeCollection</li>
                <li>RuleDictionnaryPrinter</li>
                <li>RuleDictionnaryPrinterCollection</li>
                <li>RuleDictionnaryPrinterModel</li>
                <li>RuleDictionnaryPrinterModelCollection</li>
                <li>RuleDictionnaryPrinterType</li>
                <li>RuleDictionnaryPrinterTypeCollection</li>
                <li>RuleDictionnarySoftware</li>
                <li>RuleDictionnarySoftwareCollection</li>
                <li>RuleImportComputer</li>
                <li>CommonDBRelation</li>
                <li>RuleImportComputerCollection</li>
                <li>RuleImportEntity</li>
                <li>RuleImportEntityCollection</li>
                <li>RuleMailCollector</li>
                <li>RuleMailCollectorCollection</li>
                <li>RuleRight</li>
                <li>RuleRightCollection</li>
                <li>RuleRightParameter</li>
                <li>RuleSoftwareCategory</li>
                <li>RuleSoftwareCategoryCollection</li>
                <li>CommonDevice</li>
                <li>RuleTicket</li>
                <li>RuleTicketCollection</li>
                <li>SlaLevel</li>
                <li>SlaLevelAction</li>
                <li>SlaLevelCriteria</li>
                <li>SoftwareCategory</li>
                <li>SoftwareLicenseType</li>
                <li>SoftwareVersion</li>
                <li>SolutionTemplate</li>
                <li>SolutionType</li>
                <li>CommonImplicitTreeDropdown</li>
                <li>SsoVariable</li>
                <li>State</li>
                <li>Supplier_Ticket</li>
                <li>SupplierType</li>
                <li>TaskCategory</li>
                <li>Ticket</li>
                <li>Ticket_Ticket</li>
                <li>Ticket_User</li>
                <li>TicketCost</li>
                <li>TicketRecurrent</li>
                <li>CommonITILActor</li>
                <li>TicketTask</li>
                <li>TicketTemplate</li>
                <li>TicketTemplateHiddenField</li>
                <li>TicketTemplateMandatoryField</li>
                <li>TicketTemplatePredefinedField</li>
                <li>TicketValidation</li>
                <li>UserCategory</li>
                <li>UserEmail</li>
                <li>UserTitle</li>
                <li>VirtualMachineState</li>
            </ol>
        </td>
        <td> 
            <ol start="256">
                <li>CommonITILCost</li>
                <li>VirtualMachineSystem</li>
                <li>VirtualMachineType</li>
                <li>Vlan</li>
                <li>WifiNetwork</li>
                <li>CommonITILValidation</li>
                <li>CommonTreeDropdown</li>
                <li>Bookmark_User</li>
                <li>Computer_Item</li>
                <li>Computer_SoftwareLicense</li>
                <li>Computer_SoftwareVersion</li>
                <li>ComputerDisk</li>
                <li>ComputerModel</li>
                <li>ComputerType</li>
                <li>ComputerVirtualMachine</li>
                <li>Consumable</li>
                <li>ConsumableItemType</li>
                <li>Contact_Supplier</li>
                <li>Budget</li>
                <li>ContactType</li>
                <li>Contract_Item</li>
                <li>Contract_Supplier</li>
                <li>ContractCost</li>
                <li>ContractType</li>
                <li>DeviceCase</li>
                <li>DeviceCaseType</li>
                <li>DeviceControl</li>
                <li>DeviceDrive</li>
                <li>DeviceGraphicCard</li>
                <li>Calendar</li>
                <li>DeviceHardDrive</li>
                <li>DeviceMemory</li>
                <li>DeviceMemoryType</li>
                <li>DeviceMotherboard</li>
                <li>DeviceNetworkCard</li>
                <li>DevicePci</li>
                <li>DevicePowerSupply</li>
                <li>DeviceProcessor</li>
                <li>DeviceSoundCard</li>
                <li>Document_Item</li>
                <li>Calendar_Holiday</li>
                <li>DocumentCategory</li>
                <li>DocumentType</li>
                <li>Domain</li>
                <li>DropdownTranslation</li>
                <li>Entity</li>
                <li>Entity_KnowbaseItem</li>
                <li>Entity_Reminder</li>
                <li>Entity_RSSFeed</li>
                <li>Fieldblacklist</li>
                <li>FieldUnicity</li>
                <li>CalendarSegment</li>
                <li>Filesystem</li>
                <li>FQDN</li>
                <li>FQDNLabel</li>
                <li>Group</li>
                <li>Group_KnowbaseItem</li>
                <li>Group_Problem</li>
                <li>Group_Reminder</li>
                <li>Group_RSSFeed</li>
                <li>Group_Ticket</li>
                <li>Group_User</li>
                <li>Cartridge</li>
                <li>Holiday</li>
                <li>Infocom</li>
                <li>InterfaceType</li>
                <li>IPAddress</li>
                <li>IPAddress_IPNetwork</li>
                <li>IPNetmask</li>
                <li>IPNetwork</li>
                <li>IPNetwork_Vlan</li>
                <li>Item_DeviceCase</li>
                <li>Item_DeviceControl</li>
                <li>CartridgeItem_PrinterModel</li>
                <li>Item_DeviceDrive</li>
                <li>Item_DeviceGraphicCard</li>
                <li>Item_DeviceHardDrive</li>
                <li>Item_DeviceMemory</li>
                <li>Item_DeviceMotherboard</li>
                <li>Item_DeviceNetworkCard</li>
                <li>Item_DevicePci</li>
                <li>Item_DevicePowerSupply</li>
                <li>Item_DeviceProcessor</li>
                <li>Item_Devices</li>
            </ol>
        </td>
    </tr>
</table>


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
