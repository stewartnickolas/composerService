import {observable} from 'mobx'

export default class TldStore{
  @observable tldInfo;

  constructor(){
    this.tldInfo = new TldInfo();
  }

  restoreFromJson(json){
    Object.assign(this.tldInfo, JSON.parse(json));
  }

  getTagAttribute(tag, attrName){
    for(let i = 0; i < tag.requiredAttributes.length; i++){
      const attr = tag.requiredAttributes[i];
      if(attr.name === attrName){
        return attr;
      }
    }
    for(let i = 0; i < tag.optionalAttributes.length; i++){
      const attr = tag.optionalAttributes[i];
      if(attr.name === attrName){
        return attr;
      }
    }
  }
}

class TldInfo {
  @observable constraints;
  @observable calcs;

  constructor(){
    this.calcs = {};
    this.constraints = {};
  }
}
