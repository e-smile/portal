
                /* compiled from before-app-build ant task */
                (function(W) {
                W.E = W.E || {}
                W.E.__whileInitApp = function() {Ext.getApp().setStoreResource({ "msRoot" : null, "themes" : { "model" : "StructureItems", "selector" : "theme" }, "options" : { "model" : "StructureItems", "selector" : "option" }, "categories" : { "model" : "StructureItems", "selector" : "cat" }, "typeOfOrganisation" : { "model" : "TypeItems" }, "typeOfPosition" : { "model" : "TypeItems" }, "typeOfProjectSite" : { "model" : "TypeItems" }, "typeOfOffice" : { "model" : "TypeItems" }, "typeOfEvent" : { "model" : "TypeItems" }, "typeOfMonitoringVisit" : { "model" : "TypeItems" }, "typeOfTask" : { "model" : "TypeItems" }, "typeOfLicense" : { "model" : "TypeItems" }, "coreItems" : { "model" : "CoreItems", "storeId" : "instancestore", "sessionName" : "xmlInstance", "autoLoad" : "true" }, "catalogueItems" : { "model" : "CoreItems", "storeId" : "instancestore", "sessionName" : "xmlInstance", "autoLoad" : "true" }, "period" : null, "repeatType" : null, "lastModified" : null, "scale" : null, "shape" : null, "geoStyle" : null, "bingImageryStyle" : null, "language" : { "model" : "TypeItems", "selector" : ".//item" }, "countries" : { "model" : "TypeItems", "selector" : ".//item" }, "personTitle" : { "model" : "TypeItems" }, "missingValues" : null, "uom" : null, "workflowSequence" : null, "resultLevel" : null, "administrativeLevels" : null, "geoStructure" : null, "msApplicationData" : null, "aoType" : null, "event" : null, "test" : null, "ct" : null, "cmp" : null, "monitoringVisit" : null, "assignmentCoverage" : [null, null], "resultMatrix" : null, "result" : null, "responsiblityDispatch" : null, "indicator" : null, "reportingFlow" : null, "monitoringVisitRule" : null, "form" : null, "section" : null, "container" : null, "indicatorContainer" : null, "field" : null, "topic" : null, "programmeActivity" : null, "office" : null, "organisation" : null, "person" : null, "beneficiary" : null, "msDomain" : null, "search" : null, "projectSite" : null, "dashboard" : null, "chart" : null, "dashboardChart" : null, "relationship" : null, "map" : null, "layer" : null, "groupLayer" : null, "metrics" : null, "dataset" : null, "ms-admin" : null, "msSetting" : null, "msUserData" : null, "typeData" : null, "rootData" : null, "dataItem" : null, "dtStat" : null, "rootMetaData" : null, "formModel" : null, "valueContent" : null, "processDefinition" : null, "jobMetaRef" : null, "job" : null, "processInstance" : null, "task" : null });Ext.apply(Ext.getApp().apiKeys,{ "bing" : "Agc_247vNYJkUYF6emUwblcqmFxrEXOf19cLnDn-CdXUtqskgfM_-jvbh1agJkhL", "google" : "ABQIAAAA-PnDng4F1lwKJlN_WBjjJRT2yXp_ZAY8_ufC3CFXhHIE1NvwkxRjaUYvsCBVOXxqd_m000G_Mhejaw", "tile.cloudmade.com" : "3d13ea4ad3414e848fea187ddd4ed912", "tile.mabox" : "e-smile.l2mn23jk" });(function(){ var  e=Ext.extend, r = E.action.Mgr ; r.models={msConfiguration: []}; r.register({ "id" : "getInstance", "text" : "get instance", "tbar" : true, "width" : "10", "menuId" : "default", handler: function() {inst = this.manager.cmp.instance ;ci('instance:', inst, inst.xmlRoot) } }); r.register({ "id" : "logout", handler: function() {var app = Ext.getApp(); app.ajaxCall(app.xml.wrap('action','logout')) } }); r.register({ "id" : "forgotPsw", "text" : "request passord", xfa : 'online', getSelectedModel: function() {return [Ext.getApp().appInstance]}, entityName : 'appInstance', actionCfg: { url : Ext.getApp().buildUrl('resetPsw') }, handler: function(){this.getSteward().submitHandler(this.actionCfg)} }); r.register({ "id" : "add", "text" : "add", "tooltip" : "Add one empty row (Enter)", "atype" : "gridaction", "iconCls" : "svg plus-1", "tbar" : true, "cmenu" : true, "key" : " Ext.EventObject.ENTER", handler: function() { this.manager.cmp.addHandler.apply(this)} }); r.register({ "id" : "copy", "text" : "copy", "tooltip" : "Copy row above row (Insert)", "atype" : "gridaction", "iconCls" : "svg new-window", "tbar" : true, "cmenu" : true, "key" : " Ext.EventObject.INSERT", handler: function() { this.manager.cmp.addHandler.call(this, true)} }); r.register({ "id" : "remove", "text" : "remove", "tooltip" : "Remove active row (Delete)", "atype" : "gridaction", "iconCls" : "svg minus-1", "tbar" : true, "cmenu" : true, "key" : " Ext.EventObject.Delete", handler: function() { this.manager.cmp.removeHandler.call(this, arguments)} }); r.register({ "id" : "submitData", "text" : "submit", "tooltip" : "submit data to the server", "iconCls" : "upload svg", "menuId" : "default", "position" : 0, bind : { disabled : '{!appState.online}' }, handler: function(){this.manager.cmp.instanceSteward.submitHandler(this.actionCfg)} }); r.register({ "id" : "saveData", "text" : "save", "tooltip" : "save data locally", "iconCls" : "save svg", "menuId" : "default", "position" : 1, handler: function(){this.manager.cmp.instanceSteward.saveHandler(this.actionCfg)} }); r.register({ "id" : "syncData", "text" : "sync", "tooltip" : "sync data ", "iconCls" : "sync svg", "menuId" : "default", "position" : 2, handler: function(){this.manager.cmp.instanceSteward.syncHandler(this.actionCfg)} }); r.register({ "id" : "applyRigths", "text" : "apply rigths to children", "tooltip" : "apply user rigths to children application objects whenever possible (e.g. when the current user is granted permission to do so)", "iconCls" : "gear svg", handler: function(button){ if(this.manager) { return this.manager.cmp /* launched through action plugin */ } /* launched from within a button */ var mo = button.getParentConfig('modelInstance'), ur_r = mo.get('ur_r'), ur_d = mo.get('ur_d'), ur_u = mo.get('ur_u'); mo.getModelInstance({getXpath: './/*[@entityName]', fn: function(mo,config) {mo.xf_set('ur_r', ur_r);mo.xf_set('ur_d', ur_d);mo.xf_set('ur_u', ur_u)}}) } }); r.register({ "id" : "delete", "atype" : "multirow", "tbar" : true, "cmenu" : true, "text" : "delete", "tooltip" : "delete this element (on the server)", "iconCls" : "svg minus-1", "confirm" : "are you sure you want to delete the selected elements?", handler: function(){ var item ='', selectedRows = this.getSelections(); Ext.each(selectedRows, function(r) { item += r.id},this); var g =this.manager.cmp; g.ajaxCall(item + e_s.xml.wrap('action', 'remove'),selectedRows); g.fireEvent('beforeremoveao',selectedRows); } }); r.register({ "id" : "edit", "atype" : "singlerow", "tbar" : true, "cmenu" : true, "text" : "edit", "tooltip" : "edit this element", "iconCls" : "svg pencil-1", handler: function( ) { var meta = this.getSelectedModel()[0].getMetaData(), app = Ext.getApp(), id = app.buildId(meta); Ext.getApp().showWindow({ action :'edit', entityName : meta.type, instanceId : id }); } });})();(function(){ Ext.ns("E.xforms.model"); var EC = E.xforms.model, e=Ext.extend, r = E.xforms.model.xpathMgr ; r.register({ "id" : "1", "expr" : "../../contains/structureItem='true'", "dep" : "../../contains/structureItem" }); r.register({ "id" : "2", "expr" : "../../contains/applicationObject='true'", "dep" : "../../contains/applicationObject" }); r.register({ "id" : "3", "expr" : "../../contains/applicationData='true'", "dep" : "../../contains/applicationData" });})();(function(){ Ext.ns("E.xforms.mgr"); var EC = E.xforms.mgr, e=Ext.extend, r = E.xforms.mgr.AoSettingsMgr ; })();(function(){ Ext.ns("E.xforms.mgr"); var EC = E.xforms.mgr, e=Ext.extend, r = E.xforms.mgr.FieldSettingsMgr ; })();(function(){ Ext.ns("E.xforms.mgr"); var EC = E.xforms.mgr, e=Ext.extend, r = E.xforms.mgr.DataIslandSettingsMgr ; r.register({ "id" : "La_1", "cfg" : { "test" : "d" } }); r.register({ "id" : "La_2", "cfg" : { "test" : "d", "qtip" : "The width of labels. This property cascades to child containers (default = 150px)." } }); r.register({ "id" : "sc_4", "cfg" : { "storeCfg" : { "toNb" : 1 } } }); r.register({ "id" : "sc_5", "cfg" : { "storeCfg" : { "toNb" : 10 } } }); r.register({ "id" : "sc_6", "cfg" : { columns: 2, fieldLabel: 'type of display'.lo(), qtip: 'choose how the scale should be displayed'.lo(), items: [{ boxLabel : 'slider'.lo(), inputValue: 'slider' },{ boxLabel : 'radio'.lo(), inputValue: 'radio' }] } }); r.register({ "id" : "nbc_2", "cfg" : { "fieldLabel" : "prevent decimal", "qtip" : "Check this to forbid decimal values" } }); r.register({ "id" : "nbc_4", "cfg" : { "fieldLabel" : "minimum value", "qtip" : "The minimum allowed value", "constraintText" : "minimum value should be lower than maximum value" } }); r.register({ "id" : "nbc_5", "cfg" : { "fieldLabel" : "minimum error", "qtip" : "Error text to display if the maximum value minimum fails (defaults to \"The minimum value for this field is {minValue}\")" } }); r.register({ "id" : "nbc_6", "cfg" : { "fieldLabel" : "maximum value", "qtip" : "The maximum allowed value", "constraintText" : "maximum value should be greater than minimum" } }); r.register({ "id" : "nbc_7", "cfg" : { "fieldLabel" : "maximum error", "qtip" : "Error text to display if the maximum value validation fails (defaults to \"The maximum value for this field is {maxValue}\")" } }); r.register({ "id" : "nbc_8", "cfg" : { "fieldLabel" : "invalid number error", "qtip" : "Error text to display if the value is not a valid number. For example, this can happen if a valid character like '.'..." } }); r.register({ "id" : "margin", "cfg" : { "subLabel" : "Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or it can be a CSS style specification for each style, for example: '10 5 3 10'." } }); r.register({ "id" : "padding", "cfg" : { "subLabel" : "Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or it can be a CSS style specification for each style, for example: '10 5 3 10'." } }); r.register({ "id" : "sk_ref", "cfg" : { "emptyText" : "drop a field here", "constraintText" : "cannot base skip pattern on a field that belongs to this element" } }); r.register({ "id" : "sk_2", "cfg" : { "constaintText" : "this value should be greater than the first value" } }); r.register({ "id" : "sk_pr", "cfg" : { "fieldLabel" : "print version", "subLabel" : "guide for the printed-version of the report, when dynamic skip pattern is not available" } }); r.register({ "id" : "dtr_t", "cfg" : { "labelStyle" : null } }); r.register({ "id" : "iT", "cfg" : { "subLabel" : "decide on the way themes values are being inherited from parent entries" } }); r.register({ "id" : "lan_r", "cfg" : { "qtip" : "select the root language for this form is it needs to be translated to other languages" } }); r.register({ "id" : "d3d_2", "cfg" : { "emptyText" : "from" } }); r.register({ "id" : "d3d_3", "cfg" : { "emptyText" : "to" } }); r.register({ "id" : "comp_2", "cfg" : { "label" : "edit dimension function", "qtip" : "edit dimension function for advanced utilization" } }); r.register({ "id" : "dd_13", "cfg" : "\n                        " }); r.register({ "id" : "dd_25", "cfg" : { subLabel: function(val) { if(val == true || val == 'true') {return 'this dataset constitutes a baseline'.lo()} return 'this dataset is not a baseline'.lo() } } }); r.register({ "id" : "db_a", "cfg" : { "subLabel" : "choose this field carefully as it cannot be changed once submited to the server." } }); r.register({ "id" : "me_s", "cfg" : { "emptyText" : "message subject" } }); r.register({ "id" : "me_b", "cfg" : { "emptyText" : "message body" } }); r.register({ "id" : "rep_ty", "cfg" : { "allowBlank" : false } }); r.register({ "id" : "rep_ev", "cfg" : { "storeCfg" : { "fromNb" : "1", "toNb" : "30" } } }); r.register({ "id" : "rep_oc", "cfg" : { "allowBlank" : false, "minValue" : 1 } }); r.register({ "id" : "rep_e", "cfg" : { "allowBlank" : false } }); r.register({ "id" : "mT_n", "cfg" : { "constraintText" : "'task name' should be unique" } }); r.register({ "id" : "mT_drt", "cfg" : { "fieldLabel" : "designation type", "subLabel" : "precise how the responsibilities for this task should be designated" } }); r.register({ "id" : "sec_l", "cfg" : { "columns" : "1", "items" : [{ "boxLabel" : "none", "inputValue" : "none", "qtip" : "low security level" }, { "boxLabel" : "medium", "inputValue" : "medium", "qtip" : "users are identified if they are providing a specific code (e.g. that would be provided in an e-mail message). But they do not need to be identified against the main application server." }, { "boxLabel" : "high", "inputValue" : "high", "qtip" : "users are identified against their e-Smile account. This is not suitable for all cases. Offline data entry for instance would not be possible if this option is choosen." }] } }); r.register({ "id" : "i_8_1", "cfg" : { "allowBlank" : false, "emptyText" : "adress", "maxLength" : "100" } }); r.register({ "id" : "i_8_2", "cfg" : { "emptyText" : "locality" } }); r.register({ "id" : "areaCoverage", "cfg" : { emptyText: 'select covered geographical areas'.lo() } }); r.register({ "id" : "aC_h", "cfg" : { "fieldLabel" : "area covered by this position" } }); r.register({ "id" : "minZoom", "cfg" : { "maxValue" : 20, "minValue" : 0 } }); r.register({ "id" : "maxZoom", "cfg" : { "maxValue" : 20, "minValue" : 0 } }); r.register({ "id" : "marker", "cfg" : { items: [{xfa: 'lat', entityName:'marker'},{xfa: 'lng', entityName:'marker'}], itemsAfter: { xtype : 'bt_button', actionId : 'mapIt', text : null, cls: 'pos-2 ', style : 'margin-top: 23px;', flex : 0 } } }); r.register({ "id" : "activityCoverage", "cfg" : { emptyText: 'select programme activites'.lo() } }); r.register({ "id" : "width", "cfg" : { "qtip" : "width of this container in pixel" } }); r.register({ "id" : "height", "cfg" : { "qtip" : "heigth of this container in pixel" } }); r.register({ "id" : "flex", "cfg" : { "qtip" : "Relative width/height in the case multiple columns or rows are used" } }); r.register({ "id" : "disp_txt", "cfg" : { "emptyText" : "display text" } }); r.register({ "id" : "fe_ct", "cfg" : { "lineLabel" : "none", "fieldDefaults" : { "hideLabel" : "true" } } }); r.register({ "id" : "fe_ef", "cfg" : { "includeMargin" : "true", "fieldDefaults" : { "hideLabel" : "true" } } }); r.register({ "id" : "fe_fa", "cfg" : { "emptyText" : "factor", "qtip" : "factor driving the force of the applied color effect", "flex" : "0.7" } }); r.register({ "id" : "fe_ctrl", "cfg" : { "qtip" : "activate color effect (lighten or darken)", "flex" : "0" } }); r.register({ "id" : "st_ct", "cfg" : { "lineLabel" : "none", "fieldDefaults" : { "hideLabel" : "true" } } }); r.register({ "id" : "st_ef", "cfg" : { "includeMargin" : "true", "fieldDefaults" : { "hideLabel" : "true" } } }); r.register({ "id" : "st_fa", "cfg" : { "emptyText" : "factor", "qtip" : "factor driving the force of the applied color effect", "flex" : "0.7" } }); r.register({ "id" : "st_ctrl", "cfg" : { "qtip" : "activate color effect (lighten or darken)", "flex" : "0" } }); r.register({ "id" : "se_e", "cfg" : { fieldLabel : 'element name'.lo(), qtipTitle : 'name of the xml element'.lo(), qtip : 'name of the xml element while constructing the xml instance (this should only be used in when the xml instance must follow a known xml schema definition)'.lo() } });})();(function(){ Ext.ns("E.xforms.model"); var EC = E.xforms.model, e=Ext.extend, r = E.xforms.model.ModelMixinsMgr ; })();(function(){ Ext.ns("E.xforms.mgr"); var EC = E.xforms.mgr, e=Ext.extend, r = E.xforms.mgr.EdgeSettingsMgr ; r.register({ "id" : "group/user", "idref" : null, "subject" : "user", "verb" : null, "object" : "group", "inverse" : null });})();
                };
                })(this)
            