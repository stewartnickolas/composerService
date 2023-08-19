import {observable} from 'mobx'

export default class I18nStore{
  @observable i18n;
  constructor(){
    this.i18n = {};
  }

  restoreFromJson(json){
    //console.log("i18N JSON: " + json);
    Object.assign(this.i18n, JSON.parse(json));
  }
}
