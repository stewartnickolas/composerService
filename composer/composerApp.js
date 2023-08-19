import React from 'react'
import ReactDOM from 'react-dom'
import {observer, Observer, Provider} from 'mobx-react'
import {autorun} from 'mobx'
import SideMenu from './interface/sideMenu.js'
import SubMenu from './interface/subMenu.jsx'
import LayoutArea from './interface/layoutArea.jsx'
import Toolbox from './interface/toolbox.jsx'
import DialogWrapper from './dialogs/dialogWrapper.jsx'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import Test from './data/testData.js'
import FormStore from './data/formStore.js'
import StudyStore from './data/studyStore.js'
import ClipboardStore from './data/clipboardStore.js';
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Actions from './data/actions.js'
import API from './data/api.js'
import TldStore from './data/tldStore.js'
import I18nStore from './data/i18nStore.js'
import Stomp from '@stomp/stompjs'
import AuthStore from './data/authStore.js'

let studyStore = new StudyStore();
let formStore = new FormStore();
let tldStore = new TldStore();
let i18nStore = new I18nStore();
let clipboardStore = new ClipboardStore();
let authStore = new AuthStore();
const testFormDataDoc = Test.getTestForm();

//Using jQuery as a bridge between React and Vision
$(document).ready(function(){
  var tabId = sessionStorage.tabId ? sessionStorage.tabId : sessionStorage.tabId = "tid" + Math.random();
  $("#composerEditPatientBtn").click(function(e){
    Actions.navigateToView('patient');
    $("#composerEditPatientBtn").addClass("composerBuildModeBtnSelected");
    $("#composerEditSiteBtn").removeClass("composerBuildModeBtnSelected");
  });
  $("#composerEditSiteBtn").click(function(e){
    Actions.navigateToView('site');
    $("#composerEditSiteBtn").addClass("composerBuildModeBtnSelected");
    $("#composerEditPatientBtn").removeClass("composerBuildModeBtnSelected");
  });
  let stompClient = Stomp.client('ws://' + window.location.host + '/vision/wscomposer');

  let stompMessageHandler = function(message){
    Actions.refreshView(JSON.parse(message.body));
  }
  //stompClient.debug = null;//Turn off debug messages
  stompClient.connect({jsessionid: document.cookie.jsessionid},
    () => {
      console.log("connected to websocket");
      stompClient.subscribe("/topic/updates", stompMessageHandler);
    },
    (error) => {
      console.log("Error connecting to websocket: " + error);
    });
  stompClient.subscribe("/topic/updates", stompMessageHandler);
 
});


 const muiTheme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: blue
    },
    overrides: {
        MuiIconButton: {
          root: {
              width: '36px',
              height: '36px'
          }
         },
        MuiFormControl: {
           root:{
               margin: ' 10px 10px 4px 10px;'
           }
        },
        MuiDialogActions: {
            root: {
                textAlign: 'center'
            }
        },
        MuiBottomNavigation: {
          root: {
            backgroundColor: ''
          }
        },
        MuiTooltip:{
            root: {
                fontSize: '2em'
            },
            tooltip:{
                backgroundColor: '#FFF',
                color: '#333',

                boxShadow: '5px 5px 10px rgba(0,0,0,0.4)'
            }
        },
        MuiSelect: {
          select: {
            overflow: 'inherit'
          },
          selectMenu: {
            overflow: 'inherit'
          }
        }
    }
  });

@observer
class ComposerApp extends React.Component {

    constructor(props){
      super(props);
    }

  render() {

        return (

                     <Provider studyStore={studyStore} formStore={formStore} tldStore={tldStore} i18nStore={i18nStore} clipboardStore={clipboardStore} authStore={authStore}>
                       <MuiThemeProvider theme={muiTheme}>
                         <Observer>
                           {() =>
                             <div className="composerAppWrapper">
                               <span id="composerSideMenu">
                                 <SideMenu key={"sideMenu" + studyStore.currentGroup.id + studyStore.refreshId} groups={studyStore.currentView.groups}/>
                               </span>
                                 <SubMenu
                                     key={"sub_menu" + studyStore.currentGroup.id + studyStore.subMenuKey + studyStore.refreshId}
                                     forms={studyStore.currentGroup.formRefs}
                                  />
                               <LayoutArea key={"form_" + formStore.formData.id} />
                               <DialogWrapper/>
                               <Toolbox/>
                             </div>
                           }
                         </Observer>
                       </MuiThemeProvider>
                     </Provider>
                );
    }
};
const ComposerAppDnd = DragDropContext(HTML5Backend)(ComposerApp);

ReactDOM.render(<ComposerAppDnd studyStore={studyStore} store={formStore}/>, document.getElementById('composerAppContainer'));
/** 
 * Hydrates the various mobx stores. Though React encourages the use of lifecycle methods like 
 * componentDidMount() (or useEffect() in newer versions of React), we instead perform the following
 * api calls statically. Most of these calls are handled by ComposerController.java. See api.js and
 * ComposerController.java for more information
 */
API.loadStudy(studyStore, formStore, $("input[name='_refresh=studyUID']").val());
API.loadTLD(tldStore);
API.loadI18n(i18nStore);
API.loadAuth(authStore);