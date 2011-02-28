﻿/**
 * @author Garret.Bi
 * 
 * Contains all strings for the Janpanese language.
 * Version 1 - 02/09/11
 */
if(!ORYX) var ORYX = {};

if(!ORYX.I18N) ORYX.I18N = {};

ORYX.I18N.Language = "ja"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!ORYX.I18N.Oryx) ORYX.I18N.Oryx = {};

ORYX.I18N.Oryx.title		= ORYX.TITLE;
ORYX.I18N.Oryx.noBackendDefined	= "JA:Caution! \nNo backend defined.\n The requested model cannot be loaded. Try to load a configuration with a save plugin.";
ORYX.I18N.Oryx.pleaseWait 	= "JA:Please wait while loading...";
ORYX.I18N.Oryx.notLoggedOn = "JA:Not logged on";
ORYX.I18N.Oryx.editorOpenTimeout = "JA:The editor does not seem to be started yet. Please check, whether you have a popup blocker enabled and disable it or allow popups for this site. We will never display any commercials on this site.";

if(!ORYX.I18N.AddDocker) ORYX.I18N.AddDocker = {};

ORYX.I18N.AddDocker.group = "Docker";
ORYX.I18N.AddDocker.add = "JA:Add Docker";
ORYX.I18N.AddDocker.addDesc = "JA:Add a Docker to an edge, by clicking on it";
ORYX.I18N.AddDocker.del = "JA:Delete Docker";
ORYX.I18N.AddDocker.delDesc = "JA:Delete a Docker";

if(!ORYX.I18N.ShapeConnector) ORYX.I18N.ShapeConnector = {};

ORYX.I18N.ShapeConnector.group = "Connector";
ORYX.I18N.ShapeConnector.add = "JA:Connect Shapes";
ORYX.I18N.ShapeConnector.addDesc = "JA:Connect several nodes by marking them in the desired order";

if(!ORYX.I18N.SSExtensionLoader) ORYX.I18N.SSExtensionLoader = {};

ORYX.I18N.SSExtensionLoader.group = "Stencil Set";
ORYX.I18N.SSExtensionLoader.add = "JA:Add Stencil Set Extension";
ORYX.I18N.SSExtensionLoader.addDesc = "JA:Add a stencil set extension";
ORYX.I18N.SSExtensionLoader.loading = "JA:Loading Stencil Set Extension";
ORYX.I18N.SSExtensionLoader.noExt = "JA:There are no extensions available or all available extensions are already loaded.";
ORYX.I18N.SSExtensionLoader.failed1 = "JA:Loading stencil set extensions configuration failed. The response is not a valid configuration file.";
ORYX.I18N.SSExtensionLoader.failed2 = "JA:Loading stencil set extension configuration file failed. The request returned an error.";
ORYX.I18N.SSExtensionLoader.panelTitle = "JA:Stencil Set Extensions";
ORYX.I18N.SSExtensionLoader.panelText = "JA:Select the stencil set extensions you want to load.";

if(!ORYX.I18N.AdHocCC) ORYX.I18N.AdHocCC = {};

ORYX.I18N.AdHocCC.group = "Ad Hoc";
ORYX.I18N.AdHocCC.compl = "JA:Edit Completion Condition";
ORYX.I18N.AdHocCC.complDesc = "JA:Edit an Ad Hoc Activity's Completion Condition";
ORYX.I18N.AdHocCC.notOne = "JA:Not exactly one element selected!";
ORYX.I18N.AdHocCC.nodAdHocCC = "JA:Selected element has no ad hoc completion condition!";
ORYX.I18N.AdHocCC.selectTask = "JA:Select a task...";
ORYX.I18N.AdHocCC.selectState = "JA:Select a state...";
ORYX.I18N.AdHocCC.addExp = "JA:Add Expression";
ORYX.I18N.AdHocCC.selectDataField = "JA:Select a data field...";
ORYX.I18N.AdHocCC.enterEqual = "JA:Enter a value that must equal...";
ORYX.I18N.AdHocCC.and = "JA:and";
ORYX.I18N.AdHocCC.or = "JA:or";
ORYX.I18N.AdHocCC.not = "JA:not";
ORYX.I18N.AdHocCC.clearCC = "JA:Clear Completion Condition";
ORYX.I18N.AdHocCC.editCC = "JA:Edit Ad Hoc Completion Conditions";
ORYX.I18N.AdHocCC.addExecState = "JA:Add Execution State Expression: ";
ORYX.I18N.AdHocCC.addDataExp = "JA:Add Data Expression: ";
ORYX.I18N.AdHocCC.addLogOp = "JA:Add Logical Operators: ";
ORYX.I18N.AdHocCC.curCond = "JA:Current Completion Condition: ";

if(!ORYX.I18N.AMLSupport) ORYX.I18N.AMLSupport = {};

ORYX.I18N.AMLSupport.group = "EPC";
ORYX.I18N.AMLSupport.imp = "JA:Import AML file";
ORYX.I18N.AMLSupport.impDesc = "JA:Import an Aris 7 AML file";
ORYX.I18N.AMLSupport.failed = "JA:Importing AML file failed. Please check, if the selected file is a valid AML file. Error message: ";
ORYX.I18N.AMLSupport.failed2 = "JA:Importing AML file failed: ";
ORYX.I18N.AMLSupport.noRights = "JA:You have no rights to import multiple EPC-Diagrams (Login required).";
ORYX.I18N.AMLSupport.panelText = "JA:Select an AML (.xml) file to import.";
ORYX.I18N.AMLSupport.file = "JA:File";
ORYX.I18N.AMLSupport.importBtn = "JA:Import AML-File";
ORYX.I18N.AMLSupport.get = "JA:Get diagrams...";
ORYX.I18N.AMLSupport.close = "JA:Close";
ORYX.I18N.AMLSupport.title = "JA:Title";
ORYX.I18N.AMLSupport.selectDiagrams = "JA:Select the diagram(s) you want to import. <br/> If one model is selected, it will be imported in the current editor, if more than one is selected, those models will directly be stored in the repository.";
ORYX.I18N.AMLSupport.impText = "JA:Import";
ORYX.I18N.AMLSupport.impProgress = "JA:Importing...";
ORYX.I18N.AMLSupport.cancel = "JA:Cancel";
ORYX.I18N.AMLSupport.name = "JA:Name";
ORYX.I18N.AMLSupport.allImported = "JA:All imported diagrams.";
ORYX.I18N.AMLSupport.ok = "JA:OK";

if(!ORYX.I18N.Arrangement) ORYX.I18N.Arrangement = {};

ORYX.I18N.Arrangement.groupZ = "Z-Order";
ORYX.I18N.Arrangement.btf = "JA:Bring To Front";
ORYX.I18N.Arrangement.btfDesc = "JA:Bring to Front";
ORYX.I18N.Arrangement.btb = "JA:Bring To Back";
ORYX.I18N.Arrangement.btbDesc = "JA:Bring To Back";
ORYX.I18N.Arrangement.bf = "JA:Bring Forward";
ORYX.I18N.Arrangement.bfDesc = "JA:Bring Forward";
ORYX.I18N.Arrangement.bb = "JA:Bring Backward";
ORYX.I18N.Arrangement.bbDesc = "JA:Bring Backward";
ORYX.I18N.Arrangement.groupA = "Alignment";
ORYX.I18N.Arrangement.ab = "JA:Alignment Bottom";
ORYX.I18N.Arrangement.abDesc = "JA:Bottom";
ORYX.I18N.Arrangement.am = "JA:Alignment Middle";
ORYX.I18N.Arrangement.amDesc = "JA:Middle";
ORYX.I18N.Arrangement.at = "JA:Alignment Top";
ORYX.I18N.Arrangement.atDesc = "JA:Top";
ORYX.I18N.Arrangement.al = "JA:Alignment Left";
ORYX.I18N.Arrangement.alDesc = "JA:Left";
ORYX.I18N.Arrangement.ac = "JA:Alignment Center";
ORYX.I18N.Arrangement.acDesc = "JA:Center";
ORYX.I18N.Arrangement.ar = "JA:Alignment Right";
ORYX.I18N.Arrangement.arDesc = "JA:Right";
ORYX.I18N.Arrangement.as = "JA:Alignment Same Size";
ORYX.I18N.Arrangement.asDesc = "JA:Same Size";

if(!ORYX.I18N.BPELSupport) ORYX.I18N.BPELSupport = {};

ORYX.I18N.BPELSupport.group = "BPEL";
ORYX.I18N.BPELSupport.exp = "JA:Export BPEL";
ORYX.I18N.BPELSupport.expDesc = "JA:Export diagram to BPEL";
ORYX.I18N.BPELSupport.imp = "JA:Import BPEL";
ORYX.I18N.BPELSupport.impDesc = "JA:Import a BPEL file";
ORYX.I18N.BPELSupport.selectFile = "JA:Select a BPEL file to import";
ORYX.I18N.BPELSupport.file = "JA:file";
ORYX.I18N.BPELSupport.impPanel = "JA:Import BPEL file";
ORYX.I18N.BPELSupport.impBtn = "JA:Import";
ORYX.I18N.BPELSupport.content = "JA:content";
ORYX.I18N.BPELSupport.close = "JA:Close";
ORYX.I18N.BPELSupport.error = "JA:Error";
ORYX.I18N.BPELSupport.progressImp = "JA:Import...";
ORYX.I18N.BPELSupport.progressExp = "JA:Export...";
ORYX.I18N.BPELSupport.impFailed = "JA:An error while importing occurs! <br/>Please check error message: <br/><br/>";

if(!ORYX.I18N.BPELLayout) ORYX.I18N.BPELLayout = {};

ORYX.I18N.BPELLayout.group = "BPELLayout";
ORYX.I18N.BPELLayout.disable = "JA:disable layout";
ORYX.I18N.BPELLayout.disDesc = "JA:disable auto layout plug-in";
ORYX.I18N.BPELLayout.enable = "JA:enable layout";
ORYX.I18N.BPELLayout.enDesc = "JA:enable auto layout plug-in";

if(!ORYX.I18N.BPEL4Chor2BPELSupport) ORYX.I18N.BPEL4Chor2BPELSupport = {};

ORYX.I18N.BPEL4Chor2BPELSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4Chor2BPELSupport.exp = "JA:Export to BPEL";
ORYX.I18N.BPEL4Chor2BPELSupport.expDesc = "JA:Export diagram to BPEL";

if(!ORYX.I18N.BPEL4ChorSupport) ORYX.I18N.BPEL4ChorSupport = {};

ORYX.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.exp = "JA:Export BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.expDesc = "JA:Export diagram to BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.imp = "JA:Import BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.impDesc = "JA:Import a BPEL4Chor file";
ORYX.I18N.BPEL4ChorSupport.gen = "JA:BPEL4Chor generator";
ORYX.I18N.BPEL4ChorSupport.genDesc = "JA:generate values of some BPEL4Chor properties if they are already known(e.g. sender of messageLink)";
ORYX.I18N.BPEL4ChorSupport.selectFile = "JA:Select a BPEL4Chor file to import";
ORYX.I18N.BPEL4ChorSupport.file = "JA:file";
ORYX.I18N.BPEL4ChorSupport.impPanel = "JA:Import BPEL4Chor file";
ORYX.I18N.BPEL4ChorSupport.impBtn = "JA:Import";
ORYX.I18N.BPEL4ChorSupport.content = "JA:content";
ORYX.I18N.BPEL4ChorSupport.close = "JA:Close";
ORYX.I18N.BPEL4ChorSupport.error = "JA:Error";
ORYX.I18N.BPEL4ChorSupport.progressImp = "JA:Import...";
ORYX.I18N.BPEL4ChorSupport.progressExp = "JA:Export...";
ORYX.I18N.BPEL4ChorSupport.impFailed = "JA:An error while importing occurs! <br/>Please check error message: <br/><br/>";

if(!ORYX.I18N.Bpel4ChorTransformation) ORYX.I18N.Bpel4ChorTransformation = {};

ORYX.I18N.Bpel4ChorTransformation.group = "Export";
ORYX.I18N.Bpel4ChorTransformation.exportBPEL = "JA:Export BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportBPELDesc = "JA:Export diagram to BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportXPDL = "JA:Export XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportXPDLDesc = "JA:Export diagram to XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.warning = "JA:Warning";
ORYX.I18N.Bpel4ChorTransformation.wrongValue = 'The changed name must have the value "1" to avoid errors during the transformation to BPEL4Chor';
ORYX.I18N.Bpel4ChorTransformation.loopNone = 'The loop type of the receive task must be "None" to be transformable to BPEL4Chor';
ORYX.I18N.Bpel4ChorTransformation.error = "JA:Error";
ORYX.I18N.Bpel4ChorTransformation.noSource = "JA:1 with ID 2 has no source object.";
ORYX.I18N.Bpel4ChorTransformation.noTarget = "JA:1 with ID 2 has no target object.";
ORYX.I18N.Bpel4ChorTransformation.transCall = "JA:An error occurred during the transformation call. 1:2";
ORYX.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "JA:Export to XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "JA:Export to BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.noGen = "JA:The transformation input could not be generated: 1\n2\n";

ORYX.I18N.BPMN2PNConverter = {
  name: "Convert to Petri net",
  desc: "Converts BPMN diagrams to Petri nets",
  group: "Export",
  error: "Error",
  errors: {
    server: "Couldn't import BPNM diagram.",
    noRights: "Don't you have read permissions on given model?",
    notSaved: "Model must be saved and reopened for using Petri net exporter!"
  },
  progress: {
      status: "Status",
      importingModel: "Importing BPMN Model",
      fetchingModel: "Fetching",
      convertingModel: "Converting",
      renderingModel: "Rendering"
  }
}

if(!ORYX.I18N.TransformationDownloadDialog) ORYX.I18N.TransformationDownloadDialog = {};

ORYX.I18N.TransformationDownloadDialog.error = "JA:Error";
ORYX.I18N.TransformationDownloadDialog.noResult = "JA:The transformation service did not return a result.";
ORYX.I18N.TransformationDownloadDialog.errorParsing = "JA:Error During the Parsing of the Diagram.";
ORYX.I18N.TransformationDownloadDialog.transResult = "JA:Transformation Results";
ORYX.I18N.TransformationDownloadDialog.showFile = "JA:Show the result file";
ORYX.I18N.TransformationDownloadDialog.downloadFile = "JA:Download the result file";
ORYX.I18N.TransformationDownloadDialog.downloadAll = "JA:Download all result files";

if(!ORYX.I18N.DesynchronizabilityOverlay) ORYX.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
ORYX.I18N.DesynchronizabilityOverlay.group = "Overlay";
ORYX.I18N.DesynchronizabilityOverlay.name = "JA:Desynchronizability Checker";
ORYX.I18N.DesynchronizabilityOverlay.desc = "JA:Desynchronizability Checker";
ORYX.I18N.DesynchronizabilityOverlay.sync = "JA:The net is desynchronizable.";
ORYX.I18N.DesynchronizabilityOverlay.error = "JA:The net has 1 syntax error.";
ORYX.I18N.DesynchronizabilityOverlay.invalid = "JA:Invalid answer from server.";

if(!ORYX.I18N.Edit) ORYX.I18N.Edit = {};

ORYX.I18N.Edit.group = "Edit";
ORYX.I18N.Edit.cut = "JA:Cut";
ORYX.I18N.Edit.cutDesc = "JA:Cuts the selection into the clipboard";
ORYX.I18N.Edit.copy = "JA:Copy";
ORYX.I18N.Edit.copyDesc = "JA:Copies the selection into the clipboard";
ORYX.I18N.Edit.paste = "JA:Paste";
ORYX.I18N.Edit.pasteDesc = "JA:Pastes the clipboard to the canvas";
ORYX.I18N.Edit.del = "JA:Delete";
ORYX.I18N.Edit.delDesc = "JA:Deletes all selected shapes";

if(!ORYX.I18N.EPCSupport) ORYX.I18N.EPCSupport = {};

ORYX.I18N.EPCSupport.group = "EPC";
ORYX.I18N.EPCSupport.exp = "JA:Export EPC";
ORYX.I18N.EPCSupport.expDesc = "JA:Export diagram to EPML";
ORYX.I18N.EPCSupport.imp = "JA:Import EPC";
ORYX.I18N.EPCSupport.impDesc = "JA:Import an EPML file";
ORYX.I18N.EPCSupport.progressExp = "JA:Exporting model";
ORYX.I18N.EPCSupport.selectFile = "JA:Select an EPML (.empl) file to import.";
ORYX.I18N.EPCSupport.file = "JA:File";
ORYX.I18N.EPCSupport.impPanel = "JA:Import EPML File";
ORYX.I18N.EPCSupport.impBtn = "JA:Import";
ORYX.I18N.EPCSupport.close = "JA:Close";
ORYX.I18N.EPCSupport.error = "JA:Error";
ORYX.I18N.EPCSupport.progressImp = "JA:Import...";

if(!ORYX.I18N.ERDFSupport) ORYX.I18N.ERDFSupport = {};

ORYX.I18N.ERDFSupport.exp = "JA:Export to ERDF";
ORYX.I18N.ERDFSupport.expDesc = "JA:Export to ERDF";
ORYX.I18N.ERDFSupport.imp = "JA:Import from ERDF";
ORYX.I18N.ERDFSupport.impDesc = "JA:Import from ERDF";
ORYX.I18N.ERDFSupport.impFailed = "JA:Request for import of ERDF failed.";
ORYX.I18N.ERDFSupport.impFailed2 = "JA:An error while importing occurs! <br/>Please check error message: <br/><br/>";
ORYX.I18N.ERDFSupport.error = "JA:Error";
ORYX.I18N.ERDFSupport.noCanvas = "JA:The xml document has no Oryx canvas node included!";
ORYX.I18N.ERDFSupport.noSS = "JA:The Oryx canvas node has no stencil set definition included!";
ORYX.I18N.ERDFSupport.wrongSS = "JA:The given stencil set does not fit to the current editor!";
ORYX.I18N.ERDFSupport.selectFile = "JA:Select an ERDF (.xml) file or type in the ERDF to import it!";
ORYX.I18N.ERDFSupport.file = "JA:File";
ORYX.I18N.ERDFSupport.impERDF = "JA:Import ERDF";
ORYX.I18N.ERDFSupport.impBtn = "JA:Import";
ORYX.I18N.ERDFSupport.impProgress = "JA:Importing...";
ORYX.I18N.ERDFSupport.close = "JA:Close";
ORYX.I18N.ERDFSupport.deprTitle = "JA:Really export to eRDF?";
ORYX.I18N.ERDFSupport.deprText = "JA:Exporting to eRDF is not recommended anymore because the support will be stopped in future versions of the Oryx editor. If possible, export the model to JSON. Do you want to export anyway?";

if(!ORYX.I18N.jPDLSupport) ORYX.I18N.jPDLSupport = {};

ORYX.I18N.jPDLSupport.group = "Export";
ORYX.I18N.jPDLSupport.exp = "JA:Export to jPDL";
ORYX.I18N.jPDLSupport.expDesc = "JA:Export to jPDL";
ORYX.I18N.jPDLSupport.imp = "JA:Import from jPDL";
ORYX.I18N.jPDLSupport.impDesc = "JA:Import jPDL File";
ORYX.I18N.jPDLSupport.impFailedReq = "JA:Request for import of jPDL failed.";
//ORYX.I18N.jPDLSupport.impFailedJson = "JA:Transformation of jPDL failed.";
ORYX.I18N.jPDLSupport.impFailedJsonAbort = "JA:Import aborted.";
ORYX.I18N.jPDLSupport.loadSseQuestionTitle = "JA:jBPM stencil set extension needs to be loaded"; 
ORYX.I18N.jPDLSupport.loadSseQuestionBody = "JA:In order to import jPDL, the stencil set extension has to be loaded. Do you want to proceed?";
ORYX.I18N.jPDLSupport.expFailedReq = "JA:Request for export of model failed.";
ORYX.I18N.jPDLSupport.expFailedXml = "JA:Export to jPDL failed. Exporter reported: ";
ORYX.I18N.jPDLSupport.error = "JA:Error";
ORYX.I18N.jPDLSupport.selectFile = "JA:Select an jPDL (.xml) file or type in the jPDL to import it!";
ORYX.I18N.jPDLSupport.file = "JA:File";
ORYX.I18N.jPDLSupport.impJPDL = "JA:Import jPDL";
ORYX.I18N.jPDLSupport.impBtn = "JA:Import";
ORYX.I18N.jPDLSupport.impProgress = "JA:Importing...";
ORYX.I18N.jPDLSupport.close = "JA:Close";

if(!ORYX.I18N.Bpmn2Bpel) ORYX.I18N.Bpmn2Bpel = {};

ORYX.I18N.Bpmn2Bpel.group = "ExecBPMN";
ORYX.I18N.Bpmn2Bpel.show = "JA:Show transformed BPEL";
ORYX.I18N.Bpmn2Bpel.download = "JA:Download transformed BPEL";
ORYX.I18N.Bpmn2Bpel.deploy = "JA:Deploy transformed BPEL";
ORYX.I18N.Bpmn2Bpel.showDesc = "JA:Transforms BPMN to BPEL and shows the result in a new window.";
ORYX.I18N.Bpmn2Bpel.downloadDesc = "JA:Transforms BPMN to BPEL and offers to download the result.";
ORYX.I18N.Bpmn2Bpel.deployDesc = "JA:Transforms BPMN to BPEL and deploys the business process on the BPEL-Engine Apache ODE";
ORYX.I18N.Bpmn2Bpel.transfFailed = "JA:Request for transformation to BPEL failed.";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputTitle = "JA:Apache ODE URL";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelDeploy = "JA:Deploy Process";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelCancel = "JA:Cancel";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputPanelText = "JA:Please type-in the URL to the Apache ODE BPEL-Engine. E.g.: http://myserver:8080/ode";


if(!ORYX.I18N.Save) ORYX.I18N.Save = {};

ORYX.I18N.Save.group = "File";
ORYX.I18N.Save.save = "JA:Save";
ORYX.I18N.Save.autosave = "JA:Autosave";
ORYX.I18N.Save.saveDesc = "JA:Save";
ORYX.I18N.Save.autosaveDesc = "JA:Autosave";
ORYX.I18N.Save.autosaveDesc_on = "JA:Autosave (on)";
ORYX.I18N.Save.autosaveDesc_off = "JA:Autosave (off)";
ORYX.I18N.Save.saveAs = "JA:Save As...";
ORYX.I18N.Save.saveAsDesc = "JA:Save As...";
ORYX.I18N.Save.unsavedData = "JA:There are unsaved data, please save before you leave, otherwise your changes get lost!";
ORYX.I18N.Save.newProcess = "JA:New Process";
ORYX.I18N.Save.saveAsTitle = "JA:Save as...";
ORYX.I18N.Save.saveBtn = "JA:Save";
ORYX.I18N.Save.close = "JA:Close";
ORYX.I18N.Save.savedAs = "JA:Saved As";
ORYX.I18N.Save.saved = "JA:Saved!";
ORYX.I18N.Save.failed = "JA:Saving failed.";
ORYX.I18N.Save.failedTitle = "JA:Internal Error";
ORYX.I18N.Save.failedMsg = "JA:An error occurred during save.";
ORYX.I18N.Save.failedOKBtn = "JA:OK";
ORYX.I18N.Save.failedDetailsBtn = "JA:Details";
ORYX.I18N.Save.failedThereWas = "JA:There was a problem processing your request:";
ORYX.I18N.Save.noRights = "JA:You have no rights to save changes.";
ORYX.I18N.Save.saving = "JA:Saving";
ORYX.I18N.Save.saveAsHint = "JA:The process diagram is stored under:";

if(!ORYX.I18N.File) ORYX.I18N.File = {};

ORYX.I18N.File.group = "File";
ORYX.I18N.File.print = "JA:Print";
ORYX.I18N.File.printDesc = "JA:Print current model";
ORYX.I18N.File.pdf = "JA:Export as PDF";
ORYX.I18N.File.pdfDesc = "JA:Export as PDF";
ORYX.I18N.File.info = "JA:Info";
ORYX.I18N.File.infoDesc = "JA:Info";
ORYX.I18N.File.genPDF = "JA:Generating PDF";
ORYX.I18N.File.genPDFFailed = "JA:Generating PDF failed.";
ORYX.I18N.File.printTitle = "JA:Print";
ORYX.I18N.File.printMsg = "JA:We are currently experiencing problems with the printing function. We recommend using the PDF Export to print the diagram. Do you really want to continue printing?";

if(!ORYX.I18N.Grouping) ORYX.I18N.Grouping = {};

ORYX.I18N.Grouping.grouping = "JA:Grouping";
ORYX.I18N.Grouping.group = "Group";
ORYX.I18N.Grouping.groupDesc = "JA:Groups all selected shapes";
ORYX.I18N.Grouping.ungroup = "JA:Ungroup";
ORYX.I18N.Grouping.ungroupDesc = "JA:Deletes the group of all selected Shapes";

if(!ORYX.I18N.IBPMN2BPMN) ORYX.I18N.IBPMN2BPMN = {};

ORYX.I18N.IBPMN2BPMN.group = "Export";
ORYX.I18N.IBPMN2BPMN.name = "JA:IBPMN 2 BPMN Mapping";
ORYX.I18N.IBPMN2BPMN.desc = "JA:Convert IBPMN to BPMN";

if(!ORYX.I18N.Loading) ORYX.I18N.Loading = {};

ORYX.I18N.Loading.waiting = "JA:Please wait...";

if(!ORYX.I18N.Pnmlexport) ORYX.I18N.Pnmlexport = {};

ORYX.I18N.Pnmlexport.group = "Export";
ORYX.I18N.Pnmlexport.name = "JA:BPMN to PNML";
ORYX.I18N.Pnmlexport.desc = "JA:Export as executable PNML and deploy";

if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};

ORYX.I18N.PropertyWindow.name = "JA:Name";
ORYX.I18N.PropertyWindow.value = "JA:Value";
ORYX.I18N.PropertyWindow.selected = "JA:selected";
ORYX.I18N.PropertyWindow.clickIcon = "JA:Click Icon";
ORYX.I18N.PropertyWindow.add = "JA:Add";
ORYX.I18N.PropertyWindow.rem = "JA:Remove";
ORYX.I18N.PropertyWindow.complex = "JA:Editor for a Complex Type";
ORYX.I18N.PropertyWindow.text = "JA:Editor for a Text Type";
ORYX.I18N.PropertyWindow.ok = "JA:OK";
ORYX.I18N.PropertyWindow.cancel = "JA:Cancel";
ORYX.I18N.PropertyWindow.dateFormat = "JA:m/d/y";
ORYX.I18N.PropertyWindow.mappingeditor = "JA:Mapping Editor";
ORYX.I18N.PropertyWindow.expression = "JA:Expression Editor";
ORYX.I18N.PropertyWindow.xpathTextarea = "JA:Insert xpath expression";

if(!ORYX.I18N.ShapeMenuPlugin) ORYX.I18N.ShapeMenuPlugin = {};

ORYX.I18N.ShapeMenuPlugin.drag = "JA:Drag";
ORYX.I18N.ShapeMenuPlugin.clickDrag = "JA:Click or drag";
ORYX.I18N.ShapeMenuPlugin.morphMsg = "JA:Morph shape";

if(!ORYX.I18N.SimplePnmlexport) ORYX.I18N.SimplePnmlexport = {};

ORYX.I18N.SimplePnmlexport.group = "Export";
ORYX.I18N.SimplePnmlexport.name = "JA:Export to PNML";
ORYX.I18N.SimplePnmlexport.desc = "JA:Export to PNML";

if(!ORYX.I18N.StepThroughPlugin) ORYX.I18N.StepThroughPlugin = {};

ORYX.I18N.StepThroughPlugin.group = "Step Through";
ORYX.I18N.StepThroughPlugin.stepThrough = "JA:Step Through";
ORYX.I18N.StepThroughPlugin.stepThroughDesc = "JA:Step through your model";
ORYX.I18N.StepThroughPlugin.undo = "JA:Undo";
ORYX.I18N.StepThroughPlugin.undoDesc = "JA:Undo one Step";
ORYX.I18N.StepThroughPlugin.error = "JA:Can't step through this diagram.";
ORYX.I18N.StepThroughPlugin.executing = "JA:Executing";

if(!ORYX.I18N.SyntaxChecker) ORYX.I18N.SyntaxChecker = {};

ORYX.I18N.SyntaxChecker.group = "Verification";
ORYX.I18N.SyntaxChecker.name = "JA:Syntax Checker";
ORYX.I18N.SyntaxChecker.desc = "JA:Check Syntax";
ORYX.I18N.SyntaxChecker.noErrors = "JA:There are no syntax errors.";
ORYX.I18N.SyntaxChecker.invalid = "JA:Invalid answer from server.";
ORYX.I18N.SyntaxChecker.checkingMessage = "JA:Checking ...";

if(!ORYX.I18N.Undo) ORYX.I18N.Undo = {};

ORYX.I18N.Undo.group = "Undo";
ORYX.I18N.Undo.undo = "JA:Undo";
ORYX.I18N.Undo.undoDesc = "JA:Undo the last action";
ORYX.I18N.Undo.redo = "JA:Redo";
ORYX.I18N.Undo.redoDesc = "JA:Redo the last undone action";

if(!ORYX.I18N.Validator) ORYX.I18N.Validator = {};
ORYX.I18N.Validator.checking = "JA:Checking";

if(!ORYX.I18N.View) ORYX.I18N.View = {};

ORYX.I18N.View.group = "Zoom";
ORYX.I18N.View.zoomIn = "JA:Zoom In";
ORYX.I18N.View.zoomInDesc = "JA:Zoom into the model";
ORYX.I18N.View.zoomOut = "JA:Zoom Out";
ORYX.I18N.View.zoomOutDesc = "JA:Zoom out of the model";
ORYX.I18N.View.zoomStandard = "JA:Zoom Standard";
ORYX.I18N.View.zoomStandardDesc = "JA:Zoom to the standard level";
ORYX.I18N.View.zoomFitToModel = "JA:Zoom fit to model";
ORYX.I18N.View.zoomFitToModelDesc = "JA:Zoom to fit the model size";

if(!ORYX.I18N.XFormsSerialization) ORYX.I18N.XFormsSerialization = {};

ORYX.I18N.XFormsSerialization.group = "XForms Serialization";
ORYX.I18N.XFormsSerialization.exportXForms = "JA:XForms Export";
ORYX.I18N.XFormsSerialization.exportXFormsDesc = "JA:Export XForms+XHTML markup";
ORYX.I18N.XFormsSerialization.importXForms = "JA:XForms Import";
ORYX.I18N.XFormsSerialization.importXFormsDesc = "JA:Import XForms+XHTML markup";
ORYX.I18N.XFormsSerialization.noClientXFormsSupport = "JA:No XForms support";
ORYX.I18N.XFormsSerialization.noClientXFormsSupportDesc = "JA:<h2>Your browser does not support XForms. Please install the <a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> for Firefox.</h2>";
ORYX.I18N.XFormsSerialization.ok = "JA:OK";
ORYX.I18N.XFormsSerialization.selectFile = "JA:Select a XHTML (.xhtml) file or type in the XForms+XHTML markup to import it!";
ORYX.I18N.XFormsSerialization.selectCss = "JA:Please insert url of css file";
ORYX.I18N.XFormsSerialization.file = "JA:File";
ORYX.I18N.XFormsSerialization.impFailed = "JA:Request for import of document failed.";
ORYX.I18N.XFormsSerialization.impTitle = "JA:Import XForms+XHTML document";
ORYX.I18N.XFormsSerialization.expTitle = "JA:Export XForms+XHTML document";
ORYX.I18N.XFormsSerialization.impButton = "JA:Import";
ORYX.I18N.XFormsSerialization.impProgress = "JA:Importing...";
ORYX.I18N.XFormsSerialization.close = "JA:Close";


if(!ORYX.I18N.TreeGraphSupport) ORYX.I18N.TreeGraphSupport = {};

ORYX.I18N.TreeGraphSupport.syntaxCheckName = "JA:Syntax Check";
ORYX.I18N.TreeGraphSupport.group = "Tree Graph Support";
ORYX.I18N.TreeGraphSupport.syntaxCheckDesc = "JA:Check the syntax of an tree graph structure";

if(!ORYX.I18N.QueryEvaluator) ORYX.I18N.QueryEvaluator = {};

ORYX.I18N.QueryEvaluator.name = "JA:Query Evaluator";
ORYX.I18N.QueryEvaluator.group = "Verification";
ORYX.I18N.QueryEvaluator.desc = "JA:Evaluate query";
ORYX.I18N.QueryEvaluator.noResult = "JA:Query resulted in no match.";
ORYX.I18N.QueryEvaluator.invalidResponse = "JA:Invalid answer from server.";

// if(!ORYX.I18N.QueryResultHighlighter) ORYX.I18N.QueryResultHighlighter = {};
// 
// ORYX.I18N.QueryResultHighlighter.name = "JA:Query Result Highlighter";

/** New Language Properties: 08.12.2008 */

ORYX.I18N.PropertyWindow.title = "JA:Properties";

if(!ORYX.I18N.ShapeRepository) ORYX.I18N.ShapeRepository = {};
ORYX.I18N.ShapeRepository.title = "JA:Shape Repository";

ORYX.I18N.Save.dialogDesciption = "JA:Please enter a name, a description and a comment.";
ORYX.I18N.Save.dialogLabelTitle = "JA:Title";
ORYX.I18N.Save.dialogLabelDesc = "JA:Description";
ORYX.I18N.Save.dialogLabelType = "JA:Type";
ORYX.I18N.Save.dialogLabelComment = "JA:Revision comment";

ORYX.I18N.Validator.name = "JA:BPMN Validator";
ORYX.I18N.Validator.description = "JA:Validation for BPMN";

ORYX.I18N.SSExtensionLoader.labelImport = "JA:Import";
ORYX.I18N.SSExtensionLoader.labelCancel = "JA:Cancel";

Ext.MessageBox.buttonText.yes = "JA:Yes";
Ext.MessageBox.buttonText.no = "JA:No";
Ext.MessageBox.buttonText.cancel = "JA:Cancel";
Ext.MessageBox.buttonText.ok = "JA:OK";


/** New Language Properties: 28.01.2009 */
if(!ORYX.I18N.BPMN2XPDL) ORYX.I18N.BPMN2XPDL = {};
ORYX.I18N.BPMN2XPDL.group = "Export";
ORYX.I18N.BPMN2XPDL.xpdlExport = "JA:Export to XPDL";
ORYX.I18N.BPMN2XPDL.xpdlImport = "JA:Import from XPDL";
ORYX.I18N.BPMN2XPDL.importGroup = "JA:Import";
ORYX.I18N.BPMN2XPDL.selectFile = "JA:Select a XPDL (.xml) file or type in the XPDL to import it!";
ORYX.I18N.BPMN2XPDL.file = "JA:File";
ORYX.I18N.BPMN2XPDL.impXPDL = "JA:Import XPDL";
ORYX.I18N.BPMN2XPDL.impBtn = "JA:Import";
ORYX.I18N.BPMN2XPDL.impProgress = "JA:Importing...";
ORYX.I18N.BPMN2XPDL.close = "JA:Close";

/** Resource Perspective Additions: 24 March 2009 */
if(!ORYX.I18N.ResourcesSoDAdd) ORYX.I18N.ResourcesSoDAdd = {};

ORYX.I18N.ResourcesSoDAdd.name = "JA:Define Separation of Duties Constraint";
ORYX.I18N.ResourcesSoDAdd.group = "Resource Perspective";
ORYX.I18N.ResourcesSoDAdd.desc = "JA:Define a Separation of Duties constraint for the selected tasks";

if(!ORYX.I18N.ResourcesSoDShow) ORYX.I18N.ResourcesSoDShow = {};

ORYX.I18N.ResourcesSoDShow.name = "JA:Show Separation of Duties Constraints";
ORYX.I18N.ResourcesSoDShow.group = "Resource Perspective";
ORYX.I18N.ResourcesSoDShow.desc = "JA:Show Separation of Duties constraints of the selected task";

if(!ORYX.I18N.ResourcesBoDAdd) ORYX.I18N.ResourcesBoDAdd = {};

ORYX.I18N.ResourcesBoDAdd.name = "JA:Define Binding of Duties Constraint";
ORYX.I18N.ResourcesBoDAdd.group = "Resource Perspective";
ORYX.I18N.ResourcesBoDAdd.desc = "JA:Define a Binding of Duties Constraint for the selected tasks";

if(!ORYX.I18N.ResourcesBoDShow) ORYX.I18N.ResourcesBoDShow = {};

ORYX.I18N.ResourcesBoDShow.name = "JA:Show Binding of Duties Constraints";
ORYX.I18N.ResourcesBoDShow.group = "Resource Perspective";
ORYX.I18N.ResourcesBoDShow.desc = "JA:Show Binding of Duties constraints of the selected task";

if(!ORYX.I18N.ResourceAssignment) ORYX.I18N.ResourceAssignment = {};

ORYX.I18N.ResourceAssignment.name = "JA:Resource Assignment";
ORYX.I18N.ResourceAssignment.group = "Resource Perspective";
ORYX.I18N.ResourceAssignment.desc = "JA:Assign resources to the selected task(s)";

if(!ORYX.I18N.ClearSodBodHighlights) ORYX.I18N.ClearSodBodHighlights = {};

ORYX.I18N.ClearSodBodHighlights.name = "JA:Clear Highlights and Overlays";
ORYX.I18N.ClearSodBodHighlights.group = "Resource Perspective";
ORYX.I18N.ClearSodBodHighlights.desc = "JA:Remove all Separation and Binding of Duties Highlights/ Overlays";


if(!ORYX.I18N.Perspective) ORYX.I18N.Perspective = {};
ORYX.I18N.Perspective.no = "JA:No Perspective"
ORYX.I18N.Perspective.noTip = "JA:Unload the current perspective"


/** New Language Properties: 21.04.2009 */
ORYX.I18N.JSONSupport = {
    imp: {
        name: "Import from JSON",
        desc: "Imports a model from JSON",
        group: "Export",
        selectFile: "Select an JSON (.json) file or type in JSON to import it!",
        file: "File",
        btnImp: "Import",
        btnClose: "Close",
        progress: "Importing ...",
        syntaxError: "Syntax error"
    },
    exp: {
        name: "Export to JSON",
        desc: "Exports current model to JSON",
        group: "Export"
    }
};

ORYX.I18N.TBPMSupport = {
		imp: {
        name: "Import from PNG/JPEG",
        desc: "Imports a model from a TPBM photo",
        group: "Export",
        selectFile: "Select an image (.png/.jpeg) file!",
        file: "File",
        btnImp: "Import",
        btnClose: "Close",
        progress: "Importing ...",
        syntaxError: "Syntax error",
        impFailed: "Request for import of document failed.",
        confirm: "Confirm import of highlighted shapes!",
    }
};

/** New Language Properties: 08.05.2009 */
if(!ORYX.I18N.BPMN2XHTML) ORYX.I18N.BPMN2XHTML = {};
ORYX.I18N.BPMN2XHTML.group = "Export";
ORYX.I18N.BPMN2XHTML.XHTMLExport = "JA:Export XHTML Documentation";

/** New Language Properties: 09.05.2009 */
if(!ORYX.I18N.JSONImport) ORYX.I18N.JSONImport = {};

ORYX.I18N.JSONImport.title = "JA:JSON Import";
ORYX.I18N.JSONImport.wrongSS = "JA:The stencil set of the imported file ({0}) does not match to the loaded stencil set ({1}).";
ORYX.I18N.JSONImport.invalidJSON = "JA:The JSON to import is invalid.";

if(!ORYX.I18N.Feedback) ORYX.I18N.Feedback = {};

ORYX.I18N.Feedback.name = "JA:Feedback";
ORYX.I18N.Feedback.desc = "JA:Contact us for any kind of feedback!";
ORYX.I18N.Feedback.pTitle = "JA:Contact us for any kind of feedback!";
ORYX.I18N.Feedback.pName = "JA:Name";
ORYX.I18N.Feedback.pEmail = "JA:E-Mail";
ORYX.I18N.Feedback.pSubject = "JA:Subject";
ORYX.I18N.Feedback.pMsg = "JA:Description/Message";
ORYX.I18N.Feedback.pEmpty = "JA:* Please provide as detailed information as possible so that we can understand your request.\n* For bug reports, please list the steps how to reproduce the problem and describe the output you expected.";
ORYX.I18N.Feedback.pAttach = "JA:Attach current model";
ORYX.I18N.Feedback.pAttachDesc = "JA:This information can be helpful for debugging purposes. If your model contains some sensitive data, remove it before or uncheck this behavior.";
ORYX.I18N.Feedback.pBrowser = "JA:Information about your browser and environment";
ORYX.I18N.Feedback.pBrowserDesc = "JA:This information has been auto-detected from your browser. It can be helpful if you encountered a bug associated with browser-specific behavior.";
ORYX.I18N.Feedback.submit = "JA:Send Message";
ORYX.I18N.Feedback.sending = "JA:Sending message ...";
ORYX.I18N.Feedback.success = "JA:Success";
ORYX.I18N.Feedback.successMsg = "JA:Thank you for your feedback!";
ORYX.I18N.Feedback.failure = "JA:Failure";
ORYX.I18N.Feedback.failureMsg = "JA:Unfortunately, the message could not be sent. This is our fault! Please try again or contact someone at http://code.google.com/p/oryx-editor/";


ORYX.I18N.Feedback.name = "JA:Feedback";
ORYX.I18N.Feedback.failure = "JA:Failure";
ORYX.I18N.Feedback.failureMsg = "JA:Unfortunately, the message could not be sent. This is our fault! Please try again or contact someone at http://code.google.com/p/oryx-editor/";
ORYX.I18N.Feedback.submit = "JA:Send Message";

ORYX.I18N.Feedback.emailDesc = "JA:Your e-mail address?";
ORYX.I18N.Feedback.titleDesc = "JA:Summarize your message with a short title";
ORYX.I18N.Feedback.descriptionDesc = "JA:Describe your idea, question, or problem."
ORYX.I18N.Feedback.info = '<p>Oryx is a research platform intended to support scientists in the field of business process management and beyond with a flexible, extensible tool to validate research theses and conduct experiments.</p><p>We are happy to provide you with the <a href="http://bpt.hpi.uni-potsdam.de/Oryx/ReleaseNotes" target="_blank"> latest technology and advancements</a> of our platform. <a href="http://bpt.hpi.uni-potsdam.de/Oryx/DeveloperNetwork" target="_blank">We</a> work hard to provide you with a reliable system, even though you may experience small hiccups from time to time.</p><p>If you have ideas how to improve Oryx, have a question related to the platform, or want to report a problem: <strong>Please, let us know. Here.</strong></p>'; // general info will be shown, if no subject specific info is given
// list subjects in reverse order of appearance!
ORYX.I18N.Feedback.subjects = [
    {
    	id: "question",   // ansi-compatible name
    	name: "Question", // natural name
    	description: "Ask your question here! \nPlease give us as much information as possible, so we don't have to bother you with more questions, before we can give an answer.", // default text for the description text input field
    	info: "", // optional field to give more info
    },
    {
    	id: "problem",   // ansi-compatible name
    	name: "Problem", // natural name
    	description: "We're sorry for the inconvenience. Give us feedback on the problem, and we'll try to solve it for you. Describe it as detailed as possible, please.", // default text for the description text input field
    	info: "", // optional field to give more info
    },
    {
    	id: "idea",   // ansi-compatible name
    	name: "Idea", // natural name
    	description: "Share your ideas and thoughts here!", // default text for the description text input field
    	info: "", // optional field to give more info
    }
];

/** New Language Properties: 11.05.2009 */
if(!ORYX.I18N.BPMN2DTRPXMI) ORYX.I18N.BPMN2DTRPXMI = {};
ORYX.I18N.BPMN2DTRPXMI.group = "Export";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExport = "JA:Export to XMI (Design Thinking)";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "JA:Exports current model to XMI (requires stencil set extension 'BPMN Subset for Design Thinking')";

/** New Language Properties: 14.05.2009 */
if(!ORYX.I18N.RDFExport) ORYX.I18N.RDFExport = {};
ORYX.I18N.RDFExport.group = "Export";
ORYX.I18N.RDFExport.rdfExport = "JA:Export to RDF";
ORYX.I18N.RDFExport.rdfExportDescription = "JA:Exports current model to the XML serialization defined for the Resource Description Framework (RDF)";

/** New Language Properties: 15.05.2009*/
if(!ORYX.I18N.SyntaxChecker.BPMN) ORYX.I18N.SyntaxChecker.BPMN={};
ORYX.I18N.SyntaxChecker.BPMN_NO_SOURCE = "JA:An edge must have a source.";
ORYX.I18N.SyntaxChecker.BPMN_NO_TARGET = "JA:An edge must have a target.";
ORYX.I18N.SyntaxChecker.BPMN_DIFFERENT_PROCESS = "JA:Source and target node must be contained in the same process.";
ORYX.I18N.SyntaxChecker.BPMN_SAME_PROCESS = "JA:Source and target node must be contained in different pools.";
ORYX.I18N.SyntaxChecker.BPMN_FLOWOBJECT_NOT_CONTAINED_IN_PROCESS = "JA:A flow object must be contained in a process.";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITHOUT_INCOMING_CONTROL_FLOW = "JA:An end event must have an incoming sequence flow.";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "JA:A start event must have an outgoing sequence flow.";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITH_INCOMING_CONTROL_FLOW = "JA:Start events must not have incoming sequence flows.";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITH_INCOMING_CONTROL_FLOW = "JA:Attached intermediate events must not have incoming sequence flows.";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "JA:Attached intermediate events must have exactly one outgoing sequence flow.";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITH_OUTGOING_CONTROL_FLOW = "JA:End events must not have outgoing sequence flows.";
ORYX.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "JA:Event-based gateways must not be followed by gateways or subprocesses.";
ORYX.I18N.SyntaxChecker.BPMN_NODE_NOT_ALLOWED = "JA:Node type is not allowed.";

if(!ORYX.I18N.SyntaxChecker.IBPMN) ORYX.I18N.SyntaxChecker.IBPMN={};
ORYX.I18N.SyntaxChecker.IBPMN_NO_ROLE_SET = "JA:Interactions must have a sender and a receiver role set";
ORYX.I18N.SyntaxChecker.IBPMN_NO_INCOMING_SEQFLOW = "JA:This node must have incoming sequence flow.";
ORYX.I18N.SyntaxChecker.IBPMN_NO_OUTGOING_SEQFLOW = "JA:This node must have outgoing sequence flow.";

if(!ORYX.I18N.SyntaxChecker.InteractionNet) ORYX.I18N.SyntaxChecker.InteractionNet={};
ORYX.I18N.SyntaxChecker.InteractionNet_SENDER_NOT_SET = "JA:Sender not set";
ORYX.I18N.SyntaxChecker.InteractionNet_RECEIVER_NOT_SET = "JA:Receiver not set";
ORYX.I18N.SyntaxChecker.InteractionNet_MESSAGETYPE_NOT_SET = "JA:Message type not set";
ORYX.I18N.SyntaxChecker.InteractionNet_ROLE_NOT_SET = "JA:Role not set";

if(!ORYX.I18N.SyntaxChecker.EPC) ORYX.I18N.SyntaxChecker.EPC={};
ORYX.I18N.SyntaxChecker.EPC_NO_SOURCE = "JA:Each edge must have a source.";
ORYX.I18N.SyntaxChecker.EPC_NO_TARGET = "JA:Each edge must have a target.";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED = "JA:Node must be connected with edges.";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED_2 = "JA:Node must be connected with more edges.";
ORYX.I18N.SyntaxChecker.EPC_TOO_MANY_EDGES = "JA:Node has too many connected edges.";
ORYX.I18N.SyntaxChecker.EPC_NO_CORRECT_CONNECTOR = "JA:Node is no correct connector.";
ORYX.I18N.SyntaxChecker.EPC_MANY_STARTS = "JA:There must be only one start event.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_OR = "JA:There must be no functions after a splitting OR/XOR.";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_OR = "JA:There must be no process interface after a splitting OR/XOR.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_FUNCTION = "JA:There must be no function after a function.";
ORYX.I18N.SyntaxChecker.EPC_EVENT_AFTER_EVENT = "JA:There must be no event after an event.";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_FUNCTION = "JA:There must be no process interface after a function.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_PI = "JA:There must be no function after a process interface.";

if(!ORYX.I18N.SyntaxChecker.PetriNet) ORYX.I18N.SyntaxChecker.PetriNet={};
ORYX.I18N.SyntaxChecker.PetriNet_NOT_BIPARTITE = "JA:The graph is not bipartite";
ORYX.I18N.SyntaxChecker.PetriNet_NO_LABEL = "JA:Label not set for a labeled transition";
ORYX.I18N.SyntaxChecker.PetriNet_NO_ID = "JA:There is a node without ID";
ORYX.I18N.SyntaxChecker.PetriNet_SAME_SOURCE_AND_TARGET = "JA:Two flow relationships have the same source and target";
ORYX.I18N.SyntaxChecker.PetriNet_NODE_NOT_SET = "JA:A node is not set for a flow relationship";

/** New Language Properties: 02.06.2009*/
ORYX.I18N.Edge = "JA:Edge";
ORYX.I18N.Node = "JA:Node";

/** New Language Properties: 03.06.2009*/
ORYX.I18N.SyntaxChecker.notice = "JA:Move the mouse over a red cross icon to see the error message.";

ORYX.I18N.Validator.result = "JA:Validation Result";
ORYX.I18N.Validator.noErrors = "JA:No validation errors found.";
ORYX.I18N.Validator.bpmnDeadlockTitle = "JA:Deadlock";
ORYX.I18N.Validator.bpmnDeadlock = "JA:This node results in a deadlock. There are situations where not all incoming branches are activated.";
ORYX.I18N.Validator.bpmnUnsafeTitle = "JA:Lack of synchronization";
ORYX.I18N.Validator.bpmnUnsafe = "JA:This model suffers from lack of synchronization. The marked element is activated from multiple incoming branches.";
ORYX.I18N.Validator.bpmnLeadsToNoEndTitle = "JA:Validation Result";
ORYX.I18N.Validator.bpmnLeadsToNoEnd = "JA:The process will never reach a final state.";

ORYX.I18N.Validator.syntaxErrorsTitle = "JA:Syntax Error";
ORYX.I18N.Validator.syntaxErrorsMsg = "JA:The process cannot be validated because it contains syntax errors.";
	
ORYX.I18N.Validator.error = "JA:Validation failed";
ORYX.I18N.Validator.errorDesc = 'We are sorry, but the validation of your process failed. It would help us identifying the problem, if you sent us your process model via the "Send Feedback" function.';

ORYX.I18N.Validator.epcIsSound = "JA:<p><b>The EPC is sound, no problems found!</b></p>";
ORYX.I18N.Validator.epcNotSound = "JA:<p><b>The EPC is <i>NOT</i> sound!</b></p>";

/** New Language Properties: 05.06.2009*/
if(!ORYX.I18N.RESIZE) ORYX.I18N.RESIZE = {};
ORYX.I18N.RESIZE.tipGrow = "JA:Increase canvas size:";
ORYX.I18N.RESIZE.tipShrink = "JA:Decrease canvas size:";
ORYX.I18N.RESIZE.N = "JA:Top";
ORYX.I18N.RESIZE.W = "JA:Left";
ORYX.I18N.RESIZE.S = "JA:Down";
ORYX.I18N.RESIZE.E = "JA:Right";
/** New Language Properties: 14.08.2009*/
if(!ORYX.I18N.PluginLoad) ORYX.I18N.PluginLoad = {};
ORYX.I18N.PluginLoad.AddPluginButtonName = "JA:Add Plugins";
ORYX.I18N.PluginLoad.AddPluginButtonDesc = "JA:Add additional Plugins dynamically";
ORYX.I18N.PluginLoad.loadErrorTitle= "JA:Loading Error";
ORYX.I18N.PluginLoad.loadErrorDesc = "JA:Unable to load Plugin. \n Error:\n";
ORYX.I18N.PluginLoad.WindowTitle = "JA:Add additional Plugins";

ORYX.I18N.PluginLoad.NOTUSEINSTENCILSET = "JA:Not allowed in this stencil set!";
ORYX.I18N.PluginLoad.REQUIRESTENCILSET = "JA:Require another stencil set!";
ORYX.I18N.PluginLoad.NOTFOUND = "JA:Pluginname not found!"
ORYX.I18N.PluginLoad.YETACTIVATED = "JA:Plugin is yet activated!"

/** New Language Properties: 15.07.2009*/
if(!ORYX.I18N.Layouting) ORYX.I18N.Layouting ={};
ORYX.I18N.Layouting.doing = "JA:Layouting...";

/** New Language Properties: 18.08.2009*/
ORYX.I18N.SyntaxChecker.MULT_ERRORS = "JA:Multiple Errors";

/** New Language Properties: 08.09.2009*/
if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};
ORYX.I18N.PropertyWindow.oftenUsed = "JA:Often Used";
ORYX.I18N.PropertyWindow.moreProps = "JA:More Properties";

/** New Language Properties: 17.09.2009*/
if(!ORYX.I18N.Bpmn2_0Serialization) ORYX.I18N.Bpmn2_0Serialization = {};
ORYX.I18N.Bpmn2_0Serialization.show = "JA:Show BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.showDesc = "JA:Show BPMN 2.0 DI XML of the current BPMN 2.0 model";
ORYX.I18N.Bpmn2_0Serialization.download = "JA:Download BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.downloadDesc = "JA:Download BPMN 2.0 DI XML of the current BPMN 2.0 model";
ORYX.I18N.Bpmn2_0Serialization.serialFailed = "JA:An error occurred while generating the BPMN 2.0 DI XML Serialization.";
ORYX.I18N.Bpmn2_0Serialization.group = "BPMN 2.0";

/** New Language Properties 01.10.2009 */
if(!ORYX.I18N.SyntaxChecker.BPMN2) ORYX.I18N.SyntaxChecker.BPMN2 = {};

ORYX.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "JA:A Data Input must not have any incoming Data Associations.";
ORYX.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "JA:A Data Output must not have any outgoing Data Associations.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "JA:Targets of Event-based Gateways may only have one incoming Sequence Flow.";

/** New Language Properties 02.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "JA:An Event-based Gateway must have two or more outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "JA:If Message Intermediate Events are used in the configuration, then Receive Tasks must not be used and vice versa.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "JA:Only the following Intermediate Event triggers are valid: Message, Signal, Timer, Conditional and Multiple.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "JA:The outgoing Sequence Flows of the Event Gateway must not have a condition expression.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "JA:The Gateway does not meet the conditions to instantiate the process. Please use a start event or an instantiating attribute for the gateway.";

/** New Language Properties 05.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "JA:The Gateway must have both multiple incoming and outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "JA:The Gateway must have multiple incoming but most NOT have multiple outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "JA:The Gateway must NOT have multiple incoming but must have multiple outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "JA:A Gateway must have a minimum of one outgoing Sequence Flow.";
ORYX.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "JA:Receive Tasks used in Event Gateway configurations must not have any attached Intermediate Events.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "JA:An Event Subprocess must not have any incoming or outgoing Sequence Flow.";

/** New Language Properties 13.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "JA:At least one side of the Message Flow has to be connected.";

/** New Language Properties 19.10.2009 */
ORYX.I18N.Bpmn2_0Serialization['import'] = "JA:Import from BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.importDesc = "JA:Import a BPMN 2.0 model from a file or XML String";
ORYX.I18N.Bpmn2_0Serialization.selectFile = "JA:Select a (*.bpmn) file or type in BPMN 2.0 DI XML to import it!";
ORYX.I18N.Bpmn2_0Serialization.file = "JA:File:";
ORYX.I18N.Bpmn2_0Serialization.name = "JA:Import from BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.btnImp = "JA:Import";
ORYX.I18N.Bpmn2_0Serialization.progress = "JA:Importing BPMN 2.0 DI XML ...";
ORYX.I18N.Bpmn2_0Serialization.btnClose = "JA:Close";
ORYX.I18N.Bpmn2_0Serialization.error = "JA:An error occurred while importing BPMN 2.0 DI XML";

/** New Language Properties 24.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "JA:A Choreography Activity may only have one initiating message.";
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "JA:A Message Flow is not allowed here.";

/** New Language Properties 27.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "JA:An Event-based Gateway that is not instantiating must have a minimum of one incoming Sequence Flow.";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "JA:A Choreography Activity must have one initiating Participant (white).";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "JA:A Choreography Activity must not have more than one initiating Participant (white)."

ORYX.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "JA:The communication must be connected to at least two participants.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "JA:The message flow's source must be a participant.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "JA:The message flow's target must be a participant.";
ORYX.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "JA:The conversation link must connect a communication or sub conversation node with a participant.";

/** New Language Properties 30.12.2009 */
ORYX.I18N.Bpmn2_0Serialization.xpdlShow = "JA:Show XPDL 2.2";
ORYX.I18N.Bpmn2_0Serialization.xpdlShowDesc = "JA:Shows the XPDL 2.2 based on BPMN 2.0 XML (by XSLT)";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownload = "JA:Download as XPDL 2.2";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownloadDesc = "JA:Download the XPDL 2.2 based on BPMN 2.0 XML (by XSLT)";


if(!ORYX.I18N.cpntoolsSupport) ORYX.I18N.cpntoolsSupport = {};

ORYX.I18N.cpntoolsSupport.serverConnectionFailed = "JA:Connection to server failed.";
ORYX.I18N.cpntoolsSupport.importTask = "JA:Select an CPN file (.cpn) or type in the CPN XML structure in order to import it!";
ORYX.I18N.cpntoolsSupport.File = "JA:File:";
ORYX.I18N.cpntoolsSupport.cpn = "JA:CPN";
ORYX.I18N.cpntoolsSupport.title = "JA:CPN Oryx";
ORYX.I18N.cpntoolsSupport.importLable = "JA:Import";
ORYX.I18N.cpntoolsSupport.close = "JA:Close";
ORYX.I18N.cpntoolsSupport.wrongCPNFile = "JA:Not chosen correct CPN - File.";
ORYX.I18N.cpntoolsSupport.noPageSelection = "JA:No page has been selected.";
ORYX.I18N.cpntoolsSupport.group = "Export";
ORYX.I18N.cpntoolsSupport.importProgress = "JA:Importing ...";
ORYX.I18N.cpntoolsSupport.exportProgress = "JA:Exporting ...";
ORYX.I18N.cpntoolsSupport.exportDescription = "JA:Export to CPN Tools";
ORYX.I18N.cpntoolsSupport.importDescription = "JA:Import from CPN Tools";

if(!ORYX.I18N.BPMN2YAWLMapper) ORYX.I18N.BPMN2YAWLMapper = {};

ORYX.I18N.BPMN2YAWLMapper.group = "Export";
ORYX.I18N.BPMN2YAWLMapper.name = 'JA:YAWL Export';
ORYX.I18N.BPMN2YAWLMapper.desc = 'JA:Map this diagram to YAWL and export it, please ensure "BPMN Subset for mapping to YAWL" is loaded';