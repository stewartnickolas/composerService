export default class StoreUtils {

    rootNode;

    setRoot(rootNode){
        this.rootNode = rootNode;
        this.setParentRefs(this.rootNode);
    }

    /* Need to set parent references after restoring from JSON */
    setParentRefs(node){
      if(typeof node.getChildren !== 'function'){
        console.log('node had no function for children ' + node.id +  node._type + JSON.stringify(node));
      }
      for(let child of node.getChildren()){
        child.parent = node;
        this.setParentRefs(child);
      }
    }

    getPath(node){
      let ret = {};
      ret.path = [];
      let n = node;
      ret.targetType = node._type;
      while(n){
        ret.path.push(n.id);
        ret.rootType = n._type;
        n = n.parent;
      }
      ret.path.reverse();
      return ret;
    }

    findNode(type, id){
      if(type === 'constraint'){
          for(let constraint of this.rootNode.constraints){
            if(constraint.id === id){
              return constraint;
            }
          }
          return null;
      } else if (type === 'calculation'){
        for(let calc of this.rootNode.calculations){
          if(calc.id === id){
            return calc;
          }
        }
        return null;
      }
        return this._findNode(this.rootNode, type, id);
    }

    findParentNode(childType, childId){
        let val =  this._findNode(this.rootNode, childType, childId, true);
        return val;
    }

    _findNode(node, type, id, wantParent, parent){
        if(type === 'constraint'){
          for(let constraint in this.rootNode.constraints){
            if(constraint.id === id){
              return constraint;
            }
          }
          return null;
        } else if (type === 'calculation'){
          for(let calc in this.rootNode.calculations){
            if(calc.id === id){
              return calc;
            }
          }
          return null;
        }
        if(!node){
          console.log('Node was undefined?!')
        }
        /*
        * 1/10/21: discussed bug for when form.id===form.refId and is not also first, or group.formRefs[0]
        * https://trello.com/c/Tw7oALza
        * possible solutions:
        * 1) ensure that form ref ids are distinct from the form ids. consequences?
        * 2) don't look at the refId at all, just ids (more preferred?)
        * Any valid use cases for using the refId as a fallback?
        * Only short circuiting/ cutting memory??? but already looping all groups...
        * */
        if((node._type === type && node.id === id)
          || (type === 'formRef' && node.refId === id)){
            //console.log('found node: ' + node.id)
            if(wantParent){
              //console.log('returning parent'+ id);
              return parent;
            }
            return node;
        }
            let children = node.getChildren();
            for(let i = 0; i < children.length ; i++){
                let ret = this._findNode(children[i], type, id, wantParent, node);
                if(ret){
                    return ret;
                }
            };
    }

    getAllNamesOfType(type){
      let nodes = this.findNodesOfType(type);
      let ret = [];
      let nameField = '';
      switch(type){
        case 'field':
          nameField = 'fieldName';
          break;
        default:
          console.log('type ' + type + ' not yet supprted');
      }
      for(let node of nodes){
        ret.push(node[nameField]);
      }
      return ret;
    }

  findDescendantsOf(node, type, filter){
    let matches = [];
      this._findNodesOfType(node, type, filter, matches);
      //console.log("found "  + matches.length + " nodes of type " + type);
      return matches;
  }

  findNodesOfType(type, filter){
      let matches = [];
      this._findNodesOfType(this.rootNode, type, filter, matches);
      //console.log("found "  + matches.length + " nodes of type " + type);
      return matches;
  }

  _findNodesOfType(node, type, filter, found){
      const children = node.getChildren();
      for(let i = 0; i < children.length; i++){
          let child = children[i];
              if(child._type === type){
                  if(!filter){
                    found.push(child);
                  } else if(filter(child)){
                    found.push(child);
                  }
              } else {
                this._findNodesOfType(child, type, filter, found);
              }
          };

  }

  getUniqueId(type, base, terminator){
      return this._getUniqueId(this.rootNode, type, base, terminator)
  }

  _getUniqueId(rootNode, type, base, terminator){
    let matches = [];
     let existingOfSameType = [];
     if(type === 'constraint'){
       existingOfSameType = rootNode.constraints;
     } else if(type === 'calculation'){
       existingOfSameType = rootNode.calculations;
     } else {
       existingOfSameType = this.findNodesOfType(type);
     }
     for(let i = 0; i < existingOfSameType.length; i++){
         let node = existingOfSameType[i];
         let fullId = node.id;
         console.log()
         if(fullId && fullId.indexOf(base) > -1){
            var untilIdx = terminator !== undefined ? fullId.indexOf(terminator) : fullId.length;
            if (untilIdx === -1) {
              untilIdx = fullId.length;
            }
            var numPart = fullId.substring(base.length, untilIdx);
            matches.push(numPart);
         }
     };
      matches = matches.sort(function (a, b) {
        return a - b;
      });
      var nextIdx;
      if (matches.length === 0) {
        return base + "0";
      } else {
        nextIdx = Number(matches[matches.length - 1]) + 1;
      }
      return base + nextIdx;
    }

    findCommonSharedForms(sharedId){
      let filter = (form) => {
        return form.refId === sharedId;
      }
      let nodes = this.findNodesOfType('formRef', filter);
      let ret = [];
      for(let node of nodes){
        let form = {};
        form.name = node.parent.name + ".form.name." + node.name;
        form.id = node.id;
        ret.push(form);
      }
      return ret;
    }
}
